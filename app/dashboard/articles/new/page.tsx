"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { 
  ArrowLeft, Settings, Image as ImageIcon, X, Plus, 
  Heading2, Code, Link as LinkIcon, Upload, Type,
  List, ListOrdered, Eye, Edit2
} from "lucide-react";
import { toast } from "sonner";
import { useRouter } from "next/navigation";

type BlockType = 'p' | 'h2' | 'image' | 'code' | 'url' | 'ul' | 'ol';

interface Block {
  id: string;
  type: BlockType;
  content: string;
}

export default function ZenArticleEditor() {
  const router = useRouter();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSettings, setShowSettings] = useState(false);
  const [previewMode, setPreviewMode] = useState(false);
  const [allSelected, setAllSelected] = useState(false);
  
  // Editor State
  const [title, setTitle] = useState("");
  const [coverImage, setCoverImage] = useState<string | null>(null);
  const [blocks, setBlocks] = useState<Block[]>([
    { id: "init", type: "p", content: "" }
  ]);
  const [activeBlockId, setActiveBlockId] = useState<string | null>(null);
  const [showMenuId, setShowMenuId] = useState<string | null>(null);
  const [focusBlockId, setFocusBlockId] = useState<string | null>(null);

  // Hidden file inputs
  const coverInputRef = useRef<HTMLInputElement>(null);

  // Auto-resize textarea handler
  const handleTextareaResize = (target: HTMLTextAreaElement) => {
    target.style.height = "auto";
    target.style.height = `${target.scrollHeight}px`;
  };

  const addBlock = (afterId: string, type: BlockType = 'p') => {
    const newBlockId = Date.now().toString();
    const newBlock: Block = { id: newBlockId, type, content: '' };
    setBlocks(prev => {
      const index = prev.findIndex(b => b.id === afterId);
      const newBlocks = [...prev];
      newBlocks.splice(index + 1, 0, newBlock);
      return newBlocks;
    });
    setShowMenuId(null);
    setFocusBlockId(newBlockId);
  };

  const updateBlock = (id: string, content: string) => {
    setBlocks(prev => prev.map(b => b.id === id ? { ...b, content } : b));
  };

  const changeBlockType = (id: string, type: BlockType) => {
    let newContent = '';
    if (type === 'ul') newContent = '• ';
    if (type === 'ol') newContent = '1. ';
    
    setBlocks(prev => prev.map(b => b.id === id ? { ...b, type, content: newContent } : b));
    setShowMenuId(null);
    setFocusBlockId(id);
  };

  const removeBlock = (id: string) => {
    setBlocks(prev => {
      if (prev.length === 1) {
        const newId = Date.now().toString();
        setFocusBlockId(newId);
        return [{ id: newId, type: "p", content: "" }];
      }
      const index = prev.findIndex(b => b.id === id);
      const prevBlock = prev[index - 1];
      if (prevBlock) {
        setFocusBlockId(prevBlock.id);
      }
      return prev.filter(b => b.id !== id);
    });
  };

  // -------------------------
  // GLOBAL SELECTION & COPY
  // -------------------------
  useEffect(() => {
    const handleCopy = (e: ClipboardEvent) => {
      if (allSelected) {
         e.preventDefault();
         const markdown = blocks.map(b => {
            if (b.type === 'p') return b.content;
            if (b.type === 'h2') return '## ' + b.content;
            if (b.type === 'ul') return b.content; // Already has bullets
            if (b.type === 'ol') return b.content; // Already has numbers
            if (b.type === 'code') return '```\n' + b.content + '\n```';
            if (b.type === 'image') return '![](' + b.content + ')';
            if (b.type === 'url') return b.content;
            return b.content;
         }).join('\n\n');
         
         e.clipboardData?.setData('text/plain', markdown);
         toast.success("Copied entire article to clipboard");
         setAllSelected(false);
      }
    };
    
    const handleClickCancel = () => {
      if (allSelected) setAllSelected(false);
    };

    const handleKeyCancel = (e: KeyboardEvent) => {
       // if they press any key other than Cmd/Ctrl + C, cancel selection
       if (allSelected && !e.metaKey && !e.ctrlKey) {
          setAllSelected(false);
       }
    };

    window.addEventListener('copy', handleCopy);
    window.addEventListener('click', handleClickCancel);
    window.addEventListener('keydown', handleKeyCancel);
    
    return () => {
       window.removeEventListener('copy', handleCopy);
       window.removeEventListener('click', handleClickCancel);
       window.removeEventListener('keydown', handleKeyCancel);
    };
  }, [allSelected, blocks]);

  const handleGlobalKeyDown = (e: React.KeyboardEvent) => {
     if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'a') {
        const activeEl = document.activeElement as HTMLTextAreaElement | HTMLInputElement;
        if (activeEl && (activeEl.tagName === 'TEXTAREA' || activeEl.tagName === 'INPUT')) {
           if (activeEl.selectionStart === 0 && activeEl.selectionEnd === activeEl.value.length) {
              e.preventDefault();
              setAllSelected(true);
              activeEl.blur(); // Remove focus from input to show global visual selection
              toast("Selected all blocks. Press Cmd+C to copy.");
           }
        }
     }
  };

  // -------------------------
  // SMART PASTE HANDLER
  // -------------------------
  const handlePaste = (e: React.ClipboardEvent<HTMLTextAreaElement | HTMLInputElement>, currentBlockId: string) => {
    const text = e.clipboardData.getData('text/plain');
    if (!text || !text.includes('\n')) return; // Let default paste handle single lines
    
    e.preventDefault();

    const lines = text.split('\n');
    const newBlocksToInsert: Block[] = [];
    
    let currentListType: 'ul' | 'ol' | null = null;
    let currentListItems: string[] = [];
    let currentCodeBlock: string[] | null = null;
    let currentParagraph: string[] = [];

    const flushParagraph = () => {
       if (currentParagraph.length > 0) {
          newBlocksToInsert.push({
             id: Date.now().toString() + Math.random().toString(),
             type: 'p',
             content: currentParagraph.join('\n')
          });
          currentParagraph = [];
       }
    };

    const flushList = () => {
      if (currentListType && currentListItems.length > 0) {
         newBlocksToInsert.push({
           id: Date.now().toString() + Math.random().toString(),
           type: currentListType,
           content: currentListItems.join('\n')
         });
         currentListItems = [];
         currentListType = null;
      }
    };

    const flushAll = () => {
       flushParagraph();
       flushList();
    };

    for (let i = 0; i < lines.length; i++) {
       const line = lines[i];
       
       // Code block toggle
       if (line.trim().startsWith('```')) {
          flushAll();
          if (currentCodeBlock === null) {
             currentCodeBlock = [];
          } else {
             newBlocksToInsert.push({
               id: Date.now().toString() + Math.random().toString(),
               type: 'code',
               content: currentCodeBlock.join('\n')
             });
             currentCodeBlock = null;
          }
          continue;
       }

       if (currentCodeBlock !== null) {
          currentCodeBlock.push(line);
          continue;
       }

       const trimmed = line.trim();
       if (trimmed === '') {
          flushAll();
          continue;
       }

       // Headings
       if (/^#+\s/.test(trimmed)) {
          flushAll();
          const content = trimmed.replace(/^#+\s*/, '');
          newBlocksToInsert.push({
             id: Date.now().toString() + Math.random().toString(),
             type: 'h2',
             content
          });
          continue;
       }

       // Unordered list
       if (/^[-*•]\s/.test(trimmed)) {
          flushParagraph();
          if (currentListType === 'ol') flushList();
          currentListType = 'ul';
          currentListItems.push('• ' + trimmed.replace(/^[-*•]\s*/, ''));
          continue;
       }

       // Ordered list
       if (/^\d+\.\s/.test(trimmed)) {
          flushParagraph();
          if (currentListType === 'ul') flushList();
          currentListType = 'ol';
          currentListItems.push(trimmed);
          continue;
       }
       
       // Image Markdown ![alt](url)
       const imgMatch = trimmed.match(/^!\[.*?\]\((.*?)\)$/);
       if (imgMatch) {
          flushAll();
          newBlocksToInsert.push({
             id: Date.now().toString() + Math.random().toString(),
             type: 'image',
             content: imgMatch[1]
          });
          continue;
       }

       // Normal paragraph (group multiple lines of text into the same paragraph block until a blank line is hit)
       flushList();
       currentParagraph.push(trimmed);
    }
    flushAll();

    if (newBlocksToInsert.length > 0) {
      setBlocks(prev => {
        const idx = prev.findIndex(b => b.id === currentBlockId);
        const newArray = [...prev];
        
        // If the current block is empty paragraph, replace it
        if (prev[idx].type === 'p' && prev[idx].content === '') {
           newArray.splice(idx, 1, ...newBlocksToInsert);
        } else {
           // Insert after
           newArray.splice(idx + 1, 0, ...newBlocksToInsert);
        }
        return newArray;
      });
      
      setTimeout(() => {
         setFocusBlockId(newBlocksToInsert[newBlocksToInsert.length - 1].id);
         // trigger resize for all new textareas
         const textareas = document.querySelectorAll('textarea');
         textareas.forEach(t => {
            t.style.height = 'auto';
            t.style.height = t.scrollHeight + 'px';
         });
      }, 50);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement | HTMLInputElement>, block: Block) => {
    const target = e.target as HTMLTextAreaElement;
    
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      
      // Handle Lists (stay in the same block, add new line with bullet/number)
      if (block.type === 'ul' || block.type === 'ol') {
        const start = target.selectionStart;
        const textBeforeCursor = block.content.substring(0, start);
        const linesBefore = textBeforeCursor.split('\n');
        const currentLineBeforeCursor = linesBefore[linesBefore.length - 1];
        
        // Break out of list if hitting enter on an empty bullet
        if (currentLineBeforeCursor.trim() === '•' || /^\d+\.$/.test(currentLineBeforeCursor.trim())) {
           linesBefore.pop(); // Remove the empty bullet
           const newTextBefore = linesBefore.join('\n');
           const textAfterCursor = block.content.substring(start);
           
           const finalContent = newTextBefore + textAfterCursor;
           updateBlock(block.id, finalContent);
           addBlock(block.id, 'p');
           return;
        }

        let insertion = '\n• ';
        if (block.type === 'ol') {
           insertion = `\n${linesBefore.length + 1}. `;
        }
        const newVal = block.content.substring(0, start) + insertion + block.content.substring(start);
        updateBlock(block.id, newVal);
        
        setTimeout(() => { 
          const el = document.getElementById(`block-${block.id}`) as HTMLTextAreaElement;
          if(el) {
            el.selectionStart = el.selectionEnd = start + insertion.length; 
            handleTextareaResize(el);
          }
        }, 10);
        return;
      }
      
      // Handle normal blocks (create a new block and focus it)
      if (block.type === 'p' || block.type === 'h2' || block.type === 'url') {
        addBlock(block.id, 'p');
      }
    }
    
    if (e.key === 'Backspace') {
      if (block.content === '' || block.content === '• ' || /^\d+\.\s$/.test(block.content)) {
        e.preventDefault();
        if (block.type !== 'p') {
          changeBlockType(block.id, 'p');
        } else {
          removeBlock(block.id);
        }
      }
    }
  };

  const handleCoverUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setCoverImage(URL.createObjectURL(file));
      toast.success("Cover image added");
    }
  };

  const handleBlockImageUpload = (e: React.ChangeEvent<HTMLInputElement>, blockId: string) => {
    const file = e.target.files?.[0];
    if (file) {
      updateBlock(blockId, URL.createObjectURL(file));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      toast.success("Article published successfully");
      router.push("/dashboard/articles");
    }, 1000);
  };

  // Focus effect for auto-focusing newly created blocks
  useEffect(() => {
    if (focusBlockId && !allSelected) {
      const el = document.getElementById(`block-${focusBlockId}`);
      if (el) {
        el.focus();
        if (el instanceof HTMLTextAreaElement || el instanceof HTMLInputElement) {
           el.selectionStart = el.value.length;
           el.selectionEnd = el.value.length;
        }
      }
      setFocusBlockId(null);
    }
  }, [blocks, focusBlockId, allSelected]);

  // Focus effect for auto-resizing textareas
  useEffect(() => {
    const textareas = document.querySelectorAll('textarea');
    textareas.forEach(t => handleTextareaResize(t));
  }, [blocks, previewMode]);

  return (
    <div className="fixed inset-0 z-[100] bg-white flex flex-col overflow-hidden" onKeyDown={handleGlobalKeyDown}>
      {/* Top Navbar */}
      <header className="h-16 border-b border-gray-100 flex items-center justify-between px-4 sm:px-6 bg-white shrink-0 z-20">
        <div className="flex items-center gap-4">
          <Link href="/dashboard/articles" className="p-2 text-gray-400 hover:text-gray-900 bg-gray-50 hover:bg-gray-100 rounded-full transition-colors" title="Back to Dashboard">
            <ArrowLeft className="w-5 h-5" />
          </Link>
          <div className="hidden sm:block">
            <p className="text-xs font-semibold text-gray-400 uppercase tracking-widest">Draft</p>
            <p className="text-sm font-medium text-gray-900 truncate max-w-[200px]">{title || "Untitled Article"}</p>
          </div>
        </div>

        <div className="flex items-center gap-2 sm:gap-3">
          <button 
            className="text-sm font-medium text-gray-500 hover:text-gray-900 px-3 py-2 rounded-full hover:bg-gray-100 transition-colors hidden sm:block"
          >
            Save Draft
          </button>
          
          <button 
            onClick={() => { setPreviewMode(!previewMode); setShowSettings(false); }}
            className={`flex items-center gap-2 px-3 sm:px-4 py-2 rounded-full text-sm font-medium transition-colors ${previewMode ? 'bg-blue-50 text-blue-700' : 'text-gray-500 hover:text-gray-900 hover:bg-gray-100'}`}
          >
            {previewMode ? <Edit2 className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
            <span className="hidden sm:inline">{previewMode ? 'Edit' : 'Preview'}</span>
          </button>
          
          <button 
            onClick={handleSubmit}
            disabled={isSubmitting}
            className="flex items-center gap-2 px-5 py-2.5 sm:py-2 text-sm font-medium text-white bg-green-600 rounded-full hover:bg-green-700 transition-colors shadow-sm disabled:opacity-70"
          >
            {isSubmitting ? <span className="animate-pulse">Publishing...</span> : "Publish"}
          </button>
          
          {!previewMode && (
            <button 
              onClick={() => setShowSettings(!showSettings)}
              className={`p-2 rounded-full transition-colors flex ${showSettings ? 'bg-gray-100 text-gray-900' : 'text-gray-400 hover:text-gray-900 hover:bg-gray-50'}`}
              title="Settings"
            >
              <Settings className="w-5 h-5" />
            </button>
          )}
        </div>
      </header>

      {/* Main Workspace */}
      <div className="flex flex-1 overflow-hidden relative bg-white">
        
        {/* Editor / Preview Area */}
        <main className={`flex-1 overflow-y-auto transition-all duration-300 ${showSettings && !previewMode ? 'sm:mr-80' : ''}`} onClick={() => setShowMenuId(null)}>
          <div className={`max-w-3xl mx-auto px-6 py-10 sm:py-16 pb-40 transition-all rounded-xl ${allSelected ? 'bg-blue-50/50 ring-2 ring-blue-200' : ''}`}>
            
            {/* Preview Mode Cover Image */}
            {previewMode && coverImage && (
              <div className="mb-10 rounded-2xl overflow-hidden shadow-sm border border-gray-100">
                <img src={coverImage} alt="Cover" className="w-full h-[40vh] object-cover" />
              </div>
            )}

            {/* Title */}
            {previewMode ? (
              <h1 className="w-full text-4xl sm:text-5xl font-serif text-gray-900 mb-8 sm:mb-12 font-bold tracking-tight">
                {title || "Untitled Article"}
              </h1>
            ) : (
              <input 
                type="text" 
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="Title"
                className={`w-full text-4xl sm:text-5xl font-serif text-gray-900 placeholder:text-gray-300 focus:outline-none bg-transparent mb-8 sm:mb-10 resize-none font-bold tracking-tight ${allSelected ? 'opacity-50' : ''}`}
              />
            )}
            
            {/* Block Editor */}
            <div className={`space-y-3 ${allSelected ? 'opacity-50' : ''}`}>
              {blocks.map((block) => {

                if (previewMode) {
                  // Render read-only blocks
                  if (!block.content && block.type !== 'image') return null;
                  
                  return (
                    <div key={block.id} className="w-full font-serif text-gray-800">
                      {block.type === 'p' && <p className="text-lg sm:text-xl leading-relaxed py-1.5 whitespace-pre-wrap">{block.content}</p>}
                      {block.type === 'h2' && <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 pt-6 pb-2">{block.content}</h2>}
                      {block.type === 'ul' && (
                        <div className="py-1 space-y-3">
                          {block.content.split('\n').map((line, i) => {
                            const text = line.replace(/^•\s*/, '');
                            if (!text) return null;
                            return (
                              <div key={i} className="flex items-start gap-4">
                                <span className="text-gray-400 mt-2 text-xl leading-none">&bull;</span>
                                <p className="text-lg sm:text-xl leading-relaxed">{text}</p>
                              </div>
                            )
                          })}
                        </div>
                      )}
                      {block.type === 'ol' && (
                        <div className="py-1 space-y-3">
                          {block.content.split('\n').map((line, i) => {
                            const text = line.replace(/^\d+\.\s*/, '');
                            if (!text) return null;
                            return (
                              <div key={i} className="flex items-start gap-4">
                                <span className="text-gray-400 mt-1 text-lg font-medium min-w-[1.5rem]">{i+1}.</span>
                                <p className="text-lg sm:text-xl leading-relaxed">{text}</p>
                              </div>
                            )
                          })}
                        </div>
                      )}
                      {block.type === 'image' && block.content && (
                        <img src={block.content} alt="" className="w-full rounded-2xl my-8 shadow-sm border border-gray-100" />
                      )}
                      {block.type === 'code' && (
                        <pre className="w-full bg-gray-900 text-gray-100 p-5 rounded-xl font-mono text-sm leading-relaxed overflow-x-auto shadow-sm my-6 whitespace-pre-wrap">
                          {block.content}
                        </pre>
                      )}
                      {block.type === 'url' && (
                        <a href={block.content} target="_blank" rel="noreferrer" className="flex items-center gap-3 px-5 py-4 my-6 bg-gray-50 border border-gray-200 rounded-xl hover:bg-gray-100 transition-colors shadow-sm group">
                          <LinkIcon className="w-5 h-5 text-blue-500 shrink-0" />
                          <span className="text-sm font-medium text-gray-900 truncate group-hover:text-blue-600 transition-colors">{block.content}</span>
                        </a>
                      )}
                    </div>
                  );
                }

                // Edit Mode
                return (
                  <div 
                    key={block.id} 
                    className="relative group flex items-start -ml-12 pl-12 sm:-ml-14 sm:pl-14"
                    onMouseEnter={() => setActiveBlockId(block.id)}
                    onMouseLeave={() => setActiveBlockId(null)}
                  >
                    {/* Floating Action Button */}
                    <div className={`absolute left-0 top-1.5 w-10 sm:w-12 flex justify-center opacity-0 transition-opacity ${activeBlockId === block.id && block.content === '' ? 'opacity-100' : ''}`}>
                      <div className="relative">
                        <button 
                          onClick={(e) => { e.stopPropagation(); setShowMenuId(showMenuId === block.id ? null : block.id); }}
                          className="w-8 h-8 flex items-center justify-center rounded-full border border-gray-300 text-gray-400 hover:text-gray-900 hover:bg-gray-50 hover:border-gray-400 transition-all bg-white"
                        >
                          <Plus className={`w-5 h-5 transition-transform ${showMenuId === block.id ? 'rotate-45' : ''}`} />
                        </button>

                        {/* Block Type Menu */}
                        {showMenuId === block.id && (
                          <div className="absolute left-10 top-0 bg-white border border-gray-200 rounded-xl shadow-xl w-56 p-2 z-50 animate-in fade-in zoom-in-95 duration-100">
                            <button onClick={() => changeBlockType(block.id, 'p')} className="flex items-center gap-3 w-full p-2 text-sm text-gray-700 text-left hover:bg-gray-50 rounded-lg transition-colors">
                              <Type className="w-4 h-4 text-gray-400"/> Paragraph
                            </button>
                            <button onClick={() => changeBlockType(block.id, 'h2')} className="flex items-center gap-3 w-full p-2 text-sm text-gray-700 text-left hover:bg-gray-50 rounded-lg transition-colors">
                              <Heading2 className="w-4 h-4 text-gray-400"/> Heading
                            </button>
                            <button onClick={() => changeBlockType(block.id, 'ul')} className="flex items-center gap-3 w-full p-2 text-sm text-gray-700 text-left hover:bg-gray-50 rounded-lg transition-colors">
                              <List className="w-4 h-4 text-gray-400"/> Bulleted List
                            </button>
                            <button onClick={() => changeBlockType(block.id, 'ol')} className="flex items-center gap-3 w-full p-2 text-sm text-gray-700 text-left hover:bg-gray-50 rounded-lg transition-colors">
                              <ListOrdered className="w-4 h-4 text-gray-400"/> Numbered List
                            </button>
                            <button onClick={() => changeBlockType(block.id, 'image')} className="flex items-center gap-3 w-full p-2 text-sm text-gray-700 text-left hover:bg-gray-50 rounded-lg transition-colors">
                              <ImageIcon className="w-4 h-4 text-gray-400"/> Image
                            </button>
                            <button onClick={() => changeBlockType(block.id, 'code')} className="flex items-center gap-3 w-full p-2 text-sm text-gray-700 text-left hover:bg-gray-50 rounded-lg transition-colors">
                              <Code className="w-4 h-4 text-gray-400"/> Code Block
                            </button>
                            <button onClick={() => changeBlockType(block.id, 'url')} className="flex items-center gap-3 w-full p-2 text-sm text-gray-700 text-left hover:bg-gray-50 rounded-lg transition-colors">
                              <LinkIcon className="w-4 h-4 text-gray-400"/> Embed URL
                            </button>
                          </div>
                        )}
                      </div>
                    </div>

                    {/* Edit Mode Block Content Renderers */}
                    <div className="flex-1 min-w-0">
                      {block.type === 'p' && (
                        <textarea 
                          id={`block-${block.id}`}
                          value={block.content}
                          onChange={(e) => { handleTextareaResize(e.target); updateBlock(block.id, e.target.value); }}
                          onKeyDown={(e) => handleKeyDown(e, block)}
                          onPaste={(e) => handlePaste(e, block.id)}
                          placeholder="Tell your story..."
                          className="w-full text-lg sm:text-xl text-gray-700 placeholder:text-gray-300 focus:outline-none bg-transparent resize-none leading-relaxed font-serif py-1.5 overflow-hidden"
                          rows={1}
                        />
                      )}

                      {block.type === 'h2' && (
                        <input 
                          id={`block-${block.id}`}
                          value={block.content}
                          onChange={(e) => updateBlock(block.id, e.target.value)}
                          onKeyDown={(e) => handleKeyDown(e, block)}
                          onPaste={(e) => handlePaste(e, block.id)}
                          placeholder="Heading"
                          className="w-full text-2xl sm:text-3xl font-bold text-gray-900 focus:outline-none bg-transparent py-4 font-serif"
                        />
                      )}

                      {(block.type === 'ul' || block.type === 'ol') && (
                        <textarea 
                          id={`block-${block.id}`}
                          value={block.content}
                          onChange={(e) => { handleTextareaResize(e.target); updateBlock(block.id, e.target.value); }}
                          onKeyDown={(e) => handleKeyDown(e, block)}
                          onPaste={(e) => handlePaste(e, block.id)}
                          placeholder={block.type === 'ul' ? "• List item..." : "1. List item..."}
                          className="w-full text-lg sm:text-xl text-gray-700 placeholder:text-gray-300 focus:outline-none bg-transparent resize-none leading-relaxed font-serif py-1.5 overflow-hidden"
                          rows={1}
                        />
                      )}

                      {block.type === 'image' && (
                        <div className="w-full my-6 relative group/img">
                          {block.content ? (
                            <div className="relative border border-gray-200 rounded-2xl overflow-hidden shadow-sm">
                               <img src={block.content} alt="Block" className="w-full object-cover" />
                               <button 
                                onClick={() => updateBlock(block.id, '')}
                                className="absolute top-4 right-4 p-2 bg-white/80 backdrop-blur-md rounded-full text-red-500 hover:bg-white transition-colors shadow-sm"
                               >
                                 <X className="w-4 h-4" />
                               </button>
                            </div>
                          ) : (
                            <label className="w-full h-64 sm:h-80 border-2 border-dashed border-gray-300 rounded-2xl bg-gray-50 flex flex-col items-center justify-center text-gray-400 hover:bg-gray-100 hover:border-gray-400 transition-colors cursor-pointer relative overflow-hidden">
                              <input 
                                type="file" 
                                accept="image/*" 
                                className="absolute inset-0 opacity-0 cursor-pointer"
                                onChange={(e) => handleBlockImageUpload(e, block.id)}
                              />
                              <Upload className="w-8 h-8 mb-3" />
                              <span className="text-sm font-medium">Click to upload image</span>
                            </label>
                          )}
                          <button 
                            onClick={() => addBlock(block.id)} 
                            className="absolute -bottom-4 left-1/2 -translate-x-1/2 opacity-0 group-hover/img:opacity-100 bg-white border border-gray-200 shadow-sm p-1.5 rounded-full hover:bg-gray-50 transition-all z-10"
                          >
                            <Plus className="w-4 h-4 text-gray-600"/>
                          </button>
                        </div>
                      )}

                      {block.type === 'code' && (
                        <div className="w-full my-6 relative group/code">
                          <textarea 
                            id={`block-${block.id}`}
                            value={block.content}
                            onChange={(e) => { handleTextareaResize(e.target); updateBlock(block.id, e.target.value); }}
                            onPaste={(e) => handlePaste(e, block.id)}
                            placeholder="// Write or paste your code here..."
                            className="w-full bg-gray-900 text-gray-100 p-5 rounded-xl font-mono text-sm focus:outline-none focus:ring-2 focus:ring-gray-900 resize-none leading-relaxed overflow-hidden shadow-sm"
                            rows={3}
                          />
                          <button 
                            onClick={() => addBlock(block.id)} 
                            className="absolute -bottom-4 left-1/2 -translate-x-1/2 opacity-0 group-hover/code:opacity-100 bg-white border border-gray-200 shadow-sm p-1.5 rounded-full hover:bg-gray-50 transition-all z-10"
                          >
                            <Plus className="w-4 h-4 text-gray-600"/>
                          </button>
                        </div>
                      )}

                      {block.type === 'url' && (
                        <div className="w-full my-6">
                          <div className="flex items-center gap-3 px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus-within:ring-2 focus-within:ring-gray-900/10 focus-within:bg-white transition-all shadow-sm">
                            <LinkIcon className="w-5 h-5 text-gray-400 shrink-0" />
                            <input 
                              id={`block-${block.id}`}
                              type="url"
                              value={block.content}
                              onChange={(e) => updateBlock(block.id, e.target.value)}
                              onKeyDown={(e) => handleKeyDown(e, block)}
                              onPaste={(e) => handlePaste(e, block.id)}
                              placeholder="Paste a link to embed (e.g. Twitter, YouTube)..."
                              className="w-full text-sm focus:outline-none bg-transparent text-gray-900"
                            />
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
            
            {/* Clickable area at bottom to add final block if needed */}
            {!previewMode && (
              <div 
                className="h-32 mt-4 cursor-text"
                onClick={() => {
                  const lastBlock = blocks[blocks.length - 1];
                  if (lastBlock.content !== '' || lastBlock.type !== 'p') {
                    addBlock(lastBlock.id);
                  } else {
                    setFocusBlockId(lastBlock.id);
                  }
                }}
              ></div>
            )}
          </div>
        </main>

        {/* Settings Sidebar */}
        {!previewMode && (
          <aside className={`absolute right-0 top-0 bottom-0 w-full sm:w-80 bg-white sm:bg-gray-50 border-l border-gray-200 transform transition-transform duration-300 ease-in-out z-50 overflow-y-auto ${showSettings ? 'translate-x-0' : 'translate-x-full'}`}>
            <div className="p-6 space-y-8">
              <div className="flex items-center justify-between">
                <h3 className="text-sm font-semibold text-gray-900 uppercase tracking-wider">Article Settings</h3>
                <button onClick={() => setShowSettings(false)} className="p-2 text-gray-400 hover:text-gray-900 hover:bg-gray-200 rounded-xl transition-colors">
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="space-y-6">
                <div>
                  <label className="block text-xs font-semibold text-gray-600 mb-2">Category</label>
                  <select className="w-full px-3 py-2.5 bg-white border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-gray-900/10 appearance-none">
                    <option>Security</option>
                    <option>Engineering</option>
                    <option>DeFi</option>
                    <option>Perspectives</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-gray-600 mb-2">URL Slug</label>
                  <input 
                    type="text" 
                    placeholder="my-awesome-article"
                    className="w-full px-3 py-2.5 bg-white border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-gray-900/10"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-gray-600 mb-2">Cover Image</label>
                  {coverImage ? (
                    <div className="relative rounded-xl overflow-hidden border border-gray-200 shadow-sm">
                      <img src={coverImage} alt="Cover Preview" className="w-full h-32 object-cover" />
                      <button 
                        onClick={() => setCoverImage(null)}
                        className="absolute top-2 right-2 p-1.5 bg-white/80 backdrop-blur-md rounded-full text-red-500 hover:bg-white transition-colors"
                      >
                        <X className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  ) : (
                    <div 
                      className="w-full h-32 border-2 border-dashed border-gray-300 rounded-xl bg-white flex flex-col items-center justify-center text-gray-400 hover:bg-gray-50 hover:border-gray-400 transition-colors cursor-pointer group relative"
                      onClick={() => coverInputRef.current?.click()}
                    >
                      <ImageIcon className="w-6 h-6 mb-2 text-gray-300 group-hover:text-gray-500 transition-colors" />
                      <span className="text-xs font-medium">Upload Cover</span>
                      <input 
                        type="file" 
                        ref={coverInputRef} 
                        onChange={handleCoverUpload} 
                        accept="image/*" 
                        className="hidden" 
                      />
                    </div>
                  )}
                </div>

                <div>
                  <label className="block text-xs font-semibold text-gray-600 mb-2">SEO Excerpt</label>
                  <textarea 
                    rows={4}
                    placeholder="A brief summary for search engines and social media..."
                    className="w-full px-3 py-2.5 bg-white border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-gray-900/10 resize-none"
                  ></textarea>
                </div>

              </div>
            </div>
          </aside>
        )}
      </div>
    </div>
  );
}

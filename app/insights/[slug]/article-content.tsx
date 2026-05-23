"use client";

import Link from "next/link";
import { ArrowLeft, Twitter, Linkedin, Link as LinkIcon, Mail } from "lucide-react";
import { motion } from "framer-motion";
import { Article } from "@/lib/mock-articles";
import { toast } from "sonner";

export function ArticleContent({ article }: { article: Article }) {
  const handleCopyLink = () => {
    navigator.clipboard.writeText(window.location.href);
    toast.success("Link copied to clipboard!");
  };

  return (
    <article className="min-h-screen pt-32 pb-20 px-6 lg:px-8 overflow-hidden">
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Link 
            href="/insights" 
            className="inline-flex items-center text-sm font-medium text-gray-500 hover:text-gray-900 mb-8 transition-colors"
          >
            <ArrowLeft className="mr-2 w-4 h-4" />
            Back to Insights
          </Link>
        </motion.div>
        
        <header className="mb-12">
          <motion.div 
            className="flex items-center gap-x-4 text-sm mb-6 text-gray-500"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <time dateTime={article.date}>{article.date}</time>
            <span>&middot;</span>
            <span>{article.readTime}</span>
          </motion.div>
          
          <motion.h1 
            className="text-4xl md:text-5xl font-serif tracking-tight text-gray-900 mb-6 leading-tight"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            {article.title}
          </motion.h1>
          
          <motion.p 
            className="text-xl text-gray-600 leading-relaxed border-l-4 border-blue-500 pl-4 mb-8"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            {article.excerpt}
          </motion.p>
          
          <motion.div
            className="w-full aspect-[21/9] rounded-2xl overflow-hidden bg-gray-100 mb-10"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <img src={article.imageUrl} alt={article.title} className="w-full h-full object-cover" />
          </motion.div>
          
          {/* Social Share Buttons */}
          <motion.div 
            className="flex items-center gap-4 py-6 border-y border-gray-200"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            <span className="text-sm font-medium text-gray-500">Share this article:</span>
            <button 
              className="p-2 rounded-full hover:bg-blue-50 hover:text-blue-500 text-gray-600 transition-colors" 
              onClick={() => window.open(`https://twitter.com/intent/tweet?text=${encodeURIComponent(article.title)}&url=${encodeURIComponent(window.location.href)}`, '_blank')}
            >
              <Twitter className="w-4 h-4" />
            </button>
            <button 
              className="p-2 rounded-full hover:bg-blue-50 hover:text-blue-700 text-gray-600 transition-colors" 
              onClick={() => window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(window.location.href)}`, '_blank')}
            >
              <Linkedin className="w-4 h-4" />
            </button>
            <button 
              className="p-2 rounded-full hover:bg-gray-100 text-gray-600 transition-colors" 
              onClick={handleCopyLink}
            >
              <LinkIcon className="w-4 h-4" />
            </button>
          </motion.div>
        </header>

        <motion.div 
          className="max-w-none text-gray-700 text-lg"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          {article.content.split('\n\n').map((paragraph, index) => {
            if (paragraph.startsWith('### ')) {
              return <h3 key={index} className="text-2xl font-serif text-gray-900 mt-10 mb-4 font-semibold">{paragraph.replace('### ', '')}</h3>;
            }
            return <p key={index} className="mb-6 leading-relaxed">{paragraph}</p>;
          })}
        </motion.div>
        
        {/* Newsletter Section */}
        <motion.div 
          className="mt-24 bg-white shadow-sm border border-gray-200 rounded-3xl p-8 md:p-12 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <div className="mx-auto max-w-xl">
            <div className="w-12 h-12 bg-gray-50 border border-gray-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <Mail className="w-6 h-6 text-gray-900" />
            </div>
            <h2 className="text-3xl font-serif tracking-tight text-gray-900 mb-4">Enjoyed this article?</h2>
            <p className="text-gray-600 mb-8">
              Subscribe to get the latest insights delivered straight to your inbox.
            </p>
            <form className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto" onSubmit={(e) => { e.preventDefault(); toast.success("Subscribed successfully!"); }}>
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="flex-1 min-w-0 rounded-full px-5 py-3 text-sm border border-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-900/20 focus:border-gray-900 transition-all"
                required
              />
              <button 
                type="submit" 
                className="rounded-full bg-gray-900 px-6 py-3 text-sm font-medium text-white hover:bg-gray-800 transition-colors shadow-sm"
              >
                Subscribe
              </button>
            </form>
          </div>
        </motion.div>
      </div>
    </article>
  );
}

"use client";

import { useState } from "react";

type Project = {
  id: string;
  name: string;
  domain: string;
  description: string;
};

export default function ProjectList({ projects }: { projects: Project[] }) {
  const [openId, setOpenId] = useState<string | null>(null);

  const toggle = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <div className="border-t border-border w-full">
      {projects.map((project) => {
        const isOpen = openId === project.id;
        
        return (
          <div 
            key={project.id} 
            className="border-b border-border group"
          >
            <button
              onClick={() => toggle(project.id)}
              aria-expanded={isOpen}
              aria-controls={`project-desc-${project.id}`}
              className="w-full text-left py-6 sm:py-8 flex items-center justify-between outline-none cursor-pointer"
            >
              <div className="flex flex-col sm:flex-row sm:items-baseline gap-2 sm:gap-8">
                <h2 className="text-3xl sm:text-4xl font-medium tracking-tight text-foreground transition-colors">
                  {project.name}
                </h2>
                <span className="font-mono text-xs sm:text-sm text-muted-foreground uppercase tracking-widest mt-1 sm:mt-0">
                  {project.domain}
                </span>
              </div>
              
              <div 
                className="shrink-0 text-muted-foreground transition-transform duration-500 ease-[cubic-bezier(0.87,0,0.13,1)]" 
                style={{ transform: isOpen ? 'rotate(135deg)' : 'rotate(0deg)' }}
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="12" y1="5" x2="12" y2="19"/>
                  <line x1="5" y1="12" x2="19" y2="12"/>
                </svg>
              </div>
            </button>
            
            <div 
              id={`project-desc-${project.id}`}
              role="region"
              aria-hidden={!isOpen}
              className="grid transition-all duration-500 ease-[cubic-bezier(0.87,0,0.13,1)]"
              style={{ gridTemplateRows: isOpen ? '1fr' : '0fr' }}
            >
              <div className="overflow-hidden">
                <div className="pb-8 pt-2 flex flex-col sm:flex-row gap-8 sm:gap-16 justify-between items-start">
                  <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl leading-relaxed font-serif">
                    {project.description}
                  </p>
                  <div className="shrink-0">
                    <a 
                      href={`https://${project.domain}`} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-6 py-3 bg-gray-900 text-[#F4F1EA] hover:bg-gray-800 transition-colors rounded-sm text-sm font-medium tracking-wide"
                    >
                      Visit Project
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M5 12h14"/>
                        <path d="m12 5 7 7-7 7"/>
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

import ProjectList from '@/components/ProjectList';
import projectsData from '../../projects.json';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground font-sans selection:bg-muted selection:text-foreground">
      <main className="flex-1 w-full max-w-5xl mx-auto px-6 py-24 sm:py-32">
        <header className="mb-24 sm:mb-32">
          <h1 className="text-5xl sm:text-7xl font-serif font-light tracking-tight text-foreground mb-6">
            Arewa Live
          </h1>
          <p className="text-xl sm:text-2xl text-muted-foreground max-w-2xl font-sans font-light leading-relaxed">
            A curated directory of personal projects, platforms, and applications running on the arewa.live network.
          </p>
          <p className="mt-4 text-lg text-muted-foreground font-sans font-light">
            Want to learn more about me? <a href="https://arewageek.com" target="_blank" rel="noopener noreferrer" className="text-foreground underline underline-offset-4 hover:text-gray-600 transition-colors">Visit my portfolio at arewageek.com</a>
          </p>
          <div className="mt-12 inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-muted/50 border border-border text-sm text-muted-foreground">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>
            Note: This repository only covers apps running natively on the .arewa.live network, not self-deployed instances.
          </div>
        </header>
        
        <ProjectList projects={projectsData} />
      </main>
      
      <footer className="w-full max-w-5xl mx-auto px-6 py-12 flex flex-col sm:flex-row justify-between items-center text-sm font-mono text-muted-foreground border-t border-border mt-auto">
        <div>© {new Date().getFullYear()} Arewa Network. All rights reserved.</div>
        <div className="mt-4 sm:mt-0">Built with Next.js & Tailwind</div>
      </footer>
    </div>
  );
}

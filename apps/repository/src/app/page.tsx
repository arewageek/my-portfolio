import fs from 'fs/promises';
import path from 'path';
import ProjectList from '@/components/ProjectList';

export default async function Home() {
  const filePath = path.join(process.cwd(), 'projects.md');
  const fileContent = await fs.readFile(filePath, 'utf-8');
  
  const projects = [];
  const lines = fileContent.split('\n');
  
  let currentProject = null;
  let description = [];
  
  for (const line of lines) {
    if (line.startsWith('## ')) {
      if (currentProject) {
        currentProject.description = description.join('\n').trim();
        projects.push(currentProject);
      }
      const name = line.substring(3).trim();
      currentProject = {
        id: name.toLowerCase().replace(/[^a-z0-9]+/g, '-'),
        name,
        domain: `${name}.arewa.live`,
        description: ''
      };
      description = [];
    } else if (currentProject) {
      description.push(line);
    }
  }
  
  if (currentProject) {
    currentProject.description = description.join('\n').trim();
    projects.push(currentProject);
  }

  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground font-sans selection:bg-muted selection:text-foreground">
      <main className="flex-1 w-full max-w-5xl mx-auto px-6 py-24 sm:py-32">
        <header className="mb-24 sm:mb-32">
          <h1 className="text-5xl sm:text-7xl font-medium tracking-tight text-foreground mb-6">
            Arewa Live
          </h1>
          <p className="text-xl sm:text-2xl text-muted-foreground max-w-2xl font-serif leading-relaxed">
            A curated directory of personal projects, platforms, and applications running on the arewa.live network.
          </p>
        </header>
        
        <ProjectList projects={projects} />
      </main>
      
      <footer className="w-full max-w-5xl mx-auto px-6 py-12 flex flex-col sm:flex-row justify-between items-center text-sm font-mono text-muted-foreground border-t border-border">
        <div>© {new Date().getFullYear()} Arewa Network. All rights reserved.</div>
        <div className="mt-4 sm:mt-0">Built with Next.js & Tailwind</div>
      </footer>
    </div>
  );
}

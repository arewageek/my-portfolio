import projectsData from '../projects.json'

export type ProjectDocument = any;

export async function getProjects(): Promise<ProjectDocument[]> {
  const projects = projectsData.projects;
  
  return projects.map((p: any) => ({
    ...p,
    _id: p._id?.$oid || p._id,
    id: p._id?.$oid || p._id,
    category: "Uncategorized", 
    description: p.description || null,
    links: p.links ? {
        demo: p.links.demo || null,
        github: p.links.github || null,
        live: p.links.live || null,
    } : null,
  })) as unknown as ProjectDocument[]
}

export async function getProjectById(id: string): Promise<ProjectDocument | null> {
  const projects = await getProjects();
  return projects.find(p => p.id === id) || null;
}

export async function getAllCategories() {
  return []
}

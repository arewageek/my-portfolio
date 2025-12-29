
import dbConnect from '../lib/db'
import Project, { IBackEndProject } from '../models/Project'

export type ProjectDocument = Omit<IBackEndProject, 'description' | 'links'> & { 
  description: string | null;
  links: {
    demo: string | null;
    github: string | null;
    live?: string | null;
  } | null;
  _id: string; 
  id: string 
}

export async function getProjects(): Promise<ProjectDocument[]> {
  await dbConnect()
  const projects = await Project.find({}).sort({ createdAt: -1 }).lean()
  
  return projects.map((p) => ({
    ...p,
    description: p.description || null,
    links: p.links ? {
        demo: p.links.demo || null,
        github: p.links.github || null,
        live: p.links.live || null,
    } : null,
    _id: (p as any)._id.toString(),
    id: (p as any)._id.toString(),
  })) as unknown as ProjectDocument[]
}

export async function getProjectById(id: string): Promise<ProjectDocument | null> {
  await dbConnect()
  const project = await Project.findById(id).lean()
  
  if (!project) return null

  return {
    ...project,
    _id: (project as any)._id.toString(),
    id: (project as any)._id.toString(),
  } as unknown as ProjectDocument
}

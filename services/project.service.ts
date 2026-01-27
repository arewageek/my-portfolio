
import dbConnect from '../lib/db'
import Project, { IBackEndProject } from '../models/Project'
import Category from '../models/Category'

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
  const projects = await Project.find({})
    .populate({ 
      path: 'category', 
      model: Category,
      strictPopulate: false 
    })
    .sort({ createdAt: -1 })
    .lean()
  
  return JSON.parse(JSON.stringify(projects)).map((p: any) => ({
    ...p,
    category: p.category?.name || "Uncategorized", 
    description: p.description || null,
    links: p.links ? {
        demo: p.links.demo || null,
        github: p.links.github || null,
        live: p.links.live || null,
    } : null,
  })) as unknown as ProjectDocument[]
}

export async function getProjectById(id: string): Promise<ProjectDocument | null> {
  await dbConnect()
  const project = await Project.findById(id)
    .populate({ path: 'category', model: Category, strictPopulate: false })
    .lean()
  
  if (!project) return null

  return {
    ...project,
    _id: (project as any)._id.toString(),
    id: (project as any)._id.toString(),
    category: (project.category as any)?.name || "Uncategorized"
  } as unknown as ProjectDocument
}

export async function getAllCategories() {
  await dbConnect()
  const categories = await Category.find({}).sort({ name: 1 }).lean()
  return JSON.parse(JSON.stringify(categories))
}

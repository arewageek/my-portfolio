
import dbConnect from '../lib/db'
import Company, { IBackEndCompany } from '../models/Company'
import Project from '../models/Project'
import { ProjectDocument } from './project.service'

export type CompanyDocument = Omit<IBackEndCompany, 
  'period' | 'location' | 'type' | 'logo' | 'status' | 'description' | 'technologies' | 'achievements' | 'responsibilities'
> & { 
  period: string;
  location: string;
  type: string;
  logo: string;
  status: string;
  description: string;
  technologies: string[];
  achievements: string[];
  responsibilities: string[];
  _id: string; 
  id: string;
  projects?: ProjectDocument[]
}

export async function getCompanyBySlug(slug: string): Promise<CompanyDocument | null> {
  await dbConnect()
  const company = await Company.findOne({ slug }).lean()
  
  if (!company) return null

  const companyId = (company as any)._id
  
  const projects = await Project.find({ companyId }).lean()

  const mappedProjects = projects.map((p) => ({
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

  return {
    ...company,
    period: (company as any).period || "",
    location: (company as any).location || "",
    type: (company as any).type || "",
    logo: (company as any).logo || "",
    status: (company as any).status || "",
    description: (company as any).description || "",
    technologies: (company as any).technologies || [],
    achievements: (company as any).achievements || [],
    responsibilities: (company as any).responsibilities || [],
    _id: companyId.toString(),
    id: companyId.toString(),
    projects: mappedProjects
  } as unknown as CompanyDocument
}

export async function getCompanies(): Promise<CompanyDocument[]> {
  await dbConnect()
  const companies = await Company.find({}).lean()
  
  return companies.map((c) => ({
    ...c,
    period: (c as any).period || "",
    location: (c as any).location || "",
    type: (c as any).type || "",
    logo: (c as any).logo || "",
    status: (c as any).status || "",
    description: (c as any).description || "",
    technologies: (c as any).technologies || [],
    achievements: (c as any).achievements || [],
    responsibilities: (c as any).responsibilities || [],
    _id: (c as any)._id.toString(),
    id: (c as any)._id.toString(),
  })) as unknown as CompanyDocument[]
}

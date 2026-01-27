
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

  const sanitizedCompany = JSON.parse(JSON.stringify(company))
  const sanitizedProjects = JSON.parse(JSON.stringify(projects))

  const mappedProjects = sanitizedProjects.map((p: any) => ({
    ...p,
    description: p.description || null,
    links: p.links ? {
        demo: p.links.demo || null,
        github: p.links.github || null,
        live: p.links.live || null,
    } : null,
  })) as unknown as ProjectDocument[]

  return {
    ...sanitizedCompany,
    projects: mappedProjects
  } as unknown as CompanyDocument
}

export async function getCompanies(): Promise<CompanyDocument[]> {
  await dbConnect()
  const companies = await Company.find({}).lean()
  
  return JSON.parse(JSON.stringify(companies)) as unknown as CompanyDocument[]
}

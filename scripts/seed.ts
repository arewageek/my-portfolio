
import mongoose from 'mongoose';
import * as dotenv from 'dotenv';
import { brandConfig } from '../lib/brand-config';
import Company from '../models/Company';
import Project from '../models/Project';

// Load environment variables
dotenv.config();

const MONGODB_URI = process.env.DATABASE_URL;

if (!MONGODB_URI) {
  throw new Error('Please define the DATABASE_URL environment variable inside .env');
}

async function seed() {
  console.log('Connecting to MongoDB...');
  await mongoose.connect(MONGODB_URI as string);
  console.log('Connected.');

  console.log('Clearing existing data...');
  await Project.deleteMany({});
  await Company.deleteMany({});

  console.log('Seeding Companies...');
  const companiesMap = new Map<string, any>();
  
  for (const company of brandConfig.companies) {
    const created = await Company.create({
      slug: company.id,
      name: company.name,
      role: company.role,
      period: company.period,
      location: company.location,
      type: company.type,
      logo: company.logo,
      status: (company as any).status,
      description: (company as any).description,
      achievements: (company as any).achievements,
      technologies: (company as any).technologies,
      responsibilities: (company as any).responsibilities,
      impact: (company as any).impact,
      overview: (company as any).overview,
    });
    companiesMap.set(company.id, created._id);
    console.log(`Created company: ${company.name}`);
  }

  console.log('Seeding Projects...');
  const createdProjects = [];
  
  for (const project of brandConfig.projects) {
    const created = await Project.create({
      title: project.title,
      category: project.category,
      description: project.description,
      image: project.image,
      status: project.status,
      technologies: project.technologies,
      links: project.links,
      metrics: project.metrics,
    });
    createdProjects.push(created);
    console.log(`Created project: ${project.title}`);
  }

  // Assign one random project to a random company
  const companyIds = Array.from(companiesMap.values());
  
  if (companyIds.length > 0 && createdProjects.length > 0) {
    const randomCompanyId = companyIds[Math.floor(Math.random() * companyIds.length)];
    const randomProject = createdProjects[Math.floor(Math.random() * createdProjects.length)];

    await Project.findByIdAndUpdate(randomProject._id, { companyId: randomCompanyId });
    console.log(`Assigned project "${randomProject.title}" to a company.`);
  }

  console.log('Seeding finished.');
  process.exit(0);
}

seed().catch((error) => {
  console.error('Seeding failed:', error);
  process.exit(1);
});

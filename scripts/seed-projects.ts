import mongoose from 'mongoose';
import * as dotenv from 'dotenv';
import { brandConfig } from '../lib/brand-config';
import Project from '../models/Project';
import Category from '../models/Category';
import Company from '../models/Company';

// Load environment variables
dotenv.config();

const MONGODB_URI = process.env.DATABASE_URL;

if (!MONGODB_URI) {
  throw new Error('Please define the DATABASE_URL environment variable inside .env');
}

async function seedProjects() {
  console.log('Connecting to MongoDB...');
  await mongoose.connect(MONGODB_URI as string);
  console.log('Connected.');

  console.log('Clearing existing categories...');
  await Category.deleteMany({});

  console.log('Seeding Categories...');
  const categoryMap = new Map<string, any>();
  
  if ((brandConfig as any).categories) {
    for (const cat of (brandConfig as any).categories) {
      const category = await Category.findOneAndUpdate(
        { slug: cat.slug },
        { name: cat.name, description: cat.description },
        { upsert: true, new: true }
      );
      categoryMap.set(cat.name, category._id);
      console.log(`Ensured category: ${cat.name}`);
    }
  }

  console.log('Fetching Companies for mapping...');
  const companies = await Company.find({});
  const companyMap = new Map<string, any>();
  companies.forEach(c => companyMap.set(c.slug, c._id));

  console.log('Clearing existing projects...');
  await Project.deleteMany({});

  console.log('Seeding Projects...');
  
  for (const project of brandConfig.projects) {
    // Find category ID
    let categoryId = categoryMap.get(project.category);
    
    // Fallback: search by name if not in map
    if (!categoryId) {
      const foundCat = await Category.findOne({ name: project.category });
      if (foundCat) {
        categoryId = foundCat._id;
      } else {
        // Create it on the fly if it doesn't exist
        const newCat = await Category.create({ 
          name: project.category, 
          slug: project.category.toLowerCase().replace(/[^a-z0-9]/g, '-') 
        });
        categoryId = newCat._id;
        categoryMap.set(project.category, categoryId);
      }
    }

    // Find company ID if provided
    let companyId = undefined;
    if ((project as any).companyId) {
      companyId = companyMap.get((project as any).companyId);
    }

    await Project.create({
      title: project.title,
      category: categoryId,
      description: project.description,
      image: project.image,
      status: project.status,
      technologies: project.technologies,
      links: project.links,
      metrics: project.metrics,
      companyId: companyId,
    });
    console.log(`Created project: ${project.title} (Category: ${project.category}${companyId ? ', Company linked' : ''})`);
  }

  console.log('Project seeding finished.');
  process.exit(0);
}

seedProjects().catch((error) => {
  console.error('Project seeding failed:', error);
  process.exit(1);
});

import mongoose from 'mongoose';
import * as dotenv from 'dotenv';
import { brandConfig } from '../lib/brand-config';
import Project from '../models/Project';

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

  console.log('Clearing existing projects...');
  await Project.deleteMany({});

  console.log('Seeding Projects...');
  
  for (const project of brandConfig.projects) {
    await Project.create({
      title: project.title,
      category: project.category,
      description: project.description,
      image: project.image,
      status: project.status,
      technologies: project.technologies,
      links: project.links,
      metrics: project.metrics,
    });
    console.log(`Created project: ${project.title}`);
  }

  console.log('Project seeding finished.');
  process.exit(0);
}

seedProjects().catch((error) => {
  console.error('Project seeding failed:', error);
  process.exit(1);
});

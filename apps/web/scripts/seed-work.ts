import mongoose from 'mongoose';
import * as dotenv from 'dotenv';
import { brandConfig } from '../lib/brand-config';
import Company from '../models/Company';

// Load environment variables
dotenv.config();

const MONGODB_URI = process.env.DATABASE_URL;

if (!MONGODB_URI) {
  throw new Error('Please define the DATABASE_URL environment variable inside .env');
}

async function seedWork() {
  console.log('Connecting to MongoDB...');
  await mongoose.connect(MONGODB_URI as string);
  console.log('Connected.');

  console.log('Clearing existing companies...');
  await Company.deleteMany({});

  console.log('Seeding Companies...');
  
  for (const company of brandConfig.companies) {
    await Company.create({
      slug: company.id,
      name: company.name,
      role: company.role,
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
      started: (company as any).started,
      stopped: (company as any).stopped,
    });
    console.log(`Created company: ${company.name}`);
  }

  console.log('Work seeding finished.');
  process.exit(0);
}

seedWork().catch((error) => {
  console.error('Work seeding failed:', error);
  process.exit(1);
});

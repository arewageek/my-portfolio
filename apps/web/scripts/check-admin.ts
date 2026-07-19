import mongoose from 'mongoose';
import * as dotenv from 'dotenv';
import Admin from '../models/Admin';

dotenv.config();

const MONGODB_URI = process.env.DATABASE_URL;

async function checkAdmin() {
  if (!MONGODB_URI) throw new Error('DATABASE_URL not found');
  await mongoose.connect(MONGODB_URI);
  const count = await Admin.countDocuments();
  console.log(`Number of admins: ${count}`);
  if (count > 0) {
    const admins = await Admin.find({}, { password: 0 });
    console.log('Admins:', JSON.stringify(admins, null, 2));
  }
  process.exit(0);
}

checkAdmin().catch(err => {
  console.error(err);
  process.exit(1);
});

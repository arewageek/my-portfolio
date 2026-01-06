import "dotenv/config";
import { AuthService } from "../services/auth.service";
import dbConnect from "../lib/db";
import mongoose from "mongoose";

async function seedAdmin() {
  const adminEmail = process.env.ADMIN_EMAIL || "arewageek@gmail.com";
  const adminPassword = process.env.ADMIN_PASSWORD || "incorrect";
  const adminName = process.env.ADMIN_NAME || "Arewa Geek";

  try {
    console.log("Connecting to database...");
    await dbConnect();

    console.log(`Checking if admin exists: ${adminEmail}...`);
    
    try {
      const admin = await AuthService.createAdmin({
        name: adminName,
        email: adminEmail,
        password: adminPassword,
      });
      console.log("✅ Admin account created successfully:", admin);
    } catch (error: any) {
      if (error.message === "Admin with this email already exists") {
        console.log("ℹ️ Admin already exists. Skipping seeding.");
      } else {
        throw error;
      }
    }

  } catch (error) {
    console.error("❌ Error seeding admin:", error);
  } finally {
    await mongoose.disconnect();
    console.log("Disconnected from database.");
  }
}

seedAdmin();

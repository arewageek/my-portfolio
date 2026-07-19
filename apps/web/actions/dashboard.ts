"use server";

import dbConnect from "@/lib/db";
import Project from "@/models/Project";
import Company from "@/models/Company";

export async function getDashboardStats() {
  await dbConnect();
  try {
    const projectCount = await Project.countDocuments();
    const companyCount = await Company.countDocuments();
    
    // Example: get recent projects (last 5)
    const recentProjects = await Project.find({}).sort({ createdAt: -1 }).limit(5).lean();

    return {
      success: true,
      data: {
        projectCount,
        companyCount,
        recentProjects: JSON.parse(JSON.stringify(recentProjects))
      }
    };
  } catch (error) {
    console.error("Error fetching dashboard stats:", error);
    return { success: false, error: "Failed to fetch stats" };
  }
}

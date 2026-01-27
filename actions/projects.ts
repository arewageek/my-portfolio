"use server";

import dbConnect from "@/lib/db";
import Project, { IBackEndProject } from "@/models/Project";
import Category from "@/models/Category";
import { revalidatePath } from "next/cache";

export async function getProjects() {
  await dbConnect();
  try {
    const projects = await Project.find({})
      .populate({ 
        path: 'category', 
        model: Category,
        strictPopulate: false 
      })
      .sort({ createdAt: -1 })
      .lean();

    const sanitizedProjects = JSON.parse(JSON.stringify(projects)).map((p: any) => ({
      ...p,
      categoryName: p.category?.name || "Uncategorized",
      categoryData: p.category, // Keep the full object for filtering
      category: p.category?._id || p.category
    }));

    return { success: true, data: sanitizedProjects };
  } catch (error) {
    console.error("Error fetching projects:", error);
    return { success: false, error: "Failed to fetch projects" };
  }
}

export async function createProject(data: Partial<IBackEndProject>) {
  await dbConnect();
  try {
    const project = await Project.create(data);
    revalidatePath("/admin/projects");
    revalidatePath("/");
    return { success: true, data: JSON.parse(JSON.stringify(project)) };
  } catch (error) {
    console.error("Error creating project:", error);
    return { success: false, error: "Failed to create project" };
  }
}

export async function updateProject(id: string, data: Partial<IBackEndProject>) {
  await dbConnect();
  try {
    const project = await Project.findByIdAndUpdate(id, data, { new: true }).lean();
    revalidatePath("/admin/projects");
    revalidatePath("/");
    return { success: true, data: JSON.parse(JSON.stringify(project)) };
  } catch (error) {
    console.error("Error updating project:", error);
    return { success: false, error: "Failed to update project" };
  }
}

export async function deleteProject(id: string) {
  await dbConnect();
  try {
    await Project.findByIdAndDelete(id);
    revalidatePath("/admin/projects");
    revalidatePath("/");
    return { success: true };
  } catch (error) {
    console.error("Error deleting project:", error);
    return { success: false, error: "Failed to delete project" };
  }
}

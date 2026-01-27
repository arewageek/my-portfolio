"use server";

import dbConnect from "@/lib/db";
import Category, { ICategory } from "@/models/Category";
import { revalidatePath } from "next/cache";

const generateSlug = (name: string) => 
  name.toLowerCase().trim().replace(/[^\w\s-]/g, '').replace(/[\s_-]+/g, '-').replace(/^-+|-+$/g, '');

const getRandomColor = () => {
  const colors = ['#8b5cf6', '#ec4899', '#3b82f6', '#10b981', '#f59e0b', '#ef4444', '#06b6d4'];
  return colors[Math.floor(Math.random() * colors.length)];
};

export async function getCategories() {
  await dbConnect();
  try {
    const categories = await Category.find({})
      .populate({ path: 'parent', select: 'name', strictPopulate: false })
      .sort({ name: 1 })
      .lean();
    console.log(`[Server Action] Fetched ${categories.length} categories`);
    return { success: true, data: JSON.parse(JSON.stringify(categories || [])) };
  } catch (error) {
    console.error("Error fetching categories:", error);
    return { success: false, error: "Failed to fetch categories" };
  }
}

export async function createCategory(data: Partial<ICategory>) {
  await dbConnect();
  try {
    const slug = generateSlug(data.name!);
    const color = getRandomColor();
    const category = await Category.create({ ...data, slug, color });
    revalidatePath("/admin/projects");
    revalidatePath("/admin/categories");
    revalidatePath("/");
    return { success: true, data: JSON.parse(JSON.stringify(category)) };
  } catch (error) {
    console.error("Error creating category:", error);
    return { success: false, error: "Failed to create category" };
  }
}

export async function updateCategory(id: string, data: Partial<ICategory>) {
  await dbConnect();
  try {
    const updateData = { ...data };
    if (data.name) {
      updateData.slug = generateSlug(data.name);
    }
    const category = await Category.findByIdAndUpdate(id, updateData, { new: true }).lean();
    revalidatePath("/admin/projects");
    revalidatePath("/admin/categories");
    revalidatePath("/");
    return { success: true, data: JSON.parse(JSON.stringify(category)) };
  } catch (error) {
    console.error("Error updating category:", error);
    return { success: false, error: "Failed to update category" };
  }
}

export async function deleteCategory(id: string) {
  await dbConnect();
  try {
    await Category.findByIdAndDelete(id);
    revalidatePath("/admin/projects");
    revalidatePath("/admin/categories");
    revalidatePath("/");
    return { success: true };
  } catch (error) {
    console.error("Error deleting category:", error);
    return { success: false, error: "Failed to delete category" };
  }
}

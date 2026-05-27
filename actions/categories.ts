"use server";

import { prisma } from "@/lib/prisma";
import { revalidatePath } from "next/cache";

export async function getCategories() {
  try {
    const categories = await prisma.category.findMany({
      orderBy: { name: 'asc' }
    });
    return { data: categories };
  } catch (error) {
    return { error: "Failed to fetch categories" };
  }
}

export async function createCategory(name: string) {
  try {
    const category = await prisma.category.create({
      data: { name }
    });
    revalidatePath("/dashboard/projects");
    return { data: category };
  } catch (error: any) {
    console.error("Failed to create category:", error);
    if (error.code === 'P2002') {
      return { error: "Category already exists" };
    }
    return { error: "Failed to create category" };
  }
}

export async function deleteCategory(id: string) {
  try {
    await prisma.category.delete({ where: { id } });
    revalidatePath("/dashboard/projects");
    return { success: true };
  } catch (error) {
    return { error: "Failed to delete category" };
  }
}

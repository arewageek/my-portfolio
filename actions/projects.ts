"use server";

import { prisma } from "@/lib/prisma";
import { revalidatePath } from "next/cache";

export async function getProjects() {
  try {
    const projects = await prisma.project.findMany({
      orderBy: { createdAt: "desc" },
      include: { category: true, techStacks: true }
    });
    return { data: projects };
  } catch (error) {
    console.error("Error fetching projects:", error);
    return { error: "Failed to fetch projects" };
  }
}

export async function createProject(data: any) {
  try {
    const project = await prisma.project.create({
      data: {
        title: data.title,
        slug: data.slug || data.title.toLowerCase().replace(/[^a-z0-9]+/g, '-'),
        overview: data.overview,
        status: data.status,
        url: data.url,
        githubUrl: data.githubUrl,
        image: data.image,
        techStacks: {
          connectOrCreate: (data.tech || []).map((t: string) => ({
            where: { name: t },
            create: { name: t }
          }))
        },
        categoryId: data.categoryId || null,
      }
    });
    revalidatePath("/dashboard/projects");
    return { data: project };
  } catch (error) {
    console.error("Error creating project:", error);
    return { error: "Failed to create project" };
  }
}

export async function deleteProject(id: string) {
  try {
    await prisma.project.delete({ where: { id } });
    revalidatePath("/dashboard/projects");
    return { success: true };
  } catch (error) {
    return { error: "Failed to delete project" };
  }
}

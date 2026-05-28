"use server"

import { prisma } from "@/lib/prisma"

export async function getTechStacks() {
  try {
    const stacks = await prisma.techStack.findMany({
      orderBy: { name: "asc" }
    })
    return { data: stacks }
  } catch (error) {
    console.error("Failed to fetch tech stacks", error)
    return { error: "Failed to fetch tech stacks" }
  }
}

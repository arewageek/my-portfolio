import { getProjects } from "@/actions/projects";
import { getCategories } from "@/actions/categories";
import ProjectsClient from "./client";

export const dynamic = "force-dynamic";

export default async function ProjectsPage() {
  const [projectsRes, categoriesRes] = await Promise.all([
    getProjects(),
    getCategories()
  ]);

  return (
    <ProjectsClient 
      initialProjects={projectsRes.data || []} 
      initialCategories={categoriesRes.data || []} 
    />
  );
}

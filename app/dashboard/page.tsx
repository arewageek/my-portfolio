import { getProjects } from "@/actions/projects";
import DashboardClient from "./client";

export const dynamic = "force-dynamic";

export default async function DashboardPage() {
  const projectsRes = await getProjects();
  const projects = projectsRes.data || [];

  return <DashboardClient projects={projects} />;
}

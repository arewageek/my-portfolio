import React from "react";
import { ProjectsClient } from "@/components/admin/projects-client";
import { getProjects } from "@/actions/projects";
import { getCategories } from "@/actions/categories";

export const dynamic = 'force-dynamic';

export default async function AdminProjectsPage() {
  const [{ data: projects = [] }, { data: categories = [] }] = await Promise.all([
    getProjects(),
    getCategories()
  ]);

  return <ProjectsClient initialProjects={projects} categories={categories} />;
}

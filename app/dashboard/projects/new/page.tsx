import { getCategories } from "@/actions/categories";
import { getTechStacks } from "@/actions/techstacks";
import NewProjectClient from "./client";

export const dynamic = "force-dynamic";

export default async function NewProjectPage() {
  const [categoriesRes, stacksRes] = await Promise.all([
    getCategories(),
    getTechStacks()
  ]);

  return (
    <NewProjectClient 
      categories={categoriesRes.data || []} 
      techStacks={stacksRes.data || []}
    />
  );
}

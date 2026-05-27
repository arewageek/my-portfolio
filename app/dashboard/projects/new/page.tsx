import { getCategories } from "@/actions/categories";
import NewProjectClient from "./client";

export const dynamic = "force-dynamic";

export default async function NewProjectPage() {
  const categoriesRes = await getCategories();

  return (
    <NewProjectClient 
      categories={categoriesRes.data || []} 
    />
  );
}

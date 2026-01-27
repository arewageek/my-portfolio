import React from "react";
import { CategoriesClient } from "@/components/admin/categories-client";
import { getCategories } from "@/actions/categories";

export const dynamic = 'force-dynamic';

export default async function AdminCategoriesPage() {
  const res = await getCategories();

  if (!res.success) {
    return (
      <div className="p-8 text-red-500 bg-red-500/10 rounded-xl border border-red-500/20">
        <h3 className="text-lg font-bold">Error loading categories</h3>
        <p className="text-sm opacity-80">{res.error}</p>
      </div>
    );
  }

  return <CategoriesClient initialCategories={res.data || []} />;
}

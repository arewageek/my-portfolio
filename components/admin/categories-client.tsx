"use client";

import { useState, useEffect } from "react";
import { Plus, Search, Pencil, Trash2, Hash } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { deleteCategory } from "@/actions/categories";
import { toast } from "sonner";
import { CategoryFormDialog } from "./category-form-dialog";
import { useRouter } from "next/navigation";

interface CategoriesClientProps {
  initialCategories: any[];
}

export function CategoriesClient({ initialCategories }: CategoriesClientProps) {
  const router = useRouter();

  useEffect(() => {
    // Component logic
  }, [initialCategories]);

  const [searchQuery, setSearchQuery] = useState("");
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState<any | null>(null);

  const filteredCategories = (initialCategories || []).filter(cat => 
    (cat.name?.toLowerCase() || "").includes(searchQuery.toLowerCase()) ||
    (cat.slug?.toLowerCase() || "").includes(searchQuery.toLowerCase())
  );

  const handleEdit = (category: any) => {
    setSelectedCategory(category);
    setIsDialogOpen(true);
  };

  const handleAdd = () => {
    setSelectedCategory(null);
    setIsDialogOpen(true);
  };

  const handleDelete = async (id: string) => {
    if (confirm("Are you sure? This will not delete projects in this category, but they will have no category assigned.")) {
      const result = await deleteCategory(id);
      if (result.success) {
        toast.success("Category deleted");
        router.refresh(); 
      } else {
        toast.error("Failed to delete category");
      }
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold tracking-tight text-white">Categories</h1>
          <p className="text-muted-foreground mt-1">Manage project categories</p>
        </div>
        <Button className="bg-primary hover:bg-primary/90" onClick={handleAdd}>
          <Plus className="w-4 h-4 mr-2" />
          Add Category
        </Button>
      </div>

      <Card className="glass-card border-white/5">
        <CardHeader className="p-4 sm:p-6 pb-2">
          <div className="relative max-w-sm">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Search categories..."
              className="pl-9 bg-secondary/50 border-white/10"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </CardHeader>
        <CardContent className="p-0 text-white">
          <div className="rounded-md border border-white/5 overflow-hidden">
            <table className="w-full text-sm text-left">
              <thead className="bg-secondary/50 text-muted-foreground font-medium border-b border-white/5">
                <tr>
                  <th className="h-12 px-4 sm:px-6 align-middle">Category</th>
                  <th className="h-12 px-4 sm:px-6 align-middle">Slug</th>
                  <th className="h-12 px-4 sm:px-6 align-middle text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5">
                {filteredCategories.map((cat: any) => (
                  <tr key={cat._id} className="hover:bg-white/5 transition-colors">
                    <td className="p-4 sm:p-6 align-middle">
                      <div className="flex items-center gap-3">
                        <div 
                          className="h-3 w-3 rounded-full border border-white/10" 
                          style={{ backgroundColor: cat.color }} 
                        />
                        <span className="font-semibold">{cat.name || "Unnamed Category"}</span>
                      </div>
                    </td>
                    <td className="p-4 sm:p-6 align-middle text-muted-foreground text-xs">
                      {cat.slug || "-"}
                    </td>
                    <td className="p-4 sm:p-6 align-middle text-right">
                      <div className="flex justify-end gap-2">
                        <Button variant="ghost" size="icon" className="h-8 w-8 text-blue-400" onClick={() => handleEdit(cat)}>
                          <Pencil className="h-4 w-4" />
                        </Button>
                        <Button variant="ghost" size="icon" className="h-8 w-8 text-red-400" onClick={() => handleDelete(cat._id)}>
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>

      <CategoryFormDialog 
        open={isDialogOpen} 
        onOpenChange={setIsDialogOpen} 
        category={selectedCategory}
        onSuccess={() => router.refresh()}
      />
    </div>
  );
}

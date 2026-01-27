"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { createCategory, updateCategory, getCategories } from "@/actions/categories";
import { toast } from "sonner";
import { useState, useEffect } from "react";

const categorySchema = z.object({
  name: z.string().min(2, "Name is too short"),
  description: z.string().optional(),
});

interface CategoryFormDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  category?: any | null;
  onSuccess: () => void;
}

export function CategoryFormDialog({
  open,
  onOpenChange,
  category,
  onSuccess,
}: CategoryFormDialogProps) {
  const [isLoading, setIsLoading] = useState(false);
  const [categories, setCategories] = useState<any[]>([]);

  const form = useForm<z.infer<typeof categorySchema>>({
    resolver: zodResolver(categorySchema),
    defaultValues: {
      name: "",
      description: "",
    },
  });

  useEffect(() => {
    async function loadCategories() {
      const res = await getCategories();
      if (res.success) {
        setCategories(res.data.filter((c: any) => c._id !== category?._id));
      }
    }
    if (open) loadCategories();
  }, [open, category]);

  useEffect(() => {
    if (category && open) {
      form.reset({
        name: category.name,
        description: category.description || "",
      });
    } else if (!category && open) {
      form.reset({
        name: "",
        description: "",
      });
    }
  }, [category, form, open]);

  async function onSubmit(values: z.infer<typeof categorySchema>) {
    setIsLoading(true);
    const data = {
      ...values,
    };

    const res = category
      ? await updateCategory(category._id, data)
      : await createCategory(data);

    setIsLoading(false);
    if (res.success) {
      toast.success(category ? "Category updated" : "Category created");
      onOpenChange(false);
      onSuccess();
    } else {
      toast.error(res.error || "Something went wrong");
    }
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[425px] glass border-white/10">
        <DialogHeader>
          <DialogTitle>{category ? "Edit Category" : "Add Category"}</DialogTitle>
        </DialogHeader>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4 py-4">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Name</FormLabel>
                  <FormControl>
                    <Input {...field} placeholder="DeFi" className="bg-secondary/50 border-white/10" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="description"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Description (Optional)</FormLabel>
                  <FormControl>
                    <Textarea {...field} placeholder="Project category details..." className="bg-secondary/50 border-white/10 h-20" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <DialogFooter className="pt-4">
              <Button type="button" variant="ghost" onClick={() => onOpenChange(false)}>
                Cancel
              </Button>
              <Button type="submit" disabled={isLoading} className="bg-primary hover:bg-primary/90">
                {isLoading ? "Saving..." : category ? "Update Category" : "Create Category"}
              </Button>
            </DialogFooter>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
}

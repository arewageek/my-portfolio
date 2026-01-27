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
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { createProject, updateProject } from "@/actions/projects";
import { toast } from "sonner";
import { useState, useEffect } from "react";
import { IBackEndProject } from "@/models/Project";
import { ICategory } from "@/models/Category";
import { getCategories } from "@/actions/categories";

const projectSchema = z.object({
  title: z.string().min(2, "Title is too short"),
  category: z.string().min(1, "Please select a category"),
  status: z.string().min(1, "Please select a status"),
  description: z.string().optional(),
  image: z.string().min(1, "Image URL is required"),
  technologies: z.string().min(1, "Technologies are required"),
  demoLink: z.string().url("Must be a valid URL").optional().or(z.literal("")),
  githubLink: z.string().url("Must be a valid URL").optional().or(z.literal("")),
});

interface ProjectFormDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  project?: any | null; // If provided, we are editing
  onSuccess: () => void;
}

export function ProjectFormDialog({
  open,
  onOpenChange,
  project,
  onSuccess,
}: ProjectFormDialogProps) {
  const [categories, setCategories] = useState<ICategory[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const form = useForm<z.infer<typeof projectSchema>>({
    resolver: zodResolver(projectSchema),
    defaultValues: {
      title: "",
      category: "",
      status: "development",
      description: "",
      image: "",
      technologies: "",
      demoLink: "",
      githubLink: "",
    },
  });

  useEffect(() => {
    async function loadCategories() {
      const res = await getCategories();
      if (res.success) setCategories(res.data);
    }
    loadCategories();
  }, []);

  useEffect(() => {
    if (project && open) {
      const categoryId = typeof project.category === 'object' ? project.category?._id : project.category;
      
      form.reset({
        title: project.title,
        category: categoryId || "",
        status: project.status,
        description: project.description || "",
        image: project.image,
        technologies: project.technologies?.join(", ") || "",
        demoLink: project.links?.demo || "",
        githubLink: project.links?.github || "",
      });
    } else if (!project && open) {
      form.reset({
        title: "",
        category: "",
        status: "development",
        description: "",
        image: "",
        technologies: "",
        demoLink: "",
        githubLink: "",
      });
    }
  }, [project, form, open]);

  async function onSubmit(values: z.infer<typeof projectSchema>) {
    setIsLoading(true);
    const projectData = {
      ...values,
      technologies: values.technologies.split(",").map((s) => s.trim()).filter(Boolean),
      links: {
        demo: values.demoLink,
        github: values.githubLink,
      },
    };

    const res = project
      ? await updateProject(project._id, projectData)
      : await createProject(projectData);

    setIsLoading(false);
    if (res.success) {
      toast.success(project ? "Project updated" : "Project created");
      onOpenChange(false);
      onSuccess();
    } else {
      toast.error(res.error || "Something went wrong");
    }
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[600px] glass border-white/10 max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle>{project ? "Edit Project" : "Add New Project"}</DialogTitle>
        </DialogHeader>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4 py-4">
            <FormField
              control={form.control}
              name="title"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Title</FormLabel>
                  <FormControl>
                    <Input {...field} className="bg-secondary/50 border-white/10" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <div className="grid grid-cols-2 gap-4">
              <FormField
                control={form.control}
                name="category"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Category</FormLabel>
                    <Select onValueChange={field.onChange} value={field.value}>
                      <FormControl>
                        <SelectTrigger className="bg-secondary/50 border-white/10">
                          <SelectValue placeholder="Select category" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent className="glass">
                        {categories.map((cat: any) => (
                          <SelectItem key={cat._id} value={cat._id}>
                            {cat.name}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="status"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Status</FormLabel>
                    <Select onValueChange={field.onChange} value={field.value}>
                      <FormControl>
                        <SelectTrigger className="bg-secondary/50 border-white/10">
                          <SelectValue placeholder="Select status" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent className="glass">
                        <SelectItem value="live">Live</SelectItem>
                        <SelectItem value="development">Development</SelectItem>
                        <SelectItem value="beta">Beta</SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <FormField
              control={form.control}
              name="image"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Image URL</FormLabel>
                  <FormControl>
                    <Input {...field} placeholder="/projects/my-project.png" className="bg-secondary/50 border-white/10" />
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
                  <FormLabel>Description</FormLabel>
                  <FormControl>
                    <Textarea {...field} className="bg-secondary/50 border-white/10 min-h-[100px]" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="technologies"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Technologies (comma separated)</FormLabel>
                  <FormControl>
                    <Input {...field} placeholder="React, Next.js, Solidity" className="bg-secondary/50 border-white/10" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <div className="grid grid-cols-2 gap-4">
              <FormField
                control={form.control}
                name="demoLink"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Demo URL</FormLabel>
                    <FormControl>
                      <Input {...field} placeholder="https://..." className="bg-secondary/50 border-white/10" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="githubLink"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>GitHub URL</FormLabel>
                    <FormControl>
                      <Input {...field} placeholder="https://github..." className="bg-secondary/50 border-white/10" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <DialogFooter className="pt-4">
              <Button type="button" variant="ghost" onClick={() => onOpenChange(false)}>
                Cancel
              </Button>
              <Button type="submit" disabled={isLoading} className="bg-primary hover:bg-primary/90">
                {isLoading ? "Saving..." : project ? "Update Project" : "Create Project"}
              </Button>
            </DialogFooter>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
}

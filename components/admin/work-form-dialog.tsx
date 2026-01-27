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
import { createCompany, updateCompany } from "@/actions/work";
import { toast } from "sonner";
import { useState, useEffect } from "react";

const workSchema = z.object({
  name: z.string().min(2, "Company name is too short"),
  role: z.string().min(2, "Role is too short"),
  started: z.string().min(1, "Start date is required"),
  stopped: z.string().optional().or(z.literal("")),
  location: z.string().min(1, "Location is required"),
  type: z.string().min(1, "Job type is required"),
  description: z.string().min(10, "Description is too short"),
  slug: z.string().min(2, "Slug is required"),
  logo: z.string().optional().or(z.literal("")),
  technologies: z.string().min(1, "Technologies are required"),
});

interface WorkFormDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  work?: any | null;
  onSuccess: () => void;
}

export function WorkFormDialog({
  open,
  onOpenChange,
  work,
  onSuccess,
}: WorkFormDialogProps) {
  const [isLoading, setIsLoading] = useState(false);

  const form = useForm<z.infer<typeof workSchema>>({
    resolver: zodResolver(workSchema),
    defaultValues: {
      name: "",
      role: "",
      started: "",
      stopped: "",
      location: "",
      type: "Full-time",
      description: "",
      slug: "",
      logo: "",
      technologies: "",
    },
  });

  useEffect(() => {
    if (work && open) {
      form.reset({
        name: work.name,
        role: work.role,
        started: work.started || "",
        stopped: work.stopped || "",
        location: work.location || "",
        type: work.type || "Full-time",
        description: work.description || "",
        slug: work.slug || "",
        logo: work.logo || "",
        technologies: work.technologies?.join(", ") || "",
      });
    } else if (!work && open) {
      form.reset({
        name: "",
        role: "",
        started: "",
        stopped: "",
        location: "",
        type: "Full-time",
        description: "",
        slug: "",
        logo: "",
        technologies: "",
      });
    }
  }, [work, form, open]);

  async function onSubmit(values: z.infer<typeof workSchema>) {
    setIsLoading(true);
    const workData = {
      ...values,
      technologies: values.technologies.split(",").map((s) => s.trim()).filter(Boolean),
    };

    const res = work
      ? await updateCompany(work._id, workData)
      : await createCompany(workData);

    setIsLoading(false);
    if (res.success) {
      toast.success(work ? "Work experience updated" : "Work experience created");
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
          <DialogTitle>{work ? "Edit Work Experience" : "Add Work Experience"}</DialogTitle>
        </DialogHeader>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4 py-4">
            <div className="grid grid-cols-2 gap-4">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Company Name</FormLabel>
                    <FormControl>
                      <Input {...field} className="bg-secondary/50 border-white/10" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="slug"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Slug (for URL)</FormLabel>
                    <FormControl>
                      <Input {...field} placeholder="google" className="bg-secondary/50 border-white/10" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <FormField
              control={form.control}
              name="role"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Role</FormLabel>
                  <FormControl>
                    <Input {...field} className="bg-secondary/50 border-white/10" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="started"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Started</FormLabel>
                  <FormControl>
                    <Input {...field} placeholder="Jan 2023" className="bg-secondary/50 border-white/10" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="stopped"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Stopped (leave blank if present)</FormLabel>
                  <FormControl>
                    <Input {...field} placeholder="Dec 2023" className="bg-secondary/50 border-white/10" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <div className="grid grid-cols-2 gap-4">
              <FormField
                control={form.control}
                name="type"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Job Type</FormLabel>
                    <Select onValueChange={field.onChange} value={field.value}>
                      <FormControl>
                        <SelectTrigger className="bg-secondary/50 border-white/10">
                          <SelectValue placeholder="Select type" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent className="glass">
                        <SelectItem value="Full-time">Full-time</SelectItem>
                        <SelectItem value="Contract">Contract</SelectItem>
                        <SelectItem value="Freelance">Freelance</SelectItem>
                        <SelectItem value="Internship">Internship</SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />
             <FormField
              control={form.control}
              name="location"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Location</FormLabel>
                  <FormControl>
                    <Input {...field} placeholder="Remote / City, Country" className="bg-secondary/50 border-white/10" />
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
                    <FormLabel>Short Description</FormLabel>
                    <FormControl>
                      <Textarea {...field} className="bg-secondary/50 border-white/10 h-20" />
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
                      <Input {...field} className="bg-secondary/50 border-white/10" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="logo"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Logo URL (optional)</FormLabel>
                    <FormControl>
                      <Input {...field} className="bg-secondary/50 border-white/10" />
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
                {isLoading ? "Saving..." : work ? "Update Work" : "Create Work"}
              </Button>
            </DialogFooter>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
}

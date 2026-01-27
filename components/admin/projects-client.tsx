"use client";

import { useState } from "react";
import { Plus, Search, Filter, MoreVertical, Pencil, Trash2, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { deleteProject } from "@/actions/projects";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import { IBackEndProject } from "@/models/Project";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ProjectFormDialog } from "./project-form-dialog";

interface ProjectsClientProps {
  initialProjects: any[];
  categories: any[];
}

export function ProjectsClient({ initialProjects, categories }: ProjectsClientProps) {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedTab, setSelectedTab] = useState("all");
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState<any | null>(null);
  const router = useRouter();

  const filteredProjects = initialProjects.filter(project => {
    // Search filter
    const matchesSearch = project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         project.description?.toLowerCase().includes(searchQuery.toLowerCase());
    
    if (!matchesSearch) return false;

    // Category filter (Tab)
    if (selectedTab === "all") return true;

    return project.category === selectedTab;
  });

  const handleEdit = (project: any) => {
    setSelectedProject(project);
    setIsDialogOpen(true);
  };

  const handleAdd = () => {
    setSelectedProject(null);
    setIsDialogOpen(true);
  };

  const handleDelete = async (id: string) => {
    if (confirm("Are you sure you want to delete this project?")) {
      const result = await deleteProject(id);
      if (result.success) {
        toast.success("Project deleted successfully");
        router.refresh(); 
      } else {
        toast.error("Failed to delete project");
      }
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold tracking-tight text-white">Projects</h1>
          <p className="text-muted-foreground mt-1">Manage your portfolio projects</p>
        </div>
        <Button className="bg-primary hover:bg-primary/90" onClick={handleAdd}>
          <Plus className="w-4 h-4 mr-2" />
          Add Project
        </Button>
      </div>

      <Tabs defaultValue="all" className="w-full" onValueChange={setSelectedTab}>
        <TabsList className="bg-secondary/50 text-muted-foreground border border-white/5 p-1 h-auto flex-wrap justify-start glass-card">
          <TabsTrigger 
            value="all" 
            className="data-[state=active]:bg-primary data-[state=active]:text-white px-6 py-2 rounded-xl transition-all"
          >
            All Projects
          </TabsTrigger>
          {categories.map(cat => (
            <TabsTrigger 
              key={cat._id} 
              value={cat._id} 
              className="data-[state=active]:bg-primary data-[state=active]:text-white px-6 py-2 rounded-xl transition-all"
            >
              {cat.name}
            </TabsTrigger>
          ))}
        </TabsList>
      </Tabs>

      <Card className="glass-card border-white/5">
        <CardHeader className="p-4 sm:p-6 pb-2">
          <div className="flex items-center gap-4">
            <div className="relative flex-1 max-w-sm">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search projects..."
                className="pl-9 bg-secondary/50 border-white/10"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            <Button variant="outline" size="icon" className="shrink-0 border-white/10">
              <Filter className="w-4 h-4" />
            </Button>
          </div>
        </CardHeader>
        <CardContent className="p-0 text-white">
          <div className="rounded-md border border-white/5 overflow-hidden">
            <table className="w-full text-sm text-left">
              <thead className="bg-secondary/50 text-muted-foreground font-medium border-b border-white/5">
                <tr>
                  <th className="h-12 px-4 sm:px-6 align-middle">Project</th>
                  <th className="h-12 px-4 sm:px-6 align-middle">Status</th>
                  <th className="h-12 px-4 sm:px-6 align-middle hidden md:table-cell">Category</th>
                  <th className="h-12 px-4 sm:px-6 align-middle hidden lg:table-cell">Technologies</th>
                  <th className="h-12 px-4 sm:px-6 align-middle text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5">
                {filteredProjects.map((project: any) => (
                  <tr key={project._id} className="hover:bg-white/5 transition-colors">
                    <td className="p-4 sm:p-6 align-middle">
                      <div className="flex items-center gap-4">
                        <div className="h-12 w-12 rounded-lg bg-secondary/50 overflow-hidden shrink-0 border border-white/5">
                          <img 
                            src={project.image || "/placeholder.svg"} 
                            alt={project.title}
                            className="h-full w-full object-cover"
                          />
                        </div>
                        <div>
                          <p className="font-semibold text-foreground">{project.title}</p>
                          <p className="text-muted-foreground text-xs line-clamp-1 max-w-[200px]">{project.description}</p>
                        </div>
                      </div>
                    </td>
                    <td className="p-4 sm:p-6 align-middle">
                      <Badge variant="outline" className={`
                        capitalize border-white/10
                        ${project.status === 'live' ? 'border-green-500/30 text-green-400 bg-green-500/10' : ''}
                        ${project.status === 'development' ? 'border-yellow-500/30 text-yellow-400 bg-yellow-500/10' : ''}
                        ${project.status === 'beta' ? 'border-blue-500/30 text-blue-400 bg-blue-500/10' : ''}
                      `}>
                        {project.status}
                      </Badge>
                    </td>
                    <td className="p-4 sm:p-6 align-middle hidden md:table-cell">
                      <span className="text-muted-foreground">
                        {project.categoryName || "Uncategorized"}
                      </span>
                    </td>
                    <td className="p-4 sm:p-6 align-middle hidden lg:table-cell">
                      <div className="flex flex-wrap gap-1 max-w-[250px]">
                        {project.technologies?.slice(0, 3).map((tech: string, i: number) => (
                          <Badge key={i} variant="secondary" className="text-xs bg-secondary/50 text-muted-foreground border-white/5">
                            {tech}
                          </Badge>
                        ))}
                        {project.technologies?.length > 3 && (
                          <span className="text-xs text-muted-foreground ml-1">+{project.technologies.length - 3}</span>
                        )}
                      </div>
                    </td>
                    <td className="p-4 sm:p-6 align-middle text-right">
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <Button variant="ghost" size="icon" className="h-8 w-8">
                            <MoreVertical className="h-4 w-4" />
                          </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end" className="glass border-white/10">
                          <DropdownMenuLabel>Actions</DropdownMenuLabel>
                          <DropdownMenuSeparator className="bg-white/10" />
                          <DropdownMenuItem onClick={() => handleEdit(project)}>
                            <Pencil className="mr-2 h-4 w-4" /> Edit
                          </DropdownMenuItem>
                          {project.links?.demo && (
                            <DropdownMenuItem asChild>
                              <a href={project.links.demo} target="_blank" rel="noopener noreferrer">
                                <ExternalLink className="mr-2 h-4 w-4" /> View Demo
                              </a>
                            </DropdownMenuItem>
                          )}
                          <DropdownMenuSeparator className="bg-white/10" />
                          <DropdownMenuItem 
                            className="text-red-400 focus:text-red-400 focus:bg-red-900/10"
                            onClick={() => handleDelete(project._id)}
                          >
                            <Trash2 className="mr-2 h-4 w-4" /> Delete
                          </DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          {filteredProjects.length === 0 && (
            <div className="text-center py-12 text-muted-foreground">
              No projects found.
            </div>
          )}
        </CardContent>
      </Card>

      <ProjectFormDialog 
        open={isDialogOpen} 
        onOpenChange={setIsDialogOpen} 
        project={selectedProject}
        onSuccess={() => router.refresh()}
      />
    </div>
  );
}

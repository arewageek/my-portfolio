"use client";

import { useState } from "react";
import { Plus, Search, Filter, MoreVertical, Pencil, Trash2, Building2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { deleteCompany } from "@/actions/work";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import { IBackEndCompany } from "@/models/Company";

import { WorkFormDialog } from "./work-form-dialog";

interface WorkClientProps {
  initialCompanies: any[];
}

export function WorkClient({ initialCompanies }: WorkClientProps) {
  const [searchQuery, setSearchQuery] = useState("");
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [selectedWork, setSelectedWork] = useState<any | null>(null);
  const router = useRouter(); 

  const filteredCompanies = initialCompanies.filter(company => 
    company.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    company.role.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleEdit = (work: any) => {
    setSelectedWork(work);
    setIsDialogOpen(true);
  };

  const handleAdd = () => {
    setSelectedWork(null);
    setIsDialogOpen(true);
  };

  const handleDelete = async (id: string) => {
    if (confirm("Are you sure you want to delete this work experience?")) {
      const result = await deleteCompany(id);
      if (result.success) {
        toast.success("Work experience deleted successfully");
        router.refresh(); 
      } else {
        toast.error("Failed to delete work experience");
      }
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold tracking-tight text-white">Work Experience</h1>
          <p className="text-muted-foreground mt-1">Manage your professional history</p>
        </div>
        <Button className="bg-primary hover:bg-primary/90" onClick={handleAdd}>
          <Plus className="w-4 h-4 mr-2" />
          Add Work
        </Button>
      </div>

      <Card className="glass-card border-white/5">
        <CardHeader className="p-4 sm:p-6 pb-2">
          <div className="flex items-center gap-4">
            <div className="relative flex-1 max-w-sm">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search work..."
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
                  <th className="h-12 px-4 sm:px-6 align-middle">Company</th>
                  <th className="h-12 px-4 sm:px-6 align-middle">Type</th>
                  <th className="h-12 px-4 sm:px-6 align-middle hidden md:table-cell">Duration</th>
                  <th className="h-12 px-4 sm:px-6 align-middle hidden lg:table-cell">Location</th>
                  <th className="h-12 px-4 sm:px-6 align-middle text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5">
                {filteredCompanies.map((company: any) => (
                  <tr key={company._id} className="hover:bg-white/5 transition-colors">
                    <td className="p-4 sm:p-6 align-middle">
                      <div className="flex items-center gap-4">
                        <div className="h-10 w-10 rounded-lg bg-secondary/50 flex items-center justify-center shrink-0 border border-white/5 text-muted-foreground">
                            {company.logo ? (
                                <img src={company.logo} alt={company.name} className="h-full w-full object-cover rounded-lg" />
                            ) : (
                                <Building2 className="w-5 h-5" />
                            )}
                        </div>
                        <div>
                          <p className="font-semibold text-foreground">{company.name}</p>
                          <p className="text-muted-foreground text-xs">{company.role}</p>
                        </div>
                      </div>
                    </td>
                    <td className="p-4 sm:p-6 align-middle">
                        <Badge variant="secondary" className="capitalize bg-secondary/80 text-foreground border-white/5">
                            {company.type}
                        </Badge>
                    </td>
                    <td className="p-4 sm:p-6 align-middle hidden md:table-cell">
                      <span className="text-muted-foreground">{company.started} - {company.stopped || 'Present'}</span>
                    </td>
                    <td className="p-4 sm:p-6 align-middle hidden lg:table-cell">
                      <span className="text-muted-foreground">{company.location}</span>
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
                          <DropdownMenuItem onClick={() => handleEdit(company)}>
                            <Pencil className="mr-2 h-4 w-4" /> Edit
                          </DropdownMenuItem>
                          <DropdownMenuSeparator className="bg-white/10" />
                          <DropdownMenuItem 
                            className="text-red-400 focus:text-red-400 focus:bg-red-900/10"
                            onClick={() => handleDelete(company._id)}
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
          {filteredCompanies.length === 0 && (
            <div className="text-center py-12 text-muted-foreground">
              No work experience found.
            </div>
          )}
        </CardContent>
      </Card>

      <WorkFormDialog 
        open={isDialogOpen} 
        onOpenChange={setIsDialogOpen} 
        work={selectedWork}
        onSuccess={() => router.refresh()}
      />
    </div>
  );
}

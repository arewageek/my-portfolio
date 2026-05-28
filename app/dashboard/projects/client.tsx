"use client";

import { useState, useTransition } from "react";
import Link from "next/link";
import { 
  FolderGit, 
  Search, 
  Plus, 
  Edit3, 
  Trash2,
  ExternalLink,
  Tags,
  X
} from "lucide-react";
import { toast } from "sonner";
import { deleteProject } from "@/actions/projects";
import { createCategory, deleteCategory } from "@/actions/categories";

export default function ProjectsClient({ 
  initialProjects, 
  initialCategories 
}: { 
  initialProjects: any[], 
  initialCategories: any[] 
}) {
  const [search, setSearch] = useState("");
  const [showCategoryModal, setShowCategoryModal] = useState(false);
  const [newCat, setNewCat] = useState("");
  const [isPending, startTransition] = useTransition();

  const projects = initialProjects;
  const categories = initialCategories;

  const filtered = projects.filter(p => 
    p.title.toLowerCase().includes(search.toLowerCase()) || 
    (p.category?.name || "").toLowerCase().includes(search.toLowerCase())
  );

  const handleAddCategory = () => {
    if (!newCat.trim()) return;
    startTransition(async () => {
      const res = await createCategory(newCat);
      if (res.error) toast.error(res.error);
      else {
        toast.success("Category added");
        setNewCat("");
      }
    });
  };

  const handleRemoveCategory = (id: string) => {
    startTransition(async () => {
      const res = await deleteCategory(id);
      if (res.error) toast.error(res.error);
      else toast.success("Category removed");
    });
  };

  const handleDeleteProject = (id: string) => {
    if (!confirm("Are you sure you want to delete this project?")) return;
    startTransition(async () => {
      const res = await deleteProject(id);
      if (res.error) toast.error(res.error);
      else toast.success("Project deleted");
    });
  };

  return (
    <div className="space-y-6 sm:space-y-8 max-w-6xl mx-auto w-full">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl sm:text-3xl font-serif text-gray-900">Projects</h1>
          <p className="text-sm text-gray-500 mt-1">Manage your portfolio projects and technical case studies.</p>
        </div>
        <div className="flex w-full sm:w-auto gap-3">
          <button 
            onClick={() => setShowCategoryModal(true)}
            className="flex flex-1 sm:flex-none justify-center items-center gap-2 bg-white border border-gray-200 text-gray-700 px-4 py-2.5 rounded-xl text-sm font-medium hover:bg-gray-50 transition-colors shadow-sm"
          >
            <Tags className="w-4 h-4" />
            Categories
          </button>
          <Link 
            href="/dashboard/projects/new"
            className="flex flex-1 sm:flex-none justify-center items-center gap-2 bg-gray-900 text-white px-4 py-2.5 rounded-xl text-sm font-medium hover:bg-gray-800 transition-colors shadow-sm"
          >
            <Plus className="w-4 h-4" />
            New Project
          </Link>
        </div>
      </div>

      {/* Toolbar */}
      <div className="bg-white border border-gray-200 rounded-2xl p-4 shadow-sm flex flex-col sm:flex-row justify-between items-center gap-4">
        <div className="relative w-full sm:w-80">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
          <input 
            type="text"
            placeholder="Search projects..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full pl-9 pr-4 py-2 bg-gray-50 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-gray-900/10 focus:bg-white transition-all"
          />
        </div>
        <div className="w-full sm:w-auto">
          <select className="w-full sm:w-auto px-4 py-2 bg-white border border-gray-200 rounded-xl text-sm text-gray-700 focus:outline-none focus:border-gray-400">
            <option value="all">All Status</option>
            <option value="draft">Draft</option>
            <option value="in development">In Development</option>
            <option value="live">Live</option>
          </select>
        </div>
      </div>

      {/* Mobile Project List (Card View) */}
      <div className="grid grid-cols-1 gap-4 md:hidden">
        {filtered.map(project => (
          <div key={project.id} className="bg-white border border-gray-200 rounded-2xl p-4 shadow-sm flex flex-col gap-4">
            <div className="flex items-start justify-between gap-3">
              <div className="flex items-center gap-3 min-w-0">
                <div className="w-10 h-10 rounded-lg bg-gray-100 border border-gray-200 flex items-center justify-center flex-shrink-0">
                  <FolderGit className="w-5 h-5 text-gray-500" />
                </div>
                <div className="min-w-0">
                  <p className="font-medium text-gray-900 truncate">{project.title}</p>
                  <p className="text-xs text-gray-500 mt-0.5 truncate">{project.category?.name} &middot; {new Date(project.createdAt).toLocaleDateString()}</p>
                </div>
              </div>
              <span className={`text-[9px] uppercase tracking-wider font-bold px-2 py-1 rounded-md shrink-0 ${
                project.status === 'Live' ? 'bg-green-50 text-green-700' : 
                project.status === 'In Development' ? 'bg-blue-50 text-blue-700' : 
                'bg-gray-100 text-gray-600'
              }`}>
                {project.status}
              </span>
            </div>
            
            <div className="flex flex-wrap gap-1.5">
              {project.techStacks?.map((t: any) => (
                <span key={t.id} className="text-[10px] px-2 py-0.5 bg-gray-100 text-gray-600 rounded border border-gray-200">
                  {t.name}
                </span>
              ))}
            </div>

            <div className="pt-3 border-t border-gray-100 flex items-center justify-end gap-2">
               {project.url && (
                <a href={project.url} target="_blank" rel="noreferrer" className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-gray-600 hover:text-gray-900 bg-white border border-gray-200 rounded-lg shadow-sm">
                  <ExternalLink className="w-3.5 h-3.5" />
                  Live
                </a>
              )}
              <button className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-gray-600 hover:text-gray-900 bg-white border border-gray-200 rounded-lg shadow-sm">
                <Edit3 className="w-3.5 h-3.5" />
                Edit
              </button>
              <button 
                onClick={() => handleDeleteProject(project.id)}
                disabled={isPending}
                className="p-1.5 text-gray-400 hover:text-red-600 bg-white border border-gray-200 rounded-lg shadow-sm ml-1"
              >
                <Trash2 className="w-4 h-4" />
              </button>
            </div>
          </div>
        ))}
        {filtered.length === 0 && (
          <div className="bg-white border border-gray-200 rounded-2xl p-8 text-center text-sm text-gray-500">
            No projects found matching your search.
          </div>
        )}
      </div>

      {/* Desktop Project List (Table View) */}
      <div className="hidden md:block bg-white border border-gray-200 rounded-2xl shadow-sm overflow-hidden">
        <table className="w-full text-left border-collapse min-w-[600px]">
          <thead>
            <tr className="bg-gray-50 border-b border-gray-200 text-xs uppercase tracking-wider text-gray-500 font-semibold">
              <th className="px-6 py-4">Project</th>
              <th className="px-6 py-4">Status</th>
              <th className="px-6 py-4">Tech Stack</th>
              <th className="px-6 py-4">Date</th>
              <th className="px-6 py-4 text-right">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            {filtered.map(project => (
              <tr key={project.id} className="hover:bg-gray-50/50 transition-colors group">
                <td className="px-6 py-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-gray-100 border border-gray-200 flex items-center justify-center flex-shrink-0">
                      <FolderGit className="w-5 h-5 text-gray-500" />
                    </div>
                    <div>
                      <p className="font-medium text-gray-900">{project.title}</p>
                      <p className="text-xs text-gray-500 mt-0.5">{project.category?.name}</p>
                    </div>
                  </div>
                </td>
                <td className="px-6 py-4">
                  <span className={`text-[10px] uppercase tracking-wider font-bold px-2.5 py-1 rounded-md ${
                    project.status === 'Live' ? 'bg-green-50 text-green-700' : 
                    project.status === 'In Development' ? 'bg-blue-50 text-blue-700' : 
                    'bg-gray-100 text-gray-600'
                  }`}>
                    {project.status}
                  </span>
                </td>
                <td className="px-6 py-4">
                  <div className="flex flex-wrap gap-1.5">
                    {project.techStacks?.map((t: any) => (
                      <span key={t.id} className="text-[11px] px-2 py-0.5 bg-gray-100 text-gray-600 rounded-md border border-gray-200 whitespace-nowrap">
                        {t.name}
                      </span>
                    ))}
                  </div>
                </td>
                <td className="px-6 py-4">
                  <span className="text-sm text-gray-500 whitespace-nowrap">
                    {new Date(project.createdAt).toLocaleDateString()}
                  </span>
                </td>
                <td className="px-6 py-4 text-right">
                  <div className="flex items-center justify-end gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                    {project.url && (
                      <a href={project.url} target="_blank" rel="noreferrer" className="p-1.5 text-gray-400 hover:text-gray-900 bg-white border border-gray-200 rounded-md shadow-sm hover:bg-gray-50 transition-all">
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    )}
                    <button className="p-1.5 text-gray-400 hover:text-gray-900 bg-white border border-gray-200 rounded-md shadow-sm hover:bg-gray-50 transition-all">
                      <Edit3 className="w-4 h-4" />
                    </button>
                    <button 
                      onClick={() => handleDeleteProject(project.id)}
                      disabled={isPending}
                      className="p-1.5 text-gray-400 hover:text-red-600 bg-white border border-gray-200 rounded-md shadow-sm hover:bg-red-50 hover:border-red-100 transition-all"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
            {filtered.length === 0 && (
              <tr>
                <td colSpan={5} className="px-6 py-12 text-center text-gray-500">
                  No projects found matching your search.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {/* Categories Modal */}
      {showCategoryModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-gray-900/40 backdrop-blur-sm" onClick={() => setShowCategoryModal(false)}></div>
          <div className="bg-white rounded-2xl shadow-xl w-full max-w-md relative z-10 overflow-hidden flex flex-col max-h-[80vh]">
            <div className="flex items-center justify-between p-5 border-b border-gray-100">
              <h2 className="text-lg font-serif text-gray-900 font-semibold">Manage Categories</h2>
              <button onClick={() => setShowCategoryModal(false)} className="p-2 text-gray-400 hover:text-gray-900 bg-gray-50 hover:bg-gray-100 rounded-xl transition-colors">
                <X className="w-4 h-4" />
              </button>
            </div>
            <div className="p-5 flex-1 overflow-y-auto space-y-4">
              <div className="flex gap-2">
                <input 
                  type="text" 
                  placeholder="New category name..."
                  value={newCat}
                  onChange={(e) => setNewCat(e.target.value)}
                  onKeyDown={(e) => e.key === 'Enter' && handleAddCategory()}
                  className="flex-1 px-4 py-2 bg-gray-50 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-gray-900/10 focus:bg-white transition-all"
                />
                <button 
                  onClick={handleAddCategory}
                  className="px-4 py-2 bg-gray-900 text-white rounded-xl text-sm font-medium hover:bg-gray-800 transition-colors shadow-sm"
                >
                  Add
                </button>
              </div>
              <ul className="space-y-2">
                {categories.map((cat) => (
                  <li key={cat.id} className="flex items-center justify-between p-3 bg-gray-50 border border-gray-100 rounded-xl group">
                    <span className="text-sm font-medium text-gray-700">{cat.name}</span>
                    <button 
                      onClick={() => handleRemoveCategory(cat.id)}
                      disabled={isPending}
                      className="p-1.5 text-gray-400 hover:text-red-600 bg-white border border-gray-200 rounded-md shadow-sm hover:bg-red-50 hover:border-red-100 transition-all opacity-0 group-hover:opacity-100 disabled:opacity-50"
                    >
                      <Trash2 className="w-3.5 h-3.5" />
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

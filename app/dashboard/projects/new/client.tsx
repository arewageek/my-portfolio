"use client";

import { useState, useTransition } from "react";
import Link from "next/link";
import { ArrowLeft, Upload, Check } from "lucide-react";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import { createProject } from "@/actions/projects";
import { createCategory } from "@/actions/categories";

export default function NewProjectClient({ categories }: { categories: any[] }) {
  const router = useRouter();
  const [isPending, startTransition] = useTransition();
  const [formData, setFormData] = useState({
    title: "",
    categoryId: "",
    status: "Active",
    url: "",
    githubUrl: "",
    image: "",
    tech: "",
    overview: ""
  });
  const [newCat, setNewCat] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    startTransition(async () => {
      const techArray = formData.tech.split(",").map(t => t.trim()).filter(Boolean);
      const res = await createProject({
        ...formData,
        tech: techArray
      });

      if (res.error) {
        toast.error(res.error);
      } else {
        toast.success("Project published successfully");
        router.push("/dashboard/projects");
      }
    });
  };

  const handleAddCategory = () => {
    if (!newCat.trim()) return;
    startTransition(async () => {
      const res = await createCategory(newCat);
      if (res.error) {
        toast.error(res.error);
      } else {
        toast.success("Category created");
        setFormData({ ...formData, categoryId: res.data.id });
        setNewCat("");
      }
    });
  };

  return (
    <div className="max-w-4xl mx-auto pb-20 sm:pb-12 space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-5 border-b border-gray-200 pb-5 sm:border-0 sm:pb-0">
        <div className="flex items-center gap-4">
          <Link href="/dashboard/projects" className="p-2 bg-white border border-gray-200 text-gray-500 hover:text-gray-900 hover:bg-gray-50 rounded-xl transition-colors shadow-sm shrink-0">
            <ArrowLeft className="w-4 h-4" />
          </Link>
          <div>
            <h1 className="text-xl sm:text-2xl font-serif text-gray-900">New Project</h1>
            <p className="text-xs sm:text-sm text-gray-500">Add a new case study to your portfolio.</p>
          </div>
        </div>
        <div className="flex gap-3">
          <button className="flex-1 sm:flex-none px-4 py-2.5 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-xl hover:bg-gray-50 transition-colors shadow-sm">
            Save Draft
          </button>
          <button 
            onClick={handleSubmit}
            disabled={isPending}
            className="flex-1 sm:flex-none flex justify-center items-center gap-2 px-6 py-2.5 text-sm font-medium text-white bg-gray-900 rounded-xl hover:bg-gray-800 transition-colors shadow-sm disabled:opacity-70"
          >
            {isPending ? <span className="animate-pulse">Saving...</span> : <><Check className="w-4 h-4" /> Publish</>}
          </button>
        </div>
      </div>

      {/* Form Area */}
      <div className="bg-white border border-gray-200 rounded-2xl shadow-sm overflow-hidden">
        <form className="p-5 sm:p-8 space-y-8" onSubmit={handleSubmit}>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Left Column */}
            <div className="space-y-5">
              <div>
                <label className="block text-sm font-semibold text-gray-900 mb-2">Project Title</label>
                  <input 
                    type="text" 
                    required
                    value={formData.title}
                    onChange={(e) => setFormData({...formData, title: e.target.value})}
                    placeholder="e.g. DeFi Yield Aggregator"
                    className="w-full px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-gray-900/10 focus:bg-white transition-all"
                  />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-sm font-semibold text-gray-900 mb-2">Category</label>
                  <select 
                    value={formData.categoryId}
                    onChange={(e) => setFormData({...formData, categoryId: e.target.value})}
                    className="w-full px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-gray-900/10 focus:bg-white transition-all appearance-none"
                  >
                    <option value="">Select Category</option>
                    {categories.map(c => (
                      <option key={c.id} value={c.id}>{c.name}</option>
                    ))}
                  </select>
                  <div className="flex gap-2 mt-2">
                    <input 
                      type="text" 
                      value={newCat} 
                      onChange={(e) => setNewCat(e.target.value)} 
                      placeholder="Or create new category..." 
                      className="flex-1 px-3 py-2 text-xs bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-1 focus:ring-gray-900/10"
                    />
                    <button 
                      type="button" 
                      onClick={handleAddCategory} 
                      disabled={isPending || !newCat.trim()}
                      className="px-3 py-2 text-xs font-medium text-gray-700 bg-white border border-gray-200 rounded-lg hover:bg-gray-50 disabled:opacity-50"
                    >
                      Add
                    </button>
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-900 mb-2">Status</label>
                  <select 
                    value={formData.status}
                    onChange={(e) => setFormData({...formData, status: e.target.value})}
                    className="w-full px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-gray-900/10 focus:bg-white transition-all appearance-none"
                  >
                    <option value="Active">Active</option>
                    <option value="Completed">Completed</option>
                    <option value="Draft">Draft</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-900 mb-2">Live URL (Optional)</label>
                <input 
                  type="url" 
                  value={formData.url}
                  onChange={(e) => setFormData({...formData, url: e.target.value})}
                  placeholder="https://"
                  className="w-full px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-gray-900/10 focus:bg-white transition-all"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-900 mb-2">GitHub URL (Optional)</label>
                <input 
                  type="url" 
                  value={formData.githubUrl}
                  onChange={(e) => setFormData({...formData, githubUrl: e.target.value})}
                  placeholder="https://github.com/..."
                  className="w-full px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-gray-900/10 focus:bg-white transition-all"
                />
              </div>
            </div>

            {/* Right Column */}
            <div className="space-y-5">
              <div>
                <label className="block text-sm font-semibold text-gray-900 mb-2">Cover Image</label>
                <div className="w-full h-40 border-2 border-dashed border-gray-300 rounded-2xl bg-gray-50 flex flex-col items-center justify-center text-gray-500 hover:bg-gray-100 hover:border-gray-400 transition-colors cursor-pointer group">
                  <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-sm mb-2 group-hover:scale-105 transition-transform border border-gray-200">
                    <Upload className="w-5 h-5 text-gray-600" />
                  </div>
                  <span className="text-sm font-medium text-gray-700">Upload cover image</span>
                  <span className="text-xs text-gray-400 mt-1">16:9 ratio (JPG, PNG)</span>
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-900 mb-2">Tech Stack</label>
                <input 
                  type="text" 
                  value={formData.tech}
                  onChange={(e) => setFormData({...formData, tech: e.target.value})}
                  placeholder="e.g. Next.js, Solidity, Tailwind"
                  className="w-full px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-gray-900/10 focus:bg-white transition-all"
                />
                <p className="text-[10px] text-gray-400 mt-1.5 ml-1">Separate multiple technologies with commas.</p>
              </div>
            </div>
          </div>

          <div className="pt-6 border-t border-gray-100 mt-6">
            <label className="block text-sm font-semibold text-gray-900 mb-2">Project Overview</label>
            <textarea 
              rows={5}
              value={formData.overview}
              onChange={(e) => setFormData({...formData, overview: e.target.value})}
              placeholder="Describe the problem, your technical approach, and the impact..."
              className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-gray-900/10 focus:bg-white transition-all resize-y"
            ></textarea>
          </div>
        </form>
      </div>
    </div>
  );
}

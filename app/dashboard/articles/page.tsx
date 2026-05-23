"use client";

import { useState } from "react";
import Link from "next/link";
import { 
  Newspaper, 
  Search, 
  Plus, 
  Edit3, 
  Trash2,
  ExternalLink,
  BarChart3,
  Users,
  Eye,
  FileText,
  Tags,
  X
} from "lucide-react";
import { toast } from "sonner";

const initialArticles = [
  { id: "1", title: "Smart Contract Security Best Practices", category: "Security", status: "Published", views: "12.4k", date: "Sep 28, 2026", url: "/insights/smart-contract-security" },
  { id: "2", title: "Building DApps with Next.js 15", category: "Engineering", status: "Published", views: "8.2k", date: "Sep 15, 2026", url: "/insights/building-with-nextjs-and-web3" },
  { id: "3", title: "The Future of Cross-Chain Liquidity", category: "DeFi", status: "Draft", views: "-", date: "Oct 12, 2026", url: "" },
];

export default function ArticlesDashboard() {
  const [search, setSearch] = useState("");
  const [articles, setArticles] = useState(initialArticles);
  const [showCategoryModal, setShowCategoryModal] = useState(false);
  const [categories, setCategories] = useState(["Security", "Engineering", "DeFi", "Perspectives"]);
  const [newCat, setNewCat] = useState("");

  const filtered = articles.filter(a => a.title.toLowerCase().includes(search.toLowerCase()) || a.category.toLowerCase().includes(search.toLowerCase()));

  const handleAddCategory = () => {
    if (!newCat.trim()) return;
    setCategories([...categories, newCat]);
    setNewCat("");
    toast.success("Category added");
  };

  const handleRemoveCategory = (cat: string) => {
    setCategories(categories.filter(c => c !== cat));
    toast.success("Category removed");
  };

  const metrics = [
    { label: "Total Published", value: "24", icon: Newspaper, trend: "+3 this month" },
    { label: "Total Views", value: "142.5k", icon: Eye, trend: "+12% vs last month" },
    { label: "Subscribers", value: "842", icon: Users, trend: "+18 this week" },
    { label: "Avg. Read Time", value: "4m 12s", icon: BarChart3, trend: "Steady" },
  ];

  return (
    <div className="space-y-6 sm:space-y-8 max-w-7xl mx-auto w-full">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl sm:text-3xl font-serif text-gray-900">Articles CMS</h1>
          <p className="text-sm text-gray-500 mt-1">Manage content, track engagement, and write new perspectives.</p>
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
            href="/dashboard/articles/new"
            className="flex flex-1 sm:flex-none justify-center items-center gap-2 bg-gray-900 text-white px-4 py-2.5 rounded-xl text-sm font-medium hover:bg-gray-800 transition-colors shadow-sm"
          >
            <Plus className="w-4 h-4" />
            Write Article
          </Link>
        </div>
      </div>

      {/* Analytics Row */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
        {metrics.map((metric) => {
          const Icon = metric.icon;
          return (
            <div key={metric.label} className="bg-white p-5 rounded-2xl border border-gray-200 shadow-sm flex flex-col justify-between group">
              <div className="flex justify-between items-start mb-4">
                <div className="w-10 h-10 bg-blue-50/50 rounded-xl flex items-center justify-center text-blue-600 border border-blue-100/50">
                  <Icon className="w-5 h-5" />
                </div>
                <span className="text-[10px] text-green-600 font-medium bg-green-50 px-2 py-1 rounded-md border border-green-100">
                  {metric.trend}
                </span>
              </div>
              <div>
                <p className="text-2xl font-bold text-gray-900 mb-1">{metric.value}</p>
                <p className="text-xs font-medium text-gray-500 uppercase tracking-wider">{metric.label}</p>
              </div>
            </div>
          );
        })}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8">
        {/* Main Articles List (Takes 2/3 width on desktop) */}
        <div className="lg:col-span-2 space-y-6">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
            <h2 className="text-lg font-semibold text-gray-900 flex items-center gap-2">
              <FileText className="w-5 h-5 text-gray-400" />
              Content Library
            </h2>
            <div className="flex w-full sm:w-auto gap-3">
              <div className="relative flex-1 sm:w-64">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                <input 
                  type="text"
                  placeholder="Search articles..."
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  className="w-full pl-9 pr-4 py-2 bg-white border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-gray-900/10 transition-all shadow-sm"
                />
              </div>
            </div>
          </div>

          <div className="space-y-4">
            {filtered.map(article => (
              <div key={article.id} className="bg-white border border-gray-200 rounded-2xl p-4 sm:p-5 shadow-sm flex flex-col sm:flex-row sm:items-center justify-between gap-5 group hover:border-gray-300 transition-colors">
                <div className="flex flex-col gap-2 min-w-0 flex-1">
                  <div className="flex items-center gap-3">
                    <span className={`text-[10px] uppercase tracking-wider font-bold px-2 py-1 rounded-md shrink-0 ${
                      article.status === 'Published' ? 'bg-green-50 text-green-700 border border-green-100' : 'bg-orange-50 text-orange-700 border border-orange-100'
                    }`}>
                      {article.status}
                    </span>
                    <span className="text-xs font-medium text-gray-400">{article.date}</span>
                  </div>
                  <h3 className="font-serif text-lg text-gray-900 font-semibold truncate group-hover:text-blue-600 transition-colors cursor-pointer">
                    {article.title}
                  </h3>
                  <div className="flex flex-wrap items-center gap-3 text-xs text-gray-500 font-medium">
                    <span className="bg-gray-100 px-2 py-0.5 rounded-md">{article.category}</span>
                    <span className="flex items-center gap-1"><Eye className="w-3.5 h-3.5" /> {article.views} views</span>
                  </div>
                </div>
                
                <div className="flex items-center gap-2 pt-4 border-t border-gray-100 sm:pt-0 sm:border-0 w-full sm:w-auto justify-end shrink-0">
                  {article.url && (
                    <a href={article.url} target="_blank" rel="noreferrer" className="p-2 text-gray-400 hover:text-gray-900 hover:bg-gray-100 rounded-lg transition-colors border border-transparent hover:border-gray-200" title="View Live">
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  )}
                  <Link href={`/dashboard/articles/new`} className="p-2 text-gray-400 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors border border-transparent hover:border-blue-100" title="Edit Article">
                    <Edit3 className="w-4 h-4" />
                  </Link>
                  <button className="p-2 text-gray-400 hover:text-red-600 hover:bg-red-50 rounded-lg transition-colors border border-transparent hover:border-red-100 ml-1" title="Delete">
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              </div>
            ))}
            {filtered.length === 0 && (
              <div className="bg-white border border-gray-200 rounded-2xl p-12 text-center flex flex-col items-center">
                <Newspaper className="w-10 h-10 text-gray-300 mb-3" />
                <p className="text-sm font-medium text-gray-900">No articles found</p>
                <p className="text-xs text-gray-500 mt-1">Try adjusting your search query.</p>
              </div>
            )}
          </div>
        </div>

        {/* Sidebar Widgets (Takes 1/3 width on desktop) */}
        <div className="space-y-6">
          <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm relative overflow-hidden group">
            <h3 className="text-lg font-serif text-gray-900 font-semibold mb-2">Publishing Tips</h3>
            <p className="text-xs text-gray-500 leading-relaxed mb-4">Articles with system architecture breakdowns receive 40% more engagement from recruiters.</p>
            <Link href="/dashboard/articles/new" className="inline-flex items-center gap-2 text-sm font-medium text-gray-700 bg-gray-50 hover:bg-gray-100 border border-gray-200 px-4 py-2 rounded-xl transition-colors w-full justify-center shadow-sm">
              Start Writing <Plus className="w-4 h-4" />
            </Link>
          </div>

          <div className="bg-white border border-gray-200 rounded-2xl shadow-sm overflow-hidden">
            <div className="p-5 border-b border-gray-100 bg-gray-50/50">
              <h3 className="text-sm font-semibold text-gray-900 flex items-center gap-2">
                <BarChart3 className="w-4 h-4 text-blue-500" />
                Top Performing
              </h3>
            </div>
            <div className="p-2">
              {[
                { title: "Smart Contract Security Best...", views: "12.4k" },
                { title: "Building DApps with Next.js 15", views: "8.2k" },
                { title: "Why I switched to Rust", views: "5.1k" },
              ].map((item, i) => (
                <div key={i} className="flex justify-between items-center p-3 hover:bg-gray-50 rounded-xl transition-colors cursor-pointer">
                  <div className="flex items-center gap-3 min-w-0">
                    <span className="text-xs font-bold text-gray-400 w-4">{i+1}.</span>
                    <p className="text-xs font-medium text-gray-800 truncate">{item.title}</p>
                  </div>
                  <span className="text-[10px] font-bold text-gray-500 bg-gray-100 px-2 py-1 rounded-md shrink-0">{item.views}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
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
                  <li key={cat} className="flex items-center justify-between p-3 bg-gray-50 border border-gray-100 rounded-xl group">
                    <span className="text-sm font-medium text-gray-700">{cat}</span>
                    <button 
                      onClick={() => handleRemoveCategory(cat)}
                      className="p-1.5 text-gray-400 hover:text-red-600 bg-white border border-gray-200 rounded-md shadow-sm hover:bg-red-50 hover:border-red-100 transition-all opacity-0 group-hover:opacity-100"
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

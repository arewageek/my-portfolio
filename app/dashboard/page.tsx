"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { 
  FolderGit, 
  Briefcase, 
  BookOpen, 
  Mail, 
  MessageSquare,
  Plus, 
  Edit3,
  ExternalLink,
  ChevronRight
} from "lucide-react";
import { toast } from "sonner";

const mockMessages = [
  { id: 1, name: "Sarah Jenkins", company: "Aave Protocol", email: "sarah@aave.com", message: "We are looking for a Senior Smart Contract Engineer to lead our yield-optimizing team. Are you available for a contract?", date: "2 hours ago", read: false },
  { id: 2, name: "David Chen", company: "ConsenSys", email: "d.chen@consensys.net", message: "I read your breakdown on Smart Contract Security. We have a research advisory position open. Let's chat.", date: "1 day ago", read: false },
];

const recentProjects = [
  { id: "1", title: "ArewaFi Protocol", category: "DeFi", status: "Active", date: "May 10, 2026" },
  { id: "2", title: "NFT Marketplace", category: "NFT", status: "Completed", date: "Apr 22, 2026" },
  { id: "3", title: "Zero-Knowledge Rollup", category: "Infra", status: "Draft", date: "Apr 05, 2026" },
];

export default function DashboardPage() {
  const [messages, setMessages] = useState(mockMessages);
  const [draft, setDraft] = useState("");

  useEffect(() => {
    const saved = localStorage.getItem("dashboard_draft");
    if (saved) setDraft(saved);
  }, []);

  const handleSaveDraft = (text: string) => {
    setDraft(text);
    localStorage.setItem("dashboard_draft", text);
  };

  const handleMarkAsRead = (id: number) => {
    setMessages(prev => prev.map(m => m.id === id ? { ...m, read: true } : m));
    toast.success("Message marked as read");
  };

  const stats = [
    { label: "Total Projects", value: "12", icon: FolderGit, link: "/dashboard/projects" },
    { label: "Work Experience", value: "5", icon: Briefcase, link: "/dashboard/companies" },
    { label: "Articles Published", value: "8", icon: BookOpen, link: "/dashboard/articles" },
    { label: "Subscribers", value: "142", icon: Mail, link: "/dashboard" },
  ];

  return (
    <div className="space-y-8 max-w-6xl mx-auto">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-serif text-gray-900">Overview</h1>
          <p className="text-sm text-gray-500 mt-1">Here's what's happening with your portfolio today.</p>
        </div>
        <div className="flex gap-3">
          <Link 
            href="/dashboard/projects/new"
            className="flex items-center gap-2 bg-gray-900 text-white px-4 py-2.5 rounded-xl text-sm font-medium hover:bg-gray-800 transition-colors shadow-sm"
          >
            <Plus className="w-4 h-4" />
            New Project
          </Link>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {stats.map((stat) => {
          const Icon = stat.icon;
          return (
            <Link key={stat.label} href={stat.link} className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm flex flex-col justify-between group hover:border-gray-300 transition-colors">
              <div className="flex justify-between items-start mb-6">
                <div className="w-10 h-10 bg-gray-50 rounded-lg flex items-center justify-center text-gray-600 group-hover:bg-gray-900 group-hover:text-white transition-colors">
                  <Icon className="w-5 h-5" />
                </div>
              </div>
              <div>
                <p className="text-3xl font-semibold text-gray-900 mb-1">{stat.value}</p>
                <p className="text-sm font-medium text-gray-600">{stat.label}</p>
              </div>
            </Link>
          );
        })}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        
        {/* Left Column: Recent Projects & Messages */}
        <div className="space-y-8 lg:col-span-2">
          
          {/* Recent Projects */}
          <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm">
            <div className="flex justify-between items-center pb-4 border-b border-gray-100 mb-4">
              <h2 className="text-lg font-semibold text-gray-900">Recent Projects</h2>
              <Link href="/dashboard/projects" className="text-sm text-gray-500 hover:text-gray-900 flex items-center gap-1 transition-colors">
                View all <ChevronRight className="w-4 h-4" />
              </Link>
            </div>
            <div className="space-y-3">
              {recentProjects.map(project => (
                <div key={project.id} className="flex items-center justify-between p-3 hover:bg-gray-50 rounded-xl transition-colors border border-transparent hover:border-gray-100">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-lg bg-gray-100 flex items-center justify-center">
                      <FolderGit className="w-5 h-5 text-gray-500" />
                    </div>
                    <div>
                      <h3 className="text-sm font-medium text-gray-900">{project.title}</h3>
                      <div className="flex items-center gap-2 mt-1">
                        <span className="text-xs text-gray-500">{project.category}</span>
                        <span className="text-gray-300">&middot;</span>
                        <span className="text-xs text-gray-500">{project.date}</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className={`text-[10px] uppercase tracking-wider font-semibold px-2 py-1 rounded-md ${
                      project.status === 'Active' ? 'bg-green-50 text-green-700' : 
                      project.status === 'Completed' ? 'bg-blue-50 text-blue-700' : 
                      'bg-gray-100 text-gray-600'
                    }`}>
                      {project.status}
                    </span>
                    <button className="p-2 text-gray-400 hover:text-gray-900 transition-colors rounded-lg hover:bg-gray-100">
                      <Edit3 className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Recent Messages */}
          <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm">
            <div className="flex justify-between items-center pb-4 border-b border-gray-100 mb-4">
              <div className="flex items-center gap-2">
                <MessageSquare className="w-5 h-5 text-gray-500" />
                <h2 className="text-lg font-semibold text-gray-900">Recent Messages</h2>
              </div>
              <span className="text-xs font-medium px-2 py-1 bg-gray-100 text-gray-600 rounded-md">
                {messages.filter(m => !m.read).length} Unread
              </span>
            </div>
            <div className="space-y-4">
              {messages.map((msg) => (
                <div key={msg.id} className={`p-4 rounded-xl border ${msg.read ? 'bg-white border-gray-100' : 'bg-gray-50 border-gray-200'}`}>
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <h3 className="text-sm font-semibold text-gray-900">{msg.name}</h3>
                      <p className="text-xs text-gray-500">{msg.email} {msg.company && `· ${msg.company}`}</p>
                    </div>
                    <span className="text-xs text-gray-400">{msg.date}</span>
                  </div>
                  <p className="text-sm text-gray-700 mb-3">{msg.message}</p>
                  <div className="flex gap-2">
                    <a href={`mailto:${msg.email}`} className="text-xs font-medium text-gray-900 bg-white border border-gray-200 px-3 py-1.5 rounded-lg hover:bg-gray-50 transition-colors">
                      Reply
                    </a>
                    {!msg.read && (
                      <button onClick={() => handleMarkAsRead(msg.id)} className="text-xs font-medium text-gray-600 hover:text-gray-900 px-3 py-1.5 transition-colors">
                        Mark as read
                      </button>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right Column: Drafts & Quick Links */}
        <div className="space-y-8">
          
          {/* Quick Drafts */}
          <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm">
            <h2 className="text-lg font-semibold text-gray-900 mb-2">Drafts</h2>
            <p className="text-xs text-gray-500 mb-4">Save quick ideas for upcoming articles or projects.</p>
            <textarea
              value={draft}
              onChange={(e) => handleSaveDraft(e.target.value)}
              placeholder="Start typing..."
              className="w-full h-40 p-3 bg-gray-50 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-gray-900/10 focus:bg-white focus:border-gray-300 transition-all resize-none"
            />
          </div>

          {/* Quick Links */}
          <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm">
            <h2 className="text-lg font-semibold text-gray-900 mb-4">Quick Actions</h2>
            <div className="space-y-2">
              <Link href="/dashboard/projects/new" className="flex items-center justify-between p-3 rounded-xl bg-gray-50 hover:bg-gray-100 border border-transparent hover:border-gray-200 transition-colors">
                <span className="text-sm font-medium text-gray-700">Add Project</span>
                <Plus className="w-4 h-4 text-gray-400" />
              </Link>
              <Link href="/dashboard/articles/new" className="w-full flex items-center justify-between p-3 rounded-xl bg-gray-50 hover:bg-gray-100 border border-transparent hover:border-gray-200 transition-colors">
                <span className="text-sm font-medium text-gray-700">Write Article</span>
                <Edit3 className="w-4 h-4 text-gray-400" />
              </Link>
              <Link href="/" target="_blank" className="flex items-center justify-between p-3 rounded-xl bg-gray-50 hover:bg-gray-100 border border-transparent hover:border-gray-200 transition-colors">
                <span className="text-sm font-medium text-gray-700">View Live Site</span>
                <ExternalLink className="w-4 h-4 text-gray-400" />
              </Link>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

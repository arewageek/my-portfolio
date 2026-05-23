"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { LayoutDashboard, FolderKanban, Building2, Tags, Newspaper, Settings, LogOut, Search, Bell } from "lucide-react";
import { motion } from "framer-motion";

const sidebarLinks = [
  { href: "/dashboard", label: "Overview", icon: LayoutDashboard },
  { href: "/dashboard/projects", label: "Projects", icon: FolderKanban },
  { href: "/dashboard/companies", label: "Companies", icon: Building2 },
  { href: "/dashboard/articles", label: "Articles", icon: Newspaper },
];

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  return (
    <div className="min-h-screen bg-[#F4F1EA] flex">
      {/* Sidebar */}
      <aside className="w-64 bg-white border-r border-gray-200 hidden md:flex flex-col fixed inset-y-0 z-10 shadow-sm">
        <div className="p-6 border-b border-gray-200">
          <Link href="/dashboard" className="text-xl font-serif tracking-tight text-gray-900 flex items-center gap-3">
            <span className="w-8 h-8 bg-gray-900 text-white rounded-lg flex items-center justify-center font-sans text-sm font-bold shadow-md">A</span>
            Admin Console
          </Link>
        </div>
        
        <div className="flex-1 overflow-y-auto py-6 px-4 space-y-1">
          <div className="text-[10px] font-bold text-gray-400 tracking-widest uppercase mb-4 px-3">CMS Management</div>
          {sidebarLinks.map((link) => {
            const Icon = link.icon;
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium transition-all ${
                  isActive 
                    ? "bg-gray-900 text-white shadow-md" 
                    : "text-gray-600 hover:text-gray-900 hover:bg-gray-100"
                }`}
              >
                <Icon className={`w-4 h-4 ${isActive ? "text-white" : "text-gray-400"}`} />
                {link.label}
              </Link>
            );
          })}
        </div>

        <div className="p-4 border-t border-gray-200 space-y-1 bg-gray-50/50">
          <Link href="/dashboard/settings" className="flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium text-gray-600 hover:text-gray-900 hover:bg-gray-200 transition-colors">
            <Settings className="w-4 h-4 text-gray-400" />
            Settings
          </Link>
          <Link href="/login" className="flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium text-red-600 hover:text-red-700 hover:bg-red-50 transition-colors">
            <LogOut className="w-4 h-4 text-red-400" />
            Logout
          </Link>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 md:ml-64 flex flex-col min-h-screen min-w-0 w-full">
        {/* Top Navbar */}
        <header className="h-16 bg-white/80 backdrop-blur-md border-b border-gray-200 flex items-center justify-between px-4 sm:px-6 sticky top-0 z-20 w-full">
          <div className="flex items-center flex-1">
            <div className="relative w-full max-w-xs hidden sm:block">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
              <input 
                type="text" 
                placeholder="Search..." 
                className="w-full pl-10 pr-4 py-2 bg-gray-100 border border-transparent rounded-full text-sm focus:outline-none focus:ring-2 focus:ring-gray-900/10 focus:bg-white focus:border-gray-300 transition-all placeholder:text-gray-400"
              />
            </div>
          </div>
          
          <div className="flex items-center gap-4 sm:gap-5">
            <button className="p-2 text-gray-400 hover:text-gray-600 relative transition-colors">
              <Bell className="w-5 h-5" />
              <span className="absolute top-2 right-2 w-2 h-2 bg-blue-500 rounded-full border border-white"></span>
            </button>
            <div className="w-px h-6 bg-gray-200 hidden sm:block"></div>
            <div className="flex items-center gap-3 cursor-pointer group">
              <div className="w-8 h-8 rounded-full bg-gray-200 border border-gray-300 overflow-hidden group-hover:ring-2 ring-gray-900/20 transition-all">
                <img src="https://api.dicebear.com/7.x/notionists/svg?seed=Arewa" alt="Avatar" className="w-full h-full object-cover" />
              </div>
              <span className="text-sm font-medium text-gray-700 hidden sm:block group-hover:text-gray-900 transition-colors">Augustine A.</span>
            </div>
          </div>
        </header>

        <div className="p-4 sm:p-6 md:p-8 flex-1 min-w-0 w-full overflow-x-hidden pb-24 md:pb-8">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            key={pathname}
          >
            {children}
          </motion.div>
        </div>
      </main>

      {/* Mobile Bottom Nav */}
      <nav className="md:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 z-50 px-2 pb-safe pt-2 flex justify-around shadow-[0_-4px_10px_rgba(0,0,0,0.02)] h-16 items-center">
        {sidebarLinks.map((link) => {
          const Icon = link.icon;
          const isActive = pathname === link.href || (pathname.startsWith(link.href) && link.href !== '/dashboard');
          return (
            <Link
              key={link.href}
              href={link.href}
              className={`flex flex-col items-center gap-1 p-1 rounded-xl min-w-[64px] transition-colors ${
                isActive ? "text-gray-900" : "text-gray-400 hover:text-gray-600"
              }`}
            >
              <div className={`p-1.5 rounded-lg ${isActive ? "bg-gray-100" : "bg-transparent"}`}>
                <Icon className="w-5 h-5" />
              </div>
              <span className={`text-[10px] font-medium ${isActive ? "font-bold" : ""}`}>
                {link.label}
              </span>
            </Link>
          );
        })}
      </nav>
    </div>
  );
}

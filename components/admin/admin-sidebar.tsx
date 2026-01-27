"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { BarChart3, Briefcase, FolderGit2, LayoutDashboard, Settings, LogOut, Hash } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

const sidebarItems = [
  {
    title: "Dashboard",
    href: "/admin",
    icon: LayoutDashboard,
  },
  {
    title: "Projects",
    href: "/admin/projects",
    icon: FolderGit2,
  },
  {
    title: "Work Experience",
    href: "/admin/work",
    icon: Briefcase,
  },
  {
    title: "Categories",
    href: "/admin/categories",
    icon: Hash,
  },
  {
    title: "Analytics",
    href: "/admin/analytics",
    icon: BarChart3,
  },
  {
    title: "Settings",
    href: "/admin/settings",
    icon: Settings,
  },
];

export function AdminSidebar() {
  const pathname = usePathname();

  return (
    <aside className="fixed inset-y-0 left-0 z-50 w-64 bg-card border-r border-border/50 backdrop-blur-xl hidden md:flex flex-col">
      <div className="p-6 border-b border-border/50">
        <h2 className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent">
          Admin Panel
        </h2>
      </div>

      <nav className="flex-1 p-4 space-y-2">
        {sidebarItems.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className={cn(
              "flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200 group relative overflow-hidden",
              pathname === item.href
                ? "bg-primary/10 text-primary font-medium shadow-sm border border-primary/20"
                : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
            )}
          >
            <item.icon className={cn("w-5 h-5", pathname === item.href ? "text-primary" : "text-muted-foreground group-hover:text-foreground")} />
            <span>{item.title}</span>
            {pathname === item.href && (
              <div className="absolute right-0 top-0 bottom-0 w-1 bg-primary rounded-l-full" />
            )}
          </Link>
        ))}
      </nav>

      <div className="p-4 border-t border-border/50">
        <Button variant="ghost" className="w-full justify-start gap-3 text-muted-foreground hover:text-destructive hover:bg-destructive/10">
          <LogOut className="w-5 h-5" />
          Logout
        </Button>
      </div>
    </aside>
  );
}

import React from 'react';
import { getDashboardStats } from "@/actions/dashboard";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { FolderGit2, Briefcase, TrendingUp, Clock } from "lucide-react";
import Link from 'next/link';

export const dynamic = 'force-dynamic';

export default async function AdminDashboard() {
  const { data: stats } = await getDashboardStats();

  const statCards = [
    {
      title: "Total Projects",
      value: stats?.projectCount || 0,
      icon: FolderGit2,
      href: "/admin/projects",
      description: "Active portfolio projects",
      color: "text-purple-400"
    },
    {
      title: "Work Experience",
      value: stats?.companyCount || 0,
      icon: Briefcase,
      href: "/admin/work",
      description: "Career history entries",
      color: "text-pink-400"
    },
    {
      title: "Total Views",
      value: "12.5K", // Mock data for now
      icon: TrendingUp,
      href: "#",
      description: "+14% from last month",
      color: "text-green-400"
    },
    {
      title: "Avg. Session",
      value: "2m 14s", // Mock data
      icon: Clock,
      href: "#",
      description: "+2s from last week",
      color: "text-blue-400"
    }
  ];

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>
        <p className="text-muted-foreground mt-1">Overview of your portfolio performance</p>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {statCards.map((stat, index) => (
          <Link key={index} href={stat.href} className="block transition-transform hover:scale-[1.02]">
            <Card className="glass-card border-white/5 hover:border-white/10 transition-colors">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium text-muted-foreground">
                  {stat.title}
                </CardTitle>
                <stat.icon className={`h-4 w-4 ${stat.color}`} />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-foreground">{stat.value}</div>
                <p className="text-xs text-muted-foreground mt-1">
                  {stat.description}
                </p>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>

      {/* Recent Activity Section */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
        <Card className="col-span-4 glass-card border-white/5">
          <CardHeader>
            <CardTitle>Recent Projects</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {stats?.recentProjects?.map((project: any) => (
                <div key={project._id} className="flex items-center gap-4 p-3 rounded-lg hover:bg-white/5 transition-colors">
                  <div className="h-10 w-10 rounded-md bg-secondary/50 overflow-hidden border border-white/5">
                     <img src={project.image || "/placeholder.svg"}  alt={project.title} className="h-full w-full object-cover" />
                  </div>
                  <div className="flex-1 space-y-1">
                    <p className="text-sm font-medium leading-none">{project.title}</p>
                    <p className="text-xs text-muted-foreground">{project.category}</p>
                  </div>
                  <div className="text-xs text-muted-foreground">
                     {new Date(project.createdAt).toLocaleDateString()}
                  </div>
                </div>
              ))}
              {!stats?.recentProjects?.length && (
                  <p className="text-sm text-muted-foreground text-center py-4">No recent activity</p>
              )}
            </div>
          </CardContent>
        </Card>
        
        <Card className="col-span-3 glass-card border-white/5">
             <CardHeader>
            <CardTitle>Quick Actions</CardTitle>
          </CardHeader>
          <CardContent className="space-y-2">
             <Link href="/admin/projects" className="flex items-center justify-between p-3 rounded-lg border border-white/5 hover:bg-white/5 transition-colors">
                <span className="text-sm">Add New Project</span>
                <FolderGit2 className="h-4 w-4 text-muted-foreground" />
             </Link>
             <Link href="/admin/work" className="flex items-center justify-between p-3 rounded-lg border border-white/5 hover:bg-white/5 transition-colors">
                <span className="text-sm">Add Work Experience</span>
                 <Briefcase className="h-4 w-4 text-muted-foreground" />
             </Link>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
import React from "react";
import { AdminSidebar } from "@/components/admin/admin-sidebar";
import { AdminHeader } from "@/components/admin/admin-header";

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-background relative flex">
      <AdminSidebar />
      <div className="flex-1 flex flex-col min-w-0 md:pl-64 transition-all duration-300">
        <AdminHeader />
        <main className="flex-1 p-4 md:p-6 lg:p-8 overflow-y-auto overflow-x-hidden">
          <div className="max-w-7xl mx-auto space-y-6 animate-fade-in-up">
            {children}
          </div>
        </main>
      </div>
    </div>
  );
}

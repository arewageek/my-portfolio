import React from "react";
import { AdminSidebar } from "@/components/admin/admin-sidebar";
import { AdminHeader } from "@/components/admin/admin-header";
import { cookies } from "next/headers";
import { decrypt } from "@/lib/auth-utils";
import { AuthService } from "@/services/auth.service";

export default async function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const cookieStore = await cookies();
  const token = cookieStore.get("admin_token")?.value;
  let user = null;

  if (token) {
    try {
      const payload = await decrypt(token);
      if (payload?.adminId) {
        user = await AuthService.getAdminById(payload.adminId as string);
      }
    } catch (error) {
      console.error("Failed to fetch admin user:", error);
    }
  }

  return (
    <div className="min-h-screen bg-background relative flex">
      <AdminSidebar />
      <div className="flex-1 flex flex-col min-w-0 md:pl-64 transition-all duration-300">
        <AdminHeader user={user ? { name: user.name, email: user.email } : null} />
        <main className="flex-1 p-4 md:p-6 lg:p-8 overflow-y-auto overflow-x-hidden">
          <div className="max-w-7xl mx-auto space-y-6 animate-fade-in-up">
            {children}
          </div>
        </main>
      </div>
    </div>
  );
}

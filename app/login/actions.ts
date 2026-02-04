"use server";

import { AuthService } from "@/services/auth.service";
import { encrypt } from "@/lib/auth-utils";
import { cookies } from "next/headers";

export async function loginAction(prevState: any, formData: FormData) {
  const email = formData.get("email") as string;
  const password = formData.get("password") as string;

  if (!email || !password) {
    return { error: "Please provide both email and password" };
  }

  try {
    const admin = await AuthService.authenticateAdmin(email, password);

    if (!admin) {
      return { error: "Invalid email or password" };
    }

    // Create session
    const expires = new Date(Date.now() + 24 * 60 * 60 * 1000); // 24 hours
    const session = await encrypt({ adminId: (admin as any)._id, expires });

    // Set cookie
    (await cookies()).set("admin_token", session, {
      expires,
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
      path: "/",
    });

    return { success: true };
  } catch (error: any) {
    console.error("Login error:", error);
    return { error: error.message || "An unexpected error occurred" };
  }
}

export async function logoutAction() {
  (await cookies()).delete("admin_token");
}

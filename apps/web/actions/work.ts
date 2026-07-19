"use server";

import dbConnect from "@/lib/db";
import Company, { IBackEndCompany } from "@/models/Company";
import { revalidatePath } from "next/cache";

export async function getCompanies() {
  await dbConnect();
  try {
    const companies = await Company.find({}).sort({ createdAt: -1 }).lean();
    return { success: true, data: JSON.parse(JSON.stringify(companies)) };
  } catch (error) {
    console.error("Error fetching companies:", error);
    return { success: false, error: "Failed to fetch companies" };
  }
}

export async function createCompany(data: Partial<IBackEndCompany>) {
  await dbConnect();
  try {
    const company = await Company.create(data);
    revalidatePath("/admin/work");
    return { success: true, data: JSON.parse(JSON.stringify(company)) };
  } catch (error) {
    console.error("Error creating company:", error);
    return { success: false, error: "Failed to create company" };
  }
}

export async function updateCompany(id: string, data: Partial<IBackEndCompany>) {
  await dbConnect();
  try {
    const company = await Company.findByIdAndUpdate(id, data, { new: true }).lean();
    revalidatePath("/admin/work");
    return { success: true, data: JSON.parse(JSON.stringify(company)) };
  } catch (error) {
    console.error("Error updating company:", error);
    return { success: false, error: "Failed to update company" };
  }
}

export async function deleteCompany(id: string) {
  await dbConnect();
  try {
    await Company.findByIdAndDelete(id);
    revalidatePath("/admin/work");
    return { success: true };
  } catch (error) {
    console.error("Error deleting company:", error);
    return { success: false, error: "Failed to delete company" };
  }
}

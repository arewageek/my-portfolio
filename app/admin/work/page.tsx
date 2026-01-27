import React from "react";
import { WorkClient } from "@/components/admin/work-client";
import { getCompanies } from "@/actions/work";

export const dynamic = 'force-dynamic';

export default async function AdminWorkPage() {
  const { data: companies = [] } = await getCompanies();

  return <WorkClient initialCompanies={companies} />;
}

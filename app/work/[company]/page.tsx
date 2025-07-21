import { CompanyHero } from "@/components/company-hero"
import { CompanyOverview } from "@/components/company-overview"
import { CompanyProjects } from "@/components/company-projects"
import { CompanyImpact } from "@/components/company-impact"
import { Navigation } from "@/components/navigation"
import { notFound } from "next/navigation"
import { brandConfig } from "@/lib/brand-config"

export default async function CompanyPage({ params }: { params: { company: string } }) {
  const company = brandConfig.companies.find((c) => c.id === params.company)

  if (!company) {
    notFound()
  }

  return (
    <div className="relative min-h-screen bg-black overflow-x-hidden">
      <Navigation />
      <main>
        <CompanyHero company={company} />
        <CompanyOverview company={company} />
        {/* <CompanyProjects company={company} /> */}
        {/* <CompanyImpact company={company} /> */}
      </main>
    </div>
  )
}

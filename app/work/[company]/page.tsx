import { CompanyHero } from "@/components/company-hero"
import { CompanyOverview } from "@/components/company-overview"
import { CompanyProjects } from "@/components/company-projects"
import { CompanyImpact } from "@/components/company-impact"
import { Navigation } from "@/components/navigation"
import { notFound } from "next/navigation"
import { getCompanyBySlug } from "@/services/company.service"

export const dynamic = 'force-dynamic'

export default async function CompanyPage({ params }: { params: { company: string } }) {
  const company = await getCompanyBySlug(params.company)

  if (!company) {
    notFound()
  }

  const heroData = {
    name: company.name,
    role: company.role,
    period: company.period || "",
    location: company.location || "",
    logo: company.logo || "",
    type: company.type || ""
  }

  const overviewData = {
    overview: {
      description: company.overview?.description || "",
      responsibilities: company.overview?.responsibilities || [],
      impact: company.overview?.impact || ""
    },
    technologies: company.technologies || [],
    logo: company.logo || ""
  }

  const projectsData = (company.projects || []).map(p => ({
     title: p.title,
     description: p.description || "",
     image: p.image,
     technologies: p.technologies,
     metrics: (p.metrics as Record<string, string>) || {},
     links: { demo: p.links?.demo || undefined, github: p.links?.github || undefined }
  }))

  return (
    <div className="relative min-h-screen bg-black overflow-x-hidden">
      <Navigation />
      <main>
        <CompanyHero company={heroData} />
        <CompanyOverview company={overviewData} />
        <CompanyProjects company={{ projects: projectsData }} />
        {/* <CompanyImpact company={company} /> */}
      </main>
    </div>
  )
}

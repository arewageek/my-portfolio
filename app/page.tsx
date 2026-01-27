import { HeroSection } from "@/components/hero-section"
import { ProfessionalHighlights } from "@/components/professional-highlights"
import { ProjectShowcase } from "@/components/project-showcase"
import { CallToAction } from "@/components/call-to-action"
import { getProjects } from "@/services/project.service"
import { getCategories } from "@/actions/categories"

export const dynamic = 'force-dynamic'

export default async function Home() {
  const [projects, { data: categories = [] }] = await Promise.all([
    getProjects(),
    getCategories()
  ])

  return (
    <div className="relative min-h-screen bg-black overflow-x-hidden">
      <main>
        <HeroSection />
        <ProfessionalHighlights />
        <ProjectShowcase projects={projects} categories={categories} showLoadMore={true} />
        <CallToAction />
      </main>
    </div>
  )
}

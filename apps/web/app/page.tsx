import { HeroSection } from "@/components/home/hero-section"
import { ProfessionalHighlights } from "@/components/home/professional-highlights"
import { ResumeExcerpt } from "@/components/home/resume-excerpt"
import { ProjectShowcase } from "@/components/project-showcase"
import { CallToAction } from "@/components/home/call-to-action"
import { getProjects } from "@/services/project.service"
import { getCategories } from "@/actions/categories"
import { GithubActivity } from "@/components/home/github-activity-wrapper"

export const dynamic = 'force-dynamic'

export default async function Home() {
  const [projects, { data: categories = [] }] = await Promise.all([
    getProjects(),
    getCategories()
  ])

  return (
    <div className="relative min-h-screen">
      <main>
        <HeroSection />
        <ProfessionalHighlights />
        <ResumeExcerpt />
        <ProjectShowcase projects={projects} categories={categories} showLoadMore={true} />
        <GithubActivity />
        <CallToAction />
      </main>
    </div>
  )
}

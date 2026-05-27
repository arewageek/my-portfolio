import { HeroSection } from "@/components/home/hero-section"
import { ProfessionalHighlights } from "@/components/home/professional-highlights"
import { ProjectShowcase } from "@/components/project-showcase"
import { GithubActivity } from "@/components/home/github-activity"
import { RecentInsights } from "@/components/home/recent-insights"
import { CallToAction } from "@/components/home/call-to-action"
import { getProjects } from "@/actions/projects"
import { getCategories } from "@/actions/categories"

export const dynamic = 'force-dynamic'

export default async function Home() {
  const [projectsRes, categoriesRes] = await Promise.all([
    getProjects(),
    getCategories()
  ])

  const projects = projectsRes.data || []
  const categories = categoriesRes.data || []

  return (
    <div className="relative min-h-screen">
      <main>
        <HeroSection />
        <ProfessionalHighlights />
        <ProjectShowcase projects={projects} categories={categories} showLoadMore={true} />
        <GithubActivity />
        <RecentInsights />
        <CallToAction />
      </main>
    </div>
  )
}

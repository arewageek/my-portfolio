import { ProjectsHero } from "@/components/projects/projects-hero"
import { ProjectShowcase } from "@/components/project-showcase"
import { getProjects } from "@/actions/projects"
import { getCategories } from "@/actions/categories"

export const dynamic = 'force-dynamic'

export default async function Projects() {
  const [projectsRes, categoriesRes] = await Promise.all([
    getProjects(),
    getCategories()
  ])

  const projects = projectsRes.data || []
  const categories = categoriesRes.data || []

  return (
    <div className="relative min-h-screen">
      <main>
        <ProjectsHero />
        <ProjectShowcase projects={projects} categories={categories} showLoadMore={false} showHeader={false} layoutMode="grid" />
      </main>
    </div>
  )
}

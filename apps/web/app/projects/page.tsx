import { ProjectsHero } from "@/components/projects/projects-hero"
import { ProjectShowcase } from "@/components/project-showcase"
import { getProjects } from "@/services/project.service"
import { getCategories } from "@/actions/categories"

export const dynamic = 'force-dynamic'

export default async function Projects() {
  const [projects, { data: categories = [] }] = await Promise.all([
    getProjects(),
    getCategories()
  ])

  return (
    <div className="relative min-h-screen">
      <main>
        <ProjectsHero />
        <ProjectShowcase projects={projects} categories={categories} showLoadMore={false} showHeader={false} layoutMode="grid" />
      </main>
    </div>
  )
}

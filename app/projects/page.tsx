import { ProjectsHero } from "@/components/projects/projects-hero"
import { ProjectShowcase } from "@/components/project-showcase"

export const dynamic = 'force-dynamic'

export default async function Projects() {
  const [projects, categories] = await Promise.all([
    Promise.resolve([]),
    Promise.resolve([])
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

import { ProjectsHero } from "@/components/projects-hero"
import { CurrentlyBuilding } from "@/components/currently-building"
import { ProjectCategories } from "@/components/project-categories"
import { ProjectShowcase } from "@/components/project-showcase"
import { ProjectStats } from "@/components/project-stats"
import { Navigation } from "@/components/navigation"
import { getProjects } from "@/services/project.service"

export const dynamic = 'force-dynamic'

export default async function Projects() {
  const projects = await getProjects()

  return (
    <div className="relative min-h-screen bg-black overflow-x-hidden">
      <main>
        <ProjectsHero />
        {/* <CurrentlyBuilding /> */}
        {/* <ProjectCategories /> */}
        <ProjectShowcase projects={projects} showLoadMore={false} showHeader={false} />
        {/* <ProjectStats /> */}
      </main>
    </div>
  )
}

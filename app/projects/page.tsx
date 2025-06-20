import { ProjectsHero } from "@/components/projects-hero"
import { CurrentlyBuilding } from "@/components/currently-building"
import { ProjectCategories } from "@/components/project-categories"
import { ProjectShowcase } from "@/components/project-showcase"
import { ProjectStats } from "@/components/project-stats"
import { Navigation } from "@/components/navigation"

export default function Projects() {
  return (
    <div className="relative min-h-screen bg-black overflow-x-hidden">
      <main>
        <ProjectsHero />
        {/* <CurrentlyBuilding /> */}
        {/* <ProjectCategories /> */}
        <ProjectShowcase />
        {/* <ProjectStats /> */}
      </main>
    </div>
  )
}

import { AboutHero } from "@/components/about/about-hero"
import { AboutStory } from "@/components/about/about-story"
import { AboutMission } from "@/components/about/about-mission"
import { AboutValues } from "@/components/about/about-values"
import { AboutPersonal } from "@/components/about/about-personal"
import { AboutQuote } from "@/components/about/about-quote"
import { Navigation } from "@/components/navigation"

export default function About() {
  return (
    <div className="relative min-h-screen overflow-x-hidden">
      <main>
        <AboutHero />
        <AboutStory />
        <AboutMission />
        <AboutValues />
        <AboutPersonal />
        <AboutQuote />
      </main>
    </div>
  )
}

import { AboutHero } from "@/components/about-hero"
import { AboutStory } from "@/components/about-story"
import { AboutMission } from "@/components/about-mission"
import { AboutValues } from "@/components/about-values"
import { AboutPersonal } from "@/components/about-personal"
import { AboutQuote } from "@/components/about-quote"
import { Navigation } from "@/components/navigation"

export default function About() {
  return (
    <div className="relative min-h-screen bg-black overflow-x-hidden">
      <Navigation />
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

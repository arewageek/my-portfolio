import { HeroSection } from "@/components/hero-section"
import { ProfessionalHighlights } from "@/components/professional-highlights"
import { ProjectShowcase } from "@/components/project-showcase"
import { WhyChooseMe } from "@/components/why-choose-me"
import { CallToAction } from "@/components/call-to-action"
import { Navigation } from "@/components/navigation"

export default function Home() {
  return (
    <div className="relative min-h-screen bg-black overflow-x-hidden">
      <main>
        <HeroSection />
        <ProfessionalHighlights />
        <ProjectShowcase />
        {/* <WhyChooseMe /> */}
        <CallToAction />
      </main>
    </div>
  )
}

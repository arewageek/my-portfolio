import { WorkHero } from "@/components/work-hero"
import { CurrentlyWorking } from "@/components/currently-working"
import { CompaniesGrid } from "@/components/companies-grid"
import { WorkStats } from "@/components/work-stats"
import { Navigation } from "@/components/navigation"

export default function Work() {
  return (
    <div className="relative min-h-screen bg-black overflow-x-hidden">
      <main>
        <WorkHero />
        {/* <CurrentlyWorking /> */}
        <CompaniesGrid />
        {/* <WorkStats /> */}
      </main>
    </div>
  )
}

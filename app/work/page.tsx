import { WorkHero } from "@/components/work-hero"
import { CurrentlyWorking } from "@/components/currently-working"
import { CompaniesGrid } from "@/components/companies-grid"
import { WorkStats } from "@/components/work-stats"
import { Navigation } from "@/components/navigation"
import { getCompanies } from "@/services/company.service"

export const dynamic = 'force-dynamic'

export default async function Work() {
  const companies = await getCompanies()

  return (
    <div className="relative min-h-screen bg-black overflow-x-hidden">
      <main>
        <WorkHero />
        {/* <CurrentlyWorking /> */}
        <CompaniesGrid companies={companies} />
        {/* <WorkStats /> */}
      </main>
    </div>
  )
}

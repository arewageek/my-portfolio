import { SectionHeader } from "@/components/section-header"
import { ExperienceCard } from "@/components/experience-card"

export function ExperienceSection() {
  const experiences = [
    {
      title: "Senior Blockchain Engineer",
      company: "DeFi Protocol Inc.",
      period: "2023 - Present",
      description:
        "Leading development of next-generation DeFi protocols with focus on user experience and scalability. Implemented AI-powered yield optimization strategies and cross-chain interoperability solutions.",
      achievements: [
        "Increased protocol TVL by 300% through UX improvements",
        "Reduced gas costs by 40% through smart contract optimization",
        "Led team of 8 engineers in building cross-chain bridge",
      ],
      technologies: ["Solidity", "React", "Node.js", "AWS", "Python"],
    },
    {
      title: "Fullstack Developer",
      company: "Web3 Startup",
      period: "2022 - 2023",
      description:
        "Built end-to-end blockchain applications with emphasis on performance and user adoption. Integrated AI tools for automated smart contract testing and security analysis.",
      achievements: [
        "Developed NFT marketplace with 50k+ active users",
        "Implemented automated testing reducing bugs by 60%",
        "Created AI-powered contract analysis tool",
      ],
      technologies: ["Ethereum", "Next.js", "TypeScript", "PostgreSQL", "Docker"],
    },
    {
      title: "Blockchain Developer",
      company: "Tech Solutions Ltd.",
      period: "2021 - 2022",
      description:
        "Specialized in smart contract development and dApp creation. Focused on creating intuitive interfaces for complex blockchain interactions.",
      achievements: [
        "Deployed 20+ smart contracts with zero security issues",
        "Improved dApp loading speed by 70%",
        "Mentored 5 junior developers",
      ],
      technologies: ["Solidity", "Web3.js", "React", "IPFS", "Hardhat"],
    },
  ]

  return (
    <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8 bg-black">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 lg:mb-24">
          <div className="inline-flex items-center px-4 py-2 bg-white/5 border border-white/10 rounded-full text-white/40 text-[10px] uppercase tracking-[0.3em] font-light mb-8">
            Professional Trajectory
          </div>
          <h2 className="text-4xl sm:text-6xl lg:text-7xl font-black text-white mb-6 uppercase tracking-tighter leading-[0.9]">
            Engagement
            <span className="block text-primary">History</span>
          </h2>
          <p className="text-lg lg:text-xl text-white/40 max-w-3xl mx-auto italic">
            Documenting the evolution of decentralized infrastructure through successive deployments.
          </p>
        </div>

        <div className="space-y-16">
          {experiences.map((experience, index) => (
            <ExperienceCard key={index} {...experience} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}

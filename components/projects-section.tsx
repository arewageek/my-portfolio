import { SectionHeader } from "@/components/section-header"
import { ProjectCard } from "@/components/project-card"

export function ProjectsSection() {
  const projects = [
    {
      title: "AI-Powered DeFi Yield Optimizer",
      description:
        "Intelligent yield farming platform that uses machine learning to optimize returns across multiple protocols while minimizing risk and gas costs.",
      image: "/placeholder.svg?height=300&width=500",
      technologies: ["Solidity", "Python", "React", "TensorFlow", "Web3.js"],
      features: [
        "AI-driven yield strategy optimization",
        "Cross-chain yield farming",
        "Automated rebalancing",
        "Risk assessment algorithms",
      ],
      links: {
        demo: "#",
        github: "#",
        live: "#",
      },
    },
    {
      title: "Cross-Chain NFT Marketplace",
      description:
        "Seamless NFT trading platform supporting multiple blockchains with AI-powered price discovery and automated royalty distribution.",
      image: "/placeholder.svg?height=300&width=500",
      technologies: ["Solidity", "Next.js", "TypeScript", "IPFS", "Polygon"],
      features: [
        "Multi-chain NFT support",
        "AI price recommendations",
        "Lazy minting capabilities",
        "Advanced search & filtering",
      ],
      links: {
        demo: "#",
        github: "#",
        live: "#",
      },
    },
    {
      title: "Decentralized Identity Platform",
      description:
        "Self-sovereign identity solution with zero-knowledge proofs, enabling privacy-preserving authentication across Web3 applications.",
      image: "/placeholder.svg?height=300&width=500",
      technologies: ["Solidity", "zk-SNARKs", "React", "Node.js", "IPFS"],
      features: [
        "Zero-knowledge authentication",
        "Decentralized credential storage",
        "Privacy-preserving verification",
        "Cross-platform compatibility",
      ],
      links: {
        demo: "#",
        github: "#",
      },
    },
    {
      title: "Smart Contract Security Analyzer",
      description:
        "AI-powered tool for automated smart contract vulnerability detection and gas optimization suggestions with detailed reporting.",
      image: "/placeholder.svg?height=300&width=500",
      technologies: ["Python", "Machine Learning", "Solidity", "React", "FastAPI"],
      features: [
        "Automated vulnerability scanning",
        "Gas optimization suggestions",
        "Detailed security reports",
        "Integration with development tools",
      ],
      links: {
        demo: "#",
        github: "#",
      },
    },
  ]

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-800/30">
      <div className="max-w-7xl mx-auto">
        <SectionHeader
          title="Featured Projects"
          subtitle="Innovative blockchain solutions that push the boundaries of what's possible"
        />

        <div className="grid lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
      </div>
    </section>
  )
}

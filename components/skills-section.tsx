import { SectionHeader } from "@/components/section-header"
import { SkillCategory } from "@/components/skill-category"

export function SkillsSection() {
  const skillCategories = [
    {
      title: "Blockchain & Web3",
      skills: [
        { name: "Solidity", level: 95 },
        { name: "Ethereum", level: 90 },
        { name: "Web3.js", level: 88 },
        { name: "Hardhat", level: 85 },
        { name: "IPFS", level: 80 },
        { name: "DeFi Protocols", level: 85 },
      ],
    },
    {
      title: "Frontend Development",
      skills: [
        { name: "React", level: 95 },
        { name: "Next.js", level: 92 },
        { name: "TypeScript", level: 90 },
        { name: "Tailwind CSS", level: 88 },
        { name: "Three.js", level: 75 },
        { name: "Framer Motion", level: 80 },
      ],
    },
    {
      title: "Backend & Infrastructure",
      skills: [
        { name: "Node.js", level: 90 },
        { name: "Python", level: 85 },
        { name: "PostgreSQL", level: 88 },
        { name: "Redis", level: 80 },
        { name: "Docker", level: 85 },
        { name: "AWS", level: 82 },
      ],
    },
    {
      title: "AI & Machine Learning",
      skills: [
        { name: "OpenAI API", level: 88 },
        { name: "LangChain", level: 85 },
        { name: "TensorFlow", level: 75 },
        { name: "Hugging Face", level: 80 },
        { name: "Vector Databases", level: 78 },
        { name: "RAG Systems", level: 82 },
      ],
    },
  ]

  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-800/30">
      <div className="max-w-7xl mx-auto">
        <SectionHeader
          title="Skills & Technologies"
          subtitle="Expertise across the full blockchain development stack"
        />

        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => (
            <SkillCategory key={index} {...category} />
          ))}
        </div>
      </div>
    </section>
  )
}

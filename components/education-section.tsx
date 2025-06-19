import { GraduationCap, Award, BookOpen } from "lucide-react"
import { SectionHeader } from "@/components/section-header"
import { EducationCard } from "@/components/education-card"

export function EducationSection() {
  const education = [
    {
      icon: GraduationCap,
      title: "Master of Science in Computer Science",
      institution: "Stanford University",
      period: "2019 - 2021",
      description:
        "Specialized in Distributed Systems and Cryptography with focus on blockchain technology and consensus algorithms.",
      achievements: [
        'Thesis: "Scalable Consensus Mechanisms for Blockchain Networks"',
        "GPA: 3.9/4.0",
        "Teaching Assistant for Blockchain Fundamentals",
      ],
    },
    {
      icon: BookOpen,
      title: "Bachelor of Science in Software Engineering",
      institution: "MIT",
      period: "2015 - 2019",
      description:
        "Strong foundation in software engineering principles, algorithms, and system design with early exposure to cryptocurrency research.",
      achievements: [
        "Summa Cum Laude graduate",
        "President of Blockchain Research Club",
        "Published 3 papers on cryptocurrency scalability",
      ],
    },
  ]

  const certifications = [
    {
      icon: Award,
      title: "Certified Ethereum Developer",
      institution: "ConsenSys Academy",
      period: "2022",
      description:
        "Advanced certification covering smart contract development, security best practices, and dApp architecture.",
      achievements: [
        "Smart Contract Security Specialization",
        "DeFi Protocol Development",
        "Gas Optimization Techniques",
      ],
    },
    {
      icon: Award,
      title: "AWS Solutions Architect",
      institution: "Amazon Web Services",
      period: "2021",
      description:
        "Professional certification for designing distributed applications and systems on AWS cloud platform.",
      achievements: [
        "Cloud Infrastructure Design",
        "Scalability and Performance Optimization",
        "Security and Compliance",
      ],
    },
  ]

  return (
    <section id="education" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <SectionHeader
          title="Education & Certifications"
          subtitle="Continuous learning and professional development in cutting-edge technologies"
        />

        <div className="space-y-12">
          <div>
            <h3 className="text-2xl font-bold text-white mb-8 text-center">
              <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                Academic Background
              </span>
            </h3>
            <div className="grid md:grid-cols-2 gap-8">
              {education.map((item, index) => (
                <EducationCard key={index} {...item} />
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-bold text-white mb-8 text-center">
              <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                Professional Certifications
              </span>
            </h3>
            <div className="grid md:grid-cols-2 gap-8">
              {certifications.map((item, index) => (
                <EducationCard key={index} {...item} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

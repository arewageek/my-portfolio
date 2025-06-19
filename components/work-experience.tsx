"use client"

import { useState, useRef, useEffect } from "react"
import { Calendar, MapPin, ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"

export function WorkExperience() {
  const [activeExperience, setActiveExperience] = useState(0)
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.2 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  const experiences = [
    {
      title: "Senior Blockchain Engineer",
      company: "DeFi Protocol Inc.",
      period: "2023 - Present",
      location: "San Francisco, CA",
      type: "Full-time",
      description:
        "Leading the development of next-generation DeFi protocols with AI-powered yield optimization and cross-chain interoperability.",
      achievements: [
        "Architected and deployed smart contracts managing $50M+ TVL",
        "Reduced gas costs by 45% through advanced optimization techniques",
        "Led team of 12 engineers in building cross-chain bridge infrastructure",
        "Implemented AI-driven yield farming strategies increasing APY by 30%",
        "Built real-time analytics dashboard processing 1M+ transactions daily",
      ],
      technologies: ["Solidity", "React", "Node.js", "Python", "AWS", "PostgreSQL", "Redis"],
      impact: {
        tvl: "$50M+",
        users: "100K+",
        transactions: "5M+",
        uptime: "99.9%",
      },
    },
    {
      title: "Fullstack Blockchain Developer",
      company: "Web3 Startup",
      period: "2022 - 2023",
      location: "Remote",
      type: "Full-time",
      description:
        "Built end-to-end blockchain applications with emphasis on user experience and AI integration for automated testing and security analysis.",
      achievements: [
        "Developed NFT marketplace with 75K+ active users and $10M+ volume",
        "Created AI-powered smart contract vulnerability scanner",
        "Implemented automated testing reducing deployment bugs by 70%",
        "Built cross-platform mobile app with 50K+ downloads",
        "Optimized application performance achieving 2s load times",
      ],
      technologies: ["Ethereum", "Next.js", "TypeScript", "PostgreSQL", "Docker", "TensorFlow"],
      impact: {
        users: "75K+",
        volume: "$10M+",
        performance: "2s load",
        bugs: "-70%",
      },
    },
    {
      title: "Blockchain Developer",
      company: "Tech Solutions Ltd.",
      period: "2021 - 2022",
      location: "New York, NY",
      type: "Full-time",
      description:
        "Specialized in smart contract development and dApp creation with focus on security and user-friendly interfaces.",
      achievements: [
        "Deployed 25+ smart contracts with zero security vulnerabilities",
        "Built DeFi lending protocol with $5M+ in loans originated",
        "Improved dApp loading speed by 80% through optimization",
        "Mentored 8 junior developers in blockchain best practices",
        "Conducted security audits for 15+ external projects",
      ],
      technologies: ["Solidity", "Web3.js", "React", "IPFS", "Hardhat", "OpenZeppelin"],
      impact: {
        contracts: "25+",
        loans: "$5M+",
        speed: "+80%",
        audits: "15+",
      },
    },
  ]

  return (
    <section id="work" ref={sectionRef} className="relative py-32 px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className={`text-center mb-20 ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}>
          <div className="inline-flex items-center px-4 py-2 bg-purple-500/10 border border-purple-500/20 rounded-full text-purple-400 text-sm font-medium mb-6">
            Work Experience
          </div>
          <h2 className="text-5xl lg:text-6xl font-black text-white mb-6">
            Building{" "}
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Innovation
            </span>{" "}
            at Scale
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Leading blockchain development at cutting-edge companies, delivering solutions that impact millions of users
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Experience Timeline */}
          <div className="lg:col-span-1 space-y-4">
            {experiences.map((exp, index) => (
              <button
                key={index}
                onClick={() => setActiveExperience(index)}
                className={`w-full text-left p-6 rounded-2xl border transition-all duration-300 ${
                  activeExperience === index
                    ? "bg-gradient-to-r from-purple-500/20 to-pink-500/20 border-purple-500/50"
                    : "bg-white/5 border-white/10 hover:bg-white/10 hover:border-white/20"
                }`}
              >
                <div className="space-y-2">
                  <h3 className={`text-lg font-bold ${activeExperience === index ? "text-white" : "text-gray-300"}`}>
                    {exp.title}
                  </h3>
                  <p
                    className={`text-sm font-medium ${
                      activeExperience === index ? "text-purple-400" : "text-gray-400"
                    }`}
                  >
                    {exp.company}
                  </p>
                  <div className="flex items-center space-x-2 text-xs text-gray-500">
                    <Calendar className="w-3 h-3" />
                    <span>{exp.period}</span>
                  </div>
                </div>
              </button>
            ))}
          </div>

          {/* Experience Details */}
          <div className="lg:col-span-2">
            <div className="bg-white/5 border border-white/10 rounded-3xl p-8">
              <div className="space-y-6">
                {/* Header */}
                <div className="space-y-4">
                  <div className="flex items-start justify-between">
                    <div>
                      <h3 className="text-3xl font-black text-white mb-2">{experiences[activeExperience].title}</h3>
                      <p className="text-xl text-purple-400 font-bold mb-2">{experiences[activeExperience].company}</p>
                      <div className="flex items-center space-x-4 text-gray-400">
                        <div className="flex items-center space-x-1">
                          <Calendar className="w-4 h-4" />
                          <span>{experiences[activeExperience].period}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <MapPin className="w-4 h-4" />
                          <span>{experiences[activeExperience].location}</span>
                        </div>
                        <span className="px-3 py-1 bg-purple-500/20 text-purple-400 rounded-full text-sm">
                          {experiences[activeExperience].type}
                        </span>
                      </div>
                    </div>
                    <Button
                      variant="outline"
                      size="sm"
                      className="border-purple-500/50 text-purple-400 hover:bg-purple-500/10"
                    >
                      <ExternalLink className="w-4 h-4 mr-2" />
                      View Company
                    </Button>
                  </div>

                  <p className="text-lg text-gray-300 leading-relaxed">{experiences[activeExperience].description}</p>
                </div>

                {/* Impact Metrics */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {Object.entries(experiences[activeExperience].impact).map(([key, value]) => (
                    <div key={key} className="p-4 bg-white/5 border border-white/10 rounded-xl text-center">
                      <div className="text-2xl font-black text-white mb-1">{value}</div>
                      <div className="text-xs text-gray-400 uppercase tracking-wide">{key}</div>
                    </div>
                  ))}
                </div>

                {/* Achievements */}
                <div>
                  <h4 className="text-xl font-bold text-white mb-4">Key Achievements</h4>
                  <div className="space-y-3">
                    {experiences[activeExperience].achievements.map((achievement, index) => (
                      <div key={index} className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full mt-2 flex-shrink-0" />
                        <p className="text-gray-300 leading-relaxed">{achievement}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Technologies */}
                <div>
                  <h4 className="text-xl font-bold text-white mb-4">Technologies Used</h4>
                  <div className="flex flex-wrap gap-2">
                    {experiences[activeExperience].technologies.map((tech, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-purple-500/20 text-purple-300 border border-purple-500/30 rounded-full text-sm font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

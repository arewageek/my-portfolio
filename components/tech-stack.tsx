"use client"

import { useRef, useEffect, useState } from "react"

export function TechStack() {
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

  const techCategories = [
    {
      title: "Blockchain",
      color: "from-purple-500 to-blue-500",
      technologies: [
        { name: "Ethereum", icon: "⟠", proficiency: 95 },
        { name: "Solidity", icon: "◆", proficiency: 98 },
        { name: "Web3.js", icon: "🌐", proficiency: 92 },
        { name: "Hardhat", icon: "⚒️", proficiency: 90 },
        { name: "OpenZeppelin", icon: "🛡️", proficiency: 88 },
        { name: "IPFS", icon: "📁", proficiency: 85 },
      ],
    },
    {
      title: "AI & ML",
      color: "from-pink-500 to-red-500",
      technologies: [
        { name: "OpenAI", icon: "🤖", proficiency: 95 },
        { name: "LangChain", icon: "🔗", proficiency: 90 },
        { name: "TensorFlow", icon: "🧠", proficiency: 82 },
        { name: "Hugging Face", icon: "🤗", proficiency: 85 },
        { name: "Vector DB", icon: "🗄️", proficiency: 88 },
        { name: "PyTorch", icon: "🔥", proficiency: 78 },
      ],
    },
    {
      title: "Frontend",
      color: "from-blue-500 to-cyan-500",
      technologies: [
        { name: "React", icon: "⚛️", proficiency: 96 },
        { name: "Next.js", icon: "▲", proficiency: 94 },
        { name: "TypeScript", icon: "📘", proficiency: 93 },
        { name: "Tailwind", icon: "🎨", proficiency: 91 },
        { name: "Three.js", icon: "🎮", proficiency: 78 },
        { name: "Framer", icon: "🎭", proficiency: 85 },
      ],
    },
    {
      title: "Backend",
      color: "from-green-500 to-emerald-500",
      technologies: [
        { name: "Node.js", icon: "🟢", proficiency: 94 },
        { name: "Python", icon: "🐍", proficiency: 89 },
        { name: "PostgreSQL", icon: "🐘", proficiency: 87 },
        { name: "Redis", icon: "🔴", proficiency: 83 },
        { name: "Docker", icon: "🐳", proficiency: 88 },
        { name: "AWS", icon: "☁️", proficiency: 85 },
      ],
    },
  ]

  return (
    <section ref={sectionRef} className="relative py-32 px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className={`text-center mb-20 ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}>
          <div className="inline-flex items-center px-6 py-3 glass-card rounded-full text-purple-300 text-sm font-medium mb-8 shadow-xl hover:shadow-2xl hover:shadow-purple-500/20 transition-all duration-300 hover:-translate-y-1">
            <div className="w-2 h-2 bg-purple-400 rounded-full mr-3 animate-pulse" />
            Technology Stack
          </div>
          <h2 className="text-5xl lg:text-6xl font-black text-white mb-6 tracking-tight">
            Mastering{" "}
            <span className="gradient-text-primary drop-shadow-lg">
              Cutting-Edge
            </span>{" "}
            Tech
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Leveraging the most advanced technologies to build the future of blockchain and AI
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {techCategories.map((category, categoryIndex) => (
            <div
              key={categoryIndex}
              className={`p-8 glass-card rounded-3xl hover:bg-white/10 hover:shadow-xl hover:shadow-purple-500/20 hover:-translate-y-2 transition-all duration-500 group ${isVisible ? "animate-fade-in-up" : "opacity-0"
                }`}
              style={{ animationDelay: `${categoryIndex * 200}ms` }}
            >
              <div className="space-y-6">
                <div className="text-center">
                  <h3
                    className={`text-2xl font-black bg-gradient-to-r ${category.color} bg-clip-text text-transparent mb-4`}
                  >
                    {category.title}
                  </h3>
                </div>

                <div className="space-y-4">
                  {category.technologies.map((tech, techIndex) => (
                    <div key={techIndex} className="group">
                      <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center space-x-3">
                          <span className="text-2xl">{tech.icon}</span>
                          <span className="text-white font-medium group-hover:text-purple-400 transition-colors duration-300">
                            {tech.name}
                          </span>
                        </div>
                        <span className="text-purple-400 font-bold text-sm">{tech.proficiency}%</span>
                      </div>
                      <div className="w-full bg-gray-700/50 rounded-full h-2 overflow-hidden">
                        <div
                          className={`h-2 bg-gradient-to-r ${category.color} rounded-full transition-all duration-1000 ease-out shadow-lg relative`}
                          style={{ width: isVisible ? `${tech.proficiency}%` : "0%" }}
                        >
                          <div className="absolute inset-0 bg-white/20 rounded-full animate-pulse" />
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Tech Highlights */}
        <div className="mt-20 grid md:grid-cols-3 gap-8">
          {[
            {
              title: "Cloud & DevOps",
              description: "Scalable infrastructure and deployment pipelines",
              technologies: ["AWS", "Docker", "Kubernetes", "CI/CD", "Terraform"],
              icon: "☁️",
            },
            {
              title: "Security & Auditing",
              description: "Smart contract security and vulnerability assessment",
              technologies: ["Slither", "MythX", "Echidna", "Foundry", "OpenZeppelin"],
              icon: "🔒",
            },
            {
              title: "Analytics & Monitoring",
              description: "Real-time monitoring and data analytics solutions",
              technologies: ["Grafana", "Prometheus", "DataDog", "Mixpanel", "BigQuery"],
              icon: "📊",
            },
          ].map((highlight, index) => (
            <div
              key={index}
              className="p-6 glass-card rounded-2xl hover:bg-white/10 hover:shadow-xl hover:shadow-purple-500/20 transition-all duration-300 hover:transform hover:scale-105 hover:-translate-y-1 group"
            >
              <div className="text-center mb-4">
                <div className="text-4xl mb-2">{highlight.icon}</div>
                <h3 className="text-xl font-bold text-white mb-2">{highlight.title}</h3>
                <p className="text-gray-400 text-sm">{highlight.description}</p>
              </div>
              <div className="flex flex-wrap gap-2 justify-center">
                {highlight.technologies.map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className="px-3 py-1 bg-secondary text-purple-300 border border-purple-500/30 rounded-full text-xs font-medium backdrop-blur-sm hover:bg-secondary/80 hover:scale-105 transition-all duration-200 cursor-default"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

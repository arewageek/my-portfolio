"use client"

import { useState, useRef, useEffect } from "react"

export function ExpertiseSection() {
  const [activeCategory, setActiveCategory] = useState(0)
  const [isVisible, setIsVisible] = useState(true) // Start visible by default
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    // Minimal intersection observer - just for progress bars
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      {
        threshold: 0.05, // Very low threshold
        rootMargin: "50px", // Trigger earlier
      },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  const categories = [
    {
      title: "Blockchain & Web3",
      skills: [
        { name: "Solidity", level: 98, description: "Advanced smart contract development" },
        { name: "Ethereum", level: 95, description: "Layer 1 & Layer 2 solutions" },
        { name: "Web3.js", level: 92, description: "Frontend blockchain integration" },
        { name: "DeFi Protocols", level: 90, description: "Yield farming, AMMs, lending" },
        { name: "NFT Development", level: 88, description: "ERC-721, ERC-1155 standards" },
        { name: "Cross-chain", level: 85, description: "Multi-chain interoperability" },
      ],
    },
    {
      title: "AI & Machine Learning",
      skills: [
        { name: "OpenAI API", level: 95, description: "GPT integration & fine-tuning" },
        { name: "LangChain", level: 90, description: "AI application frameworks" },
        { name: "Vector Databases", level: 88, description: "Semantic search & RAG" },
        { name: "TensorFlow", level: 82, description: "Deep learning models" },
        { name: "Hugging Face", level: 85, description: "Transformer models" },
        { name: "AI Agents", level: 87, description: "Autonomous AI systems" },
      ],
    },
    {
      title: "Frontend Development",
      skills: [
        { name: "React", level: 96, description: "Advanced patterns & hooks" },
        { name: "Next.js", level: 94, description: "Full-stack React framework" },
        { name: "TypeScript", level: 93, description: "Type-safe development" },
        { name: "Tailwind CSS", level: 91, description: "Utility-first styling" },
        { name: "Three.js", level: 78, description: "3D web experiences" },
        { name: "Framer Motion", level: 85, description: "Advanced animations" },
      ],
    },
    {
      title: "Backend & Infrastructure",
      skills: [
        { name: "Node.js", level: 94, description: "Server-side JavaScript" },
        { name: "Python", level: 89, description: "Data science & automation" },
        { name: "PostgreSQL", level: 87, description: "Relational databases" },
        { name: "Redis", level: 83, description: "Caching & session storage" },
        { name: "Docker", level: 88, description: "Containerization" },
        { name: "AWS", level: 85, description: "Cloud infrastructure" },
      ],
    },
  ]

  return (
    <section
      id="expertise"
      ref={sectionRef}
      className="relative py-16 lg:py-32 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-transparent to-purple-900/10"
    >
      <div className="max-w-7xl mx-auto">
        {/* Header - Always visible, no animation dependency */}
        <div className="text-center mb-12 lg:mb-20">
          <div className="inline-flex items-center px-4 py-2 bg-purple-500/10 border border-purple-500/20 rounded-full text-purple-400 text-xs lg:text-sm font-medium mb-4 lg:mb-6">
            Technical Expertise
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-6xl font-black text-white mb-4 lg:mb-6">
            Mastering the{" "}
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Full Stack
            </span>
          </h2>
          <p className="text-lg lg:text-xl text-gray-300 max-w-3xl mx-auto">
            From smart contracts to AI integration, I bring deep expertise across the entire technology stack
          </p>
        </div>

        {/* Mobile: Simple tabs instead of dropdown */}
        <div className="lg:hidden mb-8">
          <div className="flex overflow-x-auto space-x-2 pb-2">
            {categories.map((category, index) => (
              <button
                key={index}
                onClick={() => setActiveCategory(index)}
                className={`flex-shrink-0 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                  activeCategory === index ? "bg-purple-500 text-white" : "bg-white/10 text-gray-300 hover:bg-white/20"
                }`}
              >
                {category.title}
              </button>
            ))}
          </div>
        </div>

        <div className="grid lg:grid-cols-4 gap-6 lg:gap-8">
          {/* Desktop: Category Tabs */}
          <div className="hidden lg:block lg:col-span-1 space-y-4">
            {categories.map((category, index) => (
              <button
                key={index}
                onClick={() => setActiveCategory(index)}
                className={`w-full text-left p-6 rounded-2xl border transition-all duration-200 ${
                  activeCategory === index
                    ? "bg-gradient-to-r from-purple-500/20 to-pink-500/20 border-purple-500/50 text-white"
                    : "bg-white/5 border-white/10 text-gray-400 hover:bg-white/10 hover:border-white/20"
                }`}
              >
                <h3 className="text-lg font-bold">{category.title}</h3>
              </button>
            ))}
          </div>

          {/* Skills Display - Always visible */}
          <div className="lg:col-span-3">
            <div className="bg-white/5 border border-white/10 rounded-2xl lg:rounded-3xl p-6 lg:p-8">
              <h3 className="text-2xl lg:text-3xl font-bold text-white mb-6 lg:mb-8">
                {categories[activeCategory].title}
              </h3>

              <div className="grid sm:grid-cols-2 gap-4 lg:gap-6">
                {categories[activeCategory].skills.map((skill, index) => (
                  <div
                    key={index}
                    className="group p-4 lg:p-6 bg-white/5 border border-white/10 rounded-xl lg:rounded-2xl hover:bg-white/10 transition-all duration-200"
                  >
                    <div className="flex justify-between items-center mb-3">
                      <h4 className="text-lg lg:text-xl font-bold text-white group-hover:text-purple-400 transition-colors duration-200">
                        {skill.name}
                      </h4>
                      <span className="text-purple-400 font-bold text-base lg:text-lg">{skill.level}%</span>
                    </div>

                    {/* Progress bar - simplified animation */}
                    <div className="w-full bg-gray-700 rounded-full h-2 mb-3">
                      <div
                        className="h-2 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full transition-all duration-500 ease-out"
                        style={{
                          width: `${skill.level}%`, // Always show full width
                          opacity: isVisible ? 1 : 0.5, // Just fade in when visible
                        }}
                      />
                    </div>

                    <p className="text-gray-400 text-sm">{skill.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

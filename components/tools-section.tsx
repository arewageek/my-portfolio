"use client"

import { useState } from "react"
import { brandConfig } from "@/lib/brand-config"

export function ToolsSection() {
    const [activeCategory, setActiveCategory] = useState(0)
    const { tools } = brandConfig

    // Safety check
    if (!tools || !tools.categories || !Array.isArray(tools.categories)) {
        return null
    }

    return (
        <section className="relative py-20 px-6 lg:px-8 bg-black">
            {/* Subtle background gradient */}
            <div className="absolute inset-0 bg-gradient-to-b from-purple-900/5 via-transparent to-pink-900/5" />

            <div className="max-w-6xl mx-auto relative z-10">
                {/* Header */}
                <div className="text-center mb-16">
                    <div className="inline-flex items-center px-4 py-2 glass-card rounded-full text-purple-300 text-sm font-medium mb-6">
                        <div className="w-2 h-2 bg-purple-400 rounded-full mr-2 animate-pulse" />
                        {tools.title}
                    </div>

                    <h2 className="text-4xl lg:text-6xl font-bold text-white mb-6">
                        <span className="gradient-text-premium">
                            {tools.subtitle}
                        </span>
                    </h2>

                    <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                        {tools.description}
                    </p>
                </div>

                {/* Category Navigation */}
                <div className="flex flex-wrap justify-center gap-3 mb-12">
                    {tools.categories.map((category, index) => (
                        <button
                            key={index}
                            onClick={() => setActiveCategory(index)}
                            className={`px-6 py-3 rounded-xl font-medium transition-all duration-300 ${activeCategory === index
                                ? "bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-lg"
                                : "glass-card text-gray-300 hover:text-white hover:bg-white/10"
                                }`}
                        >
                            {category.name}
                        </button>
                    ))}
                </div>

                {/* Tools Grid */}
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    {tools.categories[activeCategory].items.map((tool, index) => (
                        <div
                            key={index}
                            className="glass-card p-6 text-center hover:bg-white/10 transition-all duration-300 hover:-translate-y-1 group"
                        >
                            <div className="w-12 h-12 mx-auto mb-4 flex items-center justify-center rounded-xl bg-gradient-to-r from-purple-600/20 to-pink-600/20 group-hover:from-purple-600/30 group-hover:to-pink-600/30 transition-all duration-300">
                                <tool.icon className="w-6 h-6 text-purple-400 group-hover:text-purple-300" />
                            </div>

                            <h3 className="text-white font-semibold mb-2">{tool.name}</h3>
                            <p className="text-gray-400 text-sm">{tool.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
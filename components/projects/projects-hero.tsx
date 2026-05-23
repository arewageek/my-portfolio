"use client"

import { brandConfig } from "@/lib/brand-config"

export function ProjectsHero() {
  return (
    <section className="pt-40 pb-24 px-6 sm:px-12 lg:px-24">
      <div className="max-w-4xl mx-auto">
        <div className="space-y-6">
          <p className="font-handwriting text-2xl text-gray-500 italic">Portfolio</p>
          <h1 className="text-5xl sm:text-6xl md:text-8xl font-serif text-gray-900 tracking-tight leading-[0.9]">
            Recent <br /> Projects.
          </h1>
          <p className="text-lg md:text-2xl text-gray-600 leading-relaxed font-sans font-light max-w-3xl pt-8">
            A collection of web applications, blockchain systems, and digital experiments I've built.
          </p>
        </div>

        <div className="mt-16 flex gap-12 border-t border-gray-200 pt-8">
          <div>
            <div className="text-4xl font-serif text-gray-900">{brandConfig.projects.length}</div>
            <div className="text-sm font-handwriting text-gray-500 mt-1">Live Projects</div>
          </div>
          <div>
            <div className="text-4xl font-serif text-gray-900">{brandConfig.companies.length}</div>
            <div className="text-sm font-handwriting text-gray-500 mt-1">Companies</div>
          </div>
        </div>
      </div>
    </section>
  )
}

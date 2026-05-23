"use client"

import { brandConfig } from "@/lib/brand-config"

export function AboutHero() {
  return (
    <section className="pt-40 pb-24 px-6 sm:px-12 lg:px-24">
      <div className="max-w-4xl mx-auto">
        <div className="space-y-6">
          <p className="font-handwriting text-2xl text-gray-500 italic">Behind the code</p>
          <h1 className="text-5xl sm:text-6xl md:text-8xl font-serif text-gray-900 tracking-tight leading-[0.9]">
            Meet <br /> The Geek.
          </h1>
          <p className="text-lg md:text-2xl text-gray-600 leading-relaxed font-sans font-light max-w-3xl pt-8">
            {brandConfig.about.intro}
          </p>
        </div>
      </div>
    </section>
  )
}

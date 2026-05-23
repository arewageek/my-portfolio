"use client"

import { brandConfig } from "@/lib/brand-config"

export function AboutStory() {
  return (
    <section className="py-24 px-6 sm:px-12 lg:px-24 bg-transparent">
      <div className="max-w-4xl mx-auto">
        <div className="grid md:grid-cols-[1fr_2fr] gap-12 md:gap-24">
          <div>
            <h2 className="text-3xl font-serif text-gray-900 sticky top-32">
              My Story
            </h2>
          </div>
          
          <div className="space-y-8 text-lg text-gray-700 leading-relaxed font-light">
            <p>
              I began my journey as a software engineer because I was fascinated by the ability to build tools that live on the internet and are instantly accessible globally.
            </p>

            <p>
              Over the years, I've worked across different stacks, from crafting pixel-perfect interfaces to architecting robust backend systems. More recently, I've spent considerable time in the Web3 space, exploring the intersection of cryptography, digital ownership, and decentralized infrastructure.
            </p>

            <p>
              My focus is now centered on creating systems that balance clarity with performance. By combining thoughtful design with reliable, scalable infrastructure, I aim to build products that solve real problems elegantly.
            </p>

            <p>
              Whether it's a sleek landing page, a complex web application, or a smart contract protocol, my approach remains the same: understand the user, simplify the complex, and write clean, maintainable code.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

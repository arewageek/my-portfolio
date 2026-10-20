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
              I got into programming because I loved the idea of building tools that live on the internet and work for anyone, anywhere.
            </p>

            <p>
              I got into blockchain not for the hype, but because I was fascinated by building systems that don't need a middleman to work. But most decentralized apps feel like they were built by engineers for engineers. I think that's backwards. The best technology is the kind you don't even notice you're using.
            </p>

            <p>
              When I'm not coding, I'm usually thinking about how to make complex systems simpler, or exploring how practical AI can take away repetitive work without adding unnecessary bloat.
            </p>

            <p>
              I'm based in Nigeria and work with teams and founders all over the world. Whether I'm building a backend API, a user interface, or a smart contract, my goal is always the same: keep it simple, make it fast, and build it to last.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

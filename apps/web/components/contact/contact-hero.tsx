import { brandConfig } from "@/lib/brand-config"

export function ContactHero() {
  return (
    <section className="pt-40 pb-24 px-6 sm:px-12 lg:px-24">
      <div className="max-w-4xl mx-auto text-center space-y-8">
        <p className="font-handwriting text-2xl text-gray-500 italic">Contact</p>

        <h1 className="text-5xl sm:text-7xl font-serif text-gray-900 tracking-tight leading-tight">
          Get In Touch
        </h1>

        <p className="text-xl text-gray-600 leading-relaxed max-w-2xl mx-auto font-light">
          I'm available for new opportunities, product collaborations, and consulting. If you're building something interesting, I'd love to hear about it.
        </p>
      </div>
    </section>
  )
}

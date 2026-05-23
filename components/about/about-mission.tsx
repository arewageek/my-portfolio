export function AboutMission() {
  const principles = [
    {
      title: "User-First Design",
      description: "Technology should serve people, not confuse them. I build intuitive interfaces that feel natural.",
    },
    {
      title: "Simplicity",
      description: "The best solutions are often the simplest ones. I strive to reduce complexity at every level.",
    },
    {
      title: "Security Always",
      description: "Robust architecture and defense-in-depth strategies to build systems people can trust.",
    },
    {
      title: "Real Impact",
      description: "Focusing on solving actual problems and creating meaningful value through software.",
    },
  ]

  return (
    <section className="py-24 px-6 sm:px-12 lg:px-24">
      <div className="max-w-4xl mx-auto">
        <div className="mb-16">
          <p className="font-handwriting text-xl text-gray-500 mb-2">Philosophy</p>
          <h2 className="text-4xl font-serif text-gray-900">Core Principles</h2>
        </div>

        <div className="grid sm:grid-cols-2 gap-12 md:gap-16">
          {principles.map((principle, index) => (
            <div key={index} className="space-y-3">
              <h3 className="text-xl font-serif text-gray-900 border-b border-gray-200 pb-2 inline-block">
                {principle.title}
              </h3>
              <p className="text-gray-600 leading-relaxed font-light">
                {principle.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

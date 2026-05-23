import { Gamepad, Music, Book } from "lucide-react"

export function AboutValues() {
  const interests = [
    {
      title: "Video Games",
      description: "I play video games to keep my mental health in check ;)",
    },
    {
      title: "Music",
      description: "Afrobeats, jazz, and lo-fi keep me focused.",
    },
    {
      title: "Reading",
      description: "I read books that help me think better, grow personally, and see the world more clearly.",
    },
  ]

  return (
    <section className="py-24 px-6 sm:px-12 lg:px-24">
      <div className="max-w-4xl mx-auto">
        <div className="mb-16">
          <p className="font-handwriting text-xl text-gray-500 mb-2">Off Keyboard</p>
          <h2 className="text-4xl font-serif text-gray-900">Interests</h2>
        </div>

        <div className="grid sm:grid-cols-3 gap-12">
          {interests.map((interest, index) => (
            <div key={index} className="space-y-3">
              <h3 className="text-xl font-serif text-gray-900 border-b border-gray-200 pb-2 inline-block">
                {interest.title}
              </h3>
              <p className="text-gray-600 leading-relaxed font-light text-sm">
                {interest.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

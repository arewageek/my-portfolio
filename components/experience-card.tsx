import { Badge } from "@/components/ui/badge"

interface ExperienceCardProps {
  title: string
  company: string
  period: string
  description: string
  achievements: string[]
  technologies: string[]
  index: number
}

export function ExperienceCard({
  title,
  company,
  period,
  description,
  achievements,
  technologies,
  index,
}: ExperienceCardProps) {
  return (
    <div className={`flex flex-col md:flex-row gap-8 ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}>
      <div className="md:w-1/3">
        <div className="sticky top-24">
          <div className="text-pink-400 font-semibold text-sm uppercase tracking-wide mb-2">{period}</div>
          <h3 className="text-2xl font-bold text-white mb-2">{title}</h3>
          <div className="text-pink-400 font-semibold text-lg mb-4">{company}</div>
        </div>
      </div>

      <div className="md:w-2/3">
        <div className="bg-gray-900/30 rounded-xl p-6 border border-gray-800 hover:border-pink-400/30 transition-all duration-300">
          <p className="text-gray-300 text-lg leading-relaxed mb-6">{description}</p>

          <div className="mb-6">
            <h4 className="text-white font-semibold mb-3">Key Achievements:</h4>
            <ul className="space-y-2">
              {achievements.map((achievement, i) => (
                <li key={i} className="flex items-start">
                  <div className="w-2 h-2 bg-pink-400 rounded-full mt-2 mr-3 flex-shrink-0" />
                  <span className="text-gray-300">{achievement}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-3">Technologies:</h4>
            <div className="flex flex-wrap gap-2">
              {technologies.map((tech, i) => (
                <Badge key={i} variant="secondary" className="bg-secondary text-purple-300 border-purple-500/30">
                  {tech}
                </Badge>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

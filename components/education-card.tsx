import type { LucideIcon } from "lucide-react"

interface EducationCardProps {
  icon: LucideIcon
  title: string
  institution: string
  period: string
  description: string
  achievements: string[]
}

export function EducationCard({
  icon: Icon,
  title,
  institution,
  period,
  description,
  achievements,
}: EducationCardProps) {
  return (
    <div className="bg-slate-800/50 rounded-xl p-6 border border-purple-500/20 hover:border-purple-400/50 transition-all duration-300 hover:transform hover:scale-105">
      <div className="flex items-start gap-4 mb-4">
        <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center flex-shrink-0">
          <Icon className="w-6 h-6 text-white" />
        </div>
        <div className="flex-1">
          <h3 className="text-xl font-bold text-white mb-1">{title}</h3>
          <div className="text-purple-400 font-semibold">{institution}</div>
          <div className="text-gray-400 text-sm">{period}</div>
        </div>
      </div>

      <p className="text-gray-300 mb-4 leading-relaxed">{description}</p>

      <div>
        <h4 className="text-white font-semibold mb-2">Highlights:</h4>
        <ul className="space-y-1">
          {achievements.map((achievement, index) => (
            <li key={index} className="flex items-start">
              <div className="w-1.5 h-1.5 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full mt-2 mr-3 flex-shrink-0" />
              <span className="text-gray-400 text-sm">{achievement}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

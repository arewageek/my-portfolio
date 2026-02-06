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
    <div className={`flex flex-col md:flex-row gap-8 lg:gap-16 ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}>
      <div className="md:w-1/3">
        <div className="sticky top-24">
          <div className="text-white/20 font-black text-[10px] uppercase tracking-[0.4em] mb-4">{period}</div>
          <h3 className="text-3xl font-black text-white mb-2 uppercase tracking-tighter leading-none">{title}</h3>
          <div className="text-primary font-bold text-xs uppercase tracking-widest break-words">{company}</div>
        </div>
      </div>

      <div className="md:w-2/3">
        <div className="bg-white/5 p-8 lg:p-10 border border-white/5 hover:border-primary/20 transition-all duration-500">
          <p className="text-white/40 text-sm leading-relaxed mb-8 italic">{description}</p>

          <div className="mb-8">
            <h4 className="text-white font-bold uppercase tracking-[0.2em] text-[10px] mb-6">Execution Metrics:</h4>
            <ul className="grid sm:grid-cols-2 gap-4">
              {achievements.map((achievement, i) => (
                <li key={i} className="flex items-start">
                  <div className="w-1.5 h-1.5 bg-primary rounded-none mt-1.5 mr-4 flex-shrink-0" />
                  <span className="text-white/60 text-xs font-light tracking-wide italic">{achievement}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold uppercase tracking-[0.2em] text-[10px] mb-4">Architecture:</h4>
            <div className="flex flex-wrap gap-2">
              {technologies.map((tech, i) => (
                <span key={i} className="px-2 py-1 bg-white/5 border border-white/5 text-white/30 text-[9px] uppercase font-bold tracking-widest hover:text-primary transition-colors cursor-default">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

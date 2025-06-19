import { SkillBar } from "@/components/skill-bar"

interface Skill {
  name: string
  level: number
}

interface SkillCategoryProps {
  title: string
  skills: Skill[]
}

export function SkillCategory({ title, skills }: SkillCategoryProps) {
  return (
    <div className="bg-slate-800/50 rounded-xl p-6 border border-purple-500/20">
      <h3 className="text-2xl font-bold text-white mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
        {title}
      </h3>
      <div className="space-y-4">
        {skills.map((skill, index) => (
          <SkillBar key={index} {...skill} />
        ))}
      </div>
    </div>
  )
}

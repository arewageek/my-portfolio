import { ExternalLink, Github, Play } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

interface ProjectCardProps {
  title: string
  description: string
  image: string
  technologies: string[]
  features: string[]
  links: {
    demo?: string
    github?: string
    live?: string
  }
}

export function ProjectCard({ title, description, image, technologies, features, links }: ProjectCardProps) {
  return (
    <div className="group bg-slate-800/50 rounded-xl overflow-hidden border border-purple-500/20 hover:border-purple-400/50 transition-all duration-300 hover:transform hover:scale-[1.02]">
      <div className="relative overflow-hidden">
        <img
          src={image || "/placeholder.svg"}
          alt={title}
          className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent" />
      </div>

      <div className="p-6">
        <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-purple-400 transition-colors duration-300">
          {title}
        </h3>

        <p className="text-gray-300 mb-4 leading-relaxed">{description}</p>

        <div className="mb-4">
          <h4 className="text-white font-semibold mb-2">Key Features:</h4>
          <ul className="space-y-1">
            {features.map((feature, index) => (
              <li key={index} className="flex items-start text-sm">
                <div className="w-1.5 h-1.5 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full mt-2 mr-2 flex-shrink-0" />
                <span className="text-gray-400">{feature}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="mb-6">
          <div className="flex flex-wrap gap-2">
            {technologies.map((tech, index) => (
              <Badge
                key={index}
                variant="secondary"
                className="bg-purple-500/20 text-purple-300 border-purple-500/30 text-xs"
              >
                {tech}
              </Badge>
            ))}
          </div>
        </div>

        <div className="flex gap-3">
          {links.demo && (
            <Button
              variant="primary"
              size="sm"
            >
              <Play className="w-4 h-4 mr-2" />
              Demo
            </Button>
          )}
          {links.github && (
            <Button size="sm" variant="ghost">
              <Github className="w-4 h-4 mr-2" />
              Code
            </Button>
          )}
          {links.live && (
            <Button size="sm" variant="ghost">
              <ExternalLink className="w-4 h-4 mr-2" />
              Live
            </Button>
          )}
        </div>
      </div>
    </div>
  )
}

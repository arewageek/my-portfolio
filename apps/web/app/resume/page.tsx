import { brandConfig } from "@/lib/brand-config"
import { Download, Calendar, MapPin, Briefcase } from "lucide-react"

export const metadata = {
  title: "Resume | " + brandConfig.name,
  description: "Work experience and professional background.",
}

export default function ResumePage() {
  const currentRoles = brandConfig.companies.filter((c) => !c.stopped).reverse()
  const pastRoles = brandConfig.companies.filter((c) => c.stopped).reverse()
  const experiences = [...currentRoles, ...pastRoles]

  return (
    <div className="relative min-h-screen pt-32 pb-24 px-6 sm:px-12 lg:px-24">
      <div className="max-w-4xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <p className="font-handwriting text-xl text-gray-500 mb-2">My Journey</p>
            <h1 className="text-4xl md:text-5xl font-serif text-gray-900 tracking-tight">Work Experience</h1>
          </div>
          
          <a
            href="/resume/arewageek.pdf"
            download="arewageek.pdf"
            target="_blank"
            className="group inline-flex items-center gap-3 px-6 py-3 bg-gray-900 text-[#F4F1EA] text-sm font-medium hover:bg-gray-800 transition-colors shadow-sm"
          >
            <Download className="w-4 h-4 stroke-[2] group-hover:-translate-y-0.5 transition-transform" />
            Download CV
          </a>
        </div>

        <div className="relative border-l border-gray-200 ml-3 md:ml-0 md:border-none space-y-12 md:space-y-16">
          {experiences.map((exp, index) => (
            <div key={exp.id} className="relative pl-8 md:pl-0">
              {/* Mobile Timeline Dot */}
              <div className="md:hidden absolute left-[-5px] top-2 w-[9px] h-[9px] rounded-full bg-gray-900" />
              
              <div className="flex flex-col md:flex-row gap-6 md:gap-12">
                {/* Left Column: Metadata */}
                <div className="md:w-1/3 flex-shrink-0">
                  <div className="sticky top-32 space-y-3">
                    <h3 className="text-xl font-serif text-gray-900">{exp.name}</h3>
                    <div className="flex items-center gap-2 text-sm text-gray-500">
                      <Briefcase className="w-3.5 h-3.5" />
                      <span>{exp.role}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-gray-500">
                      <Calendar className="w-3.5 h-3.5" />
                      <span>{exp.started} — {exp.stopped || "Present"}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-gray-500">
                      <MapPin className="w-3.5 h-3.5" />
                      <span>{exp.location}</span>
                    </div>
                    <div className="inline-block mt-2 px-2.5 py-1 bg-gray-100 text-gray-600 text-xs uppercase tracking-wide font-medium">
                      {exp.type}
                    </div>
                  </div>
                </div>

                {/* Right Column: Details */}
                <div className="md:w-2/3 md:pt-1">
                  <p className="text-lg text-gray-600 font-light leading-relaxed mb-6">
                    {exp.overview?.description || exp.description}
                  </p>
                  
                  {exp.overview?.teams && exp.overview.teams.length > 0 && (
                    <div className="space-y-8 mb-8 mt-6">
                      {exp.overview.teams.map((team: any, tIndex: number) => {
                        const isDefault = !team.name || team.name === "Default";
                        
                        return (
                          <div 
                            key={tIndex} 
                            className={!isDefault ? "relative pl-4 md:pl-5 border-l-2 border-gray-200/60" : ""}
                          >
                            {!isDefault && (
                              <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-4 gap-2 sm:gap-0">
                                <div className="flex items-center gap-2.5">
                                  <span className="inline-flex items-center px-1.5 py-0.5 rounded bg-gray-100 text-gray-500 text-[10px] font-bold uppercase tracking-widest">
                                    Team
                                  </span>
                                  <h4 className="text-sm font-semibold text-gray-900">{team.name}</h4>
                                </div>
                                {(team.startDate || team.endDate) && (
                                  <div className="flex items-center gap-1.5 text-xs text-gray-500 font-medium tracking-wide">
                                    <Calendar className="w-3.5 h-3.5 hidden sm:block opacity-70" />
                                    <span>
                                      {team.startDate} {team.endDate ? `— ${team.endDate}` : ""}
                                    </span>
                                  </div>
                                )}
                              </div>
                            )}
                            <ul className="space-y-3 mt-2">
                              {team.responsibilities.map((resp: string, i: number) => (
                                <li key={i} className="flex gap-3 text-gray-600 text-sm leading-relaxed">
                                  <span className="text-gray-300 mt-1.5">•</span>
                                  <span>{resp}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        );
                      })}
                    </div>
                  )}

                  {exp.technologies && exp.technologies.length > 0 && (
                    <div>
                      <h4 className="text-xs font-medium text-gray-400 uppercase tracking-wider mb-3">Technologies</h4>
                      <div className="flex flex-wrap gap-2">
                        {exp.technologies.map((tech: string) => (
                          <span key={tech} className="text-[10px] text-gray-600 border border-gray-200 px-2 py-1 uppercase tracking-wider bg-white">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

import { Mail, Calendar } from "lucide-react"
import { brandConfig } from "@/lib/brand-config"

export function ContactInfo() {
  const contactMethods = [
    {
      icon: Mail,
      title: "Email",
      value: brandConfig.email,
      href: `mailto:${brandConfig.email}`,
    },
    {
      icon: brandConfig.socials[2].icon,
      title: "X (Twitter)",
      value: "@arewaofweb3",
      href: brandConfig.socials[2].href,
    },
    {
      icon: Calendar,
      title: "Schedule Call",
      value: "Book a 30-min slot",
      href: brandConfig.calendar,
    }
  ]

  return (
    <section className="py-24 px-6 lg:px-12 bg-transparent border-t border-gray-200">
      <div className="max-w-xl mx-auto space-y-12">
        <div className="space-y-4">
          <h2 className="text-3xl font-serif text-gray-900">Direct Contact</h2>
          <p className="text-gray-600 font-light">
            Feel free to reach out for collaborations or just a friendly hello. I typically respond within 24 hours.
          </p>
        </div>

        <div className="space-y-8">
          {contactMethods.map((method, index) => (
            <a
              key={index}
              href={method.href}
              className="flex items-center gap-6 group"
              target={method.title !== "Email" ? "_blank" : undefined}
              rel="noopener noreferrer"
            >
              <div className="w-12 h-12 flex items-center justify-center border border-gray-200 group-hover:border-gray-400 transition-colors bg-white">
                <method.icon className="w-5 h-5 text-gray-600" />
              </div>
              <div>
                <h3 className="font-serif text-gray-900 text-lg">{method.title}</h3>
                <p className="text-sm font-handwriting text-gray-500">{method.value}</p>
              </div>
            </a>
          ))}
        </div>

        <div className="pt-12 border-t border-gray-200">
          <p className="text-sm text-gray-500">Status: Available for Work</p>
        </div>
      </div>
    </section>
  )
}

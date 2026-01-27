import { ContactHero } from "@/components/contact-hero"
import { ContactForm } from "@/components/contact-form"
import { ContactInfo } from "@/components/contact-info"

export default function Contact() {
  return (
    <div className="relative min-h-screen bg-black overflow-x-hidden">
      <main>
        <ContactHero />
        <div className="grid lg:grid-cols-2 gap-0">
          <ContactInfo />
          <ContactForm />
        </div>
      </main>
    </div>
  )
}

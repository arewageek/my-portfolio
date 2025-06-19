interface SectionHeaderProps {
  title: string
  subtitle: string
  className?: string
}

export function SectionHeader({ title, subtitle, className = "" }: SectionHeaderProps) {
  return (
    <div className={`text-center mb-16 ${className}`}>
      <h2 className="text-4xl md:text-5xl font-bold mb-4">
        <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">{title}</span>
      </h2>
      <p className="text-xl text-gray-400 max-w-3xl mx-auto">{subtitle}</p>
    </div>
  )
}

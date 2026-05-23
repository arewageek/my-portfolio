export function AboutPersonal() {
  return (
    <section className="py-32 px-6 sm:px-12 lg:px-24 bg-transparent border-t border-b border-gray-200">
      <div className="max-w-4xl mx-auto text-center">
        <blockquote className="text-4xl sm:text-5xl lg:text-6xl font-serif text-gray-900 leading-tight">
          Where we're going, we won't need
          <span className="block text-gray-400">
            complex manuals or clunky UI.
          </span>
        </blockquote>

        <div className="mt-12 space-y-6">
          <p className="font-handwriting text-xl text-gray-500">My Vision</p>

          <p className="text-xl lg:text-2xl text-gray-600 leading-relaxed max-w-3xl mx-auto font-light">
            Engineering a future where software infrastructure is as invisible and reliable as the air we breathe.
          </p>
        </div>
      </div>
    </section>
  )
}

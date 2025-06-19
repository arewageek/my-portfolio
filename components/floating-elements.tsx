"use client"

export function FloatingElements() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Floating geometric shapes */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-purple-500/10 rounded-full animate-pulse"></div>
      <div className="absolute top-40 right-20 w-16 h-16 bg-pink-500/10 rounded-lg rotate-45 animate-bounce"></div>
      <div className="absolute bottom-40 left-20 w-12 h-12 bg-purple-400/10 rounded-full animate-ping"></div>
      <div className="absolute bottom-20 right-10 w-24 h-24 bg-pink-400/10 rounded-lg rotate-12 animate-pulse"></div>

      {/* Gradient orbs */}
      <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-r from-pink-500/20 to-purple-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
    </div>
  )
}

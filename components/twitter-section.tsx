"use client"

import { useState, useRef, useEffect } from "react"
import { Twitter, Heart, MessageCircle, Repeat2, ExternalLink } from "lucide-react"

export function TwitterSection() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.2 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  // Mock tweets data - in a real implementation, you'd fetch from Twitter API
  const tweets = [
    {
      id: 1,
      content:
        "Just deployed a smart contract that reduces gas costs by 40% while maintaining the same functionality. Sometimes the best optimization is the one users never notice. 🚀 #Web3 #Blockchain",
      timestamp: "2h",
      likes: 127,
      retweets: 34,
      replies: 18,
      verified: true,
    },
    {
      id: 2,
      content:
        "The future of DeFi isn't about making finance more complex—it's about making it so simple that your grandmother could use it without knowing she's using blockchain. 💡",
      timestamp: "1d",
      likes: 89,
      retweets: 23,
      replies: 12,
      verified: true,
    },
    {
      id: 3,
      content:
        "AI + Blockchain = Magic ✨\n\nJust integrated machine learning into a yield optimization protocol. The results are mind-blowing. Users are seeing 30% higher returns with zero additional effort.",
      timestamp: "3d",
      likes: 203,
      retweets: 67,
      replies: 31,
      verified: true,
    },
    {
      id: 4,
      content:
        "Building in Web3 taught me that the best user experience is the one that feels like Web2 but has the power of decentralization running underneath. Invisible complexity, visible value.",
      timestamp: "5d",
      likes: 156,
      retweets: 45,
      replies: 22,
      verified: true,
    },
  ]

  return (
    <section ref={sectionRef} className="relative py-32 px-6 lg:px-8 bg-black">
      <div className="max-w-6xl mx-auto">
        <div className={`text-center mb-16 ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}>
          <div className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 backdrop-blur-xl border border-blue-500/30 rounded-full text-blue-300 text-sm font-medium mb-8 shadow-lg shadow-blue-500/10">
            <Twitter className="w-4 h-4 mr-2" />
            Latest Thoughts
          </div>
          <h2 className="text-5xl lg:text-6xl font-black text-white mb-8 leading-tight">
            From My{" "}
            <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-600 bg-clip-text text-transparent">
              Twitter
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Real-time insights, thoughts, and updates from the world of blockchain and AI
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {tweets.map((tweet, index) => (
            <div
              key={tweet.id}
              className={`group p-8 bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl hover:bg-white/10 transition-all duration-500 hover:transform hover:scale-105 ${
                isVisible ? "animate-fade-in-up" : "opacity-0"
              }`}
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className="space-y-6">
                {/* Header */}
                <div className="flex items-start justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 rounded-full border-2 border-purple-400/30 bg-purple-500/20 flex items-center justify-center">
                      <span className="text-white font-bold text-lg">AG</span>
                    </div>
                    <div>
                      <div className="flex items-center space-x-2">
                        <h3 className="text-white font-bold">Arewa Geek</h3>
                        {tweet.verified && (
                          <div className="w-5 h-5 bg-blue-500 rounded-full flex items-center justify-center">
                            <span className="text-white text-xs">✓</span>
                          </div>
                        )}
                      </div>
                      <p className="text-gray-400 text-sm">@arewaofweb3</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Twitter className="w-4 h-4 text-blue-400" />
                    <span className="text-gray-400 text-sm">{tweet.timestamp}</span>
                  </div>
                </div>

                {/* Tweet Content */}
                <p className="text-gray-300 leading-relaxed text-lg">{tweet.content}</p>

                {/* Engagement Stats */}
                <div className="flex items-center justify-between pt-4 border-t border-white/10">
                  <div className="flex items-center space-x-6">
                    <div className="flex items-center space-x-2 text-gray-400 hover:text-blue-400 transition-colors duration-300 cursor-pointer">
                      <MessageCircle className="w-4 h-4" />
                      <span className="text-sm">{tweet.replies}</span>
                    </div>
                    <div className="flex items-center space-x-2 text-gray-400 hover:text-green-400 transition-colors duration-300 cursor-pointer">
                      <Repeat2 className="w-4 h-4" />
                      <span className="text-sm">{tweet.retweets}</span>
                    </div>
                    <div className="flex items-center space-x-2 text-gray-400 hover:text-red-400 transition-colors duration-300 cursor-pointer">
                      <Heart className="w-4 h-4" />
                      <span className="text-sm">{tweet.likes}</span>
                    </div>
                  </div>
                  <button className="p-2 text-gray-400 hover:text-blue-400 transition-colors duration-300">
                    <ExternalLink className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Follow CTA */}
        <div className="text-center mt-16">
          <a
            href="https://x.com/arewaofweb3"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 rounded-2xl text-white font-semibold text-lg shadow-2xl shadow-blue-500/30 hover:shadow-blue-500/50 transition-all duration-500 transform hover:scale-105"
          >
            <Twitter className="w-5 h-5 mr-3" />
            Follow @arewaofweb3
            <ExternalLink className="w-4 h-4 ml-2" />
          </a>
        </div>
      </div>
    </section>
  )
}

"use client"

import { useEffect, useState } from "react"
import { usePathname } from "next/navigation"

export function PageTransition({ children }: { children: React.ReactNode }) {
    const [isLoading, setIsLoading] = useState(false)
    const pathname = usePathname()

    useEffect(() => {
        setIsLoading(true)
        const timer = setTimeout(() => {
            setIsLoading(false)
        }, 300)

        return () => clearTimeout(timer)
    }, [pathname])

    return (
        <>
            {/* Transition overlay */}
            <div
                className={`fixed inset-0 z-50 bg-gradient-to-br from-purple-900 via-black to-pink-900 transition-all duration-300 ${isLoading ? "opacity-100 visible" : "opacity-0 invisible"
                    }`}
            >
                <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center space-y-4">
                        <div className="relative">
                            <div className="w-16 h-16 border-4 border-purple-500/30 rounded-full animate-spin">
                                <div className="absolute inset-0 border-4 border-transparent border-t-purple-500 rounded-full animate-spin" />
                            </div>
                        </div>
                        <div className="text-white font-medium">Loading...</div>
                    </div>
                </div>
            </div>

            {/* Page content */}
            <div
                className={`transition-all duration-300 ${isLoading ? "opacity-0 scale-95" : "opacity-100 scale-100"
                    }`}
            >
                {children}
            </div>
        </>
    )
}
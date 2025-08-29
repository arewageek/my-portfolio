"use client"

import { cn } from "@/lib/utils"

interface LoadingSpinnerProps {
    size?: "sm" | "md" | "lg" | "xl"
    className?: string
    variant?: "default" | "premium" | "minimal"
}

export function LoadingSpinner({
    size = "md",
    className,
    variant = "default"
}: LoadingSpinnerProps) {
    const sizeClasses = {
        sm: "w-4 h-4",
        md: "w-8 h-8",
        lg: "w-12 h-12",
        xl: "w-16 h-16"
    }

    if (variant === "premium") {
        return (
            <div className={cn("relative", sizeClasses[size], className)}>
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-600 via-pink-600 to-purple-600 animate-spin">
                    <div className="absolute inset-1 rounded-full bg-black" />
                </div>
                <div className="absolute inset-2 rounded-full bg-gradient-to-r from-purple-400 to-pink-400 animate-pulse" />
            </div>
        )
    }

    if (variant === "minimal") {
        return (
            <div className={cn("animate-spin", sizeClasses[size], className)}>
                <div className="h-full w-full rounded-full border-2 border-gray-600 border-t-purple-500" />
            </div>
        )
    }

    return (
        <div className={cn("relative", sizeClasses[size], className)}>
            <div className="absolute inset-0 rounded-full border-2 border-purple-500/20" />
            <div className="absolute inset-0 rounded-full border-2 border-transparent border-t-purple-500 animate-spin" />
            <div className="absolute inset-1 rounded-full border border-transparent border-t-pink-500 animate-spin animation-delay-150" />
        </div>
    )
}
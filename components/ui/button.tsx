import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium transition-all duration-200 ease-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/20 focus-visible:ring-offset-2 focus-visible:ring-offset-black disabled:pointer-events-none disabled:opacity-40 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 relative",
  {
    variants: {
      variant: {
        default: "bg-white text-black hover:bg-zinc-200 active:bg-zinc-300 shadow-sm border border-zinc-200/50 backdrop-blur-sm",
        primary: "bg-gradient-to-r from-pink-600 to-purple-600 text-white hover:from-pink-500 hover:to-purple-500 shadow-lg hover:shadow-pink-500/25 active:scale-95 transition-all duration-300 border border-white/10",
        secondary: "bg-zinc-800/80 text-white hover:bg-zinc-700/80 active:bg-zinc-800 shadow-sm border border-white/5 backdrop-blur-sm hover:border-white/10",
        outline: "border border-purple-500/30 bg-transparent text-purple-300 hover:bg-purple-500/10 hover:text-white hover:border-purple-500/50 hover:shadow-[0_0_15px_rgba(168,85,247,0.15)] transition-all duration-300",
        ghost: "text-zinc-400 hover:text-white hover:bg-white/5 active:bg-white/10",
        link: "text-pink-400 hover:text-white underline-offset-4 hover:underline transition-colors",
        destructive: "bg-red-900/50 text-red-200 border border-red-900 hover:bg-red-900/70 hover:text-white",
        accent: "bg-purple-600 text-white hover:bg-purple-700 shadow-lg hover:shadow-purple-500/25 border border-purple-400/20",
      },
      size: {
        default: "h-10 px-4 py-2 rounded-lg",
        sm: "h-8 px-3 py-1 rounded-md text-xs",
        lg: "h-12 px-6 py-3 rounded-lg text-base",
        xl: "h-14 px-8 py-4 rounded-xl text-lg",
        icon: "h-10 w-10 rounded-lg",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
  VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }
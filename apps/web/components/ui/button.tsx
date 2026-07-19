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
        primary: "bg-primary text-black hover:bg-primary/90 shadow-lg hover:shadow-primary/20 active:scale-[0.98] transition-all duration-300 font-bold uppercase tracking-widest",
        secondary: "bg-white/5 text-white hover:bg-white/10 active:bg-white/5 shadow-sm border border-white/10 backdrop-blur-sm transition-all duration-300",
        outline: "border border-white/10 bg-transparent text-white hover:bg-white/5 hover:border-primary/50 transition-all duration-500",
        ghost: "text-zinc-400 hover:text-white hover:bg-white/5 active:bg-white/10",
        link: "text-primary hover:text-white underline-offset-4 hover:underline transition-colors",
        destructive: "bg-red-900/50 text-red-200 border border-red-900 hover:bg-red-900/70 hover:text-white",
        accent: "bg-primary text-black hover:bg-primary/80 shadow-lg hover:shadow-primary/20",
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
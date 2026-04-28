import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cn } from "@/lib/utils"

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  asChild?: boolean
  variant?: "default" | "brand" | "outline" | "ghost" | "whatsapp" | "link"
  size?: "default" | "sm" | "lg" | "icon"
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "default", size = "default", asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    
    // Extracted from class-variance-authority equivalent for simple use
    const baseClass = "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50"
    
    const variants = {
      default: "bg-ink text-white hover:bg-ink/90",
      brand: "bg-brand text-white hover:bg-brand-dark shadow-[0_10px_15px_-3px_rgba(185,28,28,0.2)] hover:shadow-lg",
      outline: "bg-white border border-gray-300 text-ink hover:bg-gray-50",
      ghost: "hover:bg-ink/10 text-ink leading-none",
      link: "text-ink underline-offset-4 hover:underline",
      whatsapp: "bg-whatsapp text-white hover:bg-whatsapp-dark shadow-[0_4px_6px_-1px_rgba(0,0,0,0.1)] hover:shadow-md",
    }
    
    const sizes = {
      default: "h-[52px] rounded-lg px-7 text-[14px] font-bold",
      sm: "h-[40px] rounded-lg px-5 text-[13px] font-semibold",
      lg: "h-[52px] rounded-lg px-7 text-[14px] font-bold",
      icon: "h-10 w-10",
    }
    
    return (
      <Comp
        className={cn(baseClass, variants[variant], sizes[size], className)}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button }
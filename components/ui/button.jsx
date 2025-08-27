import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva } from "class-variance-authority"
import PropTypes from "prop-types"  // Import PropTypes for prop type validation

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-full text-base font-semibold ring-offset-white transition-colors ",
  {
    variants: {
      variant: {
        default: "bg-accent text-primary-foreground hover:bg-accent-hover/70",
        destructive:
          "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        primary: "bg-primary text-white",
        outline:
          "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
      },
      size: {
        default: "h-[44px] px-6",
        md: "h-[48px] px-6",
        lg: "h-[56px] px-6 text-sm uppercase tracking-[2px]",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

const Button = React.forwardRef(({ className, variant, size, asChild = false, ...props }, ref) => {
  const Comp = asChild ? Slot : "button"
  return (
    <Comp
      className={cn(buttonVariants({ variant, size, className }))}
      ref={ref}
      {...props}
    />
  )
})

Button.displayName = "Button"

// PropTypes validation (for JSX)
Button.propTypes = {
  className: PropTypes.string,
  variant: PropTypes.oneOf(["default", "destructive", "primary", "outline"]),
  size: PropTypes.oneOf(["default", "md", "lg"]),
  asChild: PropTypes.bool,
}

export { Button, buttonVariants }

import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full text-sm font-medium transition-all duration-300 ease-[var(--spring)] disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive relative overflow-hidden",
  {
    variants: {
      variant: {
        default:
          "bg-primary text-primary-foreground shadow-[var(--card-shadow)] hover:bg-primary/90 hover:shadow-[var(--hover-shadow)] transform hover:-translate-y-0.5",
        destructive:
          "bg-destructive text-white shadow-[var(--card-shadow)] hover:bg-destructive/90 hover:shadow-[var(--hover-shadow)] focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60 transform hover:-translate-y-0.5",
        outline:
          "border bg-background shadow-[var(--subtle-shadow)] hover:bg-accent hover:text-accent-foreground hover:shadow-[var(--hover-shadow)] dark:bg-input/30 dark:border-input dark:hover:bg-input/50 transform hover:-translate-y-0.5",
        secondary:
          "bg-secondary text-secondary-foreground shadow-[var(--subtle-shadow)] hover:bg-secondary/80 hover:shadow-[var(--hover-shadow)] transform hover:-translate-y-0.5",
        ghost:
          "hover:bg-accent/10 hover:text-accent-foreground dark:hover:bg-accent/20 transform hover:-translate-y-0.5",
        link: "text-primary underline-offset-4 hover:underline",
        gradient: 
          "bg-[var(--creator-accent)] text-white shadow-[var(--card-shadow)] hover:shadow-[var(--glow-shadow)] transform hover:-translate-y-0.5",
        warm: 
          "bg-[var(--warm-gradient)] text-white shadow-[var(--card-shadow)] hover:shadow-[var(--glow-shadow)] transform hover:-translate-y-0.5",
        sage: 
          "bg-[var(--sage-gradient)] text-white shadow-[var(--card-shadow)] hover:shadow-[var(--glow-shadow)] transform hover:-translate-y-0.5",
      },
      size: {
        default: "h-10 px-5 py-2.5 has-[>svg]:px-4",
        sm: "h-9 rounded-full gap-1.5 px-4 has-[>svg]:px-3",
        lg: "h-12 rounded-full px-7 has-[>svg]:px-5 text-base",
        xl: "h-14 rounded-full px-8 has-[>svg]:px-6 text-lg",
        icon: "size-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

function Button({
  className,
  variant,
  size,
  asChild = false,
  ...props
}: React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean
  }) {
  const Comp = asChild ? Slot : "button"

  return (
    <Comp
      data-slot="button"
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  )
}

export { Button, buttonVariants }

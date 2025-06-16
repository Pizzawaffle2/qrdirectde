"use client"

import * as React from "react"
import * as CheckboxPrimitive from "@radix-ui/react-checkbox"
import { CheckIcon } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const checkboxVariants = cva(
  "peer border-input dark:bg-input/30 data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground dark:data-[state=checked]:bg-primary data-[state=checked]:border-primary focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive shrink-0 border outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50 transition-all duration-200 ease-[var(--spring)]",
  {
    variants: {
      variant: {
        default: 
          "shadow-[var(--subtle-shadow)] hover:shadow-[var(--hover-shadow)] focus-visible:shadow-[var(--focus-shadow)]",
        card: 
          "bg-card shadow-[var(--card-shadow)] hover:shadow-[var(--hover-shadow)] focus-visible:shadow-[var(--focus-shadow)]",
      },
      size: {
        default: "size-5 rounded-md",
        sm: "size-4 rounded",
        lg: "size-6 rounded-lg",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface CheckboxProps 
  extends React.ComponentProps<typeof CheckboxPrimitive.Root>,
    VariantProps<typeof checkboxVariants> {
  error?: string;
}

const Checkbox = React.forwardRef<
  React.ElementRef<typeof CheckboxPrimitive.Root>,
  CheckboxProps
>(({ className, variant, size, error, ...props }, ref) => {
  return (
    <div className="flex flex-col gap-1.5">
      <CheckboxPrimitive.Root
        ref={ref}
        data-slot="checkbox"
        className={cn(
          checkboxVariants({ variant, size, className }),
          error && "border-destructive"
        )}
        {...props}
      >
        <AnimatePresence>
          {props.checked && (
            <CheckboxPrimitive.Indicator
              data-slot="checkbox-indicator"
              className="flex items-center justify-center text-current"
              asChild
            >
              <motion.div
                initial={{ scale: 0.5, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.5, opacity: 0 }}
                transition={{ duration: 0.15, ease: "easeOut" }}
              >
                <CheckIcon className="size-3.5" />
              </motion.div>
            </CheckboxPrimitive.Indicator>
          )}
        </AnimatePresence>
      </CheckboxPrimitive.Root>

      {error && (
        <motion.p 
          className="text-sm text-destructive"
          initial={{ opacity: 0, y: -5 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -5 }}
        >
          {error}
        </motion.p>
      )}
    </div>
  )
})
Checkbox.displayName = "Checkbox"

export { Checkbox, checkboxVariants }

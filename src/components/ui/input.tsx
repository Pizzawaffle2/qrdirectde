import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"
import { motion } from "framer-motion"

const inputVariants = cva(
  "file:text-foreground placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground dark:bg-input/30 border-input flex w-full min-w-0 border bg-transparent px-4 py-2 text-base outline-none file:inline-flex file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm transition-all duration-300 ease-[var(--spring)]",
  {
    variants: {
      variant: {
        default: 
          "rounded-xl shadow-[var(--subtle-shadow)] focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] focus-visible:shadow-[var(--focus-shadow)] hover:shadow-[var(--hover-shadow)]",
        minimal: 
          "rounded-xl border-b border-x-0 border-t-0 px-0 shadow-none focus-visible:border-ring focus-visible:ring-0",
        search: 
          "rounded-full pl-10 pr-4 shadow-[var(--subtle-shadow)] focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] focus-visible:shadow-[var(--focus-shadow)] hover:shadow-[var(--hover-shadow)]",
      },
      size: {
        default: "h-11",
        sm: "h-9 text-sm px-3 py-1 rounded-lg",
        lg: "h-12 text-lg",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface InputProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size'>,
    VariantProps<typeof inputVariants> {
  icon?: React.ReactNode;
  error?: string;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, variant, size, icon, error, ...props }, ref) => {
    return (
      <div className="relative w-full">
        {icon && (
          <div className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground">
            {icon}
          </div>
        )}
        <input
          type={type}
          data-slot="input"
          className={cn(
            inputVariants({ variant, size, className }),
            icon && "pl-10",
            error && "border-destructive aria-invalid:border-destructive aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40",
          )}
          ref={ref}
          {...(error ? { "aria-invalid": "true" } : {})}
          {...props}
        />
        {error && (
          <motion.p 
            className="mt-1.5 text-sm text-destructive"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
          >
            {error}
          </motion.p>
        )}
      </div>
    )
  }
)
Input.displayName = "Input"

export { Input, inputVariants }

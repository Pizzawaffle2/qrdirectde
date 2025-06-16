"use client"

import * as React from "react"
import * as RadioGroupPrimitive from "@radix-ui/react-radio-group"
import { CircleIcon } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const radioGroupItemVariants = cva(
  "border-input text-primary focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive dark:bg-input/30 aspect-square shrink-0 rounded-full border outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50 transition-all duration-300 ease-[var(--spring)]",
  {
    variants: {
      variant: {
        default: 
          "shadow-[var(--subtle-shadow)] hover:shadow-[var(--hover-shadow)] focus-visible:shadow-[var(--focus-shadow)]",
        card: 
          "bg-card shadow-[var(--card-shadow)] hover:shadow-[var(--hover-shadow)] focus-visible:shadow-[var(--focus-shadow)]",
      },
      size: {
        default: "size-5",
        sm: "size-4",
        lg: "size-6",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

interface RadioGroupProps 
  extends React.ComponentProps<typeof RadioGroupPrimitive.Root> {
  orientation?: "horizontal" | "vertical";
}

function RadioGroup({
  className,
  orientation = "vertical",
  ...props
}: RadioGroupProps) {
  return (
    <RadioGroupPrimitive.Root
      data-slot="radio-group"
      className={cn(
        "grid gap-3",
        orientation === "horizontal" && "flex flex-wrap gap-4",
        className
      )}
      {...props}
    />
  )
}

interface RadioGroupItemProps 
  extends React.ComponentProps<typeof RadioGroupPrimitive.Item>,
    VariantProps<typeof radioGroupItemVariants> {
}

function RadioGroupItem({
  className,
  variant,
  size,
  ...props
}: RadioGroupItemProps) {
  return (
    <RadioGroupPrimitive.Item
      data-slot="radio-group-item"
      className={cn(
        radioGroupItemVariants({ variant, size, className }),
      )}
      {...props}
    >
      <AnimatePresence>
        {props.checked && (
          <RadioGroupPrimitive.Indicator
            data-slot="radio-group-indicator"
            className="relative flex items-center justify-center"
            asChild
          >
            <motion.div
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0, opacity: 0 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
            >
              <CircleIcon className="fill-primary absolute top-1/2 left-1/2 size-2 -translate-x-1/2 -translate-y-1/2" />
            </motion.div>
          </RadioGroupPrimitive.Indicator>
        )}
      </AnimatePresence>
    </RadioGroupPrimitive.Item>
  )
}

export { RadioGroup, RadioGroupItem, radioGroupItemVariants }

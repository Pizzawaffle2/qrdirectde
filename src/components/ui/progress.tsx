"use client"

import * as React from "react"
import * as ProgressPrimitive from "@radix-ui/react-progress"
import { motion } from "framer-motion"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const progressVariants = cva(
  "relative overflow-hidden rounded-full transition-all duration-300 ease-[var(--spring)]",
  {
    variants: {
      variant: {
        default: "bg-primary/20",
        gradient: "bg-primary/10",
        success: "bg-green-500/20",
        info: "bg-blue-500/20",
        warning: "bg-yellow-500/20",
        error: "bg-destructive/20",
      },
      size: {
        default: "h-2",
        sm: "h-1",
        lg: "h-3",
        xl: "h-4",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

const indicatorVariants = cva(
  "h-full w-full flex-1 transition-all duration-300 ease-[var(--spring)]",
  {
    variants: {
      variant: {
        default: "bg-primary",
        gradient: "bg-[var(--creator-accent)]",
        success: "bg-green-500",
        info: "bg-blue-500",
        warning: "bg-yellow-500",
        error: "bg-destructive",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

interface ProgressProps 
  extends React.ComponentProps<typeof ProgressPrimitive.Root>,
    VariantProps<typeof progressVariants> {
  showValue?: boolean
  valueLabel?: string
  indeterminate?: boolean
}

function Progress({
  className,
  value,
  variant,
  size,
  showValue = false,
  valueLabel,
  indeterminate = false,
  ...props
}: ProgressProps) {
  // For indeterminate animation
  const indeterminateAnimation = {
    x: ["0%", "100%"],
    transition: {
      repeat: Infinity,
      repeatType: "reverse" as const,
      duration: 2,
      ease: "easeInOut",
    },
  };

  return (
    <div className="relative">
      <ProgressPrimitive.Root
        data-slot="progress"
        className={cn(
          progressVariants({ variant, size, className })
        )}
        value={value}
        {...props}
      >
        {indeterminate ? (
          <motion.div
            className={cn(
              indicatorVariants({ variant }),
              "absolute inset-0 w-1/3"
            )}
            animate={indeterminateAnimation}
          />
        ) : (
          <ProgressPrimitive.Indicator
            data-slot="progress-indicator"
            className={cn(indicatorVariants({ variant }))}
            style={{ transform: `translateX(-${100 - (value || 0)}%)` }}
          />
        )}
      </ProgressPrimitive.Root>

      {showValue && (
        <div className="absolute right-0 top-0 -translate-y-full text-xs font-medium pr-1 pb-1">
          {valueLabel ? valueLabel : `${value || 0}%`}
        </div>
      )}
    </div>
  )
}

// Animated progress that increases from 0 to the target value
interface AnimatedProgressProps extends ProgressProps {
  duration?: number
}

function AnimatedProgress({
  value = 0,
  duration = 1,
  ...props
}: AnimatedProgressProps) {
  const [animatedValue, setAnimatedValue] = React.useState(0);

  React.useEffect(() => {
    // Reset animation when value changes
    setAnimatedValue(0);

    // Animate to the new value
    const timeout = setTimeout(() => {
      setAnimatedValue(value);
    }, 100);

    return () => clearTimeout(timeout);
  }, [value]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <Progress
        value={animatedValue}
        transition={{ duration }}
        {...props}
      />
    </motion.div>
  );
}

export { Progress, AnimatedProgress, progressVariants, indicatorVariants }

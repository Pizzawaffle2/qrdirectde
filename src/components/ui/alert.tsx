"use client"

import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { motion } from "framer-motion"
import { AlertCircle, CheckCircle, Info, XCircle } from "lucide-react"

import { cn } from "@/lib/utils"

const alertVariants = cva(
  "relative w-full rounded-xl border p-4 text-sm shadow-[var(--subtle-shadow)] transition-all duration-300 ease-[var(--spring)] flex items-start gap-3",
  {
    variants: {
      variant: {
        default: "bg-card text-card-foreground border-border",
        success: "bg-green-500/10 text-green-600 dark:text-green-400 border-green-500/20",
        info: "bg-blue-500/10 text-blue-600 dark:text-blue-400 border-blue-500/20",
        warning: "bg-yellow-500/10 text-yellow-600 dark:text-yellow-400 border-yellow-500/20",
        error: "bg-destructive/10 text-destructive border-destructive/20",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

interface AlertProps 
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof alertVariants> {
  icon?: React.ReactNode
  animate?: boolean
}

function Alert({
  className,
  variant,
  icon,
  animate = true,
  children,
  ...props
}: AlertProps) {
  // Default icons based on variant
  const getDefaultIcon = () => {
    if (!variant || variant === "default") return null;

    switch (variant) {
      case "success":
        return <CheckCircle className="h-5 w-5" />;
      case "info":
        return <Info className="h-5 w-5" />;
      case "warning":
        return <AlertCircle className="h-5 w-5" />;
      case "error":
        return <XCircle className="h-5 w-5" />;
      default:
        return null;
    }
  };

  const alertContent = (
    <div
      data-slot="alert"
      role="alert"
      className={cn(alertVariants({ variant }), className)}
      {...props}
    >
      {(icon || getDefaultIcon()) && (
        <div className="shrink-0 mt-0.5">
          {icon || getDefaultIcon()}
        </div>
      )}
      <div className="flex-1 space-y-1.5">
        {children}
      </div>
    </div>
  );

  // If animation is enabled, wrap in motion.div
  if (animate) {
    return (
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -10 }}
        transition={{ duration: 0.3, ease: "easeOut" }}
      >
        {alertContent}
      </motion.div>
    );
  }

  return alertContent;
}

function AlertTitle({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="alert-title"
      className={cn(
        "font-medium leading-none tracking-tight",
        className
      )}
      {...props}
    />
  )
}

function AlertDescription({
  className,
  ...props
}: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="alert-description"
      className={cn(
        "text-sm opacity-90 leading-relaxed",
        className
      )}
      {...props}
    />
  )
}

export { Alert, AlertTitle, AlertDescription, alertVariants }

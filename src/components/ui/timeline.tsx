"use client"

import * as React from "react"
import { motion, HTMLMotionProps } from "framer-motion"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const timelineVariants = cva(
  "relative",
  {
    variants: {
      variant: {
        default: "pl-6 before:absolute before:left-0 before:top-0 before:h-full before:w-px before:bg-border",
        centered: "before:absolute before:left-1/2 before:-translate-x-1/2 before:top-0 before:h-full before:w-px before:bg-border",
        alternating: "before:absolute before:left-1/2 before:-translate-x-1/2 before:top-0 before:h-full before:w-px before:bg-border",
      },
      size: {
        default: "gap-6",
        sm: "gap-4 text-sm",
        lg: "gap-8 text-base",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

interface TimelineProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof timelineVariants> {}

function Timeline({
  className,
  variant,
  size,
  ...props
}: TimelineProps) {
  return (
    <div
      className={cn(
        timelineVariants({ variant, size }),
        variant === "default" ? "space-y-6" : "space-y-0",
        className
      )}
      {...props}
    />
  )
}

const timelineItemVariants = cva(
  "relative",
  {
    variants: {
      variant: {
        default: "pl-0",
        centered: "grid grid-cols-[1fr_auto_1fr] items-start gap-4",
        alternating: "grid grid-cols-[1fr_auto_1fr] items-start gap-4",
      },
      position: {
        left: "[&>div:first-child]:col-start-1 [&>div:first-child]:text-right [&>div:last-child]:col-start-3 [&>div:last-child]:text-left",
        right: "[&>div:first-child]:col-start-3 [&>div:first-child]:text-left [&>div:last-child]:col-start-1 [&>div:last-child]:text-right",
      },
      active: {
        true: "",
        false: "",
      },
    },
    compoundVariants: [
      {
        variant: "default",
        active: true,
        className: "before:border-primary before:bg-primary",
      },
      {
        variant: ["centered", "alternating"],
        active: true,
        className: "[&>div:nth-child(2)]:border-primary [&>div:nth-child(2)]:bg-primary",
      },
    ],
    defaultVariants: {
      variant: "default",
      position: "left",
      active: false,
    },
  }
)

interface TimelineItemProps extends HTMLMotionProps<'div'> {
  variant?: "default" | "centered";
  position?: "left" | "right";
  active?: boolean;
  animate?: boolean;
  index?: number;
}

function TimelineItem({
  className,
  variant,
  position,
  active,
  animate = true,
  index = 0,
  ...props
}: TimelineItemProps) {
  const baseClasses = cn(timelineItemVariants({ variant, position, active, className }));

  if (animate) {
    return (
      <motion.div
        className={baseClasses}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ 
          duration: 0.4, 
          ease: "easeOut",
          delay: index * 0.1 // Stagger effect
        }}
        {...props}
      />
    );
  }

  return (
    <div
      className={baseClasses}
      {...(props as React.HTMLAttributes<HTMLDivElement>)}
    />
  );
}

function TimelineDot({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        "absolute -left-[13px] top-1 h-6 w-6 rounded-full border-4 border-border bg-background z-10",
        className
      )}
      {...props}
    />
  );
}

function TimelineCenteredDot({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        "h-6 w-6 rounded-full border-4 border-border bg-background z-10 col-start-2 row-start-1",
        className
      )}
      {...props}
    />
  );
}

function TimelineContent({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        "relative",
        className
      )}
      {...props}
    />
  );
}

function TimelineTitle({
  className,
  ...props
}: React.HTMLAttributes<HTMLHeadingElement>) {
  return (
    <h4
      className={cn(
        "text-base font-medium leading-none tracking-tight mb-1",
        className
      )}
      {...props}
    />
  );
}

function TimelineDescription({
  className,
  ...props
}: React.HTMLAttributes<HTMLParagraphElement>) {
  return (
    <p
      className={cn(
        "text-sm text-muted-foreground",
        className
      )}
      {...props}
    />
  );
}

function TimelineTime({
  className,
  ...props
}: React.HTMLAttributes<HTMLTimeElement>) {
  return (
    <time
      className={cn(
        "text-xs text-muted-foreground block mt-1",
        className
      )}
      {...props}
    />
  );
}

// Container for default timeline items
function TimelineItemContainer({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        "relative border rounded-xl p-4 shadow-[var(--subtle-shadow)] bg-card",
        className
      )}
      {...props}
    />
  );
}

export {
  Timeline,
  TimelineItem,
  TimelineDot,
  TimelineCenteredDot,
  TimelineContent,
  TimelineTitle,
  TimelineDescription,
  TimelineTime,
  TimelineItemContainer,
  timelineVariants,
  timelineItemVariants,
}
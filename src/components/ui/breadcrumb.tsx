"use client"

import * as React from "react"
import { ChevronRight, Home } from "lucide-react"
import { motion } from "framer-motion"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const breadcrumbVariants = cva(
  "flex items-center gap-1 text-sm text-muted-foreground transition-all duration-300 ease-[var(--spring)]",
  {
    variants: {
      variant: {
        default: "",
        pills: "gap-2",
        cards: "gap-2",
      },
      size: {
        default: "text-sm",
        sm: "text-xs",
        lg: "text-base",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

interface BreadcrumbProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof breadcrumbVariants> {
  separator?: React.ReactNode
  home?: boolean
}

function Breadcrumb({
  className,
  separator = <ChevronRight className="h-4 w-4 text-muted-foreground/50" />,
  home = true,
  variant,
  size,
  ...props
}: BreadcrumbProps) {
  return (
    <nav aria-label="Breadcrumb">
      <ol
        className={cn(
          breadcrumbVariants({ variant, size, className })
        )}
        {...props}
      >
        {props.children}
      </ol>
    </nav>
  )
}

const breadcrumbItemVariants = cva(
  "inline-flex items-center gap-1 transition-all duration-300 ease-[var(--spring)]",
  {
    variants: {
      variant: {
        default: "hover:text-foreground",
        pills: "px-3 py-1 rounded-full hover:bg-muted hover:text-foreground",
        cards: "px-3 py-1 rounded-lg hover:bg-muted hover:text-foreground",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

interface BreadcrumbItemProps
  extends React.LiHTMLAttributes<HTMLLIElement>,
    VariantProps<typeof breadcrumbItemVariants> {
  href?: string
  isCurrent?: boolean
  icon?: React.ReactNode
}

function BreadcrumbItem({
  className,
  href,
  isCurrent,
  icon,
  variant,
  ...props
}: BreadcrumbItemProps) {
  const Component = isCurrent ? "span" : href ? "a" : "span"

  return (
    <li
      className={cn(
        "flex items-center",
        className
      )}
      {...props}
    >
      <Component
        className={cn(
          breadcrumbItemVariants({ variant }),
          isCurrent && "font-medium text-foreground pointer-events-none",
          href && "hover:underline underline-offset-4"
        )}
        href={href}
        aria-current={isCurrent ? "page" : undefined}
      >
        {icon && <span className="mr-1">{icon}</span>}
        {props.children}
      </Component>
      {!isCurrent && (
        <span className="mx-1 text-muted-foreground/50">
          <ChevronRight className="h-4 w-4" />
        </span>
      )}
    </li>
  )
}

function BreadcrumbSeparator({
  className,
  ...props
}: React.ComponentProps<"li">) {
  return (
    <li
      className={cn("mx-1 text-muted-foreground/50", className)}
      aria-hidden="true"
      {...props}
    />
  )
}

function BreadcrumbEllipsis({
  className,
  ...props
}: React.ComponentProps<"span">) {
  return (
    <span
      className={cn("mx-1 text-muted-foreground", className)}
      aria-hidden="true"
      {...props}
    >
      &#8230;
    </span>
  )
}

// Animation variants for breadcrumb items
const itemVariants = {
  hidden: { opacity: 0, x: -10 },
  visible: (custom: number) => ({
    opacity: 1,
    x: 0,
    transition: {
      delay: custom * 0.1,
      duration: 0.3,
      ease: "easeOut",
    },
  }),
}

// Animated breadcrumb item
function AnimatedBreadcrumbItem({
  index = 0,
  ...props
}: BreadcrumbItemProps & { index?: number }) {
  return (
    <motion.li
      variants={itemVariants}
      initial="hidden"
      animate="visible"
      custom={index}
      className={cn(
        "flex items-center",
        props.className
      )}
    >
      <BreadcrumbItem {...props} />
    </motion.li>
  )
}

export {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbSeparator,
  BreadcrumbEllipsis,
  AnimatedBreadcrumbItem,
  breadcrumbVariants,
  breadcrumbItemVariants,
}
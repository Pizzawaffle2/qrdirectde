"use client"

import * as React from "react"
import { ChevronLeft, ChevronRight, MoreHorizontal } from "lucide-react"
import { motion } from "framer-motion"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"
import { Button } from "./button"

const paginationVariants = cva(
  "flex items-center gap-1 transition-all duration-300 ease-[var(--spring)]",
  {
    variants: {
      variant: {
        default: "",
        rounded: "",
        outline: "",
        ghost: "",
      },
      size: {
        default: "",
        sm: "gap-0.5",
        lg: "gap-2",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

interface PaginationProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof paginationVariants> {}

function Pagination({
  className,
  variant,
  size,
  ...props
}: PaginationProps) {
  return (
    <nav
      role="navigation"
      aria-label="Pagination"
      className={cn(
        paginationVariants({ variant, size, className })
      )}
      {...props}
    />
  )
}

const paginationItemVariants = cva(
  "inline-flex items-center justify-center text-sm transition-all duration-300 ease-[var(--spring)]",
  {
    variants: {
      variant: {
        default: "bg-transparent hover:bg-muted text-foreground",
        rounded: "bg-transparent hover:bg-muted text-foreground rounded-full",
        outline: "bg-transparent border border-input hover:bg-muted text-foreground",
        ghost: "bg-transparent hover:bg-transparent hover:text-foreground text-muted-foreground",
      },
      size: {
        default: "h-9 w-9",
        sm: "h-7 w-7 text-xs",
        lg: "h-11 w-11",
      },
      isActive: {
        true: "bg-primary text-primary-foreground hover:bg-primary/90 pointer-events-none",
        false: "",
      },
    },
    compoundVariants: [
      {
        variant: "rounded",
        isActive: true,
        className: "bg-primary text-primary-foreground hover:bg-primary/90",
      },
      {
        variant: "outline",
        isActive: true,
        className: "bg-primary text-primary-foreground hover:bg-primary/90 border-primary",
      },
      {
        variant: "ghost",
        isActive: true,
        className: "bg-transparent text-primary hover:text-primary font-medium",
      },
    ],
    defaultVariants: {
      variant: "default",
      size: "default",
      isActive: false,
    },
  }
)

interface PaginationItemProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof paginationItemVariants> {
  isActive?: boolean
}

function PaginationItem({
  className,
  variant,
  size,
  isActive,
  ...props
}: PaginationItemProps) {
  return (
    <button
      className={cn(
        paginationItemVariants({ variant, size, isActive, className }),
        props.disabled && "opacity-50 pointer-events-none"
      )}
      aria-current={isActive ? "page" : undefined}
      {...props}
    />
  )
}

function PaginationPrevious({
  className,
  variant,
  size,
  ...props
}: React.ButtonHTMLAttributes<HTMLButtonElement> &
  VariantProps<typeof paginationItemVariants>) {
  return (
    <PaginationItem
      aria-label="Go to previous page"
      variant={variant}
      size={size}
      className={cn("gap-1", className)}
      {...props}
    >
      <ChevronLeft className="h-4 w-4" />
      <span className="sr-only">Previous</span>
    </PaginationItem>
  )
}

function PaginationNext({
  className,
  variant,
  size,
  ...props
}: React.ButtonHTMLAttributes<HTMLButtonElement> &
  VariantProps<typeof paginationItemVariants>) {
  return (
    <PaginationItem
      aria-label="Go to next page"
      variant={variant}
      size={size}
      className={cn("gap-1", className)}
      {...props}
    >
      <span className="sr-only">Next</span>
      <ChevronRight className="h-4 w-4" />
    </PaginationItem>
  )
}

function PaginationEllipsis({
  className,
  ...props
}: React.HTMLAttributes<HTMLSpanElement>) {
  return (
    <span
      aria-hidden
      className={cn("flex h-9 w-9 items-center justify-center", className)}
      {...props}
    >
      <MoreHorizontal className="h-4 w-4" />
      <span className="sr-only">More pages</span>
    </span>
  )
}

// Animation variants for pagination
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.05,
      delayChildren: 0.1,
    },
  },
}

const itemAnimationVariants = {
  hidden: { opacity: 0, y: 10 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.3,
      ease: "easeOut",
    },
  },
}

interface AnimatedPaginationProps extends PaginationProps {
  children: React.ReactNode
}

function AnimatedPagination({
  children,
  ...props
}: AnimatedPaginationProps) {
  return (
    <motion.nav
      role="navigation"
      aria-label="Pagination"
      className={cn(
        paginationVariants({ variant: props.variant, size: props.size, className: props.className })
      )}
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      {...props}
    >
      {React.Children.map(children, (child) => {
        if (!React.isValidElement(child)) return child;
        
        return (
          <motion.div
            variants={itemAnimationVariants}
            className="flex"
          >
            {child}
          </motion.div>
        );
      })}
    </motion.nav>
  )
}

export {
  Pagination,
  PaginationItem,
  PaginationPrevious,
  PaginationNext,
  PaginationEllipsis,
  AnimatedPagination,
  paginationVariants,
  paginationItemVariants,
}
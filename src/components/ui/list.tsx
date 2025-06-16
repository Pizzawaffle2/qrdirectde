"use client"

import * as React from "react"
import { motion, HTMLMotionProps } from "framer-motion"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const listVariants = cva(
  "w-full transition-all duration-300 ease-[var(--spring)]",
  {
    variants: {
      variant: {
        default: "space-y-1",
        separated: "divide-y divide-border",
        bordered: "border rounded-xl divide-y divide-border",
        cards: "space-y-3",
      },
      size: {
        default: "",
        sm: "text-sm",
        lg: "text-base",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

interface ListProps
  extends React.HTMLAttributes<HTMLUListElement>,
    VariantProps<typeof listVariants> {}

function List({
  className,
  variant,
  size,
  ...props
}: ListProps) {
  return (
    <ul
      className={cn(listVariants({ variant, size, className }))}
      {...props}
    />
  )
}

const listItemVariants = cva(
  "relative transition-all duration-300 ease-[var(--spring)]",
  {
    variants: {
      variant: {
        default: "rounded-lg hover:bg-muted/50",
        separated: "py-3 first:pt-0 last:pb-0",
        bordered: "p-4 first:rounded-t-xl last:rounded-b-xl",
        cards: "border rounded-xl p-4 shadow-[var(--subtle-shadow)] hover:shadow-[var(--hover-shadow)] hover:-translate-y-0.5 bg-card",
      },
      active: {
        true: "bg-primary/10 hover:bg-primary/15",
        false: "",
      },
    },
    defaultVariants: {
      variant: "default",
      active: false,
    },
  }
)

interface ListItemProps
  extends HTMLMotionProps<"li">,
    VariantProps<typeof listItemVariants> {
  animate?: boolean;
  index?: number;
}

function ListItem({
  className,
  variant,
  active,
  animate = true,
  index = 0,
  ...props
}: ListItemProps) {
  const baseClasses = cn(listItemVariants({ variant, active, className }));

  if (animate) {
    return (
      <motion.li
        className={baseClasses}
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ 
          duration: 0.3, 
          ease: "easeOut",
          delay: index * 0.05 // Stagger effect
        }}
        whileHover={{ 
          scale: variant === "cards" ? 1.02 : 1,
          transition: { duration: 0.2 }
        }}
        {...props}
      />
    );
  }

  return (
    <li
      className={baseClasses}
      {...(props as React.LiHTMLAttributes<HTMLLIElement>)}
    />
  );
}

function ListItemIcon({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        "shrink-0 mr-3 text-muted-foreground",
        className
      )}
      {...props}
    />
  );
}

function ListItemContent({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        "flex-1 min-w-0",
        className
      )}
      {...props}
    />
  );
}

function ListItemTitle({
  className,
  ...props
}: React.HTMLAttributes<HTMLHeadingElement>) {
  return (
    <h4
      className={cn(
        "text-base font-medium leading-none tracking-tight",
        className
      )}
      {...props}
    />
  );
}

function ListItemDescription({
  className,
  ...props
}: React.HTMLAttributes<HTMLParagraphElement>) {
  return (
    <p
      className={cn(
        "text-sm text-muted-foreground mt-1.5",
        className
      )}
      {...props}
    />
  );
}

function ListItemAction({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        "shrink-0 ml-3",
        className
      )}
      {...props}
    />
  );
}

// Container for horizontal list items (icon, content, action)
function ListItemContainer({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        "flex items-center",
        className
      )}
      {...props}
    />
  );
}

export {
  List,
  ListItem,
  ListItemIcon,
  ListItemContent,
  ListItemTitle,
  ListItemDescription,
  ListItemAction,
  ListItemContainer,
  listVariants,
  listItemVariants,
}
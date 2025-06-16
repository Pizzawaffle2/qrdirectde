"use client"

import * as React from "react"
import * as TabsPrimitive from "@radix-ui/react-tabs"
import { motion } from "framer-motion"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

function Tabs({
  className,
  ...props
}: React.ComponentProps<typeof TabsPrimitive.Root>) {
  return (
    <TabsPrimitive.Root
      data-slot="tabs"
      className={cn("flex flex-col gap-4", className)}
      {...props}
    />
  )
}

const tabsListVariants = cva(
  "inline-flex items-center justify-center w-fit transition-all duration-300 ease-[var(--spring)]",
  {
    variants: {
      variant: {
        default: 
          "bg-muted text-muted-foreground rounded-xl p-1 shadow-[var(--subtle-shadow)]",
        underline: 
          "border-b border-border gap-4 w-full",
        pills: 
          "gap-2",
        cards: 
          "gap-2",
      },
      size: {
        default: "h-11",
        sm: "h-9",
        lg: "h-12",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

interface TabsListProps 
  extends React.ComponentProps<typeof TabsPrimitive.List>,
    VariantProps<typeof tabsListVariants> {}

function TabsList({
  className,
  variant,
  size,
  ...props
}: TabsListProps) {
  return (
    <TabsPrimitive.List
      data-slot="tabs-list"
      data-variant={variant}
      className={cn(
        tabsListVariants({ variant, size, className })
      )}
      {...props}
    />
  )
}

const tabsTriggerVariants = cva(
  "inline-flex items-center justify-center gap-1.5 text-sm font-medium whitespace-nowrap transition-all duration-300 ease-[var(--spring)] focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
  {
    variants: {
      variant: {
        default: 
          "data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow-[var(--subtle-shadow)] border border-transparent rounded-lg px-3 py-1.5 h-9 flex-1 data-[state=active]:border-transparent",
        underline: 
          "border-b-2 border-transparent px-2 py-2 data-[state=active]:border-primary data-[state=active]:text-foreground text-muted-foreground hover:text-foreground",
        pills: 
          "rounded-full px-4 py-2 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground text-muted-foreground hover:text-foreground hover:bg-muted/50 shadow-[var(--subtle-shadow)] data-[state=active]:shadow-[var(--hover-shadow)]",
        cards: 
          "rounded-xl px-4 py-2.5 data-[state=active]:bg-card data-[state=active]:text-card-foreground text-muted-foreground hover:text-foreground shadow-[var(--subtle-shadow)] data-[state=active]:shadow-[var(--hover-shadow)] border border-transparent data-[state=active]:border-border",
      },
      size: {
        default: "",
        sm: "text-xs px-2.5 py-1",
        lg: "text-base px-5 py-2.5",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

interface TabsTriggerProps 
  extends React.ComponentProps<typeof TabsPrimitive.Trigger>,
    VariantProps<typeof tabsTriggerVariants> {}

function TabsTrigger({
  className,
  variant,
  size,
  ...props
}: TabsTriggerProps) {
  return (
    <TabsPrimitive.Trigger
      data-slot="tabs-trigger"
      data-variant={variant}
      className={cn(
        tabsTriggerVariants({ variant, size, className })
      )}
      {...props}
    />
  )
}

function TabsContent({
  className,
  ...props
}: React.ComponentProps<typeof TabsPrimitive.Content>) {
  return (
    <TabsPrimitive.Content
      data-slot="tabs-content"
      className={cn(
        "outline-none mt-2",
        className
      )}
      asChild
    >
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 10 }}
        transition={{
          duration: 0.3,
          ease: "easeOut",
        }}
      >
        {props.children}
      </motion.div>
    </TabsPrimitive.Content>
  )
}

export { Tabs, TabsList, TabsTrigger, TabsContent, tabsListVariants, tabsTriggerVariants }

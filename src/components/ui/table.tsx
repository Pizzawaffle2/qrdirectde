"use client"

import * as React from "react"
import { motion } from "framer-motion"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const tableVariants = cva(
  "w-full caption-bottom text-sm transition-all duration-300 ease-[var(--spring)]",
  {
    variants: {
      variant: {
        default: "border-separate border-spacing-0",
        bordered: "border-collapse border",
        striped: "border-separate border-spacing-0",
        minimal: "border-separate border-spacing-0",
      },
      rounded: {
        true: "rounded-xl overflow-hidden",
        false: "",
      },
    },
    defaultVariants: {
      variant: "default",
      rounded: false,
    },
  }
)

interface TableProps 
  extends React.ComponentProps<"table">,
    VariantProps<typeof tableVariants> {
  containerClassName?: string;
}

function Table({ 
  className, 
  variant, 
  rounded,
  containerClassName,
  ...props 
}: TableProps) {
  return (
    <div
      data-slot="table-container"
      className={cn(
        "relative w-full overflow-x-auto",
        rounded && "rounded-xl",
        variant === "bordered" && "border rounded-xl",
        containerClassName
      )}
    >
      <table
        data-slot="table"
        data-variant={variant}
        className={cn(tableVariants({ variant, rounded, className }))}
        {...props}
      />
    </div>
  )
}

function TableHeader({ className, ...props }: React.ComponentProps<"thead">) {
  return (
    <thead
      data-slot="table-header"
      className={cn(
        "bg-muted/30 [&_tr]:border-b [&_tr]:border-border",
        className
      )}
      {...props}
    />
  )
}

function TableBody({ 
  className, 
  ...props 
}: React.ComponentProps<"tbody">) {
  return (
    <tbody
      data-slot="table-body"
      className={cn(
        "[&_tr:last-child]:border-0 [&_tr:nth-child(even)]:data-[variant=striped]:bg-muted/20",
        className
      )}
      {...props}
    />
  )
}

function TableFooter({ className, ...props }: React.ComponentProps<"tfoot">) {
  return (
    <tfoot
      data-slot="table-footer"
      className={cn(
        "bg-muted/30 border-t border-border font-medium [&>tr]:last:border-b-0",
        className
      )}
      {...props}
    />
  )
}

interface TableRowProps extends React.ComponentProps<"tr"> {
  isSelected?: boolean;
  animate?: boolean;
}

function TableRow({ 
  className, 
  isSelected,
  animate = true,
  ...props 
}: TableRowProps) {
  const baseClasses = cn(
    "data-[variant=default]:border-b data-[variant=bordered]:border-b data-[variant=striped]:border-b data-[variant=minimal]:border-0 border-border transition-all duration-300 ease-[var(--spring)]",
    "hover:bg-muted/30",
    isSelected && "bg-primary/10 hover:bg-primary/15",
    className
  );

  if (animate) {
    return (
      <motion.tr
        data-slot="table-row"
        data-state={isSelected ? "selected" : undefined}
        className={baseClasses}
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, ease: "easeOut" }}
        whileHover={{ 
          backgroundColor: "var(--muted)",
          transition: { duration: 0.2 }
        }}
        {...props}
      />
    );
  }

  return (
    <tr
      data-slot="table-row"
      data-state={isSelected ? "selected" : undefined}
      className={baseClasses}
      {...props}
    />
  );
}

function TableHead({ className, ...props }: React.ComponentProps<"th">) {
  return (
    <th
      data-slot="table-head"
      className={cn(
        "text-foreground h-11 px-4 py-3 text-left align-middle font-medium [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-[2px]",
        className
      )}
      {...props}
    />
  )
}

function TableCell({ className, ...props }: React.ComponentProps<"td">) {
  return (
    <td
      data-slot="table-cell"
      className={cn(
        "px-4 py-3 align-middle [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-[2px]",
        className
      )}
      {...props}
    />
  )
}

function TableCaption({
  className,
  ...props
}: React.ComponentProps<"caption">) {
  return (
    <caption
      data-slot="table-caption"
      className={cn("text-muted-foreground mt-4 text-sm", className)}
      {...props}
    />
  )
}

export {
  Table,
  TableHeader,
  TableBody,
  TableFooter,
  TableHead,
  TableRow,
  TableCell,
  TableCaption,
  tableVariants,
}

"use client"

import * as React from "react"
import { XIcon } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

interface DrawerProps {
  open: boolean
  onOpenChange: (open: boolean) => void
  children: React.ReactNode
}

function Drawer({ open, onOpenChange, children }: DrawerProps) {
  // Close on escape key
  React.useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onOpenChange(false)
      }
    }
    
    if (open) {
      document.addEventListener("keydown", handleEscape)
    }
    
    return () => {
      document.removeEventListener("keydown", handleEscape)
    }
  }, [open, onOpenChange])

  return (
    <AnimatePresence>
      {open && (
        <>
          <DrawerOverlay onClose={() => onOpenChange(false)} />
          {children}
        </>
      )}
    </AnimatePresence>
  )
}

function DrawerOverlay({ onClose }: { onClose: () => void }) {
  return (
    <motion.div
      className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
      onClick={onClose}
    />
  )
}

function DrawerTrigger({ onClick, ...props }: React.ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button
      type="button"
      onClick={onClick}
      {...props}
    />
  )
}

const drawerContentVariants = cva(
  "fixed z-50 bg-background border shadow-[var(--card-shadow)] flex flex-col max-h-screen transition-all duration-300 ease-[var(--spring)]",
  {
    variants: {
      side: {
        left: "left-0 top-0 h-full border-r",
        right: "right-0 top-0 h-full border-l",
        top: "top-0 left-0 w-full border-b",
        bottom: "bottom-0 left-0 w-full border-t",
      },
      size: {
        sm: "w-64 sm:w-80",
        default: "w-[280px] sm:w-[320px]",
        lg: "w-[320px] sm:w-[400px]",
        xl: "w-[400px] sm:w-[500px]",
        full: "w-full",
      },
    },
    compoundVariants: [
      {
        side: ["top", "bottom"],
        size: "sm",
        className: "h-1/4",
      },
      {
        side: ["top", "bottom"],
        size: "default",
        className: "h-1/3",
      },
      {
        side: ["top", "bottom"],
        size: "lg",
        className: "h-1/2",
      },
      {
        side: ["top", "bottom"],
        size: "xl",
        className: "h-2/3",
      },
      {
        side: ["top", "bottom"],
        size: "full",
        className: "h-screen",
      },
    ],
    defaultVariants: {
      side: "right",
      size: "default",
    },
  }
)

interface DrawerContentProps 
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof drawerContentVariants> {
  showCloseButton?: boolean
  onClose?: () => void
}

function DrawerContent({
  className,
  children,
  side,
  size,
  showCloseButton = true,
  onClose,
  ...props
}: DrawerContentProps) {
  // Animation variants based on the side
  const getAnimationVariants = () => {
    switch (side) {
      case "left":
        return {
          hidden: { x: "-100%", opacity: 0 },
          visible: { 
            x: 0, 
            opacity: 1,
            transition: { 
              type: "spring",
              damping: 25,
              stiffness: 300
            }
          },
          exit: { 
            x: "-100%", 
            opacity: 0,
            transition: { 
              duration: 0.2,
              ease: "easeIn"
            }
          }
        };
      case "top":
        return {
          hidden: { y: "-100%", opacity: 0 },
          visible: { 
            y: 0, 
            opacity: 1,
            transition: { 
              type: "spring",
              damping: 25,
              stiffness: 300
            }
          },
          exit: { 
            y: "-100%", 
            opacity: 0,
            transition: { 
              duration: 0.2,
              ease: "easeIn"
            }
          }
        };
      case "bottom":
        return {
          hidden: { y: "100%", opacity: 0 },
          visible: { 
            y: 0, 
            opacity: 1,
            transition: { 
              type: "spring",
              damping: 25,
              stiffness: 300
            }
          },
          exit: { 
            y: "100%", 
            opacity: 0,
            transition: { 
              duration: 0.2,
              ease: "easeIn"
            }
          }
        };
      default: // right
        return {
          hidden: { x: "100%", opacity: 0 },
          visible: { 
            x: 0, 
            opacity: 1,
            transition: { 
              type: "spring",
              damping: 25,
              stiffness: 300
            }
          },
          exit: { 
            x: "100%", 
            opacity: 0,
            transition: { 
              duration: 0.2,
              ease: "easeIn"
            }
          }
        };
    }
  };

  return (
    <motion.div
      className={cn(drawerContentVariants({ side, size, className }))}
      variants={getAnimationVariants()}
      initial="hidden"
      animate="visible"
      exit="exit"
      {...props}
    >
      {children}
      {showCloseButton && onClose && (
        <button
          className="absolute top-4 right-4 rounded-full p-1.5 text-foreground/50 opacity-70 ring-offset-background transition-all hover:text-foreground hover:opacity-100 hover:bg-muted focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none"
          onClick={onClose}
        >
          <XIcon className="h-4 w-4" />
          <span className="sr-only">Close</span>
        </button>
      )}
    </motion.div>
  )
}

function DrawerHeader({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn("flex flex-col gap-2 px-6 pt-6 pb-2", className)}
      {...props}
    />
  )
}

function DrawerTitle({ className, ...props }: React.HTMLAttributes<HTMLHeadingElement>) {
  return (
    <h2
      className={cn("text-xl font-semibold leading-none tracking-tight", className)}
      {...props}
    />
  )
}

function DrawerDescription({ className, ...props }: React.HTMLAttributes<HTMLParagraphElement>) {
  return (
    <p
      className={cn("text-sm text-muted-foreground", className)}
      {...props}
    />
  )
}

function DrawerBody({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn("flex-1 overflow-auto p-6", className)}
      {...props}
    />
  )
}

function DrawerFooter({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn("flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2 border-t p-6", className)}
      {...props}
    />
  )
}

export {
  Drawer,
  DrawerTrigger,
  DrawerOverlay,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerDescription,
  DrawerBody,
  DrawerFooter,
  drawerContentVariants,
}
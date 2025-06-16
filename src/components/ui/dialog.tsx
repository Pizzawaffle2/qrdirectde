"use client"

import * as React from "react"
import * as DialogPrimitive from "@radix-ui/react-dialog"
import { XIcon } from "lucide-react"
import { motion, AnimatePresence, easeOut } from "framer-motion"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

function Dialog({
  ...props
}: React.ComponentProps<typeof DialogPrimitive.Root>) {
  return <DialogPrimitive.Root data-slot="dialog" {...props} />
}

function DialogTrigger({
  ...props
}: React.ComponentProps<typeof DialogPrimitive.Trigger>) {
  return <DialogPrimitive.Trigger data-slot="dialog-trigger" {...props} />
}

function DialogPortal({
  ...props
}: React.ComponentProps<typeof DialogPrimitive.Portal>) {
  return <DialogPrimitive.Portal data-slot="dialog-portal" {...props} />
}

function DialogClose({
  ...props
}: React.ComponentProps<typeof DialogPrimitive.Close>) {
  return <DialogPrimitive.Close data-slot="dialog-close" {...props} />
}

const overlayVariants = {
  hidden: { opacity: 0 },
  visible: { 
    opacity: 1,
    transition: { 
      duration: 0.3,
      ease: easeOut
    }
  },
  exit: { 
    opacity: 0,
    transition: { 
      duration: 0.2,
      ease: "easeIn" as const
    }
  }
};

function DialogOverlay({
  className,
  ...props
}: React.ComponentProps<typeof DialogPrimitive.Overlay>) {
  return (
    <DialogPrimitive.Overlay
      data-slot="dialog-overlay"
      className={cn(
        "fixed inset-0 z-50 bg-black/50 backdrop-blur-sm",
        className
      )}
      asChild
      {...props}
    >
      <motion.div
        variants={overlayVariants}
        initial="hidden"
        animate="visible"
        exit="exit"
        className="h-full w-full"
      />
    </DialogPrimitive.Overlay>
  )
}

const contentVariants = cva(
  "bg-background fixed top-[50%] left-[50%] z-50 grid w-full translate-x-[-50%] translate-y-[-50%] gap-4 border shadow-[var(--card-shadow)] p-6 transition-all duration-300 ease-[var(--spring)]",
  {
    variants: {
      variant: {
        default: "max-w-[calc(100%-2rem)] sm:max-w-lg rounded-xl",
        wide: "max-w-[calc(100%-2rem)] sm:max-w-2xl rounded-xl",
        full: "max-w-[calc(100%-2rem)] sm:max-w-4xl rounded-xl",
        sheet: "h-[85vh] max-w-[calc(100%-2rem)] sm:max-w-lg rounded-t-xl rounded-b-none bottom-0 top-auto translate-y-0",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

const contentAnimationVariants = {
  hidden: { 
    opacity: 0,
    scale: 0.95,
    y: "-40%"
  },
  visible: { 
    opacity: 1,
    scale: 1,
    y: "-50%",
    transition: { 
      type: "spring" as const,
      damping: 25,
      stiffness: 300
    }
  },
  exit: { 
    opacity: 0,
    scale: 0.95,
    y: "-40%",
    transition: { 
      duration: 0.2,
      ease: "easeIn" as const
    }
  },
  // Special animation for sheet variant
  hiddenSheet: { 
    opacity: 0,
    y: "100%"
  },
  visibleSheet: { 
    opacity: 1,
    y: "0%",
    transition: { 
      type: "spring" as const,
      damping: 25,
      stiffness: 300
    }
  },
  exitSheet: { 
    opacity: 0,
    y: "100%",
    transition: { 
      duration: 0.2,
      ease: "easeIn" as const
    }
  }
};

interface DialogContentProps 
  extends React.ComponentProps<typeof DialogPrimitive.Content>,
    VariantProps<typeof contentVariants> {
  showCloseButton?: boolean;
  open?: boolean;
}

function DialogContent({
  className,
  children,
  showCloseButton = true,
  variant,
  ...props
}: DialogContentProps) {
  const isSheet = variant === "sheet";

  return (
    <DialogPortal data-slot="dialog-portal">
      <AnimatePresence>
        {props.open && <DialogOverlay />}
      </AnimatePresence>

      <AnimatePresence>
        {props.open && (
          <DialogPrimitive.Content
            data-slot="dialog-content"
            className={cn(contentVariants({ variant, className }))}
            asChild
            {...props}
          >
            <motion.div
              variants={isSheet ? {
                hidden: contentAnimationVariants.hiddenSheet,
                visible: contentAnimationVariants.visibleSheet,
                exit: contentAnimationVariants.exitSheet
              } : contentAnimationVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
            >
              {children}
              {showCloseButton && (
                <DialogPrimitive.Close
                  data-slot="dialog-close"
                  className="absolute top-4 right-4 rounded-full p-1.5 text-foreground/50 opacity-70 ring-offset-background transition-all hover:text-foreground hover:opacity-100 hover:bg-muted focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none"
                >
                  <XIcon className="h-4 w-4" />
                  <span className="sr-only">Close</span>
                </DialogPrimitive.Close>
              )}
            </motion.div>
          </DialogPrimitive.Content>
        )}
      </AnimatePresence>
    </DialogPortal>
  )
}

function DialogHeader({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="dialog-header"
      className={cn("flex flex-col gap-2 text-center sm:text-left mb-4", className)}
      {...props}
    />
  )
}

function DialogFooter({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="dialog-footer"
      className={cn(
        "flex flex-col-reverse gap-2 sm:flex-row sm:justify-end mt-4",
        className
      )}
      {...props}
    />
  )
}

function DialogTitle({
  className,
  ...props
}: React.ComponentProps<typeof DialogPrimitive.Title>) {
  return (
    <DialogPrimitive.Title
      data-slot="dialog-title"
      className={cn("text-xl font-semibold leading-none tracking-tight", className)}
      {...props}
    />
  )
}

function DialogDescription({
  className,
  ...props
}: React.ComponentProps<typeof DialogPrimitive.Description>) {
  return (
    <DialogPrimitive.Description
      data-slot="dialog-description"
      className={cn("text-muted-foreground text-sm mt-1.5", className)}
      {...props}
    />
  )
}

export {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogOverlay,
  DialogPortal,
  DialogTitle,
  DialogTrigger,
  contentVariants,
}

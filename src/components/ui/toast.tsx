"use client"

import * as React from "react"
import { Toaster as SonnerToaster, toast as sonnerToast } from "sonner"
import { cva, type VariantProps } from "class-variance-authority"
import { AlertCircle, CheckCircle, Info, X, XCircle } from "lucide-react"

import { cn } from "@/lib/utils"

const toastVariants = cva(
  "group relative flex w-full items-center justify-between gap-2 overflow-hidden rounded-xl border p-4 pr-8 shadow-[var(--card-shadow)] transition-all data-[swipe=cancel]:translate-x-0 data-[swipe=end]:translate-x-[var(--radix-toast-swipe-end-x)] data-[swipe=move]:translate-x-[var(--radix-toast-swipe-move-x)] data-[swipe=move]:transition-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[swipe=end]:animate-out data-[state=closed]:fade-out-80 data-[state=closed]:slide-out-to-right-full data-[state=open]:slide-in-from-top-full data-[state=open]:sm:slide-in-from-bottom-full",
  {
    variants: {
      variant: {
        default: "border-border bg-background text-foreground",
        success: "border-green-500/20 bg-green-500/10 text-green-600 dark:text-green-400",
        info: "border-blue-500/20 bg-blue-500/10 text-blue-600 dark:text-blue-400",
        warning: "border-yellow-500/20 bg-yellow-500/10 text-yellow-600 dark:text-yellow-400",
        error: "border-destructive/20 bg-destructive/10 text-destructive",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

interface ToastProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof toastVariants> {
  title?: string
  description?: string
  action?: React.ReactNode
  closeButton?: boolean
}

function Toast({
  className,
  variant,
  title,
  description,
  action,
  closeButton = true,
  ...props
}: ToastProps) {
  return (
    <div
      className={cn(toastVariants({ variant }), className)}
      {...props}
    >
      {variant && variant !== "default" && (
        <div className="shrink-0">
          {variant === "success" && <CheckCircle className="h-5 w-5" />}
          {variant === "info" && <Info className="h-5 w-5" />}
          {variant === "warning" && <AlertCircle className="h-5 w-5" />}
          {variant === "error" && <XCircle className="h-5 w-5" />}
        </div>
      )}
      <div className="flex-1 space-y-1">
        {title && <div className="font-medium">{title}</div>}
        {description && <div className="text-sm opacity-90">{description}</div>}
      </div>
      {action && <div>{action}</div>}
      {closeButton && (
        <button
          className="absolute right-2 top-2 rounded-md p-1 text-foreground/50 opacity-0 transition-opacity hover:text-foreground focus:opacity-100 focus:outline-none focus:ring-1 group-hover:opacity-100"
          onClick={() => sonnerToast.dismiss(props.id as string)}
        >
          <X className="h-4 w-4" />
          <span className="sr-only">Close</span>
        </button>
      )}
    </div>
  )
}

interface ToasterProps {
  position?: "top-left" | "top-right" | "bottom-left" | "bottom-right" | "top-center" | "bottom-center"
  duration?: number
  gap?: number
  visibleToasts?: number
  closeButton?: boolean
  className?: string
  toastClassName?: string
  theme?: "light" | "dark" | "system"
}

function Toaster({
  position = "bottom-right",
  duration = 5000,
  gap = 8,
  visibleToasts = 3,
  closeButton = true,
  className,
  toastClassName,
  theme = "system",
}: ToasterProps) {
  return (
    <SonnerToaster
      position={position}
      duration={duration}
      gap={gap}
      theme={theme}
      visibleToasts={visibleToasts}
      closeButton={closeButton}
      className={className}
      toastOptions={{
        className: cn(
          "data-[type=success]:bg-green-500/10 data-[type=success]:border-green-500/20 data-[type=success]:text-green-600 dark:data-[type=success]:text-green-400",
          "data-[type=info]:bg-blue-500/10 data-[type=info]:border-blue-500/20 data-[type=info]:text-blue-600 dark:data-[type=info]:text-blue-400",
          "data-[type=warning]:bg-yellow-500/10 data-[type=warning]:border-yellow-500/20 data-[type=warning]:text-yellow-600 dark:data-[type=warning]:text-yellow-400",
          "data-[type=error]:bg-destructive/10 data-[type=error]:border-destructive/20 data-[type=error]:text-destructive",
          "group relative flex w-full items-center justify-between gap-2 overflow-hidden rounded-xl border p-4 pr-8 shadow-[var(--card-shadow)] transition-all",
          toastClassName
        ),
      }}
    />
  )
}

// Custom toast function with our styling
function toast(props: ToastProps) {
  const { title, description, variant, action, closeButton, ...rest } = props;
  
  return sonnerToast.custom(
    (id) => (
      <Toast
        id={id}
        title={title}
        description={description}
        variant={variant}
        action={action}
        closeButton={closeButton}
        {...rest}
      />
    ),
    {
      id: props.id as string,
    }
  );
}

// Convenience methods
toast.success = (props: Omit<ToastProps, "variant">) => {
  return toast({ ...props, variant: "success" });
};

toast.info = (props: Omit<ToastProps, "variant">) => {
  return toast({ ...props, variant: "info" });
};

toast.warning = (props: Omit<ToastProps, "variant">) => {
  return toast({ ...props, variant: "warning" });
};

toast.error = (props: Omit<ToastProps, "variant">) => {
  return toast({ ...props, variant: "error" });
};

toast.dismiss = sonnerToast.dismiss;
toast.remove = sonnerToast.remove;

export { Toast, Toaster, toast, toastVariants }
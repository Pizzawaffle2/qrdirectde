import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface HeroBadgeProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  variant?: "teal" | "sage" | "ochre";
}

export function HeroBadge({
  children,
  variant = "teal",
  className,
  ...props
}: HeroBadgeProps) {
  // Determine gradient based on variant
  const gradientClass = 
    variant === "teal" 
      ? "bg-[var(--teal-gradient)]" 
      : variant === "sage" 
        ? "bg-[var(--sage-gradient)]" 
        : "bg-[var(--warm-gradient)]";

  return (
    <motion.div
      className={cn(
        "relative overflow-hidden px-6 py-3 rounded-full text-white font-medium inline-flex items-center",
        gradientClass,
        className
      )}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.5,
        ease: "easeOut",
      }}
      whileHover={{ scale: 1.03 }}
      {...props}
    >
      {/* Shimmer effect */}
      <motion.div
        className="absolute inset-0 w-full h-full pointer-events-none"
        style={{
          background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.3), transparent)",
        }}
        animate={{
          x: ["calc(-100% - 50px)", "calc(100% + 50px)"],
        }}
        transition={{
          duration: 2,
          ease: "easeInOut",
          repeat: Infinity,
          repeatDelay: 3,
        }}
      />
      
      {/* Content */}
      <div className="relative z-10 flex items-center gap-2">
        {children}
      </div>
    </motion.div>
  );
}

// Variant with icon
export function HeroBadgeWithIcon({
  children,
  icon,
  variant = "teal",
  className,
  ...props
}: HeroBadgeProps & { icon: React.ReactNode }) {
  return (
    <HeroBadge
      variant={variant}
      className={cn("gap-2", className)}
      {...props}
    >
      <span className="flex items-center justify-center">{icon}</span>
      {children}
    </HeroBadge>
  );
}
import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { Card } from "./card";

interface StatCardProps extends React.HTMLAttributes<HTMLDivElement> {
  title: string;
  value: string | number;
  icon?: React.ReactNode;
  trend?: {
    value: number;
    isPositive: boolean;
  };
  description?: string;
}

export function StatCard({
  title,
  value,
  icon,
  trend,
  description,
  className,
  ...props
}: StatCardProps) {
  return (
    <Card
      className={cn(
        "p-6 hover:shadow-[var(--hover-shadow)] transition-all duration-300 hover:-translate-y-1",
        className
      )}
      {...props}
    >
      <div className="flex items-start justify-between">
        <div className="space-y-2">
          <h3 className="text-sm font-medium text-muted-foreground">{title}</h3>
          <div className="flex items-baseline gap-2">
            <span className="text-3xl font-bold">{value}</span>
            {trend && (
              <span
                className={cn(
                  "text-sm font-medium",
                  trend.isPositive ? "text-green-500" : "text-red-500"
                )}
              >
                {trend.isPositive ? "+" : "-"}
                {Math.abs(trend.value)}%
              </span>
            )}
          </div>
          {description && (
            <p className="text-xs text-muted-foreground">{description}</p>
          )}
        </div>
        {icon && (
          <motion.div
            className="p-3 rounded-full bg-primary/10 text-primary"
            animate={{ y: [0, -10, 0] }}
            transition={{
              duration: 2,
              ease: "easeInOut",
              repeat: Infinity,
              repeatDelay: 1,
            }}
          >
            {icon}
          </motion.div>
        )}
      </div>
    </Card>
  );
}

// Variant with gradient background
export function GradientStatCard({
  title,
  value,
  icon,
  trend,
  description,
  className,
  ...props
}: StatCardProps & { variant?: "teal" | "sage" | "ochre" }) {
  // Determine gradient based on variant
  const gradientClass = 
    props.variant === "sage" 
      ? "bg-[var(--sage-gradient)]" 
      : props.variant === "ochre" 
        ? "bg-[var(--warm-gradient)]" 
        : "bg-[var(--teal-gradient)]";

  return (
    <div
      className={cn(
        "rounded-2xl p-6 text-white shadow-[var(--card-shadow)] hover:shadow-[var(--hover-shadow)] transition-all duration-300 hover:-translate-y-1",
        gradientClass,
        className
      )}
      {...props}
    >
      <div className="flex items-start justify-between">
        <div className="space-y-2">
          <h3 className="text-sm font-medium text-white/80">{title}</h3>
          <div className="flex items-baseline gap-2">
            <span className="text-3xl font-bold">{value}</span>
            {trend && (
              <span
                className={cn(
                  "text-sm font-medium",
                  trend.isPositive ? "text-green-300" : "text-red-300"
                )}
              >
                {trend.isPositive ? "+" : "-"}
                {Math.abs(trend.value)}%
              </span>
            )}
          </div>
          {description && (
            <p className="text-xs text-white/70">{description}</p>
          )}
        </div>
        {icon && (
          <motion.div
            className="p-3 rounded-full bg-white/10 text-white"
            animate={{ y: [0, -10, 0] }}
            transition={{
              duration: 2,
              ease: "easeInOut",
              repeat: Infinity,
              repeatDelay: 1,
            }}
          >
            {icon}
          </motion.div>
        )}
      </div>
    </div>
  );
}
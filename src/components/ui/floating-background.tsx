import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface FloatingBackgroundProps extends React.HTMLAttributes<HTMLDivElement> {
  children?: React.ReactNode;
  orbCount?: number;
  className?: string;
}

export function FloatingBackground({
  children,
  orbCount = 3,
  className,
  ...props
}: FloatingBackgroundProps) {
  // Generate random positions and sizes for orbs
  const orbs = React.useMemo(() => {
    return Array.from({ length: orbCount }).map((_, i) => ({
      id: i,
      x: `${Math.random() * 80 + 10}%`,
      y: `${Math.random() * 80 + 10}%`,
      size: Math.random() * 300 + 100,
      color: i % 3 === 0 
        ? "var(--deep-teal)" 
        : i % 3 === 1 
          ? "var(--sage-green)" 
          : "var(--warm-ochre)",
      delay: i * 2,
    }));
  }, [orbCount]);

  return (
    <div
      className={cn(
        "relative w-full h-full overflow-hidden",
        className
      )}
      {...props}
    >
      {/* Background orbs */}
      {orbs.map((orb) => (
        <motion.div
          key={orb.id}
          className="absolute rounded-full opacity-10 pointer-events-none"
          style={{
            left: orb.x,
            top: orb.y,
            width: orb.size,
            height: orb.size,
            backgroundColor: orb.color,
            filter: "blur(100px)",
          }}
          animate={{
            x: [0, 30, -20, 0],
            y: [0, -40, 30, 0],
            scale: [1, 1.1, 0.9, 1],
          }}
          transition={{
            duration: 20,
            ease: "easeInOut",
            repeat: Infinity,
            delay: orb.delay,
          }}
        />
      ))}
      
      {/* Content */}
      <div className="relative z-10">{children}</div>
    </div>
  );
}

// Variant with gradient background
export function GradientBackground({
  children,
  className,
  ...props
}: Omit<FloatingBackgroundProps, "orbCount">) {
  return (
    <div
      className={cn(
        "relative w-full h-full overflow-hidden bg-[var(--multi-gradient)]",
        className
      )}
      {...props}
    >
      <motion.div
        className="absolute inset-0 opacity-30 pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.1) 0%, transparent 70%)",
          width: "200%",
          height: "200%",
          top: "-50%",
          right: "-50%",
        }}
        animate={{
          rotate: 360,
        }}
        transition={{
          duration: 20,
          ease: "linear",
          repeat: Infinity,
        }}
      />
      
      {/* Content */}
      <div className="relative z-10">{children}</div>
    </div>
  );
}
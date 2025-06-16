"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button, buttonVariants } from "./button";
import { cn } from "@/lib/utils";
import { type VariantProps } from "class-variance-authority";

interface RippleButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  children: React.ReactNode;
  asChild?: boolean;
}

export function RippleButton({
  children,
  className,
  variant,
  size,
  asChild = false,
  ...props
}: RippleButtonProps) {
  const [ripples, setRipples] = useState<
    { id: number; x: number; y: number; size: number }[]
  >([]);

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    // Get button dimensions and position
    const button = e.currentTarget;
    const rect = button.getBoundingClientRect();
    
    // Calculate ripple position relative to button
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    // Calculate ripple size (should be larger than the button for full coverage)
    const size = Math.max(rect.width, rect.height) * 2;
    
    // Add new ripple
    const id = Date.now();
    setRipples([...ripples, { id, x, y, size }]);
    
    // Remove ripple after animation completes
    setTimeout(() => {
      setRipples((prevRipples) => prevRipples.filter((ripple) => ripple.id !== id));
    }, 600);
    
    // Call original onClick if provided
    if (props.onClick) {
      props.onClick(e);
    }
  };

  return (
    <Button
      className={cn("overflow-hidden relative", className)}
      variant={variant}
      size={size}
      asChild={asChild}
      {...props}
      onClick={handleClick}
    >
      <span className="relative z-10">{children}</span>
      <AnimatePresence>
        {ripples.map((ripple) => (
          <motion.span
            key={ripple.id}
            className="absolute bg-white/20 rounded-full pointer-events-none"
            initial={{
              width: 0,
              height: 0,
              x: ripple.x,
              y: ripple.y,
              opacity: 0.5,
            }}
            animate={{
              width: ripple.size,
              height: ripple.size,
              x: ripple.x - ripple.size / 2,
              y: ripple.y - ripple.size / 2,
              opacity: 0,
            }}
            exit={{ opacity: 0 }}
            transition={{
              duration: 0.6,
              ease: "easeOut",
            }}
          />
        ))}
      </AnimatePresence>
    </Button>
  );
}
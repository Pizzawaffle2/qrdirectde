import * as React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { BreadcrumbItem } from "./breadcrumb-item";
import type { AnimatedBreadcrumbItemProps } from "./types";

/**
 * Custom hook that returns animation props for sequential animations
 * @param index - Position in animation sequence
 * @param variants - Animation variant configuration
 */
function useSequentialAnimation(index: number | undefined, variants: typeof itemAnimationVariants) {
  return {
    variants,
    initial: "hidden",
    animate: "visible",
    custom: index,
  };
}

/**
 * A breadcrumb item that animates into view with a sequential delay
 */
export function AnimatedBreadcrumbItem({
                                           index = 0, // Corrected destructuring for default value
                                           className = "",
                                           ...props
                                       }: AnimatedBreadcrumbItemProps) {
    const animationProps = useSequentialAnimation(index, itemAnimationVariants);

    return (
        <motion.div
            {...animationProps}
            className={cn("flex items-center", className)}
        >
            <BreadcrumbItem {...props} />
        </motion.div>
    );
}


// Animation configuration
const itemAnimationVariants = {
  hidden: { opacity: 0, x: -10 },
  visible: (custom: number) => ({
    opacity: 1,
    x: 0,
    transition: {
      delay: custom * 0.1,
      duration: 0.3,
      ease: "easeOut",
    },
  }),
};

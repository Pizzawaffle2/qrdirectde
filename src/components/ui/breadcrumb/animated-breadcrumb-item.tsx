import * as React from "react";
import { motion, easeOut } from "framer-motion";
import { cn } from "@/lib/utils";
import { BreadcrumbItem } from "./breadcrumb-item";
import type { AnimatedBreadcrumbItemProps } from "./types";

/**
 * A breadcrumb item that animates into view with a sequential delay
 */
export function AnimatedBreadcrumbItem({
  index = 0,
  className = "",
  ...props
}: AnimatedBreadcrumbItemProps) {
  return (
    <motion.div
      variants={itemAnimationVariants}
      initial="hidden"
      animate="visible"
      custom={index}
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
      ease: easeOut,
    },
  }),
};

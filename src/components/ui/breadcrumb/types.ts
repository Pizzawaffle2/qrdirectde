import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";

// Shared variants
export const breadcrumbVariants = cva(
    "flex items-center gap-1 text-sm text-muted-foreground transition-all duration-300 ease-[var(--spring)]",
    {
      variants: {
        variant: {
          default: "",
          pills: "gap-2",
          cards: "gap-2",
        },
        size: {
          default: "text-sm",
          sm: "text-xs",
          lg: "text-base",
        },
      },
      defaultVariants: {
        variant: "default",
        size: "default",
      },
    }
);

export const breadcrumbItemVariants = cva(
    "inline-flex items-center gap-1 transition-all duration-300 ease-[var(--spring)]",
    {
      variants: {
        variant: {
          default: "hover:text-foreground",
          pills: "px-3 py-1 rounded-full hover:bg-muted hover:text-foreground",
          cards: "px-3 py-1 rounded-lg hover:bg-muted hover:text-foreground",
        },
      },
      defaultVariants: {
        variant: "default",
      },
    }
);

// Animation variants for breadcrumb items
export const itemAnimationVariants = {
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

// Shared interfaces
export interface BreadcrumbProps
    extends React.HTMLAttributes<HTMLDivElement>,
        VariantProps<typeof breadcrumbVariants> {
  separator?: React.ReactNode;
  home?: boolean;
}

export interface BreadcrumbItemProps
    extends React.LiHTMLAttributes<HTMLLIElement>,
        VariantProps<typeof breadcrumbItemVariants> {
  href?: string;
  isCurrent?: boolean;
  icon?: React.ReactNode;
}

export class AnimatedBreadcrumbItemProps {
}
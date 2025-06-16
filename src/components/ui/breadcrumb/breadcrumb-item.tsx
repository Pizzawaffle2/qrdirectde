"use client";

import * as React from "react";
import { ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { BreadcrumbItemProps, breadcrumbItemVariants } from "./types";

export function BreadcrumbItem({
  className,
  href,
  isCurrent,
  icon,
  variant,
  ...props
}: BreadcrumbItemProps) {
  const Component = isCurrent ? "span" : href ? "a" : "span";
  
  return (
    <li className={cn("flex items-center", className)} {...props}>
      <Component
        className={cn(
          breadcrumbItemVariants({ variant }),
          isCurrent && "font-medium text-foreground pointer-events-none",
          href && "hover:underline underline-offset-4"
        )}
        href={href}
        aria-current={isCurrent ? "page" : undefined}
      >
        {icon && <span className="mr-1">{icon}</span>}
        {props.children}
      </Component>
      {!isCurrent && (
        <span className="mx-1 text-muted-foreground/50">
          <ChevronRight className="h-4 w-4" />
        </span>
      )}
    </li>
  );
}
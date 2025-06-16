"use client";

import * as React from "react";
import { ChevronRight, Home } from "lucide-react";
import { cn } from "@/lib/utils";
import { BreadcrumbProps, breadcrumbVariants } from "./types";

export function Breadcrumb({
  className,
  separator = <ChevronRight className="h-4 w-4 text-muted-foreground/50" />,
  home = true,
  variant,
  size,
  children,
  ...restProps
}: BreadcrumbProps) {
  return (
    <nav aria-label="Breadcrumb">
        {home && (
            <li className="inline-flex items-center">
                <a href="/" className="inline-flex items-center">
                    <Home className="h-4 w-4" />
                </a>
                {separator}
            </li>
        )}
        {children}
    </nav>
  );
}
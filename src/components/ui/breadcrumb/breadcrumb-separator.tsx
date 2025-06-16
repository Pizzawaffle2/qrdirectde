"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

export function BreadcrumbSeparator({
  className,
  ...props
}: React.ComponentProps<"li">) {
  return (
    <li
      className={cn("mx-1 text-muted-foreground/50", className)}
      aria-hidden="true"
      {...props}
    />
  );
}
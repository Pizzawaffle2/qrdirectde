"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

export function BreadcrumbEllipsis({
  className,
  ...props
}: React.ComponentProps<"span">) {
  return (
    <span
      className={cn("mx-1 text-muted-foreground", className)}
      aria-hidden="true"
      {...props}
    >
      &#8230;
    </span>
  );
}
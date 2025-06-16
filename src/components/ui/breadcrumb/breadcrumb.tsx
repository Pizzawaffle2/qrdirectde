"use client";

import * as React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";

export interface BreadcrumbProps extends React.HTMLAttributes<HTMLElement> {
  separator?: React.ReactNode;
}

export function Breadcrumb({
  className,
  children,
  ...props
}: BreadcrumbProps) {
  return (
    <nav
      aria-label="breadcrumb"
      className={cn("flex items-center space-x-1 text-sm text-muted-foreground", className)}
      {...props}
    >
      {children}
    </nav>
  );
}

export function BreadcrumbItem({
  children,
  className,
  ...props
}: React.HTMLAttributes<HTMLElement>) {
  return (
    <li className={cn("inline-flex items-center", className)} {...props}>
      {children}
    </li>
  );
}

export function BreadcrumbLink({
  href = "/",
  children,
  className,
  ...props
}: React.AnchorHTMLAttributes<HTMLAnchorElement> & { href?: string }) {
  return (
    <Link
      href={href}
      className={cn("hover:text-foreground transition-colors", className)}
      {...props}
    >
      {children}
    </Link>
  );
}

export function BreadcrumbSeparator({
  children,
  className,
  ...props
}: React.HTMLAttributes<HTMLSpanElement>) {
  return (
    <span
      role="presentation"
      aria-hidden="true"
      className={cn("[&>svg]:size-3.5", className)}
      {...props}
    >
      {children}
    </span>
  );
}

export function BreadcrumbEllipsis({
  className,
  ...props
}: React.HTMLAttributes<HTMLSpanElement>) {
  return (
    <span
      role="presentation"
      aria-hidden="true"
      className={cn("flex h-9 w-9 items-center justify-center", className)}
      {...props}
    >
      <span className="h-4 w-4">...</span>
      <span className="sr-only">More</span>
    </span>
  );
}
"use client"

import * as React from "react"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"
import { Checkbox, CheckboxProps } from "./checkbox"

interface CheckboxOption {
  id: string;
  label: string;
  value: string;
  disabled?: boolean;
}

interface CheckboxGroupProps {
  options: CheckboxOption[];
  value: string[];
  onChange: (value: string[]) => void;
  label?: string;
  error?: string;
  className?: string;
  orientation?: "horizontal" | "vertical";
  variant?: CheckboxProps["variant"];
  size?: CheckboxProps["size"];
}

export function CheckboxGroup({
  options,
  value,
  onChange,
  label,
  error,
  className,
  orientation = "vertical",
  variant = "default",
  size = "default",
}: CheckboxGroupProps) {
  const handleCheckboxChange = (option: CheckboxOption, checked: boolean) => {
    if (checked) {
      onChange([...value, option.value]);
    } else {
      onChange(value.filter((v) => v !== option.value));
    }
  };

  return (
    <div className="space-y-2">
      {label && (
        <div className="text-sm font-medium leading-none mb-3">{label}</div>
      )}
      
      <div 
        className={cn(
          "space-y-2",
          orientation === "horizontal" && "flex flex-wrap gap-4 space-y-0",
          className
        )}
      >
        {options.map((option) => (
          <div 
            key={option.id} 
            className={cn(
              "flex items-center gap-2",
              orientation === "horizontal" && "mr-4"
            )}
          >
            <Checkbox
              id={option.id}
              checked={value.includes(option.value)}
              onCheckedChange={(checked) => 
                handleCheckboxChange(option, checked as boolean)
              }
              disabled={option.disabled}
              variant={variant}
              size={size}
            />
            <label
              htmlFor={option.id}
              className={cn(
                "text-sm leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70",
                orientation === "horizontal" && "mr-2"
              )}
            >
              {option.label}
            </label>
          </div>
        ))}
      </div>
      
      {error && (
        <motion.p 
          className="mt-1.5 text-sm text-destructive"
          initial={{ opacity: 0, y: -5 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -5 }}
        >
          {error}
        </motion.p>
      )}
    </div>
  )
}
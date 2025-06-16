"use client"

import * as React from "react"
import { motion, AnimatePresence } from "framer-motion"
import { cn } from "@/lib/utils"
import { RadioGroup, RadioGroupItem, radioGroupItemVariants } from "./radio-group"

export interface RadioOption {
  id: string
  value: string
  label: string
  disabled?: boolean
}

interface FormRadioGroupProps {
  label: string
  options: RadioOption[]
  value?: string
  onChange?: (value: string) => void
  error?: string
  className?: string
  orientation?: "horizontal" | "vertical"
  variant?: React.ComponentProps<typeof RadioGroupItem>["variant"]
  size?: React.ComponentProps<typeof RadioGroupItem>["size"]
  required?: boolean
}

export function FormRadioGroup({
  label,
  options,
  value,
  onChange,
  error,
  className,
  orientation = "vertical",
  variant = "default",
  size = "default",
  required = false,
}: FormRadioGroupProps) {
  const handleValueChange = (newValue: string) => {
    if (onChange) {
      onChange(newValue);
    }
  };

  return (
    <div className={cn("space-y-3", className)}>
      <div className="flex items-baseline justify-between">
        <div className="text-sm font-medium leading-none">
          {label}
          {required && <span className="text-destructive ml-1">*</span>}
        </div>
      </div>
      
      <RadioGroup 
        value={value} 
        onValueChange={handleValueChange}
        orientation={orientation}
        className="mt-2"
      >
        {options.map((option) => (
          <div 
            key={option.id} 
            className="flex items-center gap-2"
          >
            <RadioGroupItem 
              id={option.id} 
              value={option.value}
              disabled={option.disabled}
              variant={variant}
              size={size}
            />
            <label
              htmlFor={option.id}
              className="text-sm leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
              {option.label}
            </label>
          </div>
        ))}
      </RadioGroup>
      
      <AnimatePresence>
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
      </AnimatePresence>
    </div>
  )
}
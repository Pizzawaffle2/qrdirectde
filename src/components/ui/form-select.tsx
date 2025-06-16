"use client"

import * as React from "react"
import { motion, AnimatePresence } from "framer-motion"
import { cn } from "@/lib/utils"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./select"

export interface SelectOption {
  value: string
  label: string
  disabled?: boolean
}

interface FormSelectProps {
  id: string
  label: string
  placeholder?: string
  options: SelectOption[]
  value?: string
  onChange?: (value: string) => void
  error?: string
  className?: string
  size?: "sm" | "default" | "lg"
  variant?: "default" | "minimal" | "outline"
  required?: boolean
}

export function FormSelect({
  id,
  label,
  placeholder,
  options,
  value,
  onChange,
  error,
  className,
  size = "default",
  variant = "default",
  required = false,
}: FormSelectProps) {
  const handleValueChange = (newValue: string) => {
    if (onChange) {
      onChange(newValue)
    }
  }

  return (
    <div className={cn("space-y-2", className)}>
      <div className="flex items-baseline justify-between">
        <label
          htmlFor={id}
          className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
        >
          {label}
          {required && <span className="text-destructive ml-1">*</span>}
        </label>
      </div>
      
      <Select value={value} onValueChange={handleValueChange}>
        <SelectTrigger
          id={id}
          className="w-full"
          size={size}
          variant={variant}
          aria-invalid={!!error}
        >
          <SelectValue placeholder={placeholder || `Select ${label.toLowerCase()}`} />
        </SelectTrigger>
        <SelectContent>
          {options.map((option) => (
            <SelectItem
              key={option.value}
              value={option.value}
              disabled={option.disabled}
            >
              {option.label}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
      
      <AnimatePresence>
        {error && (
          <motion.p 
            className="text-sm text-destructive"
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
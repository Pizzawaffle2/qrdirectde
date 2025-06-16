import * as React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import { Input, InputProps } from "./input";

interface FloatingLabelInputProps extends Omit<InputProps, "placeholder"> {
  label: string;
  id: string;
}

export function FloatingLabelInput({
  label,
  id,
  className,
  variant = "default" as const,
  size = "default" as const,
  icon,
  error,
  ...props
}: FloatingLabelInputProps) {
  const [isFocused, setIsFocused] = React.useState(false);
  const [hasValue, setHasValue] = React.useState(false);
  const inputRef = React.useRef<HTMLInputElement>(null);

  // Check if input has value
  React.useEffect(() => {
    if (inputRef.current) {
      setHasValue(!!inputRef.current.value);
    }
  }, [props.value, props.defaultValue]);

  // Handle input change
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setHasValue(!!e.target.value);
    if (props.onChange) {
      props.onChange(e);
    }
  };

  // Determine if label should float
  const shouldFloat = isFocused || hasValue;

  return (
    <div className="relative w-full">
      {/* Input with icon */}
      <div className="relative">
        {icon && (
          <div className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground z-10">
            {icon}
          </div>
        )}
        <Input
          id={id}
          ref={inputRef}
          className={cn(
            "pt-5 pb-2",
            icon && "pl-10",
            className
          )}
          variant={variant}
          size={size}
          onFocus={(e) => {
            setIsFocused(true);
            if (props.onFocus) props.onFocus(e);
          }}
          onBlur={(e) => {
            setIsFocused(false);
            if (props.onBlur) props.onBlur(e);
          }}
          onChange={handleChange}
          error={error}
          {...props}
        />
        
        {/* Floating Label */}
        <AnimatePresence initial={false}>
          <motion.label
            htmlFor={id}
            className={cn(
              "absolute left-4 pointer-events-none text-muted-foreground transition-all duration-200",
              icon && "left-10",
              shouldFloat 
                ? "text-xs top-2" 
                : "text-base top-1/2 -translate-y-1/2"
            )}
            initial={false}
            animate={{
              y: shouldFloat ? 0 : 0,
              scale: shouldFloat ? 0.85 : 1,
              opacity: 1,
            }}
            transition={{
              duration: 0.2,
              ease: "easeInOut",
            }}
          >
            {label}
          </motion.label>
        </AnimatePresence>
      </div>
      
      {/* Error Message */}
      <AnimatePresence>
        {error && (
          <motion.p 
            className="mt-1.5 text-sm text-destructive"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
          >
            {error}
          </motion.p>
        )}
      </AnimatePresence>
    </div>
  );
}
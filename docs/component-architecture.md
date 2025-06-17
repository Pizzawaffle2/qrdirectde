# Component Architecture Standards

## Overview

This document outlines the component architecture standards for the QR Direct DE project, following the Creator-First Design System principles and atomic design methodology.

## Component Hierarchy

### 1. Atomic Design Structure

Components are organized following atomic design principles:

#### Atoms
- Basic building blocks
- Location: `src/components/ui/atoms/`
- Examples: Button, Input, Icon, Typography

#### Molecules
- Combinations of atoms
- Location: `src/components/ui/molecules/`
- Examples: FormField, SearchBar, CardHeader

#### Organisms
- Complex UI components
- Location: `src/components/ui/organisms/`
- Examples: Navigation, Footer, DataTable

#### Templates
- Page layouts and structures
- Location: `src/components/templates/`
- Examples: DashboardLayout, AuthLayout

#### Pages
- Complete page components
- Location: `src/app/`
- Examples: Dashboard, Profile, Settings

### 2. Component File Structure

Each component should follow this structure:
```
ComponentName/
├── index.tsx           # Main component file
├── ComponentName.tsx   # Component implementation
├── ComponentName.test.tsx  # Tests
├── ComponentName.stories.tsx  # Storybook stories
└── types.ts           # TypeScript types/interfaces
```

### 3. Component Naming Conventions

- Use PascalCase for component names
- Use kebab-case for file names
- Prefix shared components with appropriate atomic level (e.g., `AtomButton`, `MoleculeCard`)
- Suffix HOCs with "With" (e.g., `withAnimation`, `withErrorBoundary`)

## Component API Design

### 1. Props Interface

```typescript
interface ComponentProps {
  // Required props
  requiredProp: string;
  
  // Optional props with defaults
  optionalProp?: string;
  
  // Variant props
  variant?: 'primary' | 'secondary';
  
  // Size props
  size?: 'sm' | 'md' | 'lg';
  
  // Event handlers
  onChange?: (value: string) => void;
  
  // Children
  children?: React.ReactNode;
  
  // HTML attributes
  className?: string;
}
```

### 2. Component Implementation

```typescript
import { forwardRef } from 'react';
import { cn } from '@/lib/utils';
import { ComponentProps } from './types';

export const Component = forwardRef<HTMLDivElement, ComponentProps>(
  ({ 
    requiredProp,
    optionalProp = 'default',
    variant = 'primary',
    size = 'md',
    onChange,
    children,
    className,
    ...props 
  }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          'base-styles',
          variantStyles[variant],
          sizeStyles[size],
          className
        )}
        {...props}
      >
        {children}
      </div>
    );
  }
);

Component.displayName = 'Component';
```

## Higher-Order Components (HOCs)

### 1. Common HOC Patterns

#### withAnimation
```typescript
export const withAnimation = (WrappedComponent: React.ComponentType) => {
  return function WithAnimation(props: any) {
    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <WrappedComponent {...props} />
      </motion.div>
    );
  };
};
```

#### withErrorBoundary
```typescript
export const withErrorBoundary = (WrappedComponent: React.ComponentType) => {
  return function WithErrorBoundary(props: any) {
    return (
      <ErrorBoundary fallback={<ErrorFallback />}>
        <WrappedComponent {...props} />
      </ErrorBoundary>
    );
  };
};
```

### 2. HOC Usage Guidelines

- Keep HOCs focused and single-purpose
- Document HOC behavior and requirements
- Consider composition over inheritance
- Use TypeScript for type safety
- Test HOCs independently

## Best Practices

### 1. Component Design
- Keep components small and focused
- Use composition over inheritance
- Implement proper prop validation
- Document component API
- Follow accessibility guidelines

### 2. Performance
- Use React.memo for expensive renders
- Implement proper key usage
- Avoid unnecessary re-renders
- Use proper state management
- Implement code splitting

### 3. Testing
- Write unit tests for all components
- Test component variants
- Test edge cases
- Test accessibility
- Test performance

### 4. Documentation
- Document component purpose
- Document props and types
- Include usage examples
- Document accessibility features
- Document performance considerations

## Implementation Examples

### 1. Basic Atom Component
```typescript
// src/components/ui/atoms/Button/Button.tsx
import { forwardRef } from 'react';
import { cn } from '@/lib/utils';
import { ButtonProps } from './types';

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ variant = 'primary', size = 'md', children, ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(
          'base-button-styles',
          variantStyles[variant],
          sizeStyles[size]
        )}
        {...props}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = 'Button';
```

### 2. Molecule Component
```typescript
// src/components/ui/molecules/Card/Card.tsx
import { forwardRef } from 'react';
import { cn } from '@/lib/utils';
import { CardProps } from './types';
import { Button } from '@/components/ui/atoms/Button';
import { Typography } from '@/components/ui/atoms/Typography';

export const Card = forwardRef<HTMLDivElement, CardProps>(
  ({ title, content, action, ...props }, ref) => {
    return (
      <div ref={ref} className={cn('card-base-styles')} {...props}>
        <Typography variant="h3">{title}</Typography>
        <div className="content">{content}</div>
        {action && <Button {...action} />}
      </div>
    );
  }
);

Card.displayName = 'Card';
```

## Migration Guide

### 1. Current to New Structure
1. Identify component atomic level
2. Move to appropriate directory
3. Update imports
4. Add proper documentation
5. Implement new standards

### 2. Component Refactoring
1. Extract reusable patterns
2. Create HOCs where needed
3. Update prop interfaces
4. Add proper testing
5. Update documentation 
# QR Direct DE Design System

## Overview

The QR Direct DE Design System is a comprehensive set of design tokens, components, and guidelines that ensure consistency and efficiency in our product development. It's built with a creator-first approach, focusing on the needs of content creators while maintaining a professional and modern aesthetic.

## Design Principles

1. **Creator-First**
   - Prioritize content creator needs and workflows
   - Intuitive and efficient interfaces
   - Clear feedback and status indicators

2. **Consistency**
   - Unified visual language
   - Predictable interactions
   - Reusable components and patterns

3. **Accessibility**
   - WCAG 2.1 AA compliance
   - Keyboard navigation support
   - Screen reader compatibility
   - High contrast ratios

4. **Performance**
   - Fast loading times
   - Smooth animations
   - Responsive design
   - Progressive enhancement

## Design Tokens

### Colors

Our color system is built around a primary blue palette and secondary purple palette, with semantic colors for different states and feedback.

```typescript
// Primary colors
primary: {
  50: '#f0f9ff',  // Lightest
  500: '#0ea5e9', // Base
  950: '#082f49', // Darkest
}

// Secondary colors
secondary: {
  50: '#f5f3ff',  // Lightest
  500: '#8b5cf6', // Base
  950: '#2e1065', // Darkest
}
```

### Typography

We use Inter as our primary font for its excellent readability and modern appearance.

```typescript
fontFamily: {
  sans: ['Inter', 'system-ui', 'sans-serif'],
  mono: ['JetBrains Mono', 'monospace'],
}
```

### Spacing

Our spacing system uses a 4px base unit, providing consistent rhythm throughout the interface.

```typescript
spacing: {
  1: '0.25rem',  // 4px
  2: '0.5rem',   // 8px
  4: '1rem',     // 16px
  // ...
}
```

## Components

### Button

Buttons are used for primary actions and follow these variants:

- Primary: Main call-to-action buttons
- Secondary: Alternative actions
- Outline: Less prominent actions

```typescript
button: {
  base: {
    padding: '0.5rem 1rem',
    borderRadius: '0.375rem',
    fontSize: '0.875rem',
    fontWeight: 500,
  }
}
```

### Input

Input fields follow a consistent style with clear focus states and error handling:

```typescript
input: {
  base: {
    padding: '0.5rem 0.75rem',
    borderRadius: '0.375rem',
    border: '1px solid #e5e5e5',
  }
}
```

### Card

Cards are used for content grouping and follow these variants:

- Default: Standard elevation
- Elevated: Higher emphasis
- Bordered: Subtle separation

```typescript
card: {
  base: {
    backgroundColor: '#ffffff',
    borderRadius: '0.5rem',
    boxShadow: '0 1px 3px 0 rgb(0 0 0 / 0.1)',
    padding: '1.5rem',
  }
}
```

## Usage Guidelines

### Component Implementation

1. Always use the theme tokens for styling
2. Follow the component API documentation
3. Maintain accessibility requirements
4. Test across different screen sizes

### Best Practices

1. **Consistency**
   - Use predefined spacing values
   - Follow the color system
   - Maintain typography hierarchy

2. **Accessibility**
   - Include proper ARIA labels
   - Ensure keyboard navigation
   - Maintain color contrast

3. **Responsive Design**
   - Use breakpoint tokens
   - Implement mobile-first approach
   - Test on multiple devices

## Getting Started

1. Install dependencies:
   ```bash
   npm install
   ```

2. Import theme:
   ```typescript
   import { theme } from '@/lib/design/theme';
   ```

3. Use in components:
   ```typescript
   const styles = {
     backgroundColor: theme.colors.primary[500],
     padding: theme.spacing[4],
   };
   ```

## Contributing

1. Follow the design principles
2. Document new components
3. Update the design system
4. Test across devices
5. Ensure accessibility

## Resources

- [Figma Design System](https://figma.com/file/...)
- [Component Library](https://storybook.qrdirect.de)
- [Accessibility Guidelines](https://www.w3.org/WAI/standards-guidelines/wcag/) 
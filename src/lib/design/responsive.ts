import { breakpoints } from './tokens';

// Breakpoint values in pixels
export const breakpointValues = {
  sm: parseInt(breakpoints.sm),
  md: parseInt(breakpoints.md),
  lg: parseInt(breakpoints.lg),
  xl: parseInt(breakpoints.xl),
  '2xl': parseInt(breakpoints['2xl']),
} as const;

// Media query helpers
export const mediaQueries = {
  sm: `@media (min-width: ${breakpoints.sm})`,
  md: `@media (min-width: ${breakpoints.md})`,
  lg: `@media (min-width: ${breakpoints.lg})`,
  xl: `@media (min-width: ${breakpoints.xl})`,
  '2xl': `@media (min-width: ${breakpoints['2xl']})`,
} as const;

// Container max-widths
export const containerMaxWidths = {
  sm: '640px',
  md: '768px',
  lg: '1024px',
  xl: '1280px',
  '2xl': '1536px',
} as const;

// Grid system
export const grid = {
  columns: 12,
  gap: {
    sm: '1rem',
    md: '1.5rem',
    lg: '2rem',
  },
} as const;

// Responsive spacing scale
export const responsiveSpacing = {
  xs: {
    base: '0.5rem',
    sm: '0.75rem',
    md: '1rem',
  },
  sm: {
    base: '1rem',
    sm: '1.25rem',
    md: '1.5rem',
  },
  md: {
    base: '1.5rem',
    sm: '2rem',
    md: '2.5rem',
  },
  lg: {
    base: '2rem',
    sm: '3rem',
    md: '4rem',
  },
  xl: {
    base: '3rem',
    sm: '4rem',
    md: '5rem',
  },
} as const;

// Responsive typography scale
export const responsiveTypography = {
  h1: {
    base: '2rem',
    sm: '2.5rem',
    md: '3rem',
    lg: '3.5rem',
  },
  h2: {
    base: '1.75rem',
    sm: '2rem',
    md: '2.5rem',
    lg: '3rem',
  },
  h3: {
    base: '1.5rem',
    sm: '1.75rem',
    md: '2rem',
    lg: '2.5rem',
  },
  h4: {
    base: '1.25rem',
    sm: '1.5rem',
    md: '1.75rem',
    lg: '2rem',
  },
  body: {
    base: '1rem',
    sm: '1.125rem',
    md: '1.25rem',
  },
  small: {
    base: '0.875rem',
    sm: '1rem',
    md: '1.125rem',
  },
} as const;

// Device-specific optimizations
export const deviceOptimizations = {
  touch: {
    minTapSize: '44px',
    minSpacing: '8px',
  },
  desktop: {
    minHoverSize: '32px',
    minSpacing: '4px',
  },
} as const;

// Responsive layout helpers
export const layout = {
  container: {
    base: 'w-full px-4 mx-auto',
    sm: 'sm:max-w-[640px]',
    md: 'md:max-w-[768px]',
    lg: 'lg:max-w-[1024px]',
    xl: 'xl:max-w-[1280px]',
    '2xl': '2xl:max-w-[1536px]',
  },
  grid: {
    base: 'grid gap-4',
    sm: 'sm:gap-6',
    md: 'md:gap-8',
  },
  flex: {
    base: 'flex flex-col',
    sm: 'sm:flex-row',
  },
} as const;

// Responsive visibility helpers
export const visibility = {
  hidden: {
    base: 'hidden',
    sm: 'sm:block',
    md: 'md:block',
    lg: 'lg:block',
    xl: 'xl:block',
    '2xl': '2xl:block',
  },
  visible: {
    base: 'block',
    sm: 'sm:hidden',
    md: 'md:hidden',
    lg: 'lg:hidden',
    xl: 'xl:hidden',
    '2xl': '2xl:hidden',
  },
} as const;

// Responsive padding/margin helpers
export const spacing = {
  padding: {
    base: 'p-4',
    sm: 'sm:p-6',
    md: 'md:p-8',
    lg: 'lg:p-12',
  },
  margin: {
    base: 'm-4',
    sm: 'sm:m-6',
    md: 'md:m-8',
    lg: 'lg:m-12',
  },
} as const; 
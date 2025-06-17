import { colors, typography, spacing, borderRadius, shadows, zIndex, animation, breakpoints } from './tokens';

export const theme = {
  colors,
  typography,
  spacing,
  borderRadius,
  shadows,
  zIndex,
  animation,
  breakpoints,
  
  // Component-specific theme values
  components: {
    button: {
      base: {
        padding: `${spacing[2]} ${spacing[4]}`,
        borderRadius: borderRadius.md,
        fontSize: typography.fontSize.sm,
        fontWeight: typography.fontWeight.medium,
        transition: `all ${animation.duration.fast} ${animation.timing.default}`,
      },
      variants: {
        primary: {
          backgroundColor: colors.primary[600],
          color: colors.neutral[50],
          '&:hover': {
            backgroundColor: colors.primary[700],
          },
        },
        secondary: {
          backgroundColor: colors.secondary[600],
          color: colors.neutral[50],
          '&:hover': {
            backgroundColor: colors.secondary[700],
          },
        },
        outline: {
          backgroundColor: 'transparent',
          border: `1px solid ${colors.neutral[300]}`,
          color: colors.neutral[700],
          '&:hover': {
            backgroundColor: colors.neutral[50],
          },
        },
      },
      sizes: {
        sm: {
          padding: `${spacing[1]} ${spacing[3]}`,
          fontSize: typography.fontSize.xs,
        },
        lg: {
          padding: `${spacing[3]} ${spacing[6]}`,
          fontSize: typography.fontSize.base,
        },
      },
    },
    input: {
      base: {
        padding: `${spacing[2]} ${spacing[3]}`,
        borderRadius: borderRadius.md,
        border: `1px solid ${colors.neutral[300]}`,
        fontSize: typography.fontSize.sm,
        transition: `all ${animation.duration.fast} ${animation.timing.default}`,
        '&:focus': {
          borderColor: colors.primary[500],
          boxShadow: `0 0 0 2px ${colors.primary[100]}`,
        },
      },
      variants: {
        error: {
          borderColor: colors.error[500],
          '&:focus': {
            borderColor: colors.error[500],
            boxShadow: `0 0 0 2px ${colors.error[50]}`,
          },
        },
      },
    },
    card: {
      base: {
        backgroundColor: colors.neutral[50],
        borderRadius: borderRadius.lg,
        boxShadow: shadows.md,
        padding: spacing[6],
      },
      variants: {
        elevated: {
          boxShadow: shadows.lg,
        },
        bordered: {
          border: `1px solid ${colors.neutral[200]}`,
          boxShadow: 'none',
        },
      },
    },
  },
} as const;

// Type definitions for theme
export type Theme = typeof theme;
export type ThemeColors = typeof colors;
export type ThemeTypography = typeof typography;
export type ThemeSpacing = typeof spacing;
export type ThemeBorderRadius = typeof borderRadius;
export type ThemeShadows = typeof shadows;
export type ThemeZIndex = typeof zIndex;
export type ThemeAnimation = typeof animation;
export type ThemeBreakpoints = typeof breakpoints; 
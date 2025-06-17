import { forwardRef } from 'react';
import { cn } from '@/lib/utils';
import { layout } from '@/lib/design/responsive';

interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  size?: 'sm' | 'md' | 'lg' | 'xl' | '2xl' | 'full';
  centered?: boolean;
  padded?: boolean;
}

export const Container = forwardRef<HTMLDivElement, ContainerProps>(
  ({ 
    size = 'lg',
    centered = true,
    padded = true,
    className,
    children,
    ...props 
  }, ref) => {
    const containerClasses = cn(
      // Base styles
      layout.container.base,
      padded && 'px-4 sm:px-6 lg:px-8',
      centered && 'mx-auto',
      
      // Size-specific max-widths
      size === 'sm' && layout.container.sm,
      size === 'md' && layout.container.md,
      size === 'lg' && layout.container.lg,
      size === 'xl' && layout.container.xl,
      size === '2xl' && layout.container['2xl'],
      size === 'full' && 'max-w-none',
      
      // Additional classes
      className
    );

    return (
      <div ref={ref} className={containerClasses} {...props}>
        {children}
      </div>
    );
  }
);

Container.displayName = 'Container'; 
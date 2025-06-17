import { forwardRef } from 'react';
import { cn } from '@/lib/utils';
import { grid as gridConfig } from '@/lib/design/responsive';

interface GridProps extends React.HTMLAttributes<HTMLDivElement> {
  cols?: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;
  gap?: 'sm' | 'md' | 'lg';
  autoFit?: boolean;
  autoFill?: boolean;
  minChildWidth?: string;
}

export const Grid = forwardRef<HTMLDivElement, GridProps>(
  ({ 
    cols = 1,
    gap = 'md',
    autoFit = false,
    autoFill = false,
    minChildWidth = '250px',
    className,
    children,
    ...props 
  }, ref) => {
    const gridClasses = cn(
      // Base grid styles
      'grid',
      
      // Gap styles
      gap === 'sm' && 'gap-4',
      gap === 'md' && 'gap-6',
      gap === 'lg' && 'gap-8',
      
      // Column styles
      !autoFit && !autoFill && `grid-cols-${cols}`,
      
      // Auto-fit/fill styles
      autoFit && `grid-cols-[repeat(auto-fit,minmax(${minChildWidth},1fr))]`,
      autoFill && `grid-cols-[repeat(auto-fill,minmax(${minChildWidth},1fr))]`,
      
      // Additional classes
      className
    );

    return (
      <div ref={ref} className={gridClasses} {...props}>
        {children}
      </div>
    );
  }
);

Grid.displayName = 'Grid'; 
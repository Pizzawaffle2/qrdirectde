import { forwardRef } from 'react';
import { cn } from '@/lib/utils';
import { responsiveSpacing } from '@/lib/design/responsive';

interface StackProps extends React.HTMLAttributes<HTMLDivElement> {
  spacing?: keyof typeof responsiveSpacing;
  align?: 'start' | 'center' | 'end' | 'stretch';
  justify?: 'start' | 'center' | 'end' | 'between' | 'around';
  direction?: 'vertical' | 'horizontal';
  wrap?: boolean;
}

export const Stack = forwardRef<HTMLDivElement, StackProps>(
  ({ 
    spacing = 'md',
    align = 'stretch',
    justify = 'start',
    direction = 'vertical',
    wrap = false,
    className,
    children,
    ...props 
  }, ref) => {
    const stackClasses = cn(
      // Base styles
      'flex',
      
      // Direction
      direction === 'vertical' ? 'flex-col' : 'flex-row',
      
      // Alignment
      align === 'start' && 'items-start',
      align === 'center' && 'items-center',
      align === 'end' && 'items-end',
      align === 'stretch' && 'items-stretch',
      
      // Justification
      justify === 'start' && 'justify-start',
      justify === 'center' && 'justify-center',
      justify === 'end' && 'justify-end',
      justify === 'between' && 'justify-between',
      justify === 'around' && 'justify-around',
      
      // Spacing
      direction === 'vertical' && `space-y-${spacing}`,
      direction === 'horizontal' && `space-x-${spacing}`,
      
      // Wrap
      wrap && 'flex-wrap',
      
      // Additional classes
      className
    );

    return (
      <div ref={ref} className={stackClasses} {...props}>
        {children}
      </div>
    );
  }
);

Stack.displayName = 'Stack'; 
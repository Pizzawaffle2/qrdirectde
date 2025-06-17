import { motion, Variants } from 'framer-motion';
import { ComponentType } from 'react';

interface WithAnimationProps {
  animation?: 'fade' | 'slide' | 'scale' | 'none';
  delay?: number;
  duration?: number;
  className?: string;
}

const variants: Record<string, Variants> = {
  fade: {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
    exit: { opacity: 0 },
  },
  slide: {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -20 },
  },
  scale: {
    hidden: { opacity: 0, scale: 0.95 },
    visible: { opacity: 1, scale: 1 },
    exit: { opacity: 0, scale: 0.95 },
  },
  none: {
    hidden: {},
    visible: {},
    exit: {},
  },
};

export const withAnimation = <P extends object>(
  WrappedComponent: ComponentType<P>,
  defaultAnimation: WithAnimationProps['animation'] = 'fade'
) => {
  return function WithAnimation({
    animation = defaultAnimation,
    delay = 0,
    duration = 0.3,
    className,
    ...props
  }: P & WithAnimationProps) {
    const selectedVariant = variants[animation];

    return (
      <motion.div
        initial="hidden"
        animate="visible"
        exit="exit"
        variants={selectedVariant}
        transition={{
          duration,
          delay,
          ease: [0.4, 0, 0.2, 1], // Creator-First Design System easing
        }}
        className={className}
      >
        <WrappedComponent {...(props as P)} />
      </motion.div>
    );
  };
}; 
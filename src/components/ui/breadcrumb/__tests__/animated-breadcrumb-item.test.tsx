import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { AnimatedBreadcrumbItem } from '../animated-breadcrumb-item';

describe('AnimatedBreadcrumbItem', () => {
  it('renders with the correct text', () => {
    render(<AnimatedBreadcrumbItem>Home</AnimatedBreadcrumbItem>);
    expect(screen.getByText('Home')).toBeInTheDocument();
  });

  it('renders with the correct href when provided', () => {
    render(<AnimatedBreadcrumbItem href="/home">Home</AnimatedBreadcrumbItem>);
    const link = screen.getByText('Home').closest('a');
    expect(link).toHaveAttribute('href', '/home');
  });

  it('renders as current page when isCurrent is true', () => {
    render(<AnimatedBreadcrumbItem isCurrent>Current Page</AnimatedBreadcrumbItem>);
    const element = screen.getByText('Current Page').closest('span');
    expect(element).toHaveAttribute('aria-current', 'page');
  });

  it('applies custom index for animation delay', () => {
    const { container } = render(<AnimatedBreadcrumbItem index={2}>Test</AnimatedBreadcrumbItem>);
    const motionDiv = container.querySelector('div');
    expect(motionDiv).toHaveAttribute('custom', '2');
  });
});
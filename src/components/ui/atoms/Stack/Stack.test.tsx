import { render, screen } from '@testing-library/react';
import { Stack } from './Stack';

describe('Stack', () => {
  it('renders children correctly', () => {
    render(
      <Stack>
        <div>Child 1</div>
        <div>Child 2</div>
      </Stack>
    );

    expect(screen.getByText('Child 1')).toBeInTheDocument();
    expect(screen.getByText('Child 2')).toBeInTheDocument();
  });

  it('applies vertical direction by default', () => {
    const { container } = render(<Stack />);
    expect(container.firstChild).toHaveClass('flex-col');
  });

  it('applies horizontal direction when specified', () => {
    const { container } = render(<Stack direction="horizontal" />);
    expect(container.firstChild).toHaveClass('flex-row');
  });

  it('applies correct alignment classes', () => {
    const { container } = render(<Stack align="center" />);
    expect(container.firstChild).toHaveClass('items-center');
  });

  it('applies correct justification classes', () => {
    const { container } = render(<Stack justify="between" />);
    expect(container.firstChild).toHaveClass('justify-between');
  });

  it('applies correct spacing classes', () => {
    const { container } = render(<Stack spacing="lg" />);
    expect(container.firstChild).toHaveClass('space-y-lg');
  });

  it('applies wrap class when specified', () => {
    const { container } = render(<Stack wrap />);
    expect(container.firstChild).toHaveClass('flex-wrap');
  });

  it('merges custom className with default classes', () => {
    const { container } = render(<Stack className="custom-class" />);
    expect(container.firstChild).toHaveClass('custom-class');
  });
}); 
# QR Direct DE - Development Guidelines

This document provides essential information for developers working on the QR Direct DE project.

## Build/Configuration Instructions

### Prerequisites
- Node.js (latest LTS version recommended)
- npm or yarn

### Setup
1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   # or
   yarn
   ```

### Development
To start the development server:
```bash
npm run dev
# or
yarn dev
```

The application will be available at [http://localhost:3000](http://localhost:3000).

### Building for Production
To build the application for production:
```bash
npm run build
# or
yarn build
```

To start the production server:
```bash
npm run start
# or
yarn start
```

### Environment Variables
The project uses environment variables for configuration. Create a `.env.local` file in the root directory with the following variables:

```
# Example environment variables
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
```

## Testing Information

### Testing Setup
The project uses Vitest with React Testing Library for testing React components.

To run tests:
```bash
npm run test
# or
yarn test
```

To run tests in watch mode:
```bash
npm run test:watch
# or
yarn test:watch
```

### Adding New Tests
1. Create test files in a `__tests__` directory adjacent to the component or in the same directory with a `.test.tsx` or `.spec.tsx` extension.
2. Use the following pattern for component tests:

```tsx
import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { YourComponent } from './your-component';

describe('YourComponent', () => {
  it('renders correctly', () => {
    render(<YourComponent />);
    // Add assertions here
  });
});
```

### Example Test
Here's an example test for the `AnimatedBreadcrumbItem` component:

```tsx
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
});
```

## Additional Development Information

### Project Structure
The project follows the Next.js App Router structure:
- `src/app`: Pages and routes
- `src/components`: Reusable UI components
- `src/lib`: Utility functions and libraries

### UI Components
UI components are organized in the `src/components/ui` directory. Complex components may have their own subdirectory with related files.

### Code Style
- The project uses TypeScript for type safety
- ESLint is configured with Next.js recommended rules
- Components use a functional approach with React hooks
- Tailwind CSS is used for styling with class-variance-authority for variants

### Component Patterns
1. **UI Components**: Pure presentational components in `src/components/ui`
2. **Page Components**: Components specific to pages in `src/app`
3. **Layout Components**: Components for layout in `src/app/components`

### State Management
The project uses Zustand for global state management. Create stores in a dedicated directory and import them where needed.

### API Integration
The project uses Supabase for backend functionality. API calls should be abstracted into service functions.

### Animation
Framer Motion is used for animations. See the `AnimatedBreadcrumbItem` component for an example of how to implement animations.

### Accessibility
Ensure all components are accessible by:
- Using semantic HTML
- Adding appropriate ARIA attributes
- Ensuring keyboard navigation works
- Testing with screen readers

### Performance Considerations
- Use Next.js Image component for optimized images
- Implement code splitting where appropriate
- Minimize bundle size by avoiding unnecessary dependencies
- Use React.memo for expensive components that re-render often
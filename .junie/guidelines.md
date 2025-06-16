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

### Example Tests

#### AnimatedBreadcrumbItem Test
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

#### Button Test
Here's an example test for the `Button` component:

```tsx
import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { Button } from '../button';

describe('Button', () => {
  it('renders with the correct text', () => {
    render(<Button>Click me</Button>);
    expect(screen.getByRole('button', { name: 'Click me' })).toBeInTheDocument();
  });

  it('applies the correct variant class', () => {
    const { container } = render(<Button variant="destructive">Destructive</Button>);
    const button = screen.getByRole('button', { name: 'Destructive' });
    expect(button).toHaveClass('bg-destructive');
  });

  it('applies the correct size class', () => {
    const { container } = render(<Button size="lg">Large Button</Button>);
    const button = screen.getByRole('button', { name: 'Large Button' });
    expect(button).toHaveClass('h-12');
  });

  it('renders as a different element when asChild is true', () => {
    render(
      <Button asChild>
        <a href="/test">Link Button</a>
      </Button>
    );
    const link = screen.getByRole('link', { name: 'Link Button' });
    expect(link).toHaveAttribute('href', '/test');
    expect(link).toHaveClass('inline-flex');
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

## API First Implementation

The QR Direct DE project follows an API-first approach to ensure backend and frontend development are well-coordinated.

### API Documentation Guidelines

1. **API Endpoints**: Document all API endpoints with:
   - HTTP method (GET, POST, PUT, DELETE)
   - URL path
   - Request parameters and body schema
   - Response schema
   - Error codes and messages
   - Authentication requirements

2. **Supabase Functions**: When creating Supabase Edge Functions:
   - Document input/output parameters
   - Include example requests and responses
   - Document error handling

3. **Type Definitions**: Create TypeScript interfaces for all API request and response objects:
   ```typescript
   // Example API type definitions
   export interface CreateQRCodeRequest {
     title: string;
     url: string;
     design?: QRCodeDesign;
   }

   export interface QRCodeResponse {
     id: string;
     title: string;
     url: string;
     design: QRCodeDesign;
     createdAt: string;
     updatedAt: string;
   }
   ```

4. **API Services**: Create service functions to abstract API calls:
   ```typescript
   // Example API service
   export const qrCodeService = {
     async createQRCode(data: CreateQRCodeRequest): Promise<QRCodeResponse> {
       const { data: response, error } = await supabase
         .from('qr_codes')
         .insert(data)
         .select()
         .single();

       if (error) throw new Error(error.message);
       return response;
     },

     // Other methods...
   };
   ```

5. **API Testing**: Create tests for API services using Vitest:
   ```typescript
   import { describe, it, expect, vi } from 'vitest';
   import { qrCodeService } from '../qr-code-service';
   import { supabase } from '../supabase-client';

   // Mock Supabase client
   vi.mock('../supabase-client', () => ({
     supabase: {
       from: vi.fn().mockReturnThis(),
       insert: vi.fn().mockReturnThis(),
       select: vi.fn().mockReturnThis(),
       single: vi.fn(),
     },
   }));

   describe('QR Code Service', () => {
     it('creates a QR code', async () => {
       // Setup mock response
       const mockResponse = { id: '123', title: 'Test QR', url: 'https://example.com' };
       supabase.from().insert().select().single.mockResolvedValue({ data: mockResponse, error: null });

       // Call service
       const result = await qrCodeService.createQRCode({ title: 'Test QR', url: 'https://example.com' });

       // Assert result
       expect(result).toEqual(mockResponse);
     });
   });
   ```

6. **API Documentation Tools**: Consider using tools like Swagger/OpenAPI for comprehensive API documentation.

By following these guidelines, the API development will be well-documented and coordinated with the frontend implementation.

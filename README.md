# QR Direct Platform

A comprehensive QR code generation and management platform with advanced customization, analytics, and team collaboration features.

## 🎨 Creator-First Design System

This project implements the Creator-First Design System, a design philosophy blending warm minimalism, visual storytelling, subtle delight, and high-functioning clarity. The design system is tailored for creative professionals, ensuring the platform feels intuitive, inspiring, and bespoke.

### Key Design Principles

- **Modern Minimalism**: Generous whitespace, clear hierarchy, no clutter
- **Warm Sophistication**: Warm color palette with deep teal, warm ochre, and sage green accents
- **Organic & Chill**: Rounded corners, subtle shadows, and floating orb effects for depth
- **Subtle Creative Flair**: Consistent illustrations, micro-animations, and artistic flourishes

## 🧱 Component Library

The project includes a set of custom components built on top of Shadcn UI, designed to implement the Creator-First Design System:

### Button Components

- **Button**: Standard button with various variants (default, outline, secondary, ghost, link, gradient, warm, sage)
- **RippleButton**: Button with ripple effect on click

### Card Components

- **Card**: Card component with variants (default, glass, hover, gradient)
- **StatCard**: Card for displaying statistics with optional icon and trend indicator
- **GradientStatCard**: Stat card with gradient background

### Badge Components

- **HeroBadge**: Badge with shimmer effect for highlighting important information
- **HeroBadgeWithIcon**: Hero badge with icon

### Form Components

- **Input**: Enhanced input with variants (default, minimal, search) and animations
- **FloatingLabelInput**: Input with animated floating label
- **Checkbox**: Enhanced checkbox with variants (default, card) and animations
- **CheckboxGroup**: Group of checkboxes with horizontal/vertical orientation
- **Select**: Enhanced select dropdown with variants and animations
- **FormSelect**: Complete select field with label and error message
- **RadioGroup**: Enhanced radio group with variants and animations
- **FormRadioGroup**: Complete radio selection field with label and error message

### Navigation Components

- **Tabs**: Tabbed interface with various styles (default, underline, pills, cards)
- **Breadcrumb**: Breadcrumb navigation with various styles
- **Pagination**: Pagination component with various styles (default, rounded, outline)

### Feedback Components

- **Alert**: Alert component with various states (default, success, info, warning, error)
- **Progress**: Progress indicator with various styles and animations
- **Toast**: Toast notification system for temporary messages

### Modal Components

- **Dialog**: Modal dialog for important interactions
- **Drawer**: Side panel that slides in from the edge of the screen

### Data Display Components

- **Table**: Table component for displaying structured data
- **List**: List component with various styles (default, separated, cards)
- **Timeline**: Timeline component for displaying chronological events

### Background Components

- **FloatingBackground**: Background with animated floating orbs
- **GradientBackground**: Background with gradient and rotating overlay

## 🚀 Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/qr-direct.git
cd qr-direct
```

2. Install dependencies:
```bash
npm install
# or
yarn install
```

3. Start the development server:
```bash
npm run dev
# or
yarn dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser to see the application.

## 🛠️ Tech Stack

- **Frontend Framework**: Next.js 14+ with App Router
- **UI Library**: React 18+ with TypeScript
- **Styling**: Tailwind CSS
- **Component Library**: Shadcn/UI
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Backend & Database**: Supabase
- **QR Code Generation**: qr-code-styling, react-qr-code
- **PDF Generation**: jspdf
- **Color Picker**: react-color
- **Charts**: recharts
- **Form Handling**: React Hook Form with Zod validation
- **State Management**: Zustand

## 📝 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🔗 Learn More

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Shadcn/UI](https://ui.shadcn.com/) - Re-usable components built using Radix UI and Tailwind CSS.
- [Framer Motion](https://www.framer.com/motion/) - A production-ready motion library for React.
- [Supabase](https://supabase.com/docs) - Open source Firebase alternative.

## 🚀 Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new) from the creators of Next.js.

Check out the [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

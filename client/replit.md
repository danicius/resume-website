# Portfolio Web Application

## Overview

This is a personal portfolio website for Danielle Alvarez, a Computer Science graduate and software developer. The application is built as a **static React website** optimized for GitHub Pages deployment, designed to showcase professional experience, projects, and technical skills in an elegant, responsive interface with an orange-blue gradient theme.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Routing**: Wouter for client-side routing
- **UI Framework**: Shadcn/ui components built on Radix UI primitives
- **Styling**: Tailwind CSS with custom CSS variables for theming
- **State Management**: TanStack Query for server state management
- **Build Tool**: Vite for development and production builds
- **Animation**: Framer Motion for smooth animations and transitions

### Static Site Architecture
- **Deployment**: Optimized for GitHub Pages with automatic deployment
- **Build Tool**: Vite for static site generation
- **Assets**: Professional headshot and images served statically
- **Configuration**: Custom Vite config for static builds (`vite.config.static.ts`)
- **CI/CD**: GitHub Actions workflow for automatic deployment

## Key Components

### Frontend Components
1. **Navigation**: Fixed navigation bar with smooth scrolling to sections
2. **Hero Section**: Main landing section with professional headshot and introduction
3. **About Section**: Personal background and achievements showcase
4. **Experience Section**: Professional work history with detailed responsibilities
5. **Projects Section**: Portfolio of development projects with technology badges
6. **Skills Section**: Technical skills organized by category
7. **Contact Section**: Multiple contact methods and social links
8. **Footer**: Simple footer with social media links

### UI Component System
- Complete Shadcn/ui component library integration
- Radix UI primitives for accessibility
- Custom styling with Tailwind CSS
- Consistent design system with CSS custom properties
- Responsive design across all screen sizes

### Backend Structure
- Modular route registration system
- Middleware for request logging and error handling
- Storage abstraction layer for future database integration
- Development and production environment configurations

## Data Flow

### Frontend Data Flow
1. React components render portfolio content statically
2. TanStack Query handles any future API interactions
3. Wouter manages client-side routing
4. Components communicate through props and React context

### Backend Data Flow
1. Express server handles HTTP requests
2. Middleware processes requests and responses
3. Storage interface provides data abstraction
4. Routes return JSON responses for API endpoints

### Asset Management
- Static assets served through Vite in development
- Images and fonts optimized for web delivery
- Professional headshot integrated as module import

## External Dependencies

### Core Framework Dependencies
- React ecosystem (React, React DOM, TanStack Query)
- Express.js for server functionality
- Vite for build tooling and development server

### UI and Styling
- Radix UI component primitives for accessibility
- Tailwind CSS for utility-first styling
- Framer Motion for animations
- Lucide React for consistent iconography

### Database and ORM
- Drizzle ORM for type-safe database operations
- Neon Database serverless PostgreSQL
- Zod for schema validation

### Development Tools
- TypeScript for type safety
- ESLint and Prettier for code quality
- tsx for TypeScript execution in development

## Deployment Strategy

### Development Environment
- Vite dev server for frontend with HMR
- tsx for backend TypeScript execution
- Concurrent development of frontend and backend
- Replit integration with development banner

### Production Build
1. Frontend: Vite builds optimized React application
2. Backend: esbuild bundles server code for Node.js
3. Static assets: Served from dist/public directory
4. Environment variables: DATABASE_URL for database connection

### Build Commands
- `npx vite --config vite.config.static.ts`: Development mode with hot reload
- `npx vite build --config vite.config.static.ts`: Production build for static site
- `npx vite preview --config vite.config.static.ts`: Preview production build
- Automatic deployment via GitHub Actions on push to main branch

### Environment Configuration
- Static site optimized for GitHub Pages
- Base path configured for proper asset loading
- Professional headshot and resume assets included
- Responsive design across all device sizes

## Changelog
- June 30, 2025. Initial setup with full-stack architecture
- July 1, 2025. Converted to static site for GitHub Pages deployment, added orange-blue gradient theme and professional headshot

## User Preferences

Preferred communication style: Simple, everyday language.
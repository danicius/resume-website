# Portfolio Web Application

## Overview

This is a personal portfolio website for Danielle Alvarez, a Computer Science graduate and software developer. The application is built as a full-stack web application with a React frontend and Express backend, designed to showcase professional experience, projects, and technical skills in an elegant, responsive interface.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Routing**: Wouter for client-side routing
- **UI Framework**: Shadcn/ui components built on Radix UI primitives
- **Styling**: Tailwind CSS with custom CSS variables for theming
- **State Management**: TanStack Query for server state management
- **Build Tool**: Vite for development and production builds
- **Animation**: Framer Motion for smooth animations and transitions

### Backend Architecture
- **Framework**: Express.js with TypeScript
- **Module System**: ES Modules
- **Development**: tsx for TypeScript execution
- **Production Build**: esbuild for server bundling
- **Storage**: In-memory storage with interface for future database integration

### Database Layer
- **ORM**: Drizzle ORM configured for PostgreSQL
- **Schema**: Centralized schema definitions in shared directory
- **Migrations**: Drizzle Kit for database migrations
- **Connection**: Neon Database serverless PostgreSQL (configured but not actively used)

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
- `npm run dev`: Development mode with hot reload
- `npm run build`: Production build for frontend and backend
- `npm run start`: Production server execution
- `npm run db:push`: Database schema synchronization

### Environment Configuration
- NODE_ENV for environment detection
- DATABASE_URL for PostgreSQL connection
- Development vs production asset serving
- Replit-specific integrations and banners

## Changelog
- June 30, 2025. Initial setup

## User Preferences

Preferred communication style: Simple, everyday language.
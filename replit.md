# LUXE E-Commerce Platform

## Overview

LUXE is a premium e-commerce web application built with React, TypeScript, and Vite. The platform showcases a curated collection of luxury products across multiple categories including audio equipment, watches, footwear, and bags. The application features a modern, responsive design with shopping cart functionality, product browsing, and detailed product pages.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Framework
- **React 18.3.1** with TypeScript for type-safe component development
- **Vite** as the build tool and development server, configured to run on port 5000
- **React Router (react-router-dom)** for client-side routing with dedicated routes for Home, Shop, Product Detail, Cart, About, Contact, and a catch-all 404 page

### UI Component System
- **shadcn/ui** component library built on Radix UI primitives for accessible, customizable components
- **Tailwind CSS** for utility-first styling with a custom design system
- **next-themes** for dark/light theme support
- CSS variables-based theming system defined in `src/index.css` with custom tokens for e-commerce-specific colors (hero gradients, price colors, sale colors)

### State Management
- **React Context API** (`CartContext`) for global shopping cart state management
- Cart data persists to localStorage for maintaining state across sessions
- Cart operations include add, remove, update quantity, clear, and computed totals

### Data Fetching
- **TanStack Query (React Query)** v5.83.0 integrated for server state management
- Currently configured but not actively used for API calls (static product data)

### Product Data Structure
The application manages 20 products across 4 categories:
- Audio devices (headphones, earbuds) - 5 products
- Accessories (watches) - 5 products  
- Footwear (sneakers, running shoes) - 5 products
- Bags (backpacks, duffel bags) - 5 products

Products are defined with: id, name, price, image, category, description, and features array.

### Routing Architecture
- **Browser-based routing** with the following page structure:
  - `/` - Home page with hero section and featured products
  - `/shop` - Full product catalog with grid layout
  - `/product/:id` - Dynamic product detail pages
  - `/cart` - Shopping cart with checkout summary
  - `/about` - Company information
  - `/contact` - Contact form
  - `/*` - 404 error page for non-existent routes

### Asset Management
- Product images stored in `attached_assets/stock_images/` directory
- Path aliases configured: `@/` for src directory, `@assets/` for attached_assets
- Static assets (robots.txt, ads.txt) in public directory

### Form Handling
- **react-hook-form** with **@hookform/resolvers** for form validation
- **zod** likely used for schema validation (resolver pattern)

### Notifications
- **sonner** for toast notifications (add to cart confirmations)
- **shadcn/ui toast** system as backup

### Development Tools
- **ESLint** with TypeScript support and React-specific rules
- Relaxed linting configuration (unused vars and implicit any warnings disabled)
- **PostCSS** with Tailwind CSS and Autoprefixer

## External Dependencies

### Third-Party Services
- **Google AdSense** (Publisher ID: ca-pub-5091579014831908)
  - Ad slot configured in index.html
  - ads.txt file for publisher verification
  
### Build and Deployment
- **GitHub Pages** deployment configured via GitHub Actions workflow
- Automatic deployment on push to `main` branch
- Base path set to `/` for root directory deployment
- Development server configured with host `0.0.0.0` for external access

### UI Libraries
- **Radix UI** comprehensive suite of unstyled, accessible components
- **lucide-react** for icon system
- **embla-carousel-react** for carousel functionality
- **cmdk** for command menu patterns
- **date-fns** for date manipulation
- **input-otp** for OTP input fields
- **vaul** (drawer component)
- **recharts** for charting capabilities (imported but not actively used)

### Styling Dependencies
- **class-variance-authority** for component variant management
- **clsx** and **tailwind-merge** for conditional className handling
- **tailwindcss-animate** for animation utilities

### SEO and Metadata
- Open Graph tags configured for social media sharing
- Twitter card metadata
- robots.txt with permissive crawling rules for major bots
- Meta descriptions and author tags in index.html
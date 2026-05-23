# Technical Blueprint

## 1. Technical Stack & Architecture
- **Frontend**: Next.js 15 (App Router), React 19, TypeScript
- **Styling**: Tailwind CSS, Radix UI primitives, `class-variance-authority`, `tailwindcss-animate`
- **Animations**: Framer Motion
- **Backend/API**: Next.js Server Actions, REST API via Next.js Route Handlers
- **Database**: MongoDB (via Mongoose schemas like `Project`, `Company`, `Category`)
- **Authentication**: Custom JWT-based Auth (`jose`, `bcryptjs`) for Admin Panel
- **Package Manager**: Bun

## 2. Design System & Identity Standards
- **Brand Palette**:
  - `primary`: Purple to Pink gradients (`from-purple-600 to-pink-600`)
  - `secondary`: Blue to Cyan gradients (`from-blue-600 to-cyan-600`)
  - `accent`: Green to Emerald gradients (`from-green-600 to-emerald-600`)
- **Visual Tone**: Highly dynamic, modern, professional Web3 aesthetic (Dark mode optimized, grain textures, floating elements).
- **Key UI Patterns**: Hero sections with animated text, dynamic grids, floating interactive elements, micro-animations on hover, preloader screens.

## 3. Core Application Flows
1. **Public Portfolio View**: Users navigate through Hero, Professional Highlights, Project Showcase, and About sections. Interaction includes smooth scrolling and project filtering by categories.
2. **Admin Management**: Authenticated admin users can access a protected dashboard to CRUD (Create, Read, Update, Delete) `Projects`, `Companies`, and `Categories`.

## 4. Development Standards
- **Folder Structure**: App Router conventions (`app/`), highly modularized UI (`components/`), reusable business logic (`actions/`, `services/`), and data models (`models/`).
- **Naming Conventions**: Kebab-case for component files (e.g., `hero-section.tsx`), PascalCase for React component names and Mongoose models (e.g., `Project.ts`).

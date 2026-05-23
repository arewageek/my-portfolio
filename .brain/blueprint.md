# Technical Blueprint

## 1. Technical Stack & Architecture
- **Frontend**: Next.js 15 (App Router), React 19, TypeScript
- **Styling**: Tailwind CSS, Radix UI primitives, `class-variance-authority`, `tailwindcss-animate`
- **Animations**: Framer Motion
- **Backend/API**: Next.js Server Actions, REST API via Next.js Route Handlers
- **Database**: MongoDB (via Mongoose schemas like `Project`, `Company`, `Category`)
- **Authentication**: Custom JWT-based Auth (`jose`, `bcryptjs`) for Admin Panel (Frontend shell built at `/login`)
- **Notification & Feedback**: `sonner` for toast notifications
- **Package Manager**: Bun

## 2. Design System & Identity Standards
- **Brand Palette**:
  - `primary`: Purple to Pink gradients (`from-purple-600 to-pink-600`)
  - `secondary`: Blue to Cyan gradients (`from-blue-600 to-cyan-600`)
  - `accent`: Green to Emerald gradients (`from-green-600 to-emerald-600`)
- **Visual Tone**: Highly dynamic, modern, professional Web3 aesthetic (Dark mode optimized, grain textures, floating elements, unified X branding instead of old Twitter bird).
- **Key UI Patterns**: Hero sections with animated text, dynamic grids, floating interactive elements, micro-animations on hover, preloader screens, minimalist unboxed list formats.

## 3. Core Application Flows
1. **Public Portfolio View**: Users navigate through Hero, Professional Highlights, Project Showcase, Github Activity, Recent Insights, and About sections. Interaction includes smooth scrolling and project filtering by categories.
2. **Insights & Blog**: Users browse articles at `/insights` with live search and category pill filtering. Deep dives can be viewed at `/insights/[slug]` with SEO-optimized dynamic metadata, social sharing triggers (X/LinkedIn), and newsletter subscription forms.
3. **Admin Management**: Secure login page at `/login`. Once authenticated, admins access `/dashboard` featuring custom navigation layouts bypassing public headers/footers, offering direct recruitment inquiries management, newsletter subscriber lists, and a browser-persisted technical draftpad.

## 4. Development Standards
- **Folder Structure**: App Router conventions (`app/`), highly modularized UI (`components/`), reusable business logic (`actions/`, `services/`), and data models (`models/`).
- **Naming Conventions**: Kebab-case for component files (e.g., `hero-section.tsx`), PascalCase for React component names and Mongoose models (e.g., `Project.ts`).

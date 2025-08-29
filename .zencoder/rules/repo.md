---
description: Repository Information Overview
alwaysApply: true
---

# Portfolio Website Information

## Summary

A personal portfolio website built with Next.js, showcasing professional experience, projects, and skills. The site features a modern UI with dark mode support, responsive design, and a contact form. It uses Prisma with SQLite for data storage.

## Structure

- **app/**: Next.js app router pages and layouts
- **components/**: React components organized by feature
- **hooks/**: Custom React hooks
- **lib/**: Utility functions and Prisma client
- **prisma/**: Database schema and migrations
- **public/**: Static assets including project images and resume
- **styles/**: Global CSS styles

## Language & Runtime

**Language**: TypeScript
**Version**: TypeScript 5.x
**Framework**: Next.js 15.2.4
**Build System**: Next.js build system
**Package Manager**: npm

## Dependencies

**Main Dependencies**:

- React 19.x and React DOM 19.x
- Next.js 15.2.4
- Prisma Client 6.12.0
- Radix UI components (various)
- TailwindCSS 3.4.17
- Zod 3.24.1 (validation)
- React Hook Form 7.54.1
- Next-themes 0.4.4 (dark mode)

**Development Dependencies**:

- TypeScript 5.x
- Prisma CLI 6.12.0
- PostCSS 8.5.x
- TailwindCSS 3.4.17

## Database

**ORM**: Prisma
**Database**: SQLite
**Schema**: Models for Company, Project, Tool, Contact, Message, etc.

## Build & Installation

```bash
# Install dependencies
npm install

# Setup database
npx prisma generate
npx prisma migrate dev

# Development server
npm run dev

# Production build
npm run build

# Start production server
npm start
```

## Main Files

**Entry Point**: app/layout.tsx and app/page.tsx
**Configuration**:

- next.config.mjs (Next.js configuration)
- tsconfig.json (TypeScript configuration)
- tailwind.config.ts (TailwindCSS configuration)
- prisma/schema.prisma (Database schema)

## Features

- Responsive design with TailwindCSS
- Dark mode support via next-themes
- Component library built with Radix UI primitives
- Database-driven content with Prisma ORM
- Contact form functionality
- Project showcase with filtering
- Work experience timeline

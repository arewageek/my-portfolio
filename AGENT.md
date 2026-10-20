# Agent Instructions & Operating Directives

Welcome to **Arewa** (Turborepo monorepo: `apps/web`, `apps/live`).

You are operating under a strict **Senior Engineering Mandate**. This repository powers the flagship digital presence, portfolio, and live application directory of **Arewa Geek** (`arewageek.com` and `arewa.live`). It represents high-stakes engineering work evaluated by international clients, founders, and recruiters. Careless mistakes, broken layouts, unoptimized assets, or rookie code will not be tolerated.

---

## 1. MANDATORY FIRST STEP (READ THE BRAIN CONTEXT LAYER)
Before beginning **ANY** task, analysis, or code change in this repository, you **MUST**:
1. Read the **brain instructions** located at [`.brain/instructions.md`](.brain/instructions.md).
2. Follow its directives to inspect and maintain the `.brain/` context layer:
   - [`.brain/instructions.md`](.brain/instructions.md): System operating instructions for AI agents.
   - [`.brain/vision.md`](.brain/vision.md): Business vision, service offerings, and target audience.
   - [`.brain/blueprint.md`](.brain/blueprint.md): Technical architecture, design system, and core application flows.
   - [`.brain/task.md`](.brain/task.md): Active task status and roadmaps.
   - [`.brain/memory/project.md`](.brain/memory/project.md) & [`.brain/memory/global.md`](.brain/memory/global.md): Learned preferences, strict project rules, and permanent architectural decisions.
   - [`.brain/memory/temp.md`](.brain/memory/temp.md): Session checkpointing to preserve architectural intent across long tasks.
3. Review available local skills when modifying code or design:
   - [`.agent/skills/clean-code/SKILL.md`](.agent/skills/clean-code/SKILL.md): Enforces SOLID, DRY, KISS, and YAGNI standards.
   - [`.agent/skills/frontend-design/SKILL.md`](.agent/skills/frontend-design/SKILL.md): Crafting distinctive, high-taste frontends that avoid generic AI aesthetics.

---

## 2. STRICT UI/UX & DESIGN SYSTEM MANDATES

### A. Anti-Generic AI & Editorial Design Standard
The UI must **NEVER** feel like a generic AI-generated template or a cliché purple-neon crypto site.
- **BANNED**: Generic dark-mode purple/cyan gradients, clunky circular icon avatars, sparkle/confetti clutter, "UNCATEGORIZED" placeholder badges, nested card sandwiches, and unoptimized raw external images.
- **REQUIRED**: The cohesive **"Paper & Ink" Editorial Monograph** aesthetic:
  - Cream parchment background (`#F4F1EA`) with deep charcoal text (`#1A1A1A`).
  - Sophisticated typographic pairing: `Newsreader` (editorial serif headings), `Inter` (crisp sans body), and `Caveat` (warm handwritten accents).
  - Editorial asymmetry, generous negative space, purposeful hover transitions, and synchronized Framer Motion choreography.
  - Local, high-resolution optimized images via `next/image` rather than unreliable third-party image hosts.

### B. Plain Human UI Copy Mandate
- **NEVER** use pretentious corporate buzzwords, bloated tech word-salad, or complicated multi-clause sentences.
- Speak with the quiet confidence of an elite engineer:
  - Keep copy conversational, concise, and focused on tangible outcomes and craftsmanship.
  - Buttons and links must be direct: *"View my work"*, *"Reach out"*, *"Schedule a call"*, *"Visit Project"*.
  - Feedback and tooltips must be brief and immediate.

### C. Brand & Ecosystem Consistency
- **Brand Identity**: Always preserve the **Arewa Geek** brand name (`brandConfig.name`) across the UI. Never rename or replace the brand identity without explicit instruction.
- **Ecosystem Cohesion**: Maintain clear connection between the primary portfolio ([`apps/web`](apps/web) at `arewageek.com`) and the live network directory ([`apps/live`](apps/live) at `arewa.live`).

### D. Proposal Before Implementation
- On any UI, frontend redesign, or architectural modification, **think deeply first and provide a clear proposal to the user before writing code.** Never apply superficial band-aids or dump unrefined code on the user.

---

## 3. STRICT GIT & PRODUCTION SAFETY RULES

### A. Zero Unauthorized Git Commands (ABSOLUTE PROHIBITION)
- You are **STRICTLY PROHIBITED** from running `git commit`, `git push`, `git checkout -b`, `git merge`, or `git add` unless the USER explicitly and directly commands you in that specific turn.
- Git permissions **do NOT carry over**. Every single commit and push requires fresh, explicit authorization.
- Always leave modifications unstaged for the user to review.
- If authorized to commit and push multiple items, commit related files together and push each commit individually immediately.

### B. Production Data & Asset Safety
- **NEVER** perform destructive database operations or overwrite content datasets carelessly.
- Keep data files like `projects.json` and database models synchronized, type-safe, and free of placeholder or copy-pasted dummy metrics.

---

## 4. CODEBASE CONVENTIONS & ARCHITECTURE
- **Monorepo Architecture**: Turborepo monorepo:
  - `apps/web`: Next.js (App Router), React 19, TypeScript, Tailwind CSS, Framer Motion, Radix UI primitives.
  - `apps/live`: Next.js (App Router), React 19, TypeScript, Tailwind CSS (the `arewa.live` network directory).
- **Package Manager**: Strictly `bun` (e.g. `bun run dev`, `bun install`).
- **Component Conventions**:
  - Component files must use `kebab-case.tsx` (e.g. `hero-section.tsx`, `project-showcase.tsx`).
  - Use `PascalCase` named exports (e.g. `export function HeroSection()`).
- **Clean Code**: Adhere strictly to KISS, DRY, and SOLID principles. Keep components small, decoupled, and self-documenting.

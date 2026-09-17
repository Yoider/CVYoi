# Project: Web CV / Interactive Portfolio of Yoider Murillo Salazar

## Architecture
- **Framework & Core**: Next.js 14.2+ (App Router), React 18.3+, TypeScript 5.6+ in `strict: true` mode.
- **Styling & Design System**: Tailwind CSS 3.4+ configured with exact semantic tokens from `DESIGN_SYSTEM.md`:
  - Canvas / Background: `#090d16` (`bg-canvas` / `bg-[#090d16]`)
  - Surface / Secondary Cards: `#111625` (`bg-surface` / `bg-[#111625]` with `border border-border/80`)
  - Surface Hover / Active: `#182032` (`hover:bg-surface-hover` / `hover:bg-[#182032]`)
  - Borders & Dividers: `#1e293b` (`border-border` / `border-[#1e293b]`)
  - Tech Accent (.NET / Backend): `#3b82f6` (`blue-500`) to `#6366f1` (`indigo-500`)
  - AI Accent (Multimodal / Agents): `#a855f7` (`purple-500`) / `#c084fc` (`purple-400`)
  - Status & Active Accent: `#10b981` (`emerald-500`) / `#34d399` (`emerald-400`) — strictly for availability and positive confirmations
  - Text Hierarchy: Heading `#f8fafc` (`text-zinc-50`), Body `#94a3b8` (`text-zinc-400`), Meta `#64748b` (`text-zinc-500`)
- **Typography**: Dual-font pairing: `Geist Sans` / `Inter` (`font-sans`) for reading and headings; `Geist Mono` / `JetBrains Mono` (`font-mono`) for badges, tech tags, dates, code snippets.
- **Data Architecture**: Decoupled, single source of truth in `data/portfolioData.ts`, strictly typed via `types/portfolio.ts`.
- **Component Model**:
  - Server Components (RSC): Layout, Hero, About (Storytelling), Experience Timeline, Skills Matrix, Footer.
  - Client Components (`'use client'`):
    - `Navbar`: Mobile responsive menu drawer & smooth scroll spy.
    - `Projects` & `ProjectModal`: Interactive cards, modal open/close dialog, Escape key handler, backdrop blur, body scroll locking.
    - `Contact`: Click-to-copy interaction with 2000ms visual confirmation tooltip/pill.

## Feature Inventory
Every feature from user requirements and the survey phase is enumerated below with its assigned milestone:

| # | Feature | Description | Milestone | Source |
|---|---------|-------------|-----------|--------|
| F1 | Project Scaffolding & Config | `package.json`, `tsconfig.json`, `next.config.js`, `postcss.config.js`, `tailwind.config.ts`, `lib/utils.ts` | M1 | survey_tech |
| F2 | Design System & Global Styles | Tailwind colors (`#090d16`, `#111625`, `#182032`, `#1e293b`, `#3b82f6`, `#a855f7`, `#10b981`), fonts, reset in `globals.css` | M1 | survey_design |
| F3 | TypeScript Data Types Schema | `types/portfolio.ts` covering Hero, Storytelling, Projects, Experience, Skills, Contact | M1 | survey_content |
| F4 | Portfolio Master Dataset | `data/portfolioData.ts` complete instantiated copy, metrics, and architecture details for Yoider Murillo Salazar | M1 | survey_content |
| F5 | Navbar & Header | Responsive navigation, brand logo/initials, section anchor links, mobile hamburger menu | M2 | survey_content |
| F6 | Hero Section & Availability Pill | Title, value proposition, CV download button (`/cv-yoider-murillo.pdf`), direct social links, and exact emerald pulsing badge (`#10b981`) | M2 | ORIGINAL_REQUEST |
| F7 | Sobre Mí (Storytelling) | Narrative arc: Colombia .NET backend at Uno 27 & Abai Group -> Seville Modern Full-Stack & Multimodal AI, principles and career stats | M2 | ORIGINAL_REQUEST |
| F8 | Experience Timeline | Chronological cards for Uno 27 S.A.S., Abai Group, and Seville R&D with achievements, tech stacks, and dates | M2 | ORIGINAL_REQUEST |
| F9 | Technical Skills Matrix | 5 categorized layers (Backend, Frontend, Data, AI & Automation, Tools) with interactive pill tags and monospace labels | M2 | ORIGINAL_REQUEST |
| F10 | Direct Contact Section | Contact cards with direct links: Email (`yodiermurillo@gmail.com`), Phone (`+34 604 30 52 21`), WhatsApp, GitHub, LinkedIn, plus copy-to-clipboard | M2 | ORIGINAL_REQUEST |
| F11 | Technical Projects Showcase | Grid of 4 cards: Impulsar, CHRON0V4, Finanzas Dashboard, Tuma_Z with problem, architecture, metrics, and stack tags | M3 | ORIGINAL_REQUEST |
| F12 | Project Detail Modal / Dialog | Interactive modal dialog for deep-dive technical architecture view, problem breakdown, metrics badges, stack chips, and close button | M3 | ORIGINAL_REQUEST |
| F13 | Static Assets & CV Download | Valid placeholder PDF asset at `public/cv-yoider-murillo.pdf` and favicon/metadata | M3 | survey_tech |
| F14 | Integration & Mobile Responsiveness | Viewport testing on 375px+ without horizontal overflow, touch target sizing (>=44px), microinteractions (`duration-200 ease-out`) | M4 | DESIGN_SYSTEM |
| F15 | Production Build Verification | `npm run build` zero TypeScript errors, zero CSS errors, clean production bundle output | M4 | ORIGINAL_REQUEST |
| F16 | Opaque-Box E2E Testing Suite | Tier 1 (Features), Tier 2 (Boundaries), Tier 3 (Cross-feature), Tier 4 (Real-world scenarios) | M5 | TEST_INFRA |
| F17 | Adversarial Hardening (Tier 5) | White-box edge-case stress testing, accessibility contrast audit, and coverage validation | M5 | TEST_INFRA |

## Milestones
| # | Name | Scope | Dependencies | Status |
|---|------|-------|-------------|--------|
| M1 | Scaffolding & Design Foundation | Initialize Next.js project, TypeScript, Tailwind config, tokens, `types/portfolio.ts`, `data/portfolioData.ts`, `lib/utils.ts` | none | DONE |
| M2 | Core Content Sections | Navbar, Hero (pulsing badge), Sobre Mí, Experience Timeline, Skills Matrix, Contact (copy buttons), Footer | M1 | DONE |
| M3 | Technical Projects & Interactive Modals | Projects grid, ProjectModal dialog, focus trap/body scroll lock, metrics display, `/cv-yoider-murillo.pdf` asset | M2 | DONE |
| M4 | Responsive Polish & Build Verification | Mobile responsiveness audit (375px+), layout adjustments, `npm run build` validation | M3 | DONE |
| M5 | E2E Test Suite (Tiers 1-4) & Adversarial Hardening (Tier 5) | Run and pass 100% of E2E test suite published in `TEST_READY.md`, execute adversarial review | M4 | DONE |

## Interface Contracts

### `types/portfolio.ts` ↔ `data/portfolioData.ts` & UI Components
- `HeroData`: `{ name, title, availabilityBadge: { text, isActive, location }, valueProposition, tagline, cvDownloadUrl, socialLinks: SocialLink[] }`
- `StorytellingSection`: `{ intro, paragraphs: string[], principles: { title, description, icon }[], stats: { label, value, detail }[] }`
- `TechnicalProject`: `{ id, title, category, tagline, accentColor: 'blue'|'purple'|'emerald', highlighted: boolean, summary, problem: { challenge, context, impact }, solution: { architecture, keyPoints: string[] }, metrics: { value, label, detail }[], techStack: { name, category }[], links: { liveUrl?, githubUrl? } }`
- `ExperienceItem`: `{ id, role, company, location, period, isCurrent: boolean, type, description, achievements: string[], techStack: string[] }`
- `SkillCategory`: `{ id, name, description, accentColor, skills: { name, level?, isHighlighted?: boolean }[] }`
- `ContactInfo`: `{ email, phone, phoneDisplay, whatsappUrl, githubUrl, linkedinUrl, location }`

### Modal Dialog Interface: `components/projects/ProjectModal.tsx`
- Props: `{ project: TechnicalProject | null, isOpen: boolean, onClose: () => void }`
- Accessibility: `aria-modal="true"`, `role="dialog"`, closes on `Escape` key, backdrop click, and close button (`X`).
- Scroll lock: Adds `overflow-hidden` to `document.body` when open, restores on unmount.

### Copy Button Interface: `components/contact/CopyButton.tsx`
- Props: `{ textToCopy: string, label: string, feedbackText?: string }`
- Behavior: Uses `navigator.clipboard.writeText`, sets state for 2000ms showing emerald check icon `#10b981`.

## Code Layout
```
d:/DEV/CV/
├── app/
│   ├── layout.tsx         # Root layout with HTML lang="es", metadata, font variables
│   ├── page.tsx           # Home page aggregating Navbar, Hero, About, Projects, Experience, Skills, Contact, Footer
│   ├── globals.css        # Tailwind directives, CSS variables for color tokens, custom utilities
├── components/
│   ├── layout/
│   │   ├── Navbar.tsx     # Responsive navbar with mobile menu toggle & smooth scroll links
│   │   └── Footer.tsx     # Clean minimalist engineering footer
│   ├── hero/
│   │   ├── Hero.tsx       # Hero section with title, value proposition, CTAs
│   │   └── StatusBadge.tsx # Exact status pill with emerald pulsing dot
│   ├── about/
│   │   └── About.tsx      # Storytelling narrative, principles, and key career stats
│   ├── projects/
│   │   ├── Projects.tsx   # Interactive projects grid with project cards
│   │   ├── ProjectCard.tsx # Individual project card with hover states and modal trigger
│   │   └── ProjectModal.tsx # Full detail modal dialog with problem, architecture, metrics, stack
│   ├── experience/
│   │   └── Experience.tsx # Chronological career timeline
│   ├── skills/
│   │   └── Skills.tsx     # Categorized 5-layer skills matrix
│   ├── contact/
│   │   ├── Contact.tsx    # Contact channels grid
│   │   └── CopyButton.tsx # Copy to clipboard with visual feedback
├── types/
│   └── portfolio.ts       # TypeScript interfaces for all data entities
├── data/
│   └── portfolioData.ts   # Authoritative content dataset for Yoider Murillo Salazar
├── lib/
│   └── utils.ts           # Class merging helper (cn with clsx and tailwind-merge)
├── public/
│   └── cv-yoider-murillo.pdf # Static downloadable CV asset
├── package.json
├── tsconfig.json
├── tailwind.config.ts
├── postcss.config.js
└── next.config.js
```

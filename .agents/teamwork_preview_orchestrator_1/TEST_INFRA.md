# E2E Test Infra: Web CV / Interactive Portfolio (Yoider Murillo Salazar)

## Test Philosophy
- **Opaque-Box & Requirement-Driven**: Tests are designed directly against `ORIGINAL_REQUEST.md` and `DESIGN_SYSTEM.md` user-visible requirements.
- **Independence**: Test definitions do not depend on internal implementation shortcuts; they verify the DOM, interactive states, visual contrast, responsive viewports, and build deliverables.
- **Methodology**: Category-Partition + Boundary Value Analysis (BVA) + Pairwise Combinatorial Testing + Real-World Workload Testing.

## Feature Inventory Coverage

| # | Feature | Requirement Source | Tier 1 | Tier 2 | Tier 3 | Tier 4 |
|---|---------|-------------------|:------:|:------:|:------:|:------:|
| F1 | Project Scaffolding & Setup | ORIGINAL_REQUEST §R1 | ✓ | ✓ | ✓ | ✓ |
| F2 | Design System Tokens & Canvas | DESIGN_SYSTEM §2 | ✓ | ✓ | ✓ | ✓ |
| F3 | Data Integrity & Types | ORIGINAL_REQUEST §R1 | ✓ | - | ✓ | - |
| F4 | Content Accuracy | ORIGINAL_REQUEST §R2 | ✓ | ✓ | - | ✓ |
| F5 | Navbar Navigation & Links | ORIGINAL_REQUEST §R1 | ✓ | ✓ | ✓ | ✓ |
| F6 | Hero & Availability Badge | ORIGINAL_REQUEST §R2 | ✓ | ✓ | ✓ | ✓ |
| F7 | Sobre Mí (Storytelling) | ORIGINAL_REQUEST §R2 | ✓ | ✓ | - | ✓ |
| F8 | Experience Timeline | ORIGINAL_REQUEST §R2 | ✓ | ✓ | - | ✓ |
| F9 | Technical Skills Matrix | ORIGINAL_REQUEST §R2 | ✓ | ✓ | ✓ | ✓ |
| F10 | Direct Contact & Clipboard | ORIGINAL_REQUEST §R2 | ✓ | ✓ | ✓ | ✓ |
| F11 | Project Cards (4 Projects) | ORIGINAL_REQUEST §R2 | ✓ | ✓ | ✓ | ✓ |
| F12 | Project Modal Dialog | ORIGINAL_REQUEST §R2 | ✓ | ✓ | ✓ | ✓ |
| F13 | CV Download Link | ORIGINAL_REQUEST §R2 | ✓ | ✓ | - | ✓ |
| F14 | Mobile Responsiveness (375px) | ORIGINAL_REQUEST §Acceptance | ✓ | ✓ | ✓ | ✓ |
| F15 | Build & Zero Console Errors | ORIGINAL_REQUEST §Acceptance | ✓ | ✓ | ✓ | ✓ |

## Test Architecture
- **Framework**: Standalone Playwright / Node E2E test runner or synthetic headless verifier.
- **Execution Target**: Next.js production build (`npm run build`) and preview/dev server.
- **Assertions**:
  - DOM presence of required sections (`#hero`, `#sobre-mi`, `#proyectos`, `#experiencia`, `#habilidades`, `#contacto`).
  - Presence of 4 projects: Impulsar, CHRON0V4, Finanzas Dashboard, Tuma_Z.
  - Emerald badge contains `"DISPONIBLE EN SEVILLA & REMOTO"` with `animate-pulse` class.
  - Modal open/close cycles, ESC key press, backdrop click.
  - Computed styles: Body background `#090d16` (or `rgb(9, 13, 22)`), Card backgrounds `#111625` (or `rgb(17, 22, 37)`).
  - Viewport tests: `window.innerWidth = 375` -> `document.documentElement.scrollWidth <= 375` (zero horizontal overflow).

## Test Tiers Breakdown

### Tier 1: Feature Coverage (Smoke & Sanity)
- `T1-01`: Page loads with 200 HTTP status and document title contains "Yoider Murillo Salazar".
- `T1-02`: Availability badge displays "DISPONIBLE EN SEVILLA & REMOTO" with pulsing dot.
- `T1-03`: Hero section displays CV download button referencing `/cv-yoider-murillo.pdf`.
- `T1-04`: Hero section displays direct links to GitHub and LinkedIn.
- `T1-05`: Sobre Mí renders narrative covering Uno 27, Abai Group, and Seville Multimodal AI.
- `T1-06`: 4 project cards rendered (Impulsar, CHRON0V4, Finanzas Dashboard, Tuma_Z).
- `T1-07`: Experience timeline renders Uno 27, Abai Group, and Spain/Seville.
- `T1-08`: Skills section displays 5 categories (Backend, Frontend, Data, AI & Automation, Tools).
- `T1-09`: Contact section displays email (`yodiermurillo@gmail.com`) and phone (`+34 604 30 52 21`).
- `T1-10`: Footer displays copyright, tech stack, and location.

### Tier 2: Boundary & Corner Cases
- `T2-01`: Clicking a project card opens `ProjectModal` with `aria-modal="true"`.
- `T2-02`: Closing modal via Close button (`X`), Backdrop click, or `Escape` key restores background and focus.
- `T2-03`: Modal prevents background scrolling (`overflow-hidden` added to `body`).
- `T2-04`: Copy email button triggers clipboard write and shows "¡Copiado!" feedback for 2000ms.
- `T2-05`: Mobile viewport 375px: `scrollWidth <= innerWidth` (zero horizontal scrollbar).
- `T2-06`: Mobile hamburger menu opens and closes cleanly without layout disruption.

### Tier 3: Cross-Feature Combinations
- `T3-01`: Clicking Navbar anchor links scrolls smoothly to target section without URL hash disruption.
- `T3-02`: Opening multiple modals consecutively updates modal state cleanly without stale content.
- `T3-03`: Responsive transition: Resizing viewport from 1200px to 375px maintains correct grid layouts (1 col on mobile, 2/3 col desktop).

### Tier 4: Real-World Scenarios & Non-Functional Acceptance
- `T4-01`: Complete user journey: Land on Hero -> Read Sobre Mí -> Inspect Impulsar modal -> Check Experience -> Copy Email -> Zero errors.
- `T4-02`: Theme integrity: Background `#090d16`, Cards `#111625`, Borders `#1e293b`.
- `T4-03`: Console integrity: Zero `console.error` and zero hydration mismatches during complete run.
- `T4-04`: Accessibility: All buttons and links have accessible text or `aria-label`, touch targets >= 44x44px.

## Coverage Thresholds
- Tier 1: 10 test assertions (100% pass)
- Tier 2: 6 test assertions (100% pass)
- Tier 3: 3 cross-feature scenarios (100% pass)
- Tier 4: 4 acceptance benchmarks (100% pass)
- Total: 23 core verification checks.

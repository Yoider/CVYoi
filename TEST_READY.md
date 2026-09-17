# TEST_READY.md — E2E Test Suite Readiness Publication
> **Project:** Web CV / Interactive Portfolio — Yoider Murillo Salazar  
> **Status:** `TEST_READY` (Suite Published & Verifiable)  
> **Author:** `teamwork_preview_test_writer_e2e` (Track B: Quality Assurance & Testing Track)  
> **Published At:** 2026-09-14T21:25:00+02:00  
> **Execution Targets:** Next.js 14.2+ App Router, Playwright 1.48+, Node.js 18+  

---

## 1. Executive Summary & Test Harness Architecture

The End-to-End (E2E) testing track has completed the authoring and publishing of the comprehensive, opaque-box, requirement-driven E2E test harness for the Web CV / Interactive Portfolio of Yoider Murillo Salazar.

The test suite enforces the requirements of:
- `ORIGINAL_REQUEST.md` (Functional scope, career content, 4 technical projects, availability pill, copy interactions)
- `DESIGN_SYSTEM.md` (Exact color tokens `#090d16` canvas, `#111625` card surface, `#1e293b` borders, emerald `#10b981` pulse badge)
- `TEST_INFRA.md` (4-Tier test architecture with 23 verification checks)

### Test Artifacts Published

| Artifact | File Path | Purpose |
|---|---|---|
| **Playwright Config** | `playwright.config.ts` | Test runner configuration, webServer orchestration (`npm run dev`), desktop & mobile viewports |
| **Playwright Test Suite** | `tests/e2e/portfolio.spec.ts` | Full 23-test specification covering Tiers 1–4 using `@playwright/test` |
| **Standalone Verifier** | `tests/e2e/verify.mjs` | Zero-dependency Node.js E2E verifier for both live HTTP server and DOM/AST contract validation |
| **Test Scripts** | `package.json` | Registered scripts: `"test:e2e": "playwright test"`, `"test:verify": "node tests/e2e/verify.mjs"` |

---

## 2. Test Execution Commands

### Primary E2E Test Execution (Playwright)
```bash
# Run all 23 checks across desktop and mobile viewports
npm run test:e2e

# Or directly via Playwright CLI:
npx playwright test

# Run with interactive UI mode
npx playwright test --ui

# Run in headed mode
npx playwright test --headed

# Run specific tier
npx playwright test -g "Tier 1"
npx playwright test -g "Tier 2"
npx playwright test -g "Tier 3"
npx playwright test -g "Tier 4"
```

### Standalone E2E Test Execution (Node.js Synthetic Runner)
```bash
# Run standalone verifier against live server or static codebase
npm run test:verify

# Or directly:
node tests/e2e/verify.mjs

# With custom port:
node tests/e2e/verify.mjs --port 3000
```

---

## 3. Comprehensive 4-Tier Test Coverage Inventory

The suite contains **23 explicit verification checks** spanning 4 tiers with 100% requirements traceability:

| Test ID | Tier | Feature / Requirement | Assertion & Verification Method | Expected Outcome |
|---|---|---|---|---|
| `T1-01` | Tier 1 | Hero Title & Core Identity | HTTP 200, `<title>`, `<h1>` and role description | Status 200, title & H1 contain "Yoider Murillo Salazar", subtitle contains "Software Engineer & Full Stack Developer" |
| `T1-02` | Tier 1 | Availability Status Pill | Inspect status badge text and pulsing dot | Displays "DISPONIBLE EN SEVILLA & REMOTO", dot has `.animate-pulse` and emerald color (`#10b981`) |
| `T1-03` | Tier 1 | Downloadable CV Link | Link href check + HTTP GET request to `/cv-yoider-murillo.pdf` | Button references `/cv-yoider-murillo.pdf` and asset responds with HTTP 200 |
| `T1-04` | Tier 1 | Social & Professional Links | Anchor elements in Hero section | Direct external links to GitHub (`github.com/yoi-hub`) and LinkedIn (`linkedin.com/in/yoider-murillo-salazar`) |
| `T1-05` | Tier 1 | Sobre Mí (Storytelling) | Narrative in `#sobre-mi` | Mentions Uno 27 S.A.S., Abai Group, and Seville / Multimodal AI trajectory |
| `T1-06` | Tier 1 | Featured Projects Grid | Project cards count in `#proyectos` | Exactly 4 cards: Impulsar, CHRON0V4, Finanzas Dashboard, Tuma_Z |
| `T1-07` | Tier 1 | Experience Timeline | Chronological items in `#experiencia` | Contains Uno 27 S.A.S., Abai Group, and Seville R&D / Multimodal AI |
| `T1-08` | Tier 1 | Technical Skills Matrix | Categories in `#habilidades` | All 5 layers present: Backend, Frontend, Data/Datos, AI/IA & Automatización, Herramientas/Tools |
| `T1-09` | Tier 1 | Direct Contact Coordinates | Elements in `#contacto` | Displays email `yodiermurillo@gmail.com` and phone `+34 604 30 52 21` |
| `T1-10` | Tier 1 | Footer Integrity | Footer element | Contains copyright, Yoider Murillo Salazar, and tech stack (Next.js, TypeScript, Tailwind CSS) |
| `T2-01` | Tier 2 | Project Modal Open | Click on Impulsar project card | Dialog opens with `role="dialog"` or `aria-modal="true"`, showing problem, architecture, metrics |
| `T2-02` | Tier 2 | Modal Dismissal Cycles | Escape key, close button (`X`), backdrop click | Modal closes cleanly, removes backdrop overlay, restores page focus |
| `T2-03` | Tier 2 | Body Scroll Lock | Inspect `document.body` classList & computed style | `overflow-hidden` class added to `body` while open; removed when closed |
| `T2-04` | Tier 2 | Copy Button Feedback | Click copy email button | Shows "¡Copiado!" feedback with check icon, reverts after 2000ms |
| `T2-05` | Tier 2 | Mobile Zero Overflow (375px) | Viewport 375x667: `document.documentElement.scrollWidth <= window.innerWidth` | Zero horizontal scrollbar, zero clipped content |
| `T2-06` | Tier 2 | Mobile Hamburger Navigation | Viewport 375x667: toggle mobile menu | Hamburger button opens drawer; clicking nav link scrolls and auto-closes menu |
| `T3-01` | Tier 3 | Navbar Smooth Scroll Navigation | Click nav links `#proyectos`, `#contacto` | Target sections scroll smoothly into viewport |
| `T3-02` | Tier 3 | Sequential Modal Transitions | Open Impulsar -> Close -> Open CHRON0V4 | State updates cleanly; no stale content or leftover modal DOM nodes |
| `T3-03` | Tier 3 | Responsive Grid Adaptation | Viewport transition 1280px -> 375px | Desktop renders 2+ columns; mobile automatically collapses to 1 column |
| `T4-01` | Tier 4 | Complete User Journey Flow | Hero -> About -> Impulsar modal -> Experience -> Copy email | End-to-end user navigation completes with 0 step failures |
| `T4-02` | Tier 4 | Design System Token Conformance | Computed styles for `body`, `.card`, and borders | Canvas is `#090d16` (`rgb(9, 13, 22)`), Card surface is `#111625` (`rgb(17, 22, 37)`), border `#1e293b` |
| `T4-03` | Tier 4 | Console Cleanliness | `page.on('console')` and `page.on('pageerror')` | Zero `console.error` logs, zero React hydration mismatches |
| `T4-04` | Tier 4 | Accessibility Audit | Button/link accessible names, touch targets | Interactive elements have `aria-label` or inner text; touch targets >= 24px/44px |

---

## 4. Coverage Thresholds & Quality Gate Pass Criteria

To pass the Quality Gate for Milestone M5:
1. **Tier 1 (Smoke & Sanity):** 10 / 10 tests must pass (100%).
2. **Tier 2 (Boundary & Corner Cases):** 6 / 6 tests must pass (100%).
3. **Tier 3 (Cross-Feature Combinations):** 3 / 3 tests must pass (100%).
4. **Tier 4 (Real-World & Non-Functional):** 4 / 4 tests must pass (100%).
5. **Total Test Success Rate:** **23 / 23 (100%)**.

---

## 5. Traceability Matrix to Requirements

| Requirement ID | Description | Covered by Test Checks |
|---|---|---|
| **R1** | Next.js App Router, TypeScript, Modular Architecture | `T1-01`, `T1-10`, `T4-03` |
| **R2 — Hero** | Name, role, value prop, CV button, social links | `T1-01`, `T1-03`, `T1-04`, `T4-01` |
| **R2 — Status Pill** | "DISPONIBLE EN SEVILLA & REMOTO" + green pulsing dot | `T1-02`, `T4-01` |
| **R2 — Sobre Mí** | Storytelling: Uno 27, Abai Group, Seville Multimodal AI | `T1-05`, `T4-01` |
| **R2 — Projects** | Impulsar, CHRON0V4, Finanzas Dashboard, Tuma_Z | `T1-06`, `T2-01`, `T3-02`, `T4-01` |
| **R2 — Modals** | Problem, architecture, metrics, close interactions | `T2-01`, `T2-02`, `T2-03`, `T3-02` |
| **R2 — Experience** | Career timeline (Colombia to Spain) | `T1-07`, `T4-01` |
| **R2 — Skills** | 5-layer matrix (Backend, Frontend, Data, AI, Tools) | `T1-08`, `T4-01` |
| **R2 — Contact** | Email, Phone, WhatsApp, GitHub, LinkedIn, Copy button | `T1-09`, `T2-04`, `T4-01` |
| **R3 — Visual Tokens** | `#090d16` canvas, `#111625` cards, emerald `#10b981` | `T4-02`, `T1-02` |
| **R3 — Mobile 375px** | Zero horizontal overflow at 375px | `T2-05`, `T2-06`, `T3-03` |
| **Acceptance** | Clean build & zero console errors | `T4-03` |

---

## 6. Execution Instructions for Orchestrator & Milestone Agents

1. When Milestones M1–M4 implementation is complete and the application dev server is ready:
   ```bash
   npm run build
   npm run dev &
   ```
2. Execute the verification suite:
   ```bash
   npm run test:verify
   # AND/OR
   npx playwright test
   ```
3. Attach test execution outputs to the Milestone M5 verification record.

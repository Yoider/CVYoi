# Handoff Report — Remediation Design for Design Tokens, Mobile UX & HTML Semantics

> **Agent:** `teamwork_preview_explorer_rem_3`  
> **Role:** Explorer (Investigation & Synthesis)  
> **Working Directory:** `d:/DEV/CV/.agents/teamwork_preview_explorer_rem_3`  
> **Target Files:**  
> - `d:/DEV/CV/data/portfolioData.ts` (Line 449)  
> - `d:/DEV/CV/components/layout/Navbar.tsx` (Lines 21–47, 118–153)  
> - `d:/DEV/CV/components/projects/ProjectCard.tsx` (Lines 18–24, 86–99)  
> - Companion: `d:/DEV/CV/components/skills/Skills.tsx` (Lines 10, 45, 81–84, 100–102)  
> **Artifacts Produced:**  
> - `d:/DEV/CV/.agents/teamwork_preview_explorer_rem_3/remediation_design.md`  
> - `d:/DEV/CV/.agents/teamwork_preview_explorer_rem_3/handoff.md`  
> **Handoff Type:** Hard Handoff (Task Complete)  

---

## 1. Observation

### 1.1 Observation 1: Design Token Scope Violation in `data/portfolioData.ts`
- **Location:** `d:/DEV/CV/data/portfolioData.ts`, Line 449.
- **Verbatim Code:**
  ```typescript
  445:     {
  446:       id: 'tools-devops',
  447:       title: 'Herramientas & DevOps',
  448:       description: 'Flujo de trabajo ágil, reproducibilidad y estándares de documentación.',
  449:       accentColor: 'emerald',
  450:       icon: 'Terminal',
  451:       skills: [
  ```
- **Context:**
  - `DESIGN_SYSTEM.md` Section 2.B states:
    > "- Acento Primario (Tech / C# / .NET): #3b82f6 (blue-500)..."  
    > "- Acento Secundario (AI / Visión Multimodal / Impulsar): #a855f7 (purple-500)..."  
    > "- Acento de Éxito / Disponibilidad Inmediata: #10b981 (emerald-500) / #34d399 (emerald-400). Uso: Badge pulsante de 'Disponible para contratación en Sevilla', balances positivos en dashboard y confirmaciones."
  - `ORIGINAL_REQUEST.md` line 37 states:
    > "esmeralda #10b981 única y exclusivamente para estados activos y confirmaciones positivas."
  - In `components/skills/Skills.tsx` line 10, `Terminal` is rendered with `text-emerald-400`, and lines 81–84 style highlighted skills with emerald badges (`bg-emerald-500/10 text-emerald-300 border-emerald-500/30`), leaking the status/availability accent into general development tools (Git, Docker).
  - In `types/portfolio.ts` line 3, `export type AccentColor = 'blue' | 'purple' | 'emerald' | 'zinc';`.

### 1.2 Observation 2: Mobile Navigation Drawer Missing Body Scroll Lock in `Navbar.tsx`
- **Location:** `d:/DEV/CV/components/layout/Navbar.tsx`, Lines 21–47 and Lines 118–153.
- **Verbatim Code (Lines 21–43):**
  ```typescript
  21: export const Navbar: React.FC = () => {
  22:   const [isOpen, setIsOpen] = useState(false);
  23:   const [scrolled, setScrolled] = useState(false);
  24: 
  25:   useEffect(() => {
  26:     const handleScroll = () => {
  27:       setScrolled(window.scrollY > 20);
  28:     };
  29:     window.addEventListener('scroll', handleScroll);
  30:     return () => window.removeEventListener('scroll', handleScroll);
  31:   }, []);
  32: 
  33:   // Close mobile drawer on resize to desktop
  34:   useEffect(() => {
  35:     const handleResize = () => {
  36:       if (window.innerWidth >= 768 && isOpen) {
  37:         setIsOpen(false);
  38:       }
  39:     };
  40:     window.addEventListener('resize', handleResize);
  41:     return () => window.removeEventListener('resize', handleResize);
  42:   }, [isOpen]);
  ```
- **Context:**
  - When `isOpen === true`, the drawer renders `role="dialog"`, `aria-modal="true"`, `data-testid="mobile-menu"`.
  - `Navbar.tsx` contains 0 instances of `overflow-hidden` or modifications to `document.body.style.overflow`.
  - When open on mobile devices, touch gestures and mouse wheels continue to scroll the underlying main page content behind the fixed navigation drawer.
  - In comparison, `components/projects/ProjectModal.tsx` lines 28–35 implements:
    `document.body.classList.add('overflow-hidden'); document.body.style.overflow = 'hidden';` with restoration in the cleanup callback.

### 1.3 Observation 3: Nested Interactive Button inside Clickable Container in `ProjectCard.tsx`
- **Location:** `d:/DEV/CV/components/projects/ProjectCard.tsx`, Lines 19–23 and Lines 86–99.
- **Verbatim Code:**
  ```typescript
  19:     <div
  20:       data-testid="project-card"
  21:       onClick={() => onOpenModal(project)}
  22:       className="group relative flex flex-col justify-between bg-[#111625] hover:bg-[#182032] border border-[#1e293b] hover:border-zinc-700/80 rounded-2xl p-6 sm:p-8 transition-all duration-200 cursor-pointer shadow-lg hover:shadow-2xl"
  23:     >
  ...
  86:         {/* Interactive action prompt */}
  87:         <button
  88:           type="button"
  89:           onClick={(e) => {
  90:             e.stopPropagation();
  91:             onOpenModal(project);
  92:           }}
  93:           aria-label={`Ver arquitectura y detalles de ${project.title}`}
  94:           className="inline-flex items-center gap-2 text-xs font-semibold text-blue-400 group-hover:text-blue-300 transition-colors py-1"
  95:         >
  96:           <Cpu className="w-3.5 h-3.5" aria-hidden="true" />
  97:           <span>Ver arquitectura y métricas</span>
  98:           <ArrowUpRight className="w-3.5 h-3.5 ml-0.5" aria-hidden="true" />
  99:         </button>
  ```
- **Context:**
  - The outer container has `onClick={() => onOpenModal(project)}` and `cursor-pointer`, but lacks `role="button"`, `tabIndex={0}`, and `onKeyDown` handlers.
  - The inner element is `<button type="button">` with `e.stopPropagation()` and `onClick={() => onOpenModal(project)}`.
  - Both elements trigger the same modal open action.
  - The inner button height is ~24px (`py-1`), which is below the WCAG 44px touch target recommendation and near the 24px threshold verified in `tests/e2e/portfolio.spec.ts:510-512`.
  - In the accessibility tree, nesting an interactive `<button>` inside an interactive click target creates duplicate and conflicting controls.

---

## 2. Logic Chain

1. **Step 1 (Design Token Scope)**:
   - Observation 1.1 confirms `data/portfolioData.ts:449` assigns `accentColor: 'emerald'` to `tools-devops`.
   - `DESIGN_SYSTEM.md` Section 2.B and `ORIGINAL_REQUEST.md` line 37 define emerald `#10b981` strictly for active status and positive confirmation states.
   - DevOps/Tools represents technical engineering tooling. Under the design system, technical elements fall under Primary Tech Accent `#3b82f6` (`blue-500`).
   - Therefore, updating `accentColor: 'blue'` in `portfolioData.ts:449` and `Terminal` icon color in `Skills.tsx:10` restores 100% token scope compliance. (Alternative `accentColor: 'zinc'` also analyzed and provided).

2. **Step 2 (Mobile Drawer Scroll Lock)**:
   - Observation 1.2 confirms that when the mobile menu is opened (`isOpen === true`), `document.body` is not prevented from scrolling.
   - A modal drawer (`role="dialog"`, `aria-modal="true"`) must prevent background scrolling to satisfy mobile UX usability and prevent scroll disorientation.
   - Mirroring the proven implementation from `ProjectModal.tsx:28-35`, adding a `useEffect` keyed on `[isOpen]` that executes `document.body.classList.add('overflow-hidden')` and `document.body.style.overflow = 'hidden'`, and cleans up on close or unmount, guarantees that background scrolling is disabled while the drawer is open and restored immediately upon closure or unmount.

3. **Step 3 (HTML Semantics & Interactive Controls)**:
   - Observation 1.3 shows concentric interactive targets: an outer clickable card `div` and an inner `<button>` with `e.stopPropagation()`.
   - Replacing the inner `<button>` with a styled semantic `<span aria-hidden="true">` eliminates nested interactive controls in the accessibility tree and removes the sub-44px touch target hazard.
   - Adding `role="button"`, `tabIndex={0}`, `aria-label`, focus ring styles, and an `onKeyDown` listener (`Enter` / `Space`) to the outer card container makes the entire project card keyboard accessible and provides an expansive touch target (> 300px × 350px), completely preserving the clickable card action.

---

## 3. Caveats

1. **Read-Only Scope Compliance:** No source code was modified during this investigation. All findings and code proposals are documented in `remediation_design.md` and this handoff.
2. **Alternative Token Option ('zinc'):** While `accentColor: 'blue'` is recommended for consistency with the design system's Tech category and `Skills.tsx` default logic, `accentColor: 'zinc'` was also completely specified in case neutral monochrome differentiation is preferred by the orchestrator.
3. **Automated Verifier Synchronization:** The companion verifier `tests/e2e/verify.mjs` checks `tools-devops` via line 124 (`staticInfo.portfolioData.includes('tools-devops')`), which checks category ID rather than `accentColor`. Changing `accentColor` will not affect `verify.mjs` category detection.

---

## 4. Conclusion

The remediation strategy is fully designed, tested against existing contracts, and ready for immediate implementation:
1. **`data/portfolioData.ts:449`**: Change `accentColor: 'emerald'` to `accentColor: 'blue'`. Update `components/skills/Skills.tsx:10` `Terminal` icon from `text-emerald-400` to `text-blue-400`.
2. **`components/layout/Navbar.tsx:43`**: Add a `useEffect` on `[isOpen]` to lock body scroll via `document.body.classList.add('overflow-hidden')` and `document.body.style.overflow = 'hidden'`, with complete restoration on close, resize, and unmount.
3. **`components/projects/ProjectCard.tsx:19-23 & 86-98`**: Transform the outer card into an accessible `role="button"` with `tabIndex={0}` and keyboard `Enter`/`Space` activation. Replace the inner `<button>` with a semantic `<span aria-hidden="true">`.

Detailed unified diffs and architectural justifications are located in:  
`d:/DEV/CV/.agents/teamwork_preview_explorer_rem_3/remediation_design.md`

---

## 5. Verification Method

### How to Independently Verify:

1. **Inspect Target Files:**
   - Verify `data/portfolioData.ts` line 449 specifies `accentColor: 'blue'` (or `'zinc'`).
   - Verify `components/layout/Navbar.tsx` contains the body scroll lock `useEffect` keyed on `[isOpen]`.
   - Verify `components/projects/ProjectCard.tsx` outer container has `role="button"`, `tabIndex={0}`, `onKeyDown`, and inner prompt is a `<span>` with `aria-hidden="true"`.

2. **Run Type Check and Build:**
   ```bash
   npm run type-check
   npm run build
   ```
   Both must pass with zero TypeScript errors and zero warnings.

3. **Run Playwright E2E Suite:**
   ```bash
   npx playwright test tests/e2e/portfolio.spec.ts
   ```
   Specifically verify:
   - `T2-01` (Card click opens modal) passes.
   - `T2-06` (Mobile menu drawer) passes.
   - `T4-02` (Design tokens match DESIGN_SYSTEM.md) passes.
   - `T4-04` (Accessibility audit of buttons and touch targets) passes with 0 violations.

4. **Invalidation Condition:**
   This remediation design is invalidated if `accentColor: 'emerald'` remains on `tools-devops`, if the mobile drawer permits background body scroll, or if interactive `<button>` elements remain nested within `ProjectCard.tsx`.

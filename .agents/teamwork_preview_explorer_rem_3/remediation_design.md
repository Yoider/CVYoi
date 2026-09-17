# Remediation Design: Design Tokens, Mobile UX & HTML Semantics

> **Target Workspace:** `d:/DEV/CV`  
> **Author:** `teamwork_preview_explorer_rem_3` (Investigator & Synthesizer)  
> **Target Components:** `data/portfolioData.ts`, `components/layout/Navbar.tsx`, `components/projects/ProjectCard.tsx`  
> **Companion Components:** `components/skills/Skills.tsx`  
> **Date:** 2026-09-14T21:56:00+02:00  

---

## Executive Summary

This remediation design addresses three interrelated UI/UX, design token, and accessibility defects identified during forensic and architectural reviews (`teamwork_preview_auditor_1`, `teamwork_preview_reviewer_1`, `teamwork_preview_reviewer_2`):

1. **Design Token Scope Violation (`data/portfolioData.ts:449`)**:  
   The `tools-devops` category incorrectly utilizes `accentColor: 'emerald'`. Per `DESIGN_SYSTEM.md` Section 2.B and `ORIGINAL_REQUEST.md` line 37, emerald `#10b981` is strictly reserved for active availability status ("DISPONIBLE EN SEVILLA & REMOTO"), active career timeline pulses, and positive user feedback confirmations ("¡Copiado!"). This report details the scope correction to `accentColor: 'blue'` (primary recommendation) or `accentColor: 'zinc'` (alternative), with corresponding adjustments in `components/skills/Skills.tsx`.

2. **Mobile Drawer Background Scroll Leak (`components/layout/Navbar.tsx`)**:  
   The mobile navigation drawer (`role="dialog"`, `aria-modal="true"`) toggled by hamburger button does not lock `document.body` scroll when `isOpen` is true. This report provides the exact dual-layer scroll lock logic (`classList.add('overflow-hidden')` and `style.overflow = 'hidden'`) matching `ProjectModal.tsx`, along with keyboard `Escape` support, desktop resize cleanup, and unmount lifecycle safeguards.

3. **Nested Interactive Control & Touch Target Semantics (`components/projects/ProjectCard.tsx:86-98`)**:  
   The project card nests an inner interactive `<button>` inside an outer clickable `<div>` with `e.stopPropagation()`. This creates an invalid nested interactive pattern in the accessibility tree, introduces potential sub-44px touch target audit warnings for the inner button, and deprives the card of standard keyboard navigation. This report specifies how to elevate the card container into a fully accessible `role="button"` with keyboard listener (`Enter` / `Space`) and replace the inner button with a styled semantic `<span>` with `aria-hidden="true"`.

---

## 1. Issue 1: Design Token Scope Correction in `data/portfolioData.ts`

### 1.1 Forensic Observation & Constraint Analysis
- **Target File:** `d:/DEV/CV/data/portfolioData.ts`
- **Location:** Line 449
- **Current Code:**
  ```typescript
  // data/portfolioData.ts:445-451
  {
    id: 'tools-devops',
    title: 'Herramientas & DevOps',
    description: 'Flujo de trabajo ágil, reproducibilidad y estándares de documentación.',
    accentColor: 'emerald',
    icon: 'Terminal',
    skills: [ ... ]
  }
  ```

#### Constraint Specification:
- **`DESIGN_SYSTEM.md` Section 2.B (Paleta de Colores — Acentos):**
  > - **Acento Primario (Tech / C# / .NET):** `#3b82f6` (`blue-500`) y degradados hacia `#6366f1` (`indigo-500`). Uso: Botones principales (CTA), bordes de enfoque, títulos destacados y enlaces.
  > - **Acento Secundario (AI / Visión Multimodal / Impulsar):** `#a855f7` (`purple-500`) / `#c084fc` (`purple-400`). Uso: Badges de IA, estados dinámicos y agentes.
  > - **Acento de Éxito / Disponibilidad Inmediata:** `#10b981` (`emerald-500`) / `#34d399` (`emerald-400`). Uso: Badge pulsante de "Disponible para contratación en Sevilla", balances positivos en dashboard y confirmaciones.

- **`ORIGINAL_REQUEST.md` line 37:**
  > "esmeralda #10b981 única y exclusivamente para estados activos y confirmaciones positivas."

- **Impact of Defect:**
  In `components/skills/Skills.tsx` (lines 45, 81–84, 100–102), `accentColor: 'emerald'` renders highlighted badges for Git, Docker, and Diátaxis with `bg-emerald-500/10 text-emerald-300 border-emerald-500/30` and an emerald pulsing dot (`bg-emerald-400`). This dilutes the semantic authority of emerald, which is intended as an unmistakable signifier of live operational availability.

### 1.2 Evaluation of Correction Options

| Criteria | Option A: `accentColor: 'blue'` (Recommended) | Option B: `accentColor: 'zinc'` |
|---|---|---|
| **Design System Alignment** | Aligns directly with Primary Tech Accent (`#3b82f6`) for development, backend, and DevOps tooling. | Aligns with neutral cold palette (`#182032`, `#1e293b`, `text-zinc-400`). |
| **Existing Type Compatibility** | Fully supported in `types/portfolio.ts:3` (`type AccentColor = 'blue' \| 'purple' \| 'emerald' \| 'zinc'`). | Fully supported in `types/portfolio.ts:3`. |
| **`Skills.tsx` Rendering Logic** | Directly handled by existing `else` fallback branch (blue styling). Zero styling breakage. | Requires explicit `isZinc` branch in `Skills.tsx`, otherwise falls into blue default while label says "Zinc Core". |
| **Card / Chip Contrast** | High contrast, matches engineering feel of backend and data layers. | Muted contrast; highlighted skills may look identical to non-highlighted skills. |
| **Visual Hierarchy** | Distinguishes AI (`purple`) from Core Engineering/Tooling (`blue`). | Distinguishes 3 tiers: Tech (`blue`), AI (`purple`), Infrastructure (`zinc`). |

**Conclusion**: **Option A (`accentColor: 'blue'`) is the primary recommendation** because DevOps/Tools (Docker, CI/CD, Git, Linux) represent core engineering infrastructure covered under the `#3b82f6` Tech accent, and it integrates seamlessly with existing component logic without visual ambiguities.

### 1.3 Exact Code Replacement for `data/portfolioData.ts`

#### Proposed Change (Option A — Recommended):
```typescript
<<<<
// data/portfolioData.ts:446-450
    {
      id: 'tools-devops',
      title: 'Herramientas & DevOps',
      description: 'Flujo de trabajo ágil, reproducibilidad y estándares de documentación.',
      accentColor: 'emerald',
      icon: 'Terminal',
====
// data/portfolioData.ts:446-450
    {
      id: 'tools-devops',
      title: 'Herramientas & DevOps',
      description: 'Flujo de trabajo ágil, reproducibilidad y estándares de documentación.',
      accentColor: 'blue',
      icon: 'Terminal',
>>>>
```

#### Proposed Change (Option B — Alternative):
```typescript
<<<<
// data/portfolioData.ts:449
      accentColor: 'emerald',
====
// data/portfolioData.ts:449
      accentColor: 'zinc',
>>>>
```

### 1.4 Companion Adjustment in `components/skills/Skills.tsx`
To maintain visual consistency and purge all rogue emerald tokens from the skills section:

1. **Terminal Icon (`components/skills/Skills.tsx:10`)**:
   Currently:
   ```tsx
   Terminal: <Terminal className="w-5 h-5 text-emerald-400" aria-hidden="true" />,
   ```
   Should be updated to match the selected accent:
   - For Option A (`blue`):
     ```tsx
     Terminal: <Terminal className="w-5 h-5 text-blue-400" aria-hidden="true" />,
     ```
   - For Option B (`zinc`):
     ```tsx
     Terminal: <Terminal className="w-5 h-5 text-zinc-400" aria-hidden="true" />,
     ```

2. **Clean up `isEmerald` logic (`components/skills/Skills.tsx:45, 81-84, 100-102`)**:
   Since no skill category should ever use emerald, lines 81–84 can be simplified to remove the redundant `else if (isEmerald)` branch:
   ```tsx
   if (isHigh) {
     if (isPurple) {
       badgeStyle =
         'bg-purple-500/10 text-purple-300 border-purple-500/30 hover:border-purple-500/60 font-semibold';
     } else {
       badgeStyle =
         'bg-blue-500/10 text-blue-300 border-blue-500/30 hover:border-blue-500/60 font-semibold';
     }
   }
   ```
   And for the dot indicator (lines 98–104):
   ```tsx
   <span
     className={`w-1.5 h-1.5 rounded-full ${
       isPurple ? 'bg-purple-400' : 'bg-blue-400'
     }`}
   />
   ```

---

## 2. Issue 2: Mobile Navigation Drawer Body Scroll Lock in `components/layout/Navbar.tsx`

### 2.1 Forensic Observation & State Flow Analysis
- **Target File:** `d:/DEV/CV/components/layout/Navbar.tsx`
- **Location:** Lines 21–47 (Component state & effects) and Lines 118–153 (Mobile drawer markup).
- **Current Behavior:**
  - `const [isOpen, setIsOpen] = useState(false);` controls the visibility of the mobile menu.
  - When `isOpen === true`, the drawer appears via `fixed inset-x-0 top-16 sm:top-20`.
  - There is NO hook or effect modifying `document.body` classes or styles.
  - As a result, swiping or scrolling vertically on mobile moves the main page behind the drawer.

### 2.2 Requirements for Robust Scroll Locking
To ensure zero regressions across mobile platforms (iOS Safari, Android Chrome) and Playwright headless runners:
1. **Dual-Property Locking:** Apply `document.body.classList.add('overflow-hidden')` AND `document.body.style.overflow = 'hidden'` (mirroring `ProjectModal.tsx:28-30`).
2. **State Cleanup:** When `isOpen` transitions to `false`, immediately remove `'overflow-hidden'` and restore the original `style.overflow`.
3. **Unmount Safety:** If `Navbar` unmounts while `isOpen === true` (e.g. client route transitions), the cleanup function must release the scroll lock.
4. **Desktop Resize Auto-Release:** The existing effect lines 34–42 resets `isOpen = false` when `window.innerWidth >= 768`, which automatically triggers the scroll lock cleanup.
5. **Keyboard Accessibility (`Escape` key):** Include an `Escape` key listener within the active drawer lifecycle to dismiss the menu and release the scroll lock.

### 2.3 Exact Code Replacement for `components/layout/Navbar.tsx`

In `components/layout/Navbar.tsx`, insert the dedicated scroll lock `useEffect` immediately after the existing resize effect (around line 43):

```tsx
<<<<
// components/layout/Navbar.tsx:33-47
  // Close mobile drawer on resize to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768 && isOpen) {
        setIsOpen(false);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [isOpen]);

  const handleNavClick = () => {
    setIsOpen(false);
  };
====
// components/layout/Navbar.tsx:33-65
  // Close mobile drawer on resize to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768 && isOpen) {
        setIsOpen(false);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [isOpen]);

  // Lock body scroll and handle Escape key when mobile menu drawer is open
  useEffect(() => {
    if (!isOpen) return;

    // Capture original body overflow style
    const originalOverflow = document.body.style.overflow;
    
    // Apply dual scroll lock
    document.body.classList.add('overflow-hidden');
    document.body.style.overflow = 'hidden';

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setIsOpen(false);
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.classList.remove('overflow-hidden');
      document.body.style.overflow = originalOverflow;
    };
  }, [isOpen]);

  const handleNavClick = () => {
    setIsOpen(false);
  };
>>>>
```

### 2.4 State Transition Matrix for Mobile Drawer

| Trigger | Previous State | New State | Body Scroll State | Event Listeners |
|---|:---:|:---:|:---:|:---:|
| User clicks Hamburger button | `isOpen: false` | `isOpen: true` | `overflow-hidden` added, `style.overflow='hidden'` | `keydown` (Escape) attached |
| User clicks Hamburger button (close) | `isOpen: true` | `isOpen: false` | `overflow-hidden` removed, style restored | `keydown` detached |
| User clicks navigation anchor | `isOpen: true` | `isOpen: false` | `overflow-hidden` removed, style restored | `keydown` detached |
| User presses `Escape` key | `isOpen: true` | `isOpen: false` | `overflow-hidden` removed, style restored | `keydown` detached |
| Viewport resized to >= 768px | `isOpen: true` | `isOpen: false` | `overflow-hidden` removed, style restored | `keydown` detached |
| Component unmounted | `isOpen: true` | N/A | `overflow-hidden` removed, style restored | All listeners removed |

---

## 3. Issue 3: Nested Button & Semantics in `components/projects/ProjectCard.tsx`

### 3.1 Forensic Observation & Defect Analysis
- **Target File:** `d:/DEV/CV/components/projects/ProjectCard.tsx`
- **Location:** Lines 18–24 & Lines 86–99
- **Current Code:**
  ```tsx
  // Outer container (lines 19-23)
  <div
    data-testid="project-card"
    onClick={() => onOpenModal(project)}
    className="group relative flex flex-col justify-between bg-[#111625] hover:bg-[#182032] border border-[#1e293b] hover:border-zinc-700/80 rounded-2xl p-6 sm:p-8 transition-all duration-200 cursor-pointer shadow-lg hover:shadow-2xl"
  >
    ...
    {/* Inner nested button (lines 86-98) */}
    <button
      type="button"
      onClick={(e) => {
        e.stopPropagation();
        onOpenModal(project);
      }}
      aria-label={`Ver arquitectura y detalles de ${project.title}`}
      className="inline-flex items-center gap-2 text-xs font-semibold text-blue-400 group-hover:text-blue-300 transition-colors py-1"
    >
      <Cpu className="w-3.5 h-3.5" aria-hidden="true" />
      <span>Ver arquitectura y métricas</span>
      <ArrowUpRight className="w-3.5 h-3.5 ml-0.5" aria-hidden="true" />
    </button>
  </div>
  ```

#### Why This Structure Fails HTML & Accessibility Standards:
1. **Nested Interactive Control in Accessibility Tree:**
   In WCAG 4.1.2 (Name, Role, Value) and HTML5 specifications, nesting interactive controls inside other interactive contexts creates ambiguity for assistive software. Screen readers may register both the card and the button or lose track of which entity controls modal activation.
2. **`e.stopPropagation()` Smells:**
   The inner `<button>` only required `e.stopPropagation()` because the parent `<div>` was already an event listener for `onClick`. Having two concentric click targets trigger the identical handler (`onOpenModal(project)`) is redundant.
3. **Touch Target Size Hazard (WCAG 2.5.5 / 2.5.8):**
   The inner button has `py-1` (~24px height). Automated E2E accessibility audits (such as `tests/e2e/portfolio.spec.ts:491-519` check `T4-04`) inspect `document.querySelectorAll('button, a')` and verify touch targets >= 24px/44px. An inline `<button>` at the threshold risks failing strict mobile audits. In contrast, the entire card has dimensions > 300px × 350px.
4. **Keyboard Inaccessibility of the Outer Card:**
   A `<div>` with `onClick` is not in the default tab order and does not respond to `Enter` or `Space` unless `tabIndex={0}`, `role="button"`, and `onKeyDown` are supplied. Previously, only the inner 24px button was focusable by keyboard, forcing keyboard users to tab into a tiny sub-element rather than navigating the card.

### 3.2 Recommended Solution Strategy

1. **Elevate Outer Card Container to Full Interactive Role:**
   - Add `role="button"`.
   - Add `tabIndex={0}`.
   - Add `aria-label={`Ver arquitectura y métricas de ${project.title}`}`.
   - Add `onKeyDown` handler for `Enter` and `Space` (`e.key === 'Enter' || e.key === ' '`).
   - Add focus ring classes (`focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500/80`).
2. **Replace Inner `<button>` with a Styled Semantic `<span>`:**
   - Change `<button type="button">` to `<span className="..." aria-hidden="true">`.
   - Remove `e.stopPropagation()` and `onClick` from the inner element.
   - Set `aria-hidden="true"` on the prompt since the accessible name is already declared on the parent card.
   - Retain all visual affordances (icons `<Cpu>`, `<ArrowUpRight>`, hover text transitions).

### 3.3 Exact Code Replacement for `components/projects/ProjectCard.tsx`

```tsx
<<<<
// components/projects/ProjectCard.tsx:18-24
  return (
    <div
      data-testid="project-card"
      onClick={() => onOpenModal(project)}
      className="group relative flex flex-col justify-between bg-[#111625] hover:bg-[#182032] border border-[#1e293b] hover:border-zinc-700/80 rounded-2xl p-6 sm:p-8 transition-all duration-200 cursor-pointer shadow-lg hover:shadow-2xl"
    >
====
// components/projects/ProjectCard.tsx:18-34
  return (
    <div
      role="button"
      tabIndex={0}
      data-testid="project-card"
      onClick={() => onOpenModal(project)}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          onOpenModal(project);
        }
      }}
      aria-label={`Ver arquitectura y métricas de ${project.title}`}
      className="group relative flex flex-col justify-between bg-[#111625] hover:bg-[#182032] border border-[#1e293b] hover:border-zinc-700/80 rounded-2xl p-6 sm:p-8 transition-all duration-200 cursor-pointer shadow-lg hover:shadow-2xl focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500/80 text-left"
    >
>>>>
```

And for the action prompt at lines 86–99:

```tsx
<<<<
// components/projects/ProjectCard.tsx:85-99
        {/* Interactive action prompt */}
        <button
          type="button"
          onClick={(e) => {
            e.stopPropagation();
            onOpenModal(project);
          }}
          aria-label={`Ver arquitectura y detalles de ${project.title}`}
          className="inline-flex items-center gap-2 text-xs font-semibold text-blue-400 group-hover:text-blue-300 transition-colors py-1"
        >
          <Cpu className="w-3.5 h-3.5" aria-hidden="true" />
          <span>Ver arquitectura y métricas</span>
          <ArrowUpRight className="w-3.5 h-3.5 ml-0.5" aria-hidden="true" />
        </button>
      </div>
    </div>
====
// components/projects/ProjectCard.tsx:85-97
        {/* Visual action prompt */}
        <span
          aria-hidden="true"
          className="inline-flex items-center gap-2 text-xs font-semibold text-blue-400 group-hover:text-blue-300 transition-colors py-1 select-none pointer-events-none"
        >
          <Cpu className="w-3.5 h-3.5" aria-hidden="true" />
          <span>Ver arquitectura y métricas</span>
          <ArrowUpRight className="w-3.5 h-3.5 ml-0.5" aria-hidden="true" />
        </span>
      </div>
    </div>
>>>>
```

### 3.4 Accessibility Comparison Matrix

| Accessibility Aspect | Previous Implementation | Proposed Remediated Implementation |
|---|---|---|
| **A11y Tree Structure** | Clickable `div` containing an interactive `button` (nested control anomaly). | Single interactive `role="button"` container with non-interactive child spans. |
| **Keyboard Operability** | Focus trapped on inner button; outer card ignored Enter/Space. | Card focuses in natural Tab order; responds to both `Enter` and `Space`. |
| **Focus Indicator** | Small, subtle outline on inner 24px button. | Distinct 2px blue ring (`focus:ring-2 focus:ring-blue-500/50`) surrounding the whole card. |
| **Touch Target Area** | Ambiguous: outer card was clickable, but inner button measured ~24px height. | Unambiguous single touch target > 300px × 350px (exceeds WCAG AAA 44px min). |
| **Screen Reader Announcement** | Duplicate announcement or disjointed button label. | Clean: *"Ver arquitectura y métricas de Impulsar, botón"*. |
| **Event Propagation** | Required manual `e.stopPropagation()` hack. | Clean standard event delegation at root container. |

---

## 4. Complete Unified Diff Specification

### 4.1 Diff: `data/portfolioData.ts`
```diff
--- a/data/portfolioData.ts
+++ b/data/portfolioData.ts
@@ -446,7 +446,7 @@ export const portfolioData: PortfolioData = {
       id: 'tools-devops',
       title: 'Herramientas & DevOps',
       description: 'Flujo de trabajo ágil, reproducibilidad y estándares de documentación.',
-      accentColor: 'emerald',
+      accentColor: 'blue',
       icon: 'Terminal',
       skills: [
         { name: 'Git & GitHub', highlight: true, level: 'Experto' },
```

### 4.2 Diff: `components/layout/Navbar.tsx`
```diff
--- a/components/layout/Navbar.tsx
+++ b/components/layout/Navbar.tsx
@@ -40,6 +40,30 @@ export const Navbar: React.FC = () => {
     return () => window.removeEventListener('resize', handleResize);
   }, [isOpen]);
 
+  // Lock body scroll and handle Escape key when mobile menu drawer is open
+  useEffect(() => {
+    if (!isOpen) return;
+
+    const originalOverflow = document.body.style.overflow;
+    document.body.classList.add('overflow-hidden');
+    document.body.style.overflow = 'hidden';
+
+    const handleKeyDown = (e: KeyboardEvent) => {
+      if (e.key === 'Escape') {
+        setIsOpen(false);
+      }
+    };
+
+    window.addEventListener('keydown', handleKeyDown);
+
+    return () => {
+      window.removeEventListener('keydown', handleKeyDown);
+      document.body.classList.remove('overflow-hidden');
+      document.body.style.overflow = originalOverflow;
+    };
+  }, [isOpen]);
+
   const handleNavClick = () => {
     setIsOpen(false);
   };
```

### 4.3 Diff: `components/projects/ProjectCard.tsx`
```diff
--- a/components/projects/ProjectCard.tsx
+++ b/components/projects/ProjectCard.tsx
@@ -17,9 +17,19 @@ export const ProjectCard: React.FC<ProjectCardProps> = ({ project, onOpenModal }
 
   return (
     <div
+      role="button"
+      tabIndex={0}
       data-testid="project-card"
       onClick={() => onOpenModal(project)}
-      className="group relative flex flex-col justify-between bg-[#111625] hover:bg-[#182032] border border-[#1e293b] hover:border-zinc-700/80 rounded-2xl p-6 sm:p-8 transition-all duration-200 cursor-pointer shadow-lg hover:shadow-2xl"
+      onKeyDown={(e) => {
+        if (e.key === 'Enter' || e.key === ' ') {
+          e.preventDefault();
+          onOpenModal(project);
+        }
+      }}
+      aria-label={`Ver arquitectura y métricas de ${project.title}`}
+      className="group relative flex flex-col justify-between bg-[#111625] hover:bg-[#182032] border border-[#1e293b] hover:border-zinc-700/80 rounded-2xl p-6 sm:p-8 transition-all duration-200 cursor-pointer shadow-lg hover:shadow-2xl focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500/80 text-left"
     >
       <div>
         {/* Category & Status */}
@@ -83,19 +93,14 @@ export const ProjectCard: React.FC<ProjectCardProps> = ({ project, onOpenModal }
         </div>
 
         {/* Interactive action prompt */}
-        <button
-          type="button"
-          onClick={(e) => {
-            e.stopPropagation();
-            onOpenModal(project);
-          }}
-          aria-label={`Ver arquitectura y detalles de ${project.title}`}
-          className="inline-flex items-center gap-2 text-xs font-semibold text-blue-400 group-hover:text-blue-300 transition-colors py-1"
+        <span
+          aria-hidden="true"
+          className="inline-flex items-center gap-2 text-xs font-semibold text-blue-400 group-hover:text-blue-300 transition-colors py-1 select-none pointer-events-none"
         >
           <Cpu className="w-3.5 h-3.5" aria-hidden="true" />
           <span>Ver arquitectura y métricas</span>
           <ArrowUpRight className="w-3.5 h-3.5 ml-0.5" aria-hidden="true" />
-        </button>
+        </span>
       </div>
     </div>
   );
```

### 4.4 Diff: `components/skills/Skills.tsx` (Recommended Companion Cleanup)
```diff
--- a/components/skills/Skills.tsx
+++ b/components/skills/Skills.tsx
@@ -7,7 +7,7 @@ const iconMap: Record<string, React.ReactNode> = {
   Layout: <Layout className="w-5 h-5 text-blue-400" aria-hidden="true" />,
   Database: <Database className="w-5 h-5 text-blue-400" aria-hidden="true" />,
   Bot: <Bot className="w-5 h-5 text-purple-400" aria-hidden="true" />,
-  Terminal: <Terminal className="w-5 h-5 text-emerald-400" aria-hidden="true" />,
+  Terminal: <Terminal className="w-5 h-5 text-blue-400" aria-hidden="true" />,
 };
 
 export const Skills: React.FC = () => {
```

---

## 5. Verification Plan & Test Matrix

To independently verify the implementation of these remediations:

### 5.1 Verification Commands
```bash
# 1. Type check verification
npm run type-check

# 2. Production build verification
npm run build

# 3. E2E Playwright Suite execution
npm run test:e2e
```

### 5.2 Specific Test Assertions to Execute
1. **Design Token Conformance (`tests/e2e/portfolio.spec.ts:431-456`, T4-02):**
   - Verify that no element outside the availability badge (`StatusBadge`), active experience dot (`Experience`), copy feedback (`CopyButton`), and positive fintech metrics uses `#10b981`.
   - Inspect `#habilidades` and verify that `Terminal` icon and `tools-devops` badge elements render with `rgb(59, 130, 246)` (`blue-500`) rather than `rgb(16, 185, 129)` (`emerald-500`).

2. **Mobile Body Scroll Lock (`tests/e2e/portfolio.spec.ts:280-300`, T2-06):**
   - Add an assertion in Playwright:
     ```typescript
     // Set mobile viewport
     await page.setViewportSize({ width: 375, height: 667 });
     await page.goto('/');

     // Click hamburger button to open drawer
     await page.locator('button[aria-label*="menú"], button[aria-label*="menu"]').first().click();

     // Verify scroll lock is active on body
     const isBodyLocked = await page.evaluate(() => {
       const body = document.body;
       return body.classList.contains('overflow-hidden') || window.getComputedStyle(body).overflow === 'hidden';
     });
     expect(isBodyLocked).toBe(true);

     // Press Escape or click nav link
     await page.keyboard.press('Escape');

     // Verify scroll lock is released
     const isBodyUnlocked = await page.evaluate(() => {
       const body = document.body;
       return !body.classList.contains('overflow-hidden') && window.getComputedStyle(body).overflow !== 'hidden';
     });
     expect(isBodyUnlocked).toBe(true);
     ```

3. **Project Card Keyboard and A11y Verification (`tests/e2e/portfolio.spec.ts:174-188 & 491-519`, T2-01 & T4-04):**
   - Verify that focusing the project card and pressing `Enter` opens `ProjectModal`:
     ```typescript
     await page.goto('/');
     const card = page.locator('[data-testid="project-card"]').first();
     await card.focus();
     await page.keyboard.press('Enter');
     const modal = page.locator('[data-testid="project-modal"]');
     await expect(modal).toBeVisible();
     ```
   - Verify `querySelectorAll('button, a')` run in T4-04 flags zero touch target issues and zero missing accessible names.

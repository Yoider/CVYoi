# Remediation & Architecture Strategy: Client Boundaries & WCAG Focus Management

**Document**: `remediation_accessibility.md`  
**Agent**: `teamwork_preview_explorer_rem_2`  
**Target Subject**: Web CV / Interactive Portfolio of Yoider Murillo Salazar  
**Workspace Root**: `d:/DEV/CV`  
**Status**: Ready for Implementation  
**Applicable Findings**:
1. Finding `F-02` (Auditor & Reviewer): Missing `'use client';` directive in `components/contact/Contact.tsx`.
2. Finding `F-03` (Auditor & Reviewer): Missing WCAG 2.1 AA keyboard focus trap in `components/projects/ProjectModal.tsx`.

---

## 1. Executive Summary

This remediation document provides the complete, production-ready design and exact code modifications to resolve two architectural and accessibility non-conformances identified during forensic audit and architecture review:

1. **Client Boundary Violation in `components/contact/Contact.tsx`**:
   The contact section renders interactive client components (`CopyButton.tsx`) and was specified in `PROJECT.md` as an explicit Client Component. Omitting `'use client';` violates the project architectural specification and creates an ambiguous component boundary in Next.js App Router.
   *Resolution*: Insert `'use client';` as Line 1 of `components/contact/Contact.tsx`.

2. **WCAG 2.1 Dialog Focus Violation in `components/projects/ProjectModal.tsx`**:
   The project detail modal provides `role="dialog"`, `aria-modal="true"`, `aria-labelledby`, and body scroll locking, but lacks focus management. When opened, focus is not moved into the dialog, the `Tab` key allows keyboard focus to escape to background DOM nodes behind the backdrop (WCAG 2.4.3 & WAI-ARIA violation), and closing the modal leaves focus orphaned rather than returning it to the trigger element (WCAG 2.4.3).
   *Resolution*: Implement a robust, WAI-ARIA 1.2 compliant focus trap lifecycle inside `ProjectModal.tsx`:
   - Capture `document.activeElement` in `previouslyFocusedElementRef` before modal display.
   - Set initial focus to the modal close button (`X`) via `closeButtonRef` on open.
   - Intercept `Tab` and `Shift+Tab` to cycle focus strictly within focusable interactive elements inside `modalContentRef`.
   - Restore focus to `previouslyFocusedElementRef` upon modal close or unmount.

---

## 2. Issue 1: Missing `'use client';` in `components/contact/Contact.tsx`

### 2.1 Problem Description & Forensic Evidence
- **File**: `d:/DEV/CV/components/contact/Contact.tsx`
- **Lines Observed**:
  ```typescript
  1: import React from 'react';
  2: import { portfolioData } from '@/data/portfolioData';
  3: import { CopyButton } from './CopyButton';
  4: import { Mail, Phone, MessageSquare, Github, Linkedin, MapPin, Send, ExternalLink } from 'lucide-react';
  5: 
  6: export const Contact: React.FC = () => {
  ```
- **Architectural Contract Reference (`PROJECT.md` Lines 18–22)**:
  > *"Component Model:*  
  > *Server Components (RSC): Layout, Hero, About (Storytelling), Experience Timeline, Skills Matrix, Footer.*  
  > *Client Components (`'use client'`):*  
  > *- `Navbar`: Mobile responsive menu drawer & smooth scroll spy.*  
  > *- `Projects` & `ProjectModal`: Interactive cards, modal open/close dialog, Escape key handler, backdrop blur, body scroll locking.*  
  > *- `Contact`: Click-to-copy interaction with 2000ms visual confirmation tooltip/pill."*
- **Audit Findings**:
  - `teamwork_preview_auditor_1/handoff.md` Section 1.5, item 2: *"Client Directive in `Contact.tsx`: `components/contact/Contact.tsx` renders interactive elements but omits the `'use client';` directive."*
  - `teamwork_preview_reviewer_2/handoff.md` Observation 2 (Finding `F-02`): *"Missing `'use client'` directive explicitly specified in requirements."*

### 2.2 Rationale & Next.js App Router Mechanics
In Next.js App Router (React 18/19), a Server Component can import and render a Client Component (such as `CopyButton`), which forms a client boundary at `CopyButton`. However:
1. `PROJECT.md` establishes a strict interface boundary contract declaring `Contact.tsx` as a Client Component.
2. In interactive sections where client state, tooltips, or micro-interactions interact across buttons (such as future direct messaging, analytics tracking, or shared feedback states), having `Contact.tsx` declared as `'use client'` guarantees that the entire section tree executes within the client hydration boundary.
3. Adding `'use client';` at line 1 aligns the implementation 100% with the project plan without breaking any server dependencies, as `Contact.tsx` only imports static data from `@/data/portfolioData`, icons from `lucide-react`, and `CopyButton`.

### 2.3 Proposed Before / After Diff

#### Before (`components/contact/Contact.tsx:1-6`)
```typescript
import React from 'react';
import { portfolioData } from '@/data/portfolioData';
import { CopyButton } from './CopyButton';
import { Mail, Phone, MessageSquare, Github, Linkedin, MapPin, Send, ExternalLink } from 'lucide-react';

export const Contact: React.FC = () => {
```

#### After (`components/contact/Contact.tsx:1-7`)
```typescript
'use client';

import React from 'react';
import { portfolioData } from '@/data/portfolioData';
import { CopyButton } from './CopyButton';
import { Mail, Phone, MessageSquare, Github, Linkedin, MapPin, Send, ExternalLink } from 'lucide-react';

export const Contact: React.FC = () => {
```

### 2.4 Complete Proposed Content for `components/contact/Contact.tsx`
```tsx
'use client';

import React from 'react';
import { portfolioData } from '@/data/portfolioData';
import { CopyButton } from './CopyButton';
import { Mail, Phone, MessageSquare, Github, Linkedin, MapPin, Send, ExternalLink } from 'lucide-react';

export const Contact: React.FC = () => {
  const { contact } = portfolioData;

  return (
    <section
      id="contacto"
      data-testid="contact-section"
      className="py-20 sm:py-28 border-t border-[#1e293b] relative"
      aria-labelledby="contact-heading"
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-medium bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 mb-3">
            <Send className="w-3.5 h-3.5" aria-hidden="true" />
            <span>CONTACTO DIRECTO</span>
          </div>
          <h2
            id="contact-heading"
            className="text-3xl sm:text-4xl font-bold tracking-tight text-white font-sans mb-4"
          >
            Hablemos de tu próximo proyecto
          </h2>
          <p className="text-zinc-400 text-base sm:text-lg font-sans">
            ¿Tienes un desafío técnico, una oportunidad en Sevilla o necesitas un ingeniero con criterio para liderar soluciones de alto impacto?
          </p>
        </div>

        {/* Primary Contact Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {/* Email Card */}
          <div className="bg-[#111625] border border-[#1e293b] hover:border-zinc-700/80 rounded-2xl p-6 sm:p-8 flex flex-col justify-between transition-colors">
            <div>
              <div className="flex items-center justify-between gap-4 mb-4">
                <div className="w-12 h-12 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400">
                  <Mail className="w-6 h-6" aria-hidden="true" />
                </div>
                <span className="text-xs font-mono font-medium text-blue-400 bg-blue-500/10 px-2.5 py-1 rounded-full border border-blue-500/20">
                  Respuesta Rápida
                </span>
              </div>
              <h3 className="text-lg font-bold text-white font-sans mb-1">
                Correo Electrónico
              </h3>
              <p className="text-xs text-zinc-400 font-sans mb-4">
                Para propuestas formales, ofertas de empleo o consultas técnicas.
              </p>
              <div className="p-3.5 rounded-xl bg-[#182032] border border-[#1e293b] mb-6">
                <span className="font-mono text-sm sm:text-base text-zinc-200 break-all select-all">
                  {contact.email}
                </span>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-3">
              <a
                href={`mailto:${contact.email}`}
                aria-label={`Enviar correo a ${contact.email}`}
                className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-lg text-sm font-semibold bg-blue-600 hover:bg-blue-500 text-white transition-colors min-h-[44px] flex-1 text-center"
              >
                <Mail className="w-4 h-4" aria-hidden="true" />
                <span>Enviar Email</span>
              </a>
              <CopyButton
                textToCopy={contact.email}
                label="Copiar Email"
                ariaLabel="Copiar dirección de email"
              />
            </div>
          </div>

          {/* Phone & WhatsApp Card */}
          <div className="bg-[#111625] border border-[#1e293b] hover:border-zinc-700/80 rounded-2xl p-6 sm:p-8 flex flex-col justify-between transition-colors">
            <div>
              <div className="flex items-center justify-between gap-4 mb-4">
                <div className="w-12 h-12 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400">
                  <Phone className="w-6 h-6" aria-hidden="true" />
                </div>
                <span className="text-xs font-mono font-medium text-emerald-400 bg-emerald-500/10 px-2.5 py-1 rounded-full border border-emerald-500/20">
                  Llamada / WhatsApp
                </span>
              </div>
              <h3 className="text-lg font-bold text-white font-sans mb-1">
                Teléfono & WhatsApp
              </h3>
              <p className="text-xs text-zinc-400 font-sans mb-4">
                Disponible de Lunes a Viernes para llamadas o mensajes directos.
              </p>
              <div className="p-3.5 rounded-xl bg-[#182032] border border-[#1e293b] mb-6">
                <span className="font-mono text-sm sm:text-base text-zinc-200 select-all">
                  {contact.phone}
                </span>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-3">
              <a
                href={contact.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Abrir conversación en WhatsApp con Yoider Murillo"
                className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-lg text-sm font-semibold bg-emerald-600 hover:bg-emerald-500 text-white transition-colors min-h-[44px] flex-1 text-center"
              >
                <MessageSquare className="w-4 h-4" aria-hidden="true" />
                <span>WhatsApp</span>
              </a>
              <a
                href={`tel:${contact.phoneRaw}`}
                aria-label={`Llamar a ${contact.phone}`}
                className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg text-sm font-medium bg-[#182032] hover:bg-zinc-800 text-zinc-200 border border-[#1e293b] transition-colors min-h-[44px]"
              >
                <Phone className="w-4 h-4" aria-hidden="true" />
                <span>Llamar</span>
              </a>
              <CopyButton
                textToCopy={contact.phone}
                label="Copiar Teléfono"
                ariaLabel="Copiar número de teléfono"
              />
            </div>
          </div>
        </div>

        {/* Secondary Details: Location, Availability & Social Profiles */}
        <div className="bg-[#111625] border border-[#1e293b] rounded-2xl p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 text-left w-full md:w-auto">
            <div className="w-10 h-10 rounded-xl bg-[#182032] border border-[#1e293b] flex items-center justify-center text-zinc-400 shrink-0">
              <MapPin className="w-5 h-5" aria-hidden="true" />
            </div>
            <div>
              <div className="text-white font-medium text-sm sm:text-base font-sans">
                {contact.location}
              </div>
              <div className="text-xs text-zinc-400 font-sans mt-0.5">
                {contact.availability}
              </div>
            </div>
          </div>

          <div className="flex items-center gap-3 w-full md:w-auto justify-start md:justify-end border-t md:border-t-0 pt-4 md:pt-0 border-[#1e293b]">
            <a
              href={contact.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Ver perfil de GitHub"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-mono font-medium text-zinc-300 bg-[#182032] hover:bg-zinc-800 hover:text-white border border-[#1e293b] transition-colors min-h-[44px]"
            >
              <Github className="w-4 h-4" aria-hidden="true" />
              <span>GitHub</span>
              <ExternalLink className="w-3 h-3 text-zinc-500" aria-hidden="true" />
            </a>

            <a
              href={contact.linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Ver perfil de LinkedIn"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-mono font-medium text-blue-400 bg-blue-500/10 hover:bg-blue-500/20 border border-blue-500/20 transition-colors min-h-[44px]"
            >
              <Linkedin className="w-4 h-4" aria-hidden="true" />
              <span>LinkedIn</span>
              <ExternalLink className="w-3 h-3 text-blue-400/60" aria-hidden="true" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
```

---

## 3. Issue 2: WCAG Focus Trap in `components/projects/ProjectModal.tsx`

### 3.1 Problem Description & WCAG Standards Non-Conformance
- **File**: `d:/DEV/CV/components/projects/ProjectModal.tsx`
- **Lines Observed**: Lines 12–37
  ```typescript
  export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
    const modalContentRef = useRef<HTMLDivElement>(null);

    // Keyboard Escape listener and focus management
    useEffect(() => {
      if (!project) return;

      const handleKeyDown = (e: KeyboardEvent) => {
        if (e.key === 'Escape') {
          onClose();
        }
      };

      window.addEventListener('keydown', handleKeyDown);

      // Lock body scroll
      document.body.classList.add('overflow-hidden');
      const originalOverflow = document.body.style.overflow;
      document.body.style.overflow = 'hidden';

      return () => {
        window.removeEventListener('keydown', handleKeyDown);
        document.body.classList.remove('overflow-hidden');
        document.body.style.overflow = originalOverflow;
      };
    }, [project, onClose]);
  ```
- **WCAG 2.1 & WAI-ARIA Violations**:
  1. **WCAG 2.4.3 (Focus Order — Level A)**: When an interactive dialog opens, focus must move into the dialog. In the current implementation, focus remains on the background trigger or whatever element held focus before.
  2. **WAI-ARIA 1.2 Modal Dialog Pattern**: While the dialog is open, focus must be constrained (trapped) within the dialog. Pressing `Tab` from the last focusable element must cycle to the first focusable element; pressing `Shift+Tab` from the first element must cycle to the last. In the current implementation, tabbing leaks out into hidden background page elements behind the backdrop.
  3. **WCAG 2.4.3 (Return of Focus)**: When the dialog closes, focus must be returned to the element that invoked it (the project card or "Ver arquitectura" button), rather than resetting to `document.body` or top of page.

### 3.2 Architectural Design of the Focus Trap Lifecycle

To fulfill all requirements robustly without external dependencies (zero npm bloat), the focus trap is formulated as follows:

```
[User triggers Modal]
        │
        ▼
1. Save document.activeElement to previouslyFocusedElementRef
        │
        ▼
2. Open modal & lock body scroll (overflow-hidden)
        │
        ▼
3. RequestAnimationFrame -> Set initial focus to closeButtonRef ('X')
        │
        ▼
4. Listen to keydown:
   ├── 'Escape'   ──► onClose()
   └── 'Tab'      ──► Focus Trap Logic:
                      Query all visible interactive elements in modalContentRef:
                      ['button:not([disabled])', 'a[href]', '[tabindex]:not([tabindex="-1"])']
                      ├── Tab on Last Element       ──► Wrap to First Element (close button)
                      ├── Shift+Tab on First Element ──► Wrap to Last Element ("Cerrar Detalle")
                      └── Focus outside modal        ──► Pull focus to First Element
        │
        ▼
[User closes Modal via 'X', Backdrop, or 'Escape']
        │
        ▼
5. Cleanup:
   ├── Remove keydown listener
   ├── Restore document.body scroll
   └── Restore focus to previouslyFocusedElementRef.current?.focus()
```

### 3.3 Detailed Implementation Specifications

#### A. Storing Trigger Element
- Define ref: `const previouslyFocusedElementRef = useRef<HTMLElement | null>(null);`
- Before shifting focus, capture the currently active DOM node:
  ```typescript
  if (typeof document !== 'undefined' && document.activeElement instanceof HTMLElement) {
    previouslyFocusedElementRef.current = document.activeElement;
  }
  ```

#### B. Initial Focus Acquisition
- Define ref: `const closeButtonRef = useRef<HTMLButtonElement>(null);`
- Attach `ref={closeButtonRef}` to the `X` button (`data-testid="modal-close-button"`).
- On mount/opening, schedule focus shift in `requestAnimationFrame` to ensure layout paint has completed:
  ```typescript
  const focusRafId = requestAnimationFrame(() => {
    closeButtonRef.current?.focus();
  });
  ```
- Store RAF ID to cancel if unmounted before paint: `cancelAnimationFrame(focusRafId)`.

#### C. Tab & Shift+Tab Trapping Algorithm
- Focusable selector constant:
  ```typescript
  const FOCUSABLE_SELECTOR =
    'a[href], button:not([disabled]), textarea:not([disabled]), input:not([disabled]), select:not([disabled]), [tabindex]:not([tabindex="-1"])';
  ```
- In `handleKeyDown(e: KeyboardEvent)`:
  ```typescript
  if (e.key === 'Tab') {
    if (!modalContentRef.current) return;

    const focusableNodes = Array.from(
      modalContentRef.current.querySelectorAll<HTMLElement>(FOCUSABLE_SELECTOR)
    ).filter((el) => {
      // Must not be disabled or hidden
      return (
        !el.hasAttribute('disabled') &&
        el.getAttribute('aria-hidden') !== 'true' &&
        el.offsetParent !== null
      );
    });

    if (focusableNodes.length === 0) {
      e.preventDefault();
      return;
    }

    const firstElement = focusableNodes[0];
    const lastElement = focusableNodes[focusableNodes.length - 1];
    const currentActive = document.activeElement;

    if (e.shiftKey) {
      // Shift + Tab: backward navigation
      if (currentActive === firstElement || !modalContentRef.current.contains(currentActive)) {
        e.preventDefault();
        lastElement.focus();
      }
    } else {
      // Tab: forward navigation
      if (currentActive === lastElement || !modalContentRef.current.contains(currentActive)) {
        e.preventDefault();
        firstElement.focus();
      }
    }
  }
  ```

#### D. Focus Restoration on Close
- In cleanup:
  ```typescript
  const triggerElement = previouslyFocusedElementRef.current;
  if (triggerElement && document.contains(triggerElement) && typeof triggerElement.focus === 'function') {
    triggerElement.focus();
  }
  ```
- Adding `document.contains(triggerElement)` ensures the element is still attached to the live DOM tree, avoiding exceptions if the page re-rendered.

#### E. Prevention of Stale Closure / Parent Re-render Desynchronization
- Use a ref for `onClose`:
  ```typescript
  const onCloseRef = useRef(onClose);
  useEffect(() => {
    onCloseRef.current = onClose;
  }, [onClose]);
  ```
- The effect lifecycle is keyed to `[project]`. When `project` is non-null, the trap initiates. When `project` becomes `null`, the cleanup executes, restoring body scroll and focus seamlessly without being prematurely triggered by incidental parent re-renders.

### 3.4 Proposed Before / After Diff

#### Before (`components/projects/ProjectModal.tsx:12-38 & 67-77`)
```tsx
export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  const modalContentRef = useRef<HTMLDivElement>(null);

  // Keyboard Escape listener and focus management
  useEffect(() => {
    if (!project) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    // Lock body scroll
    document.body.classList.add('overflow-hidden');
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.classList.remove('overflow-hidden');
      document.body.style.overflow = originalOverflow;
    };
  }, [project, onClose]);

  if (!project) return null;
...
        {/* Close Button X */}
        <button
          type="button"
          onClick={onClose}
          data-testid="modal-close-button"
          aria-label="Cerrar modal"
          className="absolute top-4 right-4 sm:top-6 sm:right-6 p-2 rounded-lg text-zinc-400 hover:text-white bg-[#182032] hover:bg-zinc-800 border border-[#1e293b] hover:border-zinc-600 transition-colors min-h-[44px] min-w-[44px] flex items-center justify-center"
        >
          <X className="w-5 h-5" aria-hidden="true" />
        </button>
```

#### After (`components/projects/ProjectModal.tsx:12-75 & 100-112`)
```tsx
const FOCUSABLE_SELECTOR =
  'a[href], button:not([disabled]), textarea:not([disabled]), input:not([disabled]), select:not([disabled]), [tabindex]:not([tabindex="-1"])';

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  const modalContentRef = useRef<HTMLDivElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const previouslyFocusedElementRef = useRef<HTMLElement | null>(null);
  const onCloseRef = useRef(onClose);

  // Keep onClose ref fresh
  useEffect(() => {
    onCloseRef.current = onClose;
  }, [onClose]);

  // WCAG Accessible Dialog: Focus Trap, Initial Focus, Escape listener, Scroll Lock & Return Focus
  useEffect(() => {
    if (!project) return;

    // 1. Store previously focused active element before opening modal
    if (typeof document !== 'undefined' && document.activeElement instanceof HTMLElement) {
      previouslyFocusedElementRef.current = document.activeElement;
    }

    // 2. Initial focus: set focus to close button (X) on open
    const focusTimer = requestAnimationFrame(() => {
      closeButtonRef.current?.focus();
    });

    // 3. Lock body scroll
    document.body.classList.add('overflow-hidden');
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    // 4. Keyboard handler for Escape and Tab focus trap
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        e.preventDefault();
        onCloseRef.current();
        return;
      }

      if (e.key === 'Tab') {
        if (!modalContentRef.current) return;

        const focusableElements = Array.from(
          modalContentRef.current.querySelectorAll<HTMLElement>(FOCUSABLE_SELECTOR)
        ).filter((el) => {
          return (
            !el.hasAttribute('disabled') &&
            el.getAttribute('aria-hidden') !== 'true' &&
            el.offsetParent !== null
          );
        });

        if (focusableElements.length === 0) {
          e.preventDefault();
          return;
        }

        const firstElement = focusableElements[0];
        const lastElement = focusableElements[focusableElements.length - 1];
        const currentActive = document.activeElement;

        if (e.shiftKey) {
          // Shift + Tab: backward wrap from first to last
          if (currentActive === firstElement || !modalContentRef.current.contains(currentActive)) {
            e.preventDefault();
            lastElement.focus();
          }
        } else {
          // Tab: forward wrap from last to first
          if (currentActive === lastElement || !modalContentRef.current.contains(currentActive)) {
            e.preventDefault();
            firstElement.focus();
          }
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    // 5. Cleanup on modal close or unmount
    return () => {
      cancelAnimationFrame(focusTimer);
      window.removeEventListener('keydown', handleKeyDown);

      // Restore body scroll
      document.body.classList.remove('overflow-hidden');
      document.body.style.overflow = originalOverflow;

      // Restore focus to the previously focused element
      const triggerElement = previouslyFocusedElementRef.current;
      if (triggerElement && document.contains(triggerElement) && typeof triggerElement.focus === 'function') {
        triggerElement.focus();
      }
    };
  }, [project]);

  if (!project) return null;
...
        {/* Close Button X with Ref for Initial Focus */}
        <button
          ref={closeButtonRef}
          type="button"
          onClick={onClose}
          data-testid="modal-close-button"
          aria-label="Cerrar modal"
          className="absolute top-4 right-4 sm:top-6 sm:right-6 p-2 rounded-lg text-zinc-400 hover:text-white bg-[#182032] hover:bg-zinc-800 border border-[#1e293b] hover:border-zinc-600 transition-colors min-h-[44px] min-w-[44px] flex items-center justify-center focus:ring-2 focus:ring-blue-500 focus:outline-none"
        >
          <X className="w-5 h-5" aria-hidden="true" />
        </button>
```

### 3.5 Complete Proposed Content for `components/projects/ProjectModal.tsx`
```tsx
'use client';

import React, { useEffect, useRef } from 'react';
import { TechnicalProject } from '@/types/portfolio';
import { X, ExternalLink, Github, CheckCircle2, Cpu, BarChart3, AlertCircle } from 'lucide-react';

interface ProjectModalProps {
  project: TechnicalProject | null;
  onClose: () => void;
}

const FOCUSABLE_SELECTOR =
  'a[href], button:not([disabled]), textarea:not([disabled]), input:not([disabled]), select:not([disabled]), [tabindex]:not([tabindex="-1"])';

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  const modalContentRef = useRef<HTMLDivElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const previouslyFocusedElementRef = useRef<HTMLElement | null>(null);
  const onCloseRef = useRef(onClose);

  // Keep onClose callback reference up to date
  useEffect(() => {
    onCloseRef.current = onClose;
  }, [onClose]);

  // WCAG Accessible Dialog: Focus Trap, Initial Focus, Escape listener, Scroll Lock & Return Focus
  useEffect(() => {
    if (!project) return;

    // 1. Store previously focused active element before opening modal
    if (typeof document !== 'undefined' && document.activeElement instanceof HTMLElement) {
      previouslyFocusedElementRef.current = document.activeElement;
    }

    // 2. Initial focus: set focus to close button (X) on open
    const focusTimer = requestAnimationFrame(() => {
      closeButtonRef.current?.focus();
    });

    // 3. Lock body scroll
    document.body.classList.add('overflow-hidden');
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    // 4. Keyboard handler for Escape and Tab focus trap
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        e.preventDefault();
        onCloseRef.current();
        return;
      }

      if (e.key === 'Tab') {
        if (!modalContentRef.current) return;

        const focusableElements = Array.from(
          modalContentRef.current.querySelectorAll<HTMLElement>(FOCUSABLE_SELECTOR)
        ).filter((el) => {
          return (
            !el.hasAttribute('disabled') &&
            el.getAttribute('aria-hidden') !== 'true' &&
            el.offsetParent !== null
          );
        });

        if (focusableElements.length === 0) {
          e.preventDefault();
          return;
        }

        const firstElement = focusableElements[0];
        const lastElement = focusableElements[focusableElements.length - 1];
        const currentActive = document.activeElement;

        if (e.shiftKey) {
          // Shift + Tab: backward wrap from first to last
          if (currentActive === firstElement || !modalContentRef.current.contains(currentActive)) {
            e.preventDefault();
            lastElement.focus();
          }
        } else {
          // Tab: forward wrap from last to first
          if (currentActive === lastElement || !modalContentRef.current.contains(currentActive)) {
            e.preventDefault();
            firstElement.focus();
          }
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    // 5. Cleanup on modal close or unmount
    return () => {
      cancelAnimationFrame(focusTimer);
      window.removeEventListener('keydown', handleKeyDown);

      // Restore body scroll
      document.body.classList.remove('overflow-hidden');
      document.body.style.overflow = originalOverflow;

      // Restore focus to the previously focused element
      const triggerElement = previouslyFocusedElementRef.current;
      if (triggerElement && document.contains(triggerElement) && typeof triggerElement.focus === 'function') {
        triggerElement.focus();
      }
    };
  }, [project]);

  if (!project) return null;

  const accentBorder =
    project.accentColor === 'purple'
      ? 'border-purple-500/30 text-purple-400 bg-purple-500/10'
      : project.accentColor === 'emerald'
      ? 'border-emerald-500/30 text-emerald-400 bg-emerald-500/10'
      : 'border-blue-500/30 text-blue-400 bg-blue-500/10';

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-project-title"
      data-testid="project-modal"
      className="project-modal fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10 bg-black/80 backdrop-blur-md animate-fade-in overflow-y-auto"
      onClick={(e) => {
        // Close if click is on the backdrop itself
        if (e.target === e.currentTarget) {
          onClose();
        }
      }}
    >
      <div
        ref={modalContentRef}
        tabIndex={-1}
        className="relative w-full max-w-4xl bg-[#111625] border border-[#1e293b] rounded-2xl shadow-2xl p-6 sm:p-8 md:p-10 my-auto text-left max-h-[90vh] overflow-y-auto animate-scale-up outline-none focus:outline-none"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button X with Ref for Initial Focus */}
        <button
          ref={closeButtonRef}
          type="button"
          onClick={onClose}
          data-testid="modal-close-button"
          aria-label="Cerrar modal"
          className="absolute top-4 right-4 sm:top-6 sm:right-6 p-2 rounded-lg text-zinc-400 hover:text-white bg-[#182032] hover:bg-zinc-800 border border-[#1e293b] hover:border-zinc-600 transition-colors min-h-[44px] min-w-[44px] flex items-center justify-center focus:ring-2 focus:ring-blue-500 focus:outline-none"
        >
          <X className="w-5 h-5" aria-hidden="true" />
        </button>

        {/* Header: Category, Title, Tagline */}
        <div className="pr-12 mb-6">
          <div className="flex flex-wrap items-center gap-2 mb-3">
            <span
              className={`inline-block px-3 py-1 rounded-full text-xs font-mono font-medium border ${accentBorder}`}
            >
              {project.category}
            </span>
          </div>

          <h2
            id="modal-project-title"
            className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white font-sans tracking-tight mb-2"
          >
            {project.title}
          </h2>

          <p className="text-zinc-400 text-sm sm:text-base font-sans leading-relaxed">
            {project.tagline}
          </p>
        </div>

        {/* Problem Section */}
        <div className="mb-8 p-4 sm:p-5 rounded-xl bg-[#182032]/60 border border-[#1e293b]">
          <div className="flex items-center gap-2 text-amber-400 font-sans font-semibold text-sm sm:text-base mb-2">
            <AlertCircle className="w-4 h-4 shrink-0" aria-hidden="true" />
            <h3 className="font-semibold">Problema / Desafío de Negocio</h3>
          </div>
          <p className="text-zinc-300 text-sm sm:text-base leading-relaxed font-sans">
            {project.problem}
          </p>
        </div>

        {/* Architecture Section */}
        <div className="mb-8">
          <div className="flex items-center gap-2 text-blue-400 font-sans font-semibold text-base sm:text-lg mb-3">
            <Cpu className="w-5 h-5 shrink-0" aria-hidden="true" />
            <h3 className="font-semibold">Arquitectura de Solución</h3>
          </div>
          <p className="text-zinc-300 text-sm sm:text-base leading-relaxed font-sans mb-4">
            {project.solutionArchitecture.overview}
          </p>
          <ul className="space-y-2.5">
            {project.solutionArchitecture.keyPoints.map((point, index) => (
              <li key={index} className="flex items-start gap-2.5 text-sm text-zinc-300">
                <CheckCircle2 className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" aria-hidden="true" />
                <span>{point}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Metrics Grid */}
        <div className="mb-8">
          <div className="flex items-center gap-2 text-emerald-400 font-sans font-semibold text-base sm:text-lg mb-3">
            <BarChart3 className="w-5 h-5 shrink-0" aria-hidden="true" />
            <h3 className="font-semibold">Métricas Clave de Impacto</h3>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {project.metrics.map((metric, index) => (
              <div
                key={index}
                className="p-4 rounded-xl bg-[#182032]/60 border border-[#1e293b] text-center"
              >
                <div className="text-2xl sm:text-3xl font-bold font-mono text-emerald-400 mb-1">
                  {metric.value}
                </div>
                <div className="text-xs sm:text-sm font-medium text-zinc-200 mb-1">
                  {metric.label}
                </div>
                {metric.detail && (
                  <div className="text-xs text-zinc-400 font-sans">
                    {metric.detail}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Stack breakdown */}
        <div className="mb-8">
          <h3 className="text-sm font-semibold font-mono text-zinc-400 uppercase tracking-wider mb-3">
            Stack Tecnológico
          </h3>
          <div className="flex flex-wrap gap-2">
            {project.techStack.map((tech, index) => (
              <span
                key={index}
                className="px-2.5 py-1 rounded-md text-xs font-mono bg-[#182032] text-zinc-300 border border-[#1e293b]"
              >
                {tech.name}
              </span>
            ))}
          </div>
        </div>

        {/* Footer Actions / Links */}
        <div className="flex flex-wrap items-center justify-between gap-4 pt-6 border-t border-[#1e293b]">
          <div className="flex flex-wrap items-center gap-3">
            {project.links.githubUrl && (
              <a
                href={project.links.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Ver código de ${project.title} en GitHub`}
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg text-sm font-medium bg-[#182032] hover:bg-zinc-800 text-zinc-200 border border-[#1e293b] transition-colors min-h-[44px] focus:ring-2 focus:ring-blue-500 focus:outline-none"
              >
                <Github className="w-4 h-4" aria-hidden="true" />
                <span>Repositorio GitHub</span>
              </a>
            )}
            {project.links.liveUrl && project.links.liveUrl !== '#' && (
              <a
                href={project.links.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Ver demo en vivo de ${project.title}`}
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg text-sm font-medium bg-blue-600 hover:bg-blue-500 text-white transition-colors min-h-[44px] focus:ring-2 focus:ring-blue-400 focus:outline-none"
              >
                <ExternalLink className="w-4 h-4" aria-hidden="true" />
                <span>Demo en Vivo</span>
              </a>
            )}
          </div>

          <button
            type="button"
            onClick={onClose}
            aria-label="Cerrar ventana de detalles del proyecto"
            className="px-4 py-2 rounded-lg text-sm font-medium text-zinc-400 hover:text-white transition-colors min-h-[44px] focus:ring-2 focus:ring-blue-500 focus:outline-none"
          >
            Cerrar Detalle
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProjectModal;
```

---

## 4. Verification & Validation Protocol

To independently verify the implementations once applied by the remediator agent:

### 4.1 Type-Check & Compilation
```bash
npm run type-check
npm run build
```
- Must compile cleanly with zero TypeScript errors or warnings.

### 4.2 Interactive Verification in Browser
1. **Initial Focus**:
   - Tab through the project grid until a project card or "Ver arquitectura" button is focused.
   - Press `Enter` or `Space` to open `ProjectModal`.
   - Verify that focus automatically lands on the close button `X` (`document.activeElement === closeButtonRef.current`).
2. **Focus Trap Forward (`Tab`)**:
   - Press `Tab`: focus moves to GitHub link (if present), then to Live Demo link (if present), then to "Cerrar Detalle" button.
   - Press `Tab` on "Cerrar Detalle": focus wraps immediately back to the close button `X`. Focus never escapes to the underlying page.
3. **Focus Trap Backward (`Shift + Tab`)**:
   - While on close button `X`, press `Shift + Tab`: focus immediately wraps to "Cerrar Detalle" button at the bottom of the dialog.
4. **Focus Restoration (`Escape` or `Close`)**:
   - Press `Escape` or activate close button.
   - Verify modal closes, scroll lock releases, and focus returns directly to the project card / button that opened it.
5. **Contact Boundary Verification**:
   - Inspect bundle in production build.
   - Confirm `Contact.tsx` is bundled as client chunk without SSR hydration errors.
   - Click "Copiar Email" and verify 2000ms visual confirmation tooltip/pill executes without error.

---

## 5. Summary Table of Proposed File Changes

| File Path | Action | Key Modification |
|---|---|---|
| `components/contact/Contact.tsx` | Prepend Line 1 | Add `'use client';` directive to establish explicit Client Component boundary. |
| `components/projects/ProjectModal.tsx` | Update component body | Implement accessible dialog focus trap: `previouslyFocusedElementRef`, `closeButtonRef`, initial focus in RAF, `Tab`/`Shift+Tab` containment, and return of focus on cleanup. |

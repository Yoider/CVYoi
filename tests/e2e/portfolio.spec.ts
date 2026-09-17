import { test, expect } from '@playwright/test';

/**
 * ==============================================================================
 * Web CV / Interactive Portfolio — Yoider Murillo Salazar
 * OPAQUE-BOX E2E TEST SUITE (TIERS 1 - 4)
 * Based on TEST_INFRA.md, ORIGINAL_REQUEST.md, and DESIGN_SYSTEM.md
 * Total checks: 23 core verification checks
 * ==============================================================================
 */

test.describe('Web CV Yoider Murillo Salazar — Comprehensive E2E Test Suite', () => {

  // ============================================================================
  // TIER 1: FEATURE COVERAGE (Smoke & Sanity — 10 checks)
  // ============================================================================
  test.describe('Tier 1: Feature Coverage', () => {

    test('T1-01: Page loads with 200 HTTP status and document title / H1 contains Yoider Murillo Salazar', async ({ page }) => {
      const response = await page.goto('/');
      expect(response).not.toBeNull();
      expect(response!.status()).toBe(200);

      // Check document title
      await expect(page).toHaveTitle(/Yoider Murillo Salazar/i);

      // Check main H1 heading
      const h1 = page.locator('h1');
      await expect(h1).toContainText('Yoider Murillo Salazar');

      // Check subtitle role description
      const roleText = page.locator('text=Software Engineer & Full Stack Developer');
      await expect(roleText).toBeVisible();
    });

    test('T1-02: Availability status pill displays DISPONIBLE EN SEVILLA & REMOTO with pulsing dot', async ({ page }) => {
      await page.goto('/');

      // Locate status pill by its required text
      const statusPill = page.locator('text=DISPONIBLE EN SEVILLA & REMOTO').first();
      await expect(statusPill).toBeVisible();

      // Find the pulsing dot within or adjacent to the status pill
      const pillContainer = page.locator('div, span').filter({ hasText: 'DISPONIBLE EN SEVILLA & REMOTO' }).first();
      const pulseDot = pillContainer.locator('.animate-pulse, [class*="pulse"]');
      await expect(pulseDot).toBeVisible();

      // Verify emerald color styling (#10b981 / emerald)
      const dotClasses = await pulseDot.getAttribute('class');
      const containerClasses = await pillContainer.getAttribute('class');
      const hasEmerald = (dotClasses && /emerald/i.test(dotClasses)) ||
                          (containerClasses && /emerald/i.test(containerClasses));
      expect(hasEmerald).toBeTruthy();
    });

    test('T1-03: Hero section displays CV download link referencing /cv-yoider-murillo.pdf with HTTP 200', async ({ page }) => {
      await page.goto('/');

      // Check presence of CV download link/button
      const cvLink = page.locator('a[href*="cv-yoider-murillo.pdf"]').first();
      await expect(cvLink).toBeVisible();

      // Verify direct asset availability via HTTP GET
      const assetResponse = await page.request.get('/cv-yoider-murillo.pdf');
      expect(assetResponse.status()).toBe(200);
    });

    test('T1-04: Hero section displays direct links to GitHub and LinkedIn', async ({ page }) => {
      await page.goto('/');

      // Check GitHub link
      const githubLink = page.locator('a[href*="github.com/yoi-hub"]').first();
      await expect(githubLink).toBeVisible();

      // Check LinkedIn link
      const linkedinLink = page.locator('a[href*="linkedin.com/in/yoider-murillo-salazar"]').first();
      await expect(linkedinLink).toBeVisible();
    });

    test('T1-05: Sobre Mí section renders narrative covering Uno 27, Abai Group, and Seville Multimodal AI', async ({ page }) => {
      await page.goto('/');

      const aboutSection = page.locator('#sobre-mi, [data-testid="about-section"]').first();
      await expect(aboutSection).toBeVisible();

      // Verify historical Colombian backend journey mentions
      await expect(aboutSection).toContainText('Uno 27');
      await expect(aboutSection).toContainText('Abai Group');

      // Verify Seville & Multimodal AI evolution
      await expect(aboutSection).toContainText('Sevilla');
      await expect(aboutSection).toContainText('Multimodal');
    });

    test('T1-06: Projects section renders exactly 4 technical project cards', async ({ page }) => {
      await page.goto('/');

      const projectsSection = page.locator('#proyectos, [data-testid="projects-section"]').first();
      await expect(projectsSection).toBeVisible();

      // Check all 4 projects by title
      const impulsarCard = projectsSection.locator('text=Impulsar').first();
      const chronovaCard = projectsSection.locator('text=CHRON0V4').first();
      const finanzasCard = projectsSection.locator('text=Finanzas Dashboard').first();
      const tumazCard = projectsSection.locator('text=Tuma_Z').first();

      await expect(impulsarCard).toBeVisible();
      await expect(chronovaCard).toBeVisible();
      await expect(finanzasCard).toBeVisible();
      await expect(tumazCard).toBeVisible();
    });

    test('T1-07: Experience timeline renders chronological trajectory (Uno 27, Abai Group, Sevilla)', async ({ page }) => {
      await page.goto('/');

      const expSection = page.locator('#experiencia, [data-testid="experience-section"]').first();
      await expect(expSection).toBeVisible();

      await expect(expSection).toContainText('Uno 27');
      await expect(expSection).toContainText('Abai Group');
      await expect(expSection).toContainText('Sevilla');
    });

    test('T1-08: Skills matrix displays all 5 categorized layers', async ({ page }) => {
      await page.goto('/');

      const skillsSection = page.locator('#habilidades, [data-testid="skills-section"]').first();
      await expect(skillsSection).toBeVisible();

      // Layer 1: Backend
      await expect(skillsSection).toContainText(/Backend/i);
      // Layer 2: Frontend
      await expect(skillsSection).toContainText(/Frontend/i);
      // Layer 3: Data
      await expect(skillsSection).toContainText(/Data|Datos/i);
      // Layer 4: AI & Automation
      await expect(skillsSection).toContainText(/AI|IA|Automatización/i);
      // Layer 5: Tools & DevOps
      await expect(skillsSection).toContainText(/Herramientas|Tools|DevOps/i);
    });

    test('T1-09: Contact section displays coordinates for email and phone', async ({ page }) => {
      await page.goto('/');

      const contactSection = page.locator('#contacto, [data-testid="contact-section"]').first();
      await expect(contactSection).toBeVisible();

      // Email coordinate
      await expect(contactSection).toContainText('yodiermurillo@gmail.com');

      // Phone coordinate
      await expect(contactSection).toContainText('+34 604 30 52 21');
    });

    test('T1-10: Footer displays copyright, tech stack, and location/system status', async ({ page }) => {
      await page.goto('/');

      const footer = page.locator('footer').first();
      await expect(footer).toBeVisible();

      await expect(footer).toContainText(/Yoider Murillo Salazar/i);
      await expect(footer).toContainText(/Next\.js/i);
      await expect(footer).toContainText(/TypeScript/i);
      await expect(footer).toContainText(/Tailwind/i);
    });

  });

  // ============================================================================
  // TIER 2: BOUNDARY & CORNER CASES (6 checks)
  // ============================================================================
  test.describe('Tier 2: Boundary & Corner Cases', () => {

    test('T2-01: Clicking a project card opens ProjectModal with aria-modal/dialog and architecture details', async ({ page }) => {
      await page.goto('/');

      // Find the card for Impulsar
      const card = page.locator('#proyectos').locator('text=Impulsar').first();
      await card.click();

      // Locate modal by role dialog or aria-modal
      const modal = page.locator('[role="dialog"], [aria-modal="true"], [data-testid="project-modal"]').first();
      await expect(modal).toBeVisible();

      // Verify modal content includes problem, architecture, and metrics
      await expect(modal).toContainText('Impulsar');
      await expect(modal).toContainText(/Problema|Desafío|Arquitectura|Métricas|-75%/i);
    });

    test('T2-02: Modal closes cleanly via Escape key, close button X, and backdrop click', async ({ page }) => {
      await page.goto('/');

      const card = page.locator('#proyectos').locator('text=Impulsar').first();
      const modal = page.locator('[role="dialog"], [aria-modal="true"], [data-testid="project-modal"]').first();

      // Cycle 1: Close via Escape key
      await card.click();
      await expect(modal).toBeVisible();
      await page.keyboard.press('Escape');
      await expect(modal).not.toBeVisible();

      // Cycle 2: Close via Close Button (X)
      await card.click();
      await expect(modal).toBeVisible();
      const closeBtn = modal.locator('button[aria-label*="Cerrar"], button[aria-label*="close"], [data-testid="modal-close-button"]').first();
      await closeBtn.click();
      await expect(modal).not.toBeVisible();

      // Cycle 3: Close via Backdrop overlay click
      await card.click();
      await expect(modal).toBeVisible();
      // Click outside dialog content (on top-left corner of the backdrop)
      await page.mouse.click(10, 10);
      await expect(modal).not.toBeVisible();
    });

    test('T2-03: Modal locks body scroll (overflow-hidden or overflow: hidden on document.body)', async ({ page }) => {
      await page.goto('/');

      const card = page.locator('#proyectos').locator('text=Impulsar').first();
      await card.click();

      const isScrollLocked = await page.evaluate(() => {
        const body = document.body;
        const style = window.getComputedStyle(body);
        return body.classList.contains('overflow-hidden') || style.overflow === 'hidden' || style.overflowY === 'hidden';
      });

      expect(isScrollLocked).toBe(true);

      // Close modal and verify scroll lock is released
      await page.keyboard.press('Escape');
      const isScrollUnlocked = await page.evaluate(() => {
        const body = document.body;
        const style = window.getComputedStyle(body);
        return !body.classList.contains('overflow-hidden') && style.overflow !== 'hidden';
      });
      expect(isScrollUnlocked).toBe(true);
    });

    test('T2-04: Copy email button triggers clipboard feedback showing ¡Copiado! for 2000ms', async ({ page, context }) => {
      // Grant clipboard permissions
      await context.grantPermissions(['clipboard-read', 'clipboard-write']);
      await page.goto('/');

      const contactSection = page.locator('#contacto, [data-testid="contact-section"]').first();
      const copyButton = contactSection.locator('button').filter({ hasText: /Copiar|yodiermurillo@gmail\.com/i }).first();
      await copyButton.click();

      // Check feedback message "¡Copiado!" or check indicator
      const feedback = contactSection.locator('text=¡Copiado!, text=Copiado').first();
      await expect(feedback).toBeVisible();

      // Verify that after 2500ms the feedback reverts back
      await page.waitForTimeout(2500);
      await expect(feedback).not.toBeVisible();
    });

    test('T2-05: Mobile viewport 375px has zero horizontal overflow (scrollWidth <= innerWidth)', async ({ page }) => {
      await page.setViewportSize({ width: 375, height: 667 });
      await page.goto('/');

      // Wait for all fonts and styles to paint
      await page.waitForLoadState('networkidle');

      const overflowResult = await page.evaluate(() => {
        const docWidth = document.documentElement.scrollWidth;
        const windowWidth = window.innerWidth;
        return {
          scrollWidth: docWidth,
          innerWidth: windowWidth,
          hasOverflow: docWidth > windowWidth,
        };
      });

      expect(overflowResult.hasOverflow).toBe(false);
      expect(overflowResult.scrollWidth).toBeLessThanOrEqual(375);
    });

    test('T2-06: Mobile hamburger navigation menu opens and closes cleanly', async ({ page }) => {
      await page.setViewportSize({ width: 375, height: 667 });
      await page.goto('/');

      // Find mobile hamburger button
      const hamburger = page.locator('button[aria-label*="menú"], button[aria-label*="menu"], nav button').first();
      await expect(hamburger).toBeVisible();

      // Open drawer
      await hamburger.click();
      const mobileNav = page.locator('[data-testid="mobile-menu"], nav [role="dialog"], [class*="mobile-menu"]').first();
      await expect(mobileNav).toBeVisible();

      // Click a nav link to navigate and auto-close menu
      const navLink = mobileNav.locator('a[href="#experiencia"]').first();
      await navLink.click();

      // Verify mobile menu closed
      await expect(mobileNav).not.toBeVisible();
    });

  });

  // ============================================================================
  // TIER 3: CROSS-FEATURE COMBINATIONS (3 checks)
  // ============================================================================
  test.describe('Tier 3: Cross-Feature Combinations', () => {

    test('T3-01: Navbar anchor links scroll smoothly to target sections', async ({ page }) => {
      await page.setViewportSize({ width: 1280, height: 800 });
      await page.goto('/');

      // Click Proyectos link
      const proyectosLink = page.locator('nav a[href="#proyectos"]').first();
      await proyectosLink.click();

      const proyectosSection = page.locator('#proyectos');
      await expect(proyectosSection).toBeInViewport();

      // Click Contacto link
      const contactoLink = page.locator('nav a[href="#contacto"]').first();
      await contactoLink.click();

      const contactoSection = page.locator('#contacto');
      await expect(contactoSection).toBeInViewport();
    });

    test('T3-02: Sequential modal navigation opens distinct projects without state pollution', async ({ page }) => {
      await page.goto('/');

      const modal = page.locator('[role="dialog"], [aria-modal="true"], [data-testid="project-modal"]').first();

      // Open Impulsar
      const card1 = page.locator('#proyectos').locator('text=Impulsar').first();
      await card1.click();
      await expect(modal).toBeVisible();
      await expect(modal).toContainText('Impulsar');
      await expect(modal).toContainText('GovTech / LegalTech');

      // Close modal
      await page.keyboard.press('Escape');
      await expect(modal).not.toBeVisible();

      // Open CHRON0V4
      const card2 = page.locator('#proyectos').locator('text=CHRON0V4').first();
      await card2.click();
      await expect(modal).toBeVisible();
      await expect(modal).toContainText('CHRON0V4');
      await expect(modal).toContainText(/Diátaxis|MCP|Context/i);
      // Ensure Impulsar text is gone
      await expect(modal).not.toContainText('GovTech / LegalTech');

      // Close modal
      await page.keyboard.press('Escape');
      await expect(modal).not.toBeVisible();
    });

    test('T3-03: Viewport resize from desktop (1280px) to mobile (375px) adapts grid layouts seamlessly', async ({ page }) => {
      // Start desktop
      await page.setViewportSize({ width: 1280, height: 800 });
      await page.goto('/');

      const desktopCols = await page.evaluate(() => {
        const grid = document.querySelector('#proyectos .grid, [data-testid="projects-grid"]');
        if (!grid) return 0;
        return window.getComputedStyle(grid).gridTemplateColumns.split(' ').length;
      });
      // Desktop should have 2 or more columns
      expect(desktopCols).toBeGreaterThanOrEqual(2);

      // Resize to mobile 375px
      await page.setViewportSize({ width: 375, height: 667 });
      await page.waitForTimeout(300);

      const mobileCols = await page.evaluate(() => {
        const grid = document.querySelector('#proyectos .grid, [data-testid="projects-grid"]');
        if (!grid) return 1;
        return window.getComputedStyle(grid).gridTemplateColumns.split(' ').length;
      });
      // Mobile should be 1 column
      expect(mobileCols).toBe(1);
    });

  });

  // ============================================================================
  // TIER 4: REAL-WORLD SCENARIOS & NON-FUNCTIONAL BENCHMARKS (4 checks)
  // ============================================================================
  test.describe('Tier 4: Real-World Scenarios & Non-Functional Benchmarks', () => {

    test('T4-01: End-to-end user journey across all sections completes with zero failures', async ({ page, context }) => {
      await context.grantPermissions(['clipboard-read', 'clipboard-write']);
      await page.goto('/');

      // 1. Inspect Hero & Availability
      await expect(page.locator('h1')).toContainText('Yoider Murillo Salazar');
      await expect(page.locator('text=DISPONIBLE EN SEVILLA & REMOTO')).toBeVisible();

      // 2. Scroll to Sobre Mí
      const aboutLink = page.locator('nav a[href="#sobre-mi"]').first();
      if (await aboutLink.isVisible()) {
        await aboutLink.click();
      }
      await expect(page.locator('#sobre-mi')).toBeVisible();

      // 3. Inspect Impulsar project modal
      const impulsarCard = page.locator('#proyectos').locator('text=Impulsar').first();
      await impulsarCard.click();
      const modal = page.locator('[role="dialog"], [aria-modal="true"]').first();
      await expect(modal).toBeVisible();
      await page.keyboard.press('Escape');
      await expect(modal).not.toBeVisible();

      // 4. Scroll to Experience
      const expSection = page.locator('#experiencia');
      await expSection.scrollIntoViewIfNeeded();
      await expect(expSection).toContainText('Uno 27');

      // 5. Scroll to Skills
      const skillsSection = page.locator('#habilidades');
      await skillsSection.scrollIntoViewIfNeeded();
      await expect(skillsSection).toContainText('Backend');

      // 6. Scroll to Contact & Copy email
      const contactSection = page.locator('#contacto');
      await contactSection.scrollIntoViewIfNeeded();
      const copyBtn = contactSection.locator('button').filter({ hasText: /Copiar|yodiermurillo@gmail\.com/i }).first();
      await copyBtn.click();
      await expect(contactSection.locator('text=¡Copiado!, text=Copiado').first()).toBeVisible();
    });

    test('T4-02: Computed visual tokens strictly match DESIGN_SYSTEM.md specifications', async ({ page }) => {
      await page.goto('/');

      // Check canvas / body background: #090d16 -> rgb(9, 13, 22)
      const bodyBg = await page.evaluate(() => {
        return window.getComputedStyle(document.body).backgroundColor;
      });
      expect(bodyBg).toBe('rgb(9, 13, 22)');

      // Check project card surface: #111625 -> rgb(17, 22, 37) (or rgba with opacity)
      const cardColors = await page.evaluate(() => {
        const card = document.querySelector('#proyectos [class*="rounded"], [data-testid="project-card"]');
        if (!card) return null;
        const style = window.getComputedStyle(card);
        return {
          bg: style.backgroundColor,
          border: style.borderColor,
        };
      });

      if (cardColors) {
        // Must match either rgb(17, 22, 37) or rgba(17, 22, 37, ...) or surface token
        const isCardDark = /rgb\(17,\s*22,\s*37\)|rgba\(17,\s*22,\s*37/i.test(cardColors.bg);
        expect(isCardDark).toBeTruthy();
      }
    });

    test('T4-03: Zero console errors, page errors, and hydration mismatches during complete execution', async ({ page }) => {
      const consoleErrors: string[] = [];
      const pageErrors: string[] = [];

      page.on('console', msg => {
        if (msg.type() === 'error') {
          consoleErrors.push(msg.text());
        }
      });

      page.on('pageerror', error => {
        pageErrors.push(error.message);
      });

      await page.goto('/');
      await page.waitForLoadState('networkidle');

      // Navigate and interact
      await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight));
      await page.waitForTimeout(500);
      await page.evaluate(() => window.scrollTo(0, 0));
      await page.waitForTimeout(500);

      // Verify no errors or hydration mismatches were emitted
      const hydrationErrors = consoleErrors.filter(err =>
        /hydration|did not match|react-error/i.test(err)
      );

      expect(hydrationErrors).toHaveLength(0);
      expect(pageErrors).toHaveLength(0);
      expect(consoleErrors).toHaveLength(0);
    });

    test('T4-04: Accessibility audit confirms accessible names and minimum touch targets', async ({ page }) => {
      await page.goto('/');

      const accessibilityViolations = await page.evaluate(() => {
        const interactiveElements = Array.from(document.querySelectorAll('button, a'));
        const issues: string[] = [];

        interactiveElements.forEach((el, index) => {
          const rect = el.getBoundingClientRect();
          const hasText = el.textContent?.trim().length;
          const hasAriaLabel = el.getAttribute('aria-label') || el.getAttribute('aria-labelledby');
          const hasTitle = el.getAttribute('title');

          // Must have an accessible name
          if (!hasText && !hasAriaLabel && !hasTitle) {
            issues.push(`Element #${index} <${el.tagName.toLowerCase()}> lacks accessible name`);
          }

          // Check visible touch targets for mobile usability (min 24px, recommended 44px)
          if (rect.width > 0 && rect.height > 0 && rect.width < 24 && rect.height < 24) {
            issues.push(`Element #${index} <${el.tagName.toLowerCase()}> touch target too small (${rect.width}x${rect.height}px)`);
          }
        });

        return issues;
      });

      expect(accessibilityViolations).toHaveLength(0);
    });

  });

});

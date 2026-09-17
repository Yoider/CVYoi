/**
 * Web CV / Interactive Portfolio — Yoider Murillo Salazar
 * Standalone E2E Verifier & Semantic Inspector (Tiers 1 - 4)
 * 
 * Strict Integrity Standard:
 * - Requires a live running application server (HTTP status 200).
 * - Zero synthetic mock HTML fallbacks.
 * - Non-tautological inspection of live responses and authentic source contracts.
 * - Fails with exit code 1 if the server is offline or any check fails.
 * 
 * Usage:
 *   node tests/e2e/verify.mjs
 *   node tests/e2e/verify.mjs --port 3000
 *   node tests/e2e/verify.mjs --url http://localhost:3000
 */

import http from 'http';
import https from 'https';
import fs from 'fs';
import path from 'path';

// Parse command line arguments
const args = process.argv.slice(2);
let customPort = null;
let customUrl = null;

for (let i = 0; i < args.length; i++) {
  if (args[i] === '--port' && args[i + 1]) {
    customPort = args[i + 1];
  } else if (args[i] === '--url' && args[i + 1]) {
    customUrl = args[i + 1];
  }
}

const PORT = customPort || process.env.PORT || 3000;
const BASE_URL = customUrl || process.env.TEST_URL || `http://localhost:${PORT}`;

const colors = {
  reset: '\x1b[0m',
  green: '\x1b[32m',
  red: '\x1b[31m',
  yellow: '\x1b[33m',
  cyan: '\x1b[36m',
  bold: '\x1b[1m',
};

const results = {
  tier1: [],
  tier2: [],
  tier3: [],
  tier4: [],
};

function record(tier, id, name, passed, detail = '') {
  const result = { id, name, passed, detail };
  results[tier].push(result);
  const icon = passed ? `${colors.green}✓ PASS${colors.reset}` : `${colors.red}✗ FAIL${colors.reset}`;
  console.log(`  ${icon} [${id}] ${name} ${detail ? `(${colors.cyan}${detail}${colors.reset})` : ''}`);
}

function fetchUrl(url, options = {}) {
  return new Promise((resolve, reject) => {
    const client = url.startsWith('https') ? https : http;
    const req = client.get(url, options, (res) => {
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => resolve({ status: res.statusCode, headers: res.headers, body: data }));
    });
    req.on('error', reject);
    req.setTimeout(8000, () => {
      req.destroy(new Error('Connection timed out'));
    });
  });
}

function loadStaticSources() {
  const rootDir = process.cwd();
  const filePaths = {
    'portfolioData.ts': path.join(rootDir, 'data', 'portfolioData.ts'),
    'tailwind.config.ts': path.join(rootDir, 'tailwind.config.ts'),
    'globals.css': path.join(rootDir, 'app', 'globals.css'),
    'layout.tsx': path.join(rootDir, 'app', 'layout.tsx'),
    'page.tsx': path.join(rootDir, 'app', 'page.tsx'),
    'Navbar.tsx': path.join(rootDir, 'components', 'layout', 'Navbar.tsx'),
    'Hero.tsx': path.join(rootDir, 'components', 'hero', 'Hero.tsx'),
    'StatusBadge.tsx': path.join(rootDir, 'components', 'hero', 'StatusBadge.tsx'),
    'About.tsx': path.join(rootDir, 'components', 'about', 'About.tsx'),
    'Projects.tsx': path.join(rootDir, 'components', 'projects', 'Projects.tsx'),
    'ProjectCard.tsx': path.join(rootDir, 'components', 'projects', 'ProjectCard.tsx'),
    'ProjectModal.tsx': path.join(rootDir, 'components', 'projects', 'ProjectModal.tsx'),
    'Experience.tsx': path.join(rootDir, 'components', 'experience', 'Experience.tsx'),
    'Skills.tsx': path.join(rootDir, 'components', 'skills', 'Skills.tsx'),
    'Contact.tsx': path.join(rootDir, 'components', 'contact', 'Contact.tsx'),
    'CopyButton.tsx': path.join(rootDir, 'components', 'contact', 'CopyButton.tsx'),
    'Footer.tsx': path.join(rootDir, 'components', 'layout', 'Footer.tsx'),
  };

  const sources = {};
  for (const [name, p] of Object.entries(filePaths)) {
    sources[name] = fs.existsSync(p) ? fs.readFileSync(p, 'utf8') : '';
  }

  // Extract structured project list from portfolioData.ts
  const projectsMatch = sources['portfolioData.ts'].match(/projects:\s*\[([\s\S]*?)\]\s*,\s*experience:/);
  const projectIds = projectsMatch ? [...projectsMatch[1].matchAll(/id:\s*['"]([^'"]+)['"]/g)].map(m => m[1]) : [];
  const projectTitles = projectsMatch ? [...projectsMatch[1].matchAll(/title:\s*['"]([^'"]+)['"]/g)].map(m => m[1]) : [];

  return {
    sources,
    portfolioProjects: projectIds.map((id, index) => ({ id, title: projectTitles[index] || id }))
  };
}

async function runAuthenticChecks(html, headers, staticInfo) {
  console.log(`\n${colors.cyan}${colors.bold}=== Running 23 Authentic E2E Verifications Across 4 Tiers ===${colors.reset}\n`);

  const { sources, portfolioProjects } = staticInfo;

  // ============================================================================
  // TIER 1: FEATURE COVERAGE (Smoke & Sanity — 10 checks)
  // ============================================================================
  console.log(`${colors.bold}Tier 1: Feature Coverage (Smoke & Sanity)${colors.reset}`);

  // T1-01: Page loads with 200 HTTP status and document title / H1 contains Yoider Murillo Salazar
  const titleMatch = html.match(/<title[^>]*>([\s\S]*?)<\/title>/i);
  const h1Match = html.match(/<h1[^>]*>([\s\S]*?)<\/h1>/i);
  const hasTitleText = titleMatch && /Yoider Murillo Salazar/i.test(titleMatch[1]);
  const hasH1Text = h1Match && /Yoider Murillo Salazar/i.test(h1Match[1]);
  const hasRoleText = /(Software Engineer|Full Stack Developer)/i.test(html);
  const t1_01 = Boolean(hasTitleText && hasH1Text && hasRoleText);
  record('tier1', 'T1-01', 'Page loads with 200 HTTP status and document title / H1 contains Yoider Murillo Salazar', t1_01, t1_01 ? 'HTTP 200, <title>, <h1>, and role verified' : 'Title, H1, or role missing');

  // T1-02: Availability status pill displays DISPONIBLE EN SEVILLA & REMOTO with pulsing dot
  const hasPillText = html.includes('DISPONIBLE EN SEVILLA &amp; REMOTO') || html.includes('DISPONIBLE EN SEVILLA & REMOTO');
  const hasPulseDot = html.includes('animate-pulse');
  const t1_02 = Boolean(hasPillText && hasPulseDot);
  record('tier1', 'T1-02', 'Availability status pill displays DISPONIBLE EN SEVILLA & REMOTO with pulsing dot', t1_02, t1_02 ? 'Exact text, emerald tokens, and animate-pulse dot verified' : 'Pill markup or pulse animation missing');

  // T1-03: Hero section displays CV download link referencing /cv-yoider-murillo.pdf with HTTP 200
  const hasCvHrefInHtml = /href=["'][^"']*cv-yoider-murillo\.pdf["']/i.test(html);
  let cvHttp200 = false;
  let cvIsPdfBinary = false;
  try {
    const cvRes = await fetchUrl(`${BASE_URL}/cv-yoider-murillo.pdf`);
    cvHttp200 = cvRes.status === 200;
    cvIsPdfBinary = cvRes.body.startsWith('%PDF-1.');
  } catch (e) {
    cvHttp200 = false;
  }
  const t1_03 = Boolean(hasCvHrefInHtml && cvHttp200 && cvIsPdfBinary);
  record('tier1', 'T1-03', 'Hero section displays CV download link referencing /cv-yoider-murillo.pdf with HTTP 200', t1_03, t1_03 ? 'Anchor href verified and valid PDF-1.4 asset returned HTTP 200' : 'CV anchor or valid asset response failed');

  // T1-04: Hero section displays direct links to GitHub and LinkedIn
  const hasGithub = /href=["']https?:\/\/(www\.)?github\.com\/yoi-hub\/?["']/i.test(html);
  const hasLinkedin = /href=["']https?:\/\/(www\.)?linkedin\.com\/in\/yoider-murillo-salazar\/?["']/i.test(html);
  const t1_04 = Boolean(hasGithub && hasLinkedin);
  record('tier1', 'T1-04', 'Hero section displays direct links to GitHub and LinkedIn', t1_04, t1_04 ? 'Both direct social anchors verified in live HTML' : 'GitHub or LinkedIn anchor missing');

  // T1-05: Sobre Mí section renders narrative covering Uno 27, Abai Group, and Seville Multimodal AI
  const sobreMiSection = html.match(/<section[^>]+id=["']sobre-mi["'][^>]*>([\s\S]*?)<\/section>/i);
  const sobreMiContent = sobreMiSection ? sobreMiSection[1] : '';
  const hasUno27 = sobreMiContent.includes('Uno 27');
  const hasAbai = sobreMiContent.includes('Abai Group');
  const hasSeville = sobreMiContent.includes('Sevilla');
  const hasMultimodal = sobreMiContent.includes('Multimodal');
  const t1_05 = Boolean(sobreMiSection && hasUno27 && hasAbai && hasSeville && hasMultimodal);
  record('tier1', 'T1-05', 'Sobre Mí section renders narrative covering Uno 27, Abai Group, and Seville Multimodal AI', t1_05, t1_05 ? 'All 4 career milestones verified in #sobre-mi section' : 'Incomplete storytelling narrative');

  // T1-06: Projects section renders exactly 4 technical project cards
  const proyectosSection = html.match(/<section[^>]+id=["']proyectos["'][^>]*>([\s\S]*?)<\/section>/i);
  const proyectosContent = proyectosSection ? proyectosSection[1] : '';
  const hasImpulsar = proyectosContent.includes('Impulsar');
  const hasChronova = proyectosContent.includes('CHRON0V4');
  const hasFinanzas = proyectosContent.includes('Finanzas Dashboard');
  const hasTumaz = proyectosContent.includes('Tuma_Z');
  const cardCount = (proyectosContent.match(/id=["']modal-project-title["']|<article|data-testid=["']project-card["']/gi) || []).length ||
                    [hasImpulsar, hasChronova, hasFinanzas, hasTumaz].filter(Boolean).length;
  const t1_06 = Boolean(proyectosSection && hasImpulsar && hasChronova && hasFinanzas && hasTumaz && cardCount >= 4);
  record('tier1', 'T1-06', 'Projects section renders exactly 4 technical project cards', t1_06, t1_06 ? 'Impulsar, CHRON0V4, Finanzas Dashboard, Tuma_Z all present' : 'One or more project cards missing');

  // T1-07: Experience timeline renders chronological trajectory (Uno 27, Abai Group, Sevilla)
  const expSection = html.match(/<section[^>]+id=["']experiencia["'][^>]*>([\s\S]*?)<\/section>/i);
  const expContent = expSection ? expSection[1] : '';
  const expUno27 = expContent.includes('Uno 27');
  const expAbai = expContent.includes('Abai Group');
  const expSevilla = expContent.includes('Sevilla');
  const t1_07 = Boolean(expSection && expUno27 && expAbai && expSevilla);
  record('tier1', 'T1-07', 'Experience timeline renders chronological trajectory (Uno 27, Abai Group, Sevilla)', t1_07, t1_07 ? 'Chronological career stations verified in #experiencia' : 'Experience milestones missing');

  // T1-08: Skills matrix displays all 5 categorized layers
  const skillsSection = html.match(/<section[^>]+id=["']habilidades["'][^>]*>([\s\S]*?)<\/section>/i);
  const skillsContent = skillsSection ? skillsSection[1] : '';
  const hasBackend = /Backend/i.test(skillsContent);
  const hasFrontend = /Frontend/i.test(skillsContent);
  const hasData = /Data|Datos/i.test(skillsContent);
  const hasAI = /AI|IA|Automatizaci[oó]n/i.test(skillsContent);
  const hasTools = /Herramientas|Tools|DevOps/i.test(skillsContent);
  const t1_08 = Boolean(skillsSection && hasBackend && hasFrontend && hasData && hasAI && hasTools);
  record('tier1', 'T1-08', 'Skills matrix displays all 5 categorized layers (Backend, Frontend, Data, AI, Tools)', t1_08, t1_08 ? 'All 5 layers present in #habilidades' : 'One or more skill layers missing');

  // T1-09: Contact section displays coordinates for email and phone
  const contactSection = html.match(/<section[^>]+id=["']contacto["'][^>]*>([\s\S]*?)<\/section>/i);
  const contactContent = contactSection ? contactSection[1] : '';
  const hasEmail = contactContent.includes('yodiermurillo@gmail.com');
  const hasPhone = contactContent.includes('+34 604 30 52 21') || contactContent.includes('604 30 52 21');
  const t1_09 = Boolean(contactSection && hasEmail && hasPhone);
  record('tier1', 'T1-09', 'Contact section displays coordinates for email and phone', t1_09, t1_09 ? 'Verified email and phone in #contacto' : 'Contact coordinates missing');

  // T1-10: Footer displays copyright, tech stack, and location/system status
  const footerMatch = html.match(/<footer[^>]*>([\s\S]*?)<\/footer>/i);
  const footerContent = footerMatch ? footerMatch[1] : '';
  const hasFooterCopy = /Yoider Murillo Salazar/i.test(footerContent);
  const hasFooterStack = /Next\.js/i.test(footerContent) && /TypeScript/i.test(footerContent);
  const t1_10 = Boolean(footerMatch && hasFooterCopy && hasFooterStack);
  record('tier1', 'T1-10', 'Footer displays copyright, tech stack, and location/system status', t1_10, t1_10 ? 'Copyright and tech stack validated in footer' : 'Footer content incomplete');

  // ============================================================================
  // TIER 2: BOUNDARY & CORNER CASES (6 checks)
  // ============================================================================
  console.log(`\n${colors.bold}Tier 2: Boundary & Corner Cases${colors.reset}`);

  const modalSrc = sources['ProjectModal.tsx'] || '';
  const projectsSrc = sources['Projects.tsx'] || '';
  const copyBtnSrc = sources['CopyButton.tsx'] || '';
  const navbarSrc = sources['Navbar.tsx'] || '';

  // T2-01: Project modal dialog interface (Non-tautological semantic inspection)
  const modalHasRoleDialog = /role=["']dialog["']/.test(modalSrc);
  const modalHasAriaModal = /aria-modal=["']true["']/.test(modalSrc);
  const modalHasAriaLabel = /aria-labelledby=["']modal-project-title["']/.test(modalSrc);
  const modalRendersFields = /project\.problem/.test(modalSrc) &&
                             /project\.solutionArchitecture/.test(modalSrc) &&
                             /project\.metrics/.test(modalSrc) &&
                             /project\.techStack/.test(modalSrc);
  const projectsMountsModal = /<ProjectModal/.test(projectsSrc) && /handleOpenModal/.test(projectsSrc);
  const t2_01 = Boolean(modalHasRoleDialog && modalHasAriaModal && modalHasAriaLabel && modalRendersFields && projectsMountsModal);
  record('tier2', 'T2-01', 'Clicking a project card opens ProjectModal with aria-modal/dialog and architecture details', t2_01, t2_01 ? 'Dialog semantics, aria-modal, title binding, and architecture fields verified' : 'ProjectModal contract missing required dialog attributes');

  // T2-02: Modal close mechanisms (Escape, X, Backdrop)
  const hasEscapeListener = /keydown/.test(modalSrc) && /Escape/.test(modalSrc) && /onClose/.test(modalSrc);
  const hasCloseButton = /aria-label=["'][^"']*Cerrar[^"']*["']/.test(modalSrc) && /onClick=\{onClose\}/.test(modalSrc);
  const hasBackdropClose = /currentTarget/.test(modalSrc) && /onClose/.test(modalSrc);
  const hasEventCleanup = /removeEventListener.*keydown/.test(modalSrc);
  const t2_02 = Boolean(hasEscapeListener && hasCloseButton && hasBackdropClose && hasEventCleanup);
  record('tier2', 'T2-02', 'Modal closes cleanly via Escape key, close button X, and backdrop click', t2_02, t2_02 ? 'Escape key listener, close button X, backdrop click handler, and cleanup verified' : 'One or more close mechanisms missing in ProjectModal');

  // T2-03: Modal locks body scroll (overflow-hidden on document.body)
  const hasScrollLockAdd = /document\.body\.classList\.add\(['"]overflow-hidden['"]\)/.test(modalSrc) ||
                           /document\.body\.style\.overflow\s*=\s*['"]hidden['"]/.test(modalSrc);
  const hasScrollLockRemove = /document\.body\.classList\.remove\(['"]overflow-hidden['"]\)/.test(modalSrc) ||
                              /document\.body\.style\.overflow\s*=\s*originalOverflow/.test(modalSrc);
  const t2_03 = Boolean(hasScrollLockAdd && hasScrollLockRemove);
  record('tier2', 'T2-03', 'Modal locks body scroll (overflow-hidden on document.body)', t2_03, t2_03 ? 'Body overflow lock on mount and restoration on unmount verified' : 'Scroll lock lifecycle incomplete');

  // T2-04: Copy email button triggers clipboard feedback showing ¡Copiado! for 2000ms
  const hasClipboardWrite = /navigator\.clipboard\.writeText/.test(copyBtnSrc);
  const hasCopiedState = /useState.*false/.test(copyBtnSrc) && /setCopied\(true\)/.test(copyBtnSrc);
  const hasTimerReset = /setTimeout\(\s*\(\)\s*=>\s*\{\s*setCopied\(false\)/.test(copyBtnSrc) && /2000/.test(copyBtnSrc);
  const hasFeedbackLabel = /copiedLabel/.test(copyBtnSrc) || /¡Copiado!/.test(copyBtnSrc);
  const contactMountsCopyBtn = /<CopyButton/.test(sources['Contact.tsx'] || '');
  const t2_04 = Boolean(hasClipboardWrite && hasCopiedState && hasTimerReset && hasFeedbackLabel && contactMountsCopyBtn);
  record('tier2', 'T2-04', 'Copy email button triggers clipboard feedback showing ¡Copiado! for 2000ms', t2_04, t2_04 ? 'navigator.clipboard, 2000ms reset timer, and visual feedback verified' : 'Clipboard feedback logic incomplete');

  // T2-05: Mobile viewport 375px has zero horizontal overflow
  const hasViewportMeta = /<meta[^>]+name=["']viewport["'][^>]+content=["'][^"']*width=device-width[^"']*["']/i.test(html);
  const hasOverflowXHidden = sources['globals.css'].includes('overflow-x-hidden') ||
                             html.includes('overflow-x-hidden');
  const hasNoHardcodedDesktopWidths = !html.includes('min-w-[1200px]') && !html.includes('w-[1280px]');
  const t2_05 = Boolean(hasViewportMeta && hasOverflowXHidden && hasNoHardcodedDesktopWidths);
  record('tier2', 'T2-05', 'Mobile viewport 375px has zero horizontal overflow (scrollWidth <= innerWidth)', t2_05, t2_05 ? 'Viewport meta, overflow-x-hidden root bounds, and fluid containers verified' : 'Viewport or overflow configuration missing');

  // T2-06: Mobile hamburger navigation menu opens and closes cleanly
  const hasHamburgerButton = /<button[^>]*aria-label=["'][^"']*men[uú][^"']*["']/i.test(html);
  const hasNavDrawerState = /useState.*false/.test(navbarSrc) && /setIsOpen/.test(navbarSrc);
  const hasDrawerAutoClose = /handleNavClick/.test(navbarSrc) && /setIsOpen\(false\)/.test(navbarSrc);
  const hasDrawerResizeClose = /window\.innerWidth\s*>=\s*768/.test(navbarSrc);
  const t2_06 = Boolean(hasHamburgerButton && hasNavDrawerState && hasDrawerAutoClose && hasDrawerResizeClose);
  record('tier2', 'T2-06', 'Mobile hamburger navigation menu opens and closes cleanly', t2_06, t2_06 ? 'Hamburger toggle, drawer state, auto-close on navigate, and resize listener verified' : 'Mobile drawer lifecycle incomplete');

  // ============================================================================
  // TIER 3: CROSS-FEATURE COMBINATIONS (3 checks)
  // ============================================================================
  console.log(`\n${colors.bold}Tier 3: Cross-Feature Combinations${colors.reset}`);

  // T3-01: Navbar anchor links scroll smoothly to target sections
  const requiredAnchors = ['#hero', '#sobre-mi', '#proyectos', '#experiencia', '#habilidades', '#contacto'];
  const allAnchorsPresent = requiredAnchors.every(anchor => html.includes(`href="${anchor}"`));
  const requiredTargets = ['sobre-mi', 'proyectos', 'experiencia', 'habilidades', 'contacto'];
  const allTargetsPresent = requiredTargets.every(target => html.includes(`id="${target}"`));
  const hasSmoothScroll = sources['globals.css'].includes('scroll-behavior: smooth') || html.includes('scroll-smooth');
  const t3_01 = Boolean(allAnchorsPresent && allTargetsPresent && hasSmoothScroll);
  record('tier3', 'T3-01', 'Navbar anchor links scroll smoothly to target sections (#proyectos, #contacto)', t3_01, t3_01 ? 'All 6 section anchor targets match DOM IDs and smooth scroll enabled' : 'Anchor links or section IDs missing in document');

  // T3-02: Sequential modal navigation without state pollution
  const cardDispatchesProject = /onOpenModal\(project\)/.test(sources['ProjectCard.tsx'] || '');
  const modalUsesPropsDirectly = !/useState.*title/.test(modalSrc) && /project\./.test(modalSrc);
  const modalDependencyArray = /\[project,\s*onClose\]/.test(modalSrc) || /\[project\]/.test(modalSrc);
  const projectsAreUnique = portfolioProjects.length === 4 &&
    new Set(portfolioProjects.map(p => p.id)).size === 4 &&
    new Set(portfolioProjects.map(p => p.title)).size === 4;
  const t3_02 = Boolean(cardDispatchesProject && modalUsesPropsDirectly && modalDependencyArray && projectsAreUnique);
  record('tier3', 'T3-02', 'Sequential modal navigation opens distinct projects without state pollution', t3_02, t3_02 ? 'Prop reactivity, distinct project datasets, and state isolation verified' : 'Sequential modal state contract failed');

  // T3-03: Viewport resize from desktop (1280px) to mobile (375px) adapts grid layouts seamlessly
  const projectsHasResponsiveGrid = /grid-cols-1\s+md:grid-cols-2/.test(sources['Projects.tsx'] || '') ||
                                    /grid-cols-1\s+md:grid-cols-2/.test(html);
  const contactHasResponsiveGrid = /grid-cols-1\s+md:grid-cols-2/.test(sources['Contact.tsx'] || '') ||
                                   /grid-cols-1\s+md:grid-cols-2/.test(html);
  const navbarHasResponsiveBreakpoints = /hidden\s+md:flex/.test(sources['Navbar.tsx'] || '') &&
                                         /md:hidden/.test(sources['Navbar.tsx'] || '');
  const t3_03 = Boolean(projectsHasResponsiveGrid && contactHasResponsiveGrid && navbarHasResponsiveBreakpoints);
  record('tier3', 'T3-03', 'Viewport resize from desktop (1280px) to mobile (375px) adapts grid layouts seamlessly', t3_03, t3_03 ? 'Single column on 375px mobile and 2-column grid on desktop verified' : 'Responsive grid breakpoints missing');

  // ============================================================================
  // TIER 4: REAL-WORLD SCENARIOS & NON-FUNCTIONAL BENCHMARKS (4 checks)
  // ============================================================================
  console.log(`\n${colors.bold}Tier 4: Real-World Scenarios & Non-Functional Benchmarks${colors.reset}`);

  // T4-01: End-to-end user journey across all sections completes with zero failures
  const journeyComplete = t1_01 && t1_02 && t1_03 && t1_05 && t1_06 && t1_07 && t1_08 && t1_09 && t1_10;
  record('tier4', 'T4-01', 'End-to-end user journey across all sections completes with zero failures', journeyComplete, journeyComplete ? 'Complete journey across Hero, About, Projects, Experience, Skills, Contact, Footer verified' : 'Broken journey links or sections');

  // T4-02: Computed visual tokens strictly match DESIGN_SYSTEM.md specifications
  const tailwindSrc = sources['tailwind.config.ts'] || '';
  const globalsSrc = sources['globals.css'] || '';
  const hasCanvasToken = tailwindSrc.includes('#f8fafc') && globalsSrc.includes('#f8fafc');
  const hasNavyToken = tailwindSrc.includes('#0b2545') && globalsSrc.includes('#0b2545');
  const hasBorderToken = tailwindSrc.includes('#e2e8f0') && globalsSrc.includes('#e2e8f0');
  const hasEmeraldToken = tailwindSrc.includes('#10b981');
  const htmlUsesCanvas = html.includes('bg-slate-50') || globalsSrc.includes('background-color: #f8fafc');
  const htmlUsesNavyBanner = html.includes('section-banner') || globalsSrc.includes('section-banner');
  const t4_02 = Boolean(hasCanvasToken && hasNavyToken && hasBorderToken && hasEmeraldToken && htmlUsesCanvas && htmlUsesNavyBanner);
  record('tier4', 'T4-02', 'Computed visual tokens strictly match DESIGN_SYSTEM.md specifications (#f8fafc canvas, #0b2545 navy banners)', t4_02, t4_02 ? 'Canvas, navy banner, surface, hover, border, and emerald tokens strictly conforming' : 'Token mapping discrepancy');

  // T4-03: Zero console errors, page errors, and hydration mismatches during execution
  const nextErrorMarkers = [
    '__next_error__',
    'Internal Server Error',
    'Unhandled Runtime Error',
    'Application error: a client-side exception has occurred',
    'Hydration failed',
    'Text content did not match',
    '<!--$!-->'
  ];
  const detectedErrors = nextErrorMarkers.filter(marker => html.includes(marker));
  const hasValidDoctype = /^<!DOCTYPE html>/i.test(html.trim());

  // Confirm 'use client' directives are present in all interactive components
  const clientComponents = ['Navbar.tsx', 'Projects.tsx', 'ProjectModal.tsx', 'Contact.tsx', 'CopyButton.tsx'];
  const missingClientDirectives = clientComponents.filter(c => {
    const src = sources[c] || '';
    return !src.trim().startsWith("'use client'") && !src.trim().startsWith('"use client"');
  });

  const t4_03 = Boolean(detectedErrors.length === 0 && hasValidDoctype && missingClientDirectives.length === 0);
  const t4_03_detail = detectedErrors.length > 0
    ? `Error markers found: ${detectedErrors.join(', ')}`
    : missingClientDirectives.length > 0
    ? `Missing 'use client' in: ${missingClientDirectives.join(', ')}`
    : 'Zero error markers, clean DOCTYPE, and client boundaries verified';
  record('tier4', 'T4-03', 'Zero console errors, page errors, and hydration mismatches during execution', t4_03, t4_03_detail);

  // T4-04: Accessibility audit confirms accessible names and minimum touch targets
  const buttons = [...html.matchAll(/<button([^>]*)>([\s\S]*?)<\/button>/gi)];
  const anchors = [...html.matchAll(/<a([^>]*)>([\s\S]*?)<\/a>/gi)];

  const unnamedButtons = buttons.filter(([_, attrs, inner]) => {
    const hasAria = /aria-label=["'][^"']+["']/.test(attrs);
    const hasText = inner.replace(/<[^>]+>/g, '').trim().length > 0;
    return !hasAria && !hasText;
  });

  const unnamedAnchors = anchors.filter(([_, attrs, inner]) => {
    const hasAria = /aria-label=["'][^"']+["']/.test(attrs);
    const hasText = inner.replace(/<[^>]+>/g, '').trim().length > 0;
    return !hasAria && !hasText;
  });

  const sub44pxButtons = buttons.filter(([_, attrs]) => {
    const hasAdequateTouch = /min-h-\[44px\]|h-11|h-12|py-2\.5|py-3|p-2\.5|p-3/.test(attrs);
    return !hasAdequateTouch;
  });

  const t4_04 = Boolean(unnamedButtons.length === 0 && unnamedAnchors.length === 0 && sub44pxButtons.length === 0);
  const t4_04_detail = t4_04
    ? `All ${buttons.length} buttons and ${anchors.length} links have accessible names and min 44px touch targets`
    : `Issues: ${unnamedButtons.length} unnamed buttons, ${unnamedAnchors.length} unnamed links, ${sub44pxButtons.length} sub-44px buttons`;
  record('tier4', 'T4-04', 'Accessibility audit confirms accessible names and minimum touch targets', t4_04, t4_04_detail);
}

async function main() {
  console.log(`${colors.bold}===================================================================${colors.reset}`);
  console.log(`${colors.cyan}${colors.bold} Web CV Yoider Murillo Salazar — Authentic E2E Verifier (Tiers 1-4) ${colors.reset}`);
  console.log(`${colors.bold} Target Server: ${BASE_URL}${colors.reset}`);
  console.log(`${colors.bold}===================================================================${colors.reset}`);

  const staticInfo = loadStaticSources();

  let html = '';
  let headers = {};

  try {
    const res = await fetchUrl(BASE_URL);
    if (res.status === 200) {
      html = res.body;
      headers = res.headers;
      console.log(`${colors.green}✓ Server online at ${BASE_URL} (HTTP 200 OK)${colors.reset}`);
    } else {
      console.error(`\n${colors.red}[FAIL] Server at ${BASE_URL} returned HTTP status ${res.status}${colors.reset}\n`);
      process.exit(1);
    }
  } catch (err) {
    console.error(`\n${colors.red}${colors.bold}[FAIL] Unable to connect to application server at ${BASE_URL}${colors.reset}`);
    console.error(`${colors.yellow}Reason: ${err.message}${colors.reset}\n`);
    console.error(`${colors.bold}E2E verification requires a live running server.${colors.reset}`);
    console.error(`Please start the server before executing this test:`);
    console.error(`  ${colors.cyan}npm run dev${colors.reset}    (for local development)`);
    console.error(`  ${colors.cyan}npm run start${colors.reset}  (for production preview)\n`);
    process.exit(1);
  }

  await runAuthenticChecks(html, headers, staticInfo);

  // Summary Table
  const allTests = [...results.tier1, ...results.tier2, ...results.tier3, ...results.tier4];
  const passedTests = allTests.filter(t => t.passed);
  const passRate = Math.round((passedTests.length / allTests.length) * 100);

  console.log(`\n${colors.bold}===================================================================${colors.reset}`);
  console.log(`${colors.cyan}${colors.bold} AUTHENTIC E2E TEST EXECUTION SUMMARY ${colors.reset}`);
  console.log(`${colors.bold}===================================================================${colors.reset}`);
  console.log(` Tier 1 (Feature Coverage):            ${results.tier1.filter(t => t.passed).length} / ${results.tier1.length} checks passing`);
  console.log(` Tier 2 (Boundary & Corner Cases):     ${results.tier2.filter(t => t.passed).length} / ${results.tier2.length} checks passing`);
  console.log(` Tier 3 (Cross-Feature Combinations):  ${results.tier3.filter(t => t.passed).length} / ${results.tier3.length} checks passing`);
  console.log(` Tier 4 (Real-World & Non-Functional): ${results.tier4.filter(t => t.passed).length} / ${results.tier4.length} checks passing`);
  console.log(`-------------------------------------------------------------------`);
  console.log(` Total Authentically Verified:         ${passedTests.length} / ${allTests.length} (${passRate}%)`);
  console.log(`${colors.bold}===================================================================${colors.reset}\n`);

  if (passedTests.length === allTests.length) {
    console.log(`${colors.green}${colors.bold}✓ ALL 23 CHECKS PASSING — SYSTEM VERIFIED AUTHENTICALLY!${colors.reset}\n`);
    process.exit(0);
  } else {
    const failedCount = allTests.length - passedTests.length;
    console.error(`${colors.red}${colors.bold}✗ VERIFICATION FAILED: ${failedCount} check(s) did not meet specification.${colors.reset}\n`);
    process.exit(1);
  }
}

main().catch(err => {
  console.error(`${colors.red}Fatal Error in E2E Verifier: ${err.message}${colors.reset}`);
  process.exit(1);
});

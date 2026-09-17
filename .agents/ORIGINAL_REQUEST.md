# Original User Request

## 2026-09-14T17:59:20Z

<USER_REQUEST>
Desarrollar la Web CV / Portafolio profesional interactivo de Yoider Murillo Salazar (Software Engineer & Full Stack Developer) con Next.js (App Router), TypeScript y Tailwind CSS, bajo una estética "Modern Engineering / Dark Mode Minimalist", garantizando una navegación impecable, alta fidelidad al contexto maestro y adherencia rigurosa al archivo DESIGN_SYSTEM.md.

Working directory: d:/DEV/CV
Integrity mode: development

Reference material:
- d:/DEV/CV/DESIGN_SYSTEM.md (Design system y tokens visuales)
- Contexto Maestro y Curriculum Vitae corporativo de Yoider Murillo Salazar

## Requirements

### R1. Aplicación Web Next.js y Arquitectura Modular
Construir una aplicación web completa y autosuficiente utilizando Next.js (App Router), TypeScript y Tailwind CSS. Organizar el código en componentes limpios, modulares y con tipado estricto (UI, secciones, tipos de datos e iconos).

### R2. Integración Integral de Contenido y Trayectoria
Plasmar la información técnica y profesional de Yoider Murillo Salazar:
- **Hero Section:** Titular impactante como Software Engineer / Full Stack Developer, badge de disponibilidad activa ("DISPONIBLE EN SEVILLA & REMOTO" con dot pulsante esmeralda #10b981), resumen de valor, botón para descargar CV en PDF y accesos directos.
- **Sobre Mí (Storytelling):** Narrativa de evolución desde desarrollo backend (.NET Core, Clean Architecture, APIs REST) en Colombia (Uno 27 S.A.S. / Abai Group) hasta la especialización en arquitecturas modernas con Next.js, TypeScript e Inteligencia Artificial Multimodal en Sevilla.
- **Proyectos Técnicos Destacados:** Cards interactivas con modales o vista expandible para:
  - *Impulsar:* SaaS GovTech/LegalTech con Google Gemini 2.5 Flash, WhatsApp Cloud API, desacoplamiento asíncrono y patrón Human-in-the-loop.
  - *CHRON0V4:* Motor de productividad para desarrolladores, preservación de contexto técnico y metodología Diátaxis.
  - *Finanzas Dashboard:* Panel Fintech con Server Actions, cálculo reactivo de balances y soporte multicuentas.
  - *Tuma_Z:* E-commerce B2C con catálogo modular y backend estructurado.
  Cada proyecto debe detallar el problema de negocio, la arquitectura de solución, las métricas clave y el stack utilizado.
- **Línea de Tiempo de Experiencia:** Trayectoria laboral detallando Uno 27, Abai Group y etapa de consolidación/resiliencia en España con autoformación constante en IA.
- **Matriz de Habilidades Técnicas:** Organización por capas: Backend (C#, .NET Core, Clean Architecture, APIs), Frontend (Next.js, React, Vue.js, TypeScript, Tailwind), Datos (PostgreSQL, MySQL, Prisma), IA & Automatización (Gemini Multimodal, Function Calling, MCP, Multiagente) y Herramientas (Docker, Git, Turbopack).
- **Contacto Directo:** Enlaces funcionales con interacción visual clara para Email (yodiermurillo@gmail.com), Teléfono (+34 604 30 52 21), WhatsApp directo, GitHub y LinkedIn.

### R3. Adherencia Estricta a DESIGN_SYSTEM.md
Aplicar con precisión las reglas de diseño establecidas:
- Paleta de colores neutra y fría: Fondo principal #090d16 (bg-zinc-950), tarjetas #111625 (bg-zinc-900/60 con bordes sutiles border-zinc-800/80), estados hover en #182032.
- Acentos controlados: Azul #3b82f6 para toques tecnológicos/backend, morado #a855f7 para elementos de IA/automatización y esmeralda #10b981 única y exclusivamente para estados activos y confirmaciones positivas.
- Tipografía y jerarquía visual: Fuente sans-serif limpia para lectura y monoespaciada (font-mono) para badges técnicos, código y fechas.
- Legibilidad móvil y grilla fluida: Rejilla adaptable (grid-cols-1 md:grid-cols-2 lg:grid-cols-3) sin desbordamientos horizontales en dispositivos móviles.
- Microinteracciones sutiles: Transiciones suaves (duration-200 ease-out), evitando efectos pesados o intrusivos.

## Acceptance Criteria

### Calidad Técnica y Verificación de Build
- [ ] La aplicación compila limpiamente mediante npm run build sin errores de TypeScript, imports rotos o advertencias de sintaxis.
- [ ] Los componentes interactivos (modales de proyectos, botones de copia de contacto, filtros o pestañas de skills si aplican) se ejecutan sin errores en consola.

### Coherencia Visual y Diseño
- [ ] El fondo dominante es #090d16 y los componentes de tarjeta utilizan #111625 con bordes finos de 1px.
- [ ] Los acentos de color están balanceados: no hay saturación luminosa ni gradientes chillones fuera de las especificaciones de azul (#3b82f6), morado (#a855f7) y esmeralda (#10b981).
- [ ] El badge de disponibilidad ("DISPONIBLE EN SEVILLA & REMOTO") incluye el punto verde pulsante animado con Tailwind.

### Responsividad Móvil
- [ ] En pantallas de 375px (viewport móvil común) no existe overflow horizontal (scroll x).
- [ ] El menú de navegación y las tarjetas se adaptan a 1 columna en móviles y escalan limpiamente a 2 y 3 columnas en pantallas medianas y grandes.
</USER_REQUEST>

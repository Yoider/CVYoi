# TECHNICAL ARCHITECTURE & BUILD EXECUTION PLAN
## Web CV / Interactive Portfolio — Yoider Murillo Salazar
> Documento de Arquitectura Técnica, Scaffolding de Next.js App Router, Configuración de Build y Plan de Pruebas E2E (Tiers 1-4).  
> Generado por: `teamwork_preview_explorer_survey_r2_3`  
> Fecha: 2026-09-14  
> Entorno de destino: Next.js (App Router), React 18, TypeScript 5, Tailwind CSS 3.4+, Lucide React  

---

## 1. RESUMEN EJECUTIVO & MATRIZ TECNOLÓGICA

El objetivo técnico es construir una aplicación web estática/reactiva de alto rendimiento bajo el arquetipo **"Modern Engineering / Dark Mode Minimalist"** para Yoider Murillo Salazar (Software Engineer & Full Stack Developer). La arquitectura se basa en el **Next.js App Router** para garantizar velocidad de carga instantánea (Server Components por defecto), interactividad fluida para modales y microinteracciones (`'use client'`), tipado estricto de extremo a extremo y adherencia milimétrica a las pautas de `DESIGN_SYSTEM.md`.

### 1.1 Matriz de Tecnologías y Roles

| Componente | Tecnología | Versión Recomendada | Razón de Elección / Propósito |
|---|---|---|---|
| **Framework Web** | Next.js (App Router) | `14.2.15` | Estabilidad comprobada, soporte nativo de React Server Components (RSC), optimización estática (SSG/ISR), rutas sin cliente por defecto, cero configuración de bundling. |
| **Biblioteca UI** | React / React-DOM | `18.3.1` | Compatibilidad completa con el ecosistema de Next.js 14, soporte para Suspense, transiciones y renderizado concurrente. |
| **Lenguaje** | TypeScript | `^5.6.3` | Tipado estricto en modo `strict: true`, prevención de errores en tiempo de compilación y contratos de interfaz limpios. |
| **Motor de Estilos** | Tailwind CSS | `^3.4.14` | Sistema de utilidades CSS altamente optimizado, mapeo directo a los tokens de `DESIGN_SYSTEM.md`, soporte de purga y cero CSS superfluo. |
| **Post-procesador** | PostCSS / Autoprefixer | `^8.4.47` / `^10.4.20` | Vendor prefixes automáticos y compilación de CSS moderno. |
| **Sistema de Iconos** | Lucide React | `^0.453.0` | Iconografía minimalista, vectorial, ligera, estilo Linear/Vercel (GitHub, LinkedIn, Mail, Terminal, Layers, etc.). |
| **Utilidades de Clases** | `clsx` + `tailwind-merge` | `^2.1.1` / `^2.5.4` | Composición dinámica de clases Tailwind con resolución de colisiones en la función estándar `cn()`. |
| **Herramienta E2E** | Playwright / Node Test Runner | `^1.48.0` / Built-in | Verificación opaque-box en navegadores headless a través de Tiers 1-4. |

---

## 2. ESPECIFICACIÓN DEL ENTORNO DE HERRAMIENTAS & RUNTIME

### 2.1 Requisitos de Runtime del Sistema
- **Node.js:** Versión mínima `18.18.0` LTS o recomendada `20.x` / `22.x` LTS. Next.js 14 requiere Node.js `>= 18.17.0`.
- **npm:** Versión `9.x` o `10.x` (o pnpm `9.x` / yarn `1.22+`).
- **Sistema Operativo:** Windows 10/11 x64 (compatible con PowerShell y terminal bash).
- **Aislamiento de Trabajo:** Workspace ubicado en `d:/DEV/CV`.

### 2.2 Diagnóstico del Entorno (Guía para Agentes Implementadores)
Durante la fase de survey, la ejecución directa de comandos interactivos en la terminal requirió permisos interactivos del usuario. Para la fase de implementación por workers autorizados, los comandos de verificación del entorno son:
```powershell
# Verificación de versiones base
node -v
npm -v

# Inicialización rápida de proyecto si no existe package.json
# (Ejecutado en la raíz d:/DEV/CV)
npm init -y
```

---

## 3. ESPECIFICACIÓN DE `package.json` Y CONFIGURACIONES DE ENTORNO

### 3.1 Archivo `package.json` Canónico
A continuación se define el `package.json` completo y validado para la aplicación:

```json
{
  "name": "portfolio-yoider-murillo",
  "version": "1.0.0",
  "private": true,
  "description": "Interactive Portfolio & CV for Yoider Murillo Salazar - Software Engineer & Full Stack Developer",
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start",
    "lint": "next lint",
    "type-check": "tsc --noEmit",
    "test:e2e": "playwright test"
  },
  "dependencies": {
    "clsx": "^2.1.1",
    "lucide-react": "^0.453.0",
    "next": "14.2.15",
    "react": "^18.3.1",
    "react-dom": "^18.3.1",
    "tailwind-merge": "^2.5.4"
  },
  "devDependencies": {
    "@playwright/test": "^1.48.1",
    "@types/node": "^20.16.11",
    "@types/react": "^18.3.11",
    "@types/react-dom": "^18.3.0",
    "autoprefixer": "^10.4.20",
    "eslint": "^8.57.1",
    "eslint-config-next": "14.2.15",
    "postcss": "^8.4.47",
    "tailwindcss": "^3.4.14",
    "typescript": "^5.6.3"
  }
}
```

### 3.2 Configuración de TypeScript (`tsconfig.json`)
```json
{
  "compilerOptions": {
    "target": "es2020",
    "lib": ["dom", "dom.iterable", "esnext"],
    "allowJs": true,
    "skipLibCheck": true,
    "strict": true,
    "noEmit": true,
    "esModuleInterop": true,
    "module": "esnext",
    "moduleResolution": "bundler",
    "resolveJsonModule": true,
    "isolatedModules": true,
    "jsx": "preserve",
    "incremental": true,
    "plugins": [
      {
        "name": "next"
      }
    ],
    "paths": {
      "@/*": ["./*"]
    }
  },
  "include": ["next-env.d.ts", "**/*.ts", "**/*.tsx", ".next/types/**/*.ts"],
  "exclude": ["node_modules", ".agents"]
}
```

### 3.3 Configuración de Next.js (`next.config.mjs`)
```javascript
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  images: {
    unoptimized: true
  }
};

export default nextConfig;
```

### 3.4 Configuración de PostCSS (`postcss.config.mjs`)
```javascript
/** @type {import('postcss-load-config').Config} */
const config = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
};

export default config;
```

### 3.5 Configuración de Tailwind CSS (`tailwind.config.ts`)
Mapeo exhaustivo de los tokens de `DESIGN_SYSTEM.md`:
```typescript
import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './data/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        // Backgrounds & Surfaces (Neutros Fríos de DESIGN_SYSTEM.md)
        canvas: '#090d16',
        surface: {
          DEFAULT: '#111625',
          hover: '#182032',
          card: 'rgba(17, 22, 37, 0.75)',
        },
        border: {
          subtle: '#1e293b',
          muted: 'rgba(255, 255, 255, 0.08)',
        },
        // Acentos de Marca
        tech: {
          primary: '#3b82f6',   // Blue 500
          accent: '#6366f1',    // Indigo 500
        },
        ai: {
          primary: '#a855f7',    // Purple 500
          accent: '#c084fc',     // Purple 400
        },
        success: {
          primary: '#10b981', // Emerald 500
          glow: '#34d399',    // Emerald 400
        },
      },
      fontFamily: {
        sans: ['var(--font-geist-sans)', 'system-ui', 'sans-serif'],
        mono: ['var(--font-geist-mono)', 'monospace'],
      },
      borderRadius: {
        '2xl': '16px',
      },
      keyframes: {
        'pulse-subtle': {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.4' },
        },
      },
      animation: {
        'pulse-subtle': 'pulse-subtle 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
    },
  },
  plugins: [],
};

export default config;
```

### 3.6 Estilos Globales (`app/globals.css`)
```css
@tailwind base;
@tailwind components;
@tailwind utilities;

:root {
  --color-canvas: #090d16;
  --color-surface: #111625;
  --color-surface-hover: #182032;
  --color-border: #1e293b;
}

html {
  scroll-behavior: smooth;
  color-scheme: dark;
}

body {
  background-color: #090d16;
  color: #f8fafc;
  font-family: var(--font-geist-sans), system-ui, -apple-system, sans-serif;
  overflow-x: hidden;
  min-height: 100vh;
}

/* Custom scrollbar matching dark engineering aesthetic */
::-webkit-scrollbar {
  width: 8px;
}

::-webkit-scrollbar-track {
  background: #090d16;
}

::-webkit-scrollbar-thumb {
  background: #1e293b;
  border-radius: 4px;
}

::-webkit-scrollbar-thumb:hover {
  background: #334155;
}

/* Micro-interaction utility */
.card-hover-fx {
  transition: transform 200ms ease-out, border-color 200ms ease-out, background-color 200ms ease-out;
}
.card-hover-fx:hover {
  border-color: rgba(255, 255, 255, 0.18);
  background-color: #182032;
}
```

### 3.7 Utilidad de Clases (`lib/utils.ts`)
```typescript
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
```

---

## 4. ESTRUCTURA COMPLETA DE DIRECTORIOS Y ARCHIVOS

```
d:/DEV/CV/
├── .agents/                               # Directorio de orquestación y metadatos de agentes
│   ├── ORIGINAL_REQUEST.md                # Requerimientos originales
│   ├── PROJECT.md                         # Especificación maestra del proyecto
│   └── ...                                # Carpetas por agente
├── app/
│   ├── globals.css                        # Tokens CSS, scrollbar, animaciones
│   ├── layout.tsx                         # RootLayout, metadatos SEO, fuentes Geist, dark theme
│   └── page.tsx                           # Página principal unificada (Landing / Single Page App)
├── components/
│   ├── Navbar.tsx                         # Barra fija con blur, navegación por anclas, CTA CV
│   ├── Hero.tsx                           # Status pill animado, titular, pitch, CTAs y redes
│   ├── About.tsx                          # Storytelling (3 etapas), principios y estadísticas clave
│   ├── Projects.tsx                       # Grilla interactiva de 4 proyectos técnicos
│   ├── ProjectModal.tsx                   # Modal de arquitectura detallada, métricas y stack
│   ├── Experience.tsx                     # Timeline cronológico (Uno 27, Abai, Sevilla/IA)
│   ├── Skills.tsx                         # Matriz de habilidades agrupadas por capas técnicas
│   ├── Contact.tsx                        # Canales directos, botones interactivos de copia rápida
│   └── Footer.tsx                         # Pie técnico con estado del sistema y copyright
├── data/
│   └── portfolio.ts                       # Objeto canónico completo tipado con los datos de Yoider
├── types/
│   └── portfolio.ts                       # Interfaces y tipos de TypeScript estrictos
├── lib/
│   └── utils.ts                           # Helper de fusión de clases (clsx + tailwind-merge)
├── public/
│   ├── cv-yoider-murillo.pdf              # Asset PDF descargable del CV
│   └── favicon.ico                        # Icono de navegador
├── next.config.mjs                        # Configuración de Next.js
├── package.json                           # Dependencias y scripts de construcción
├── postcss.config.mjs                     # Pipeline PostCSS
├── tailwind.config.ts                     # Tokens y paleta de diseño Tailwind
└── tsconfig.json                          # Configuración estricta de TypeScript
```

---

## 5. ESPECIFICACIÓN DE COMPONENTES & INTERFACES

### 5.1 `app/layout.tsx` (Root Layout)
- **Tipo de Componente:** React Server Component (RSC).
- **Funcionalidades:**
  - Carga optimizada de fuentes: `GeistSans` y `GeistMono` (usando `next/font/google` o fuentes del sistema).
  - Metadatos SEO estructurados: `title: "Yoider Murillo Salazar | Software Engineer & Full Stack Developer"`, OpenGraph tags, descripción técnica, palabras clave.
  - Estructuración del `<html>` con `lang="es"` y `className="dark"`, y `<body>` con fondo `#090d16`.

### 5.2 `app/page.tsx` (Page Orchestrator)
- **Tipo de Componente:** Componente híbrido o con cliente para orquestación de modales (`'use client'` si gestiona el modal activo, o pasar a un wrapper interactivo).
- **Estructura de Render:**
  ```tsx
  <main className="min-h-screen bg-[#090d16] text-white selection:bg-blue-500/20 selection:text-blue-300">
    <Navbar />
    <Hero />
    <About />
    <Projects />
    <Experience />
    <Skills />
    <Contact />
    <Footer />
  </main>
  ```

### 5.3 `components/Navbar.tsx`
- **Tipo:** Client Component (`'use client'`).
- **Estado Local:** `isScrolled` (boolean para incrementar el backdrop blur al scrollear), `isMobileMenuOpen` (boolean para menú hamburguesa).
- **Elementos Clave:**
  - Logo minimalista / Monograma: `YM` o `yoider.dev` en `font-mono`.
  - Enlaces de navegación: `#sobre-mi`, `#proyectos`, `#experiencia`, `#habilidades`, `#contacto`.
  - Botón de acción: Descarga rápida de CV `/cv-yoider-murillo.pdf`.
  - Adaptabilidad: Menú colapsable en móvil (`< 768px`) con animación suave sin layout shift.

### 5.4 `components/Hero.tsx`
- **Tipo:** Server Component o Client Component ligero.
- **Elementos Clave:**
  - Status Pill (Disponibilidad):
    ```tsx
    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-medium bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
      <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
      DISPONIBLE EN SEVILLA & REMOTO
    </div>
    ```
  - Titular Principal H1: `Yoider Murillo Salazar` (con `font-extrabold tracking-tight`).
  - Rol / Subtítulo: `Software Engineer & Full Stack Developer`.
  - Párrafo de Propuesta de Valor: Arquitecturas backend + Next.js + IA Multimodal.
  - Botones CTA:
    - Primario: `Descargar CV (PDF)` con icono de descarga (`Lucide.Download`), fondo azul `#3b82f6`.
    - Secundario: `Explorar Proyectos` enlace a `#proyectos`.
  - Quick Links: Enlaces a GitHub, LinkedIn, Email, WhatsApp.

### 5.5 `components/About.tsx`
- **Tipo:** Server Component.
- **Elementos Clave:**
  - H2: `Sobre Mí` + subtítulo de trayectoria.
  - Narrativa en 3 bloques claros: Forja Backend en Colombia (.NET Core / Uno 27 / Abai), Salto a Full Stack Moderno (TypeScript / Next.js), Consolidación en Sevilla e IA Multimodal (Gemini 2.5 Flash / MCP).
  - 3 Principios de Ingeniería: Tarjetas `#111625` con bordes de 1px `border-zinc-800/80` (Arquitectura Limpia, IA Pragmática HITL, Rendimiento & Resiliencia).
  - Bloque de Estadísticas Técnicas: `+5 Años de Experiencia`, `.NET & Next.js`, `Multimodal AI`, `Sevilla / Remoto`.

### 5.6 `components/Projects.tsx` & `components/ProjectModal.tsx`
- **Tipo:** Client Component (`'use client'`).
- **Estado Local:** `selectedProject: TechnicalProject | null`.
- **Proyectos Renderizados (4 Obligatorios):**
  1. **Impulsar:** SaaS GovTech/LegalTech, Google Gemini 2.5 Flash, WhatsApp Cloud API, Asynchronous Queues, Human-in-the-Loop.
  2. **CHRON0V4:** Developer Productivity, Diátaxis Context Architecture, AST Parsing, Model Context Protocol (MCP).
  3. **Finanzas Dashboard:** Fintech Analytics, Server Components & Server Actions, Real-time Decimal Balances, Multicurrency.
  4. **Tuma_Z:** B2C E-commerce, Clean Modular Architecture, Sub-50ms Faceted Filtering, High Lighthouse Score.
- **ProjectModal:**
  - Accesibilidad: Soporte de tecla `Escape`, bloqueo de scroll de fondo con `overflow-hidden` condicional en `document.body`, botón accesible `X` para cerrar, cierre al pulsar el overlay exterior.
  - Contenido en Modal: Problema de negocio, diagrama/resumen de arquitectura por capas, métricas cuantificables con badges, stack tecnológico clasificado por categoría, enlaces a repositorios o demos.

### 5.7 `components/Experience.tsx`
- **Tipo:** Server Component.
- **Estructura:** Línea de tiempo vertical interactiva y limpia.
- **Contenido:**
  - **Uno 27 S.A.S. (2019 – 2021):** Backend Developer (.NET Core, C#, Clean Architecture, SQL Server, APIs REST críticas).
  - **Abai Group (2021 – 2023):** Software Engineer (Microservicios, integraciones de alta concurrencia, telecomunicaciones).
  - **Especialización & Consolidación en Sevilla (2023 – Presente):** Full Stack Engineer & Multimodal AI Developer (Next.js, TypeScript, Gemini 2.5 Flash, MCP, WhatsApp Cloud API).

### 5.8 `components/Skills.tsx`
- **Tipo:** Server Component o Client Component con pestañas opcionales.
- **Organización en 5 Capas Técnicas:**
  1. **Backend:** C#, .NET Core, ASP.NET Core, Clean Architecture, REST APIs, Microservicios.
  2. **Frontend:** Next.js (App Router), React, TypeScript, Tailwind CSS, Vue.js, State Management.
  3. **Bases de Datos & Datos:** PostgreSQL, SQL Server, MySQL, Prisma ORM, Redis.
  4. **IA & Automatización:** Google Gemini 2.5 Flash, Multimodal Vision, Function Calling, Model Context Protocol (MCP), WhatsApp Cloud API, Human-in-the-Loop Pipelines.
  5. **Herramientas & DevOps:** Docker, Git / GitHub, Turbopack, CI/CD, Postman, Linux.

### 5.9 `components/Contact.tsx`
- **Tipo:** Client Component (`'use client'`).
- **Canales Directos con Funcionalidad Copy & Direct Link:**
  - **Email:** `yodiermurillo@gmail.com` (Botón de copiar con feedback visual "¡Copiado!" de 2 segundos + enlace `mailto:`).
  - **Teléfono:** `+34 604 30 52 21` (Botón de copiar + enlace `tel:`).
  - **WhatsApp Directo:** Enlace a `https://wa.me/34604305221` con mensaje prefijado.
  - **LinkedIn:** Perfil verificado con enlace externo seguro (`rel="noopener noreferrer"`).
  - **GitHub:** Repositorio y perfil público.

### 5.10 `components/Footer.tsx`
- **Tipo:** Server Component.
- **Detalle:**
  - Copyright formal: `© 2026 Yoider Murillo Salazar. Todos los derechos reservados.`
  - Badge técnico: `Construido con Next.js 14 App Router, TypeScript & Tailwind CSS`.
  - Indicador de estado del sistema: Punto verde esmeralda `Sistema 100% Operativo`.

---

## 6. ESQUEMA DE TIPOS TYPESCRIPT (`types/portfolio.ts`)

Para asegurar contratos de datos estrictos y cero errores en tiempo de compilación:

```typescript
// types/portfolio.ts

export type TechCategory = 'backend' | 'frontend' | 'ai' | 'data' | 'tools';
export type ProjectAccentColor = 'blue' | 'purple' | 'emerald';

export interface SocialLink {
  id: string;
  name: string;
  url: string;
  icon: string;
  displayValue: string;
  isPrimary?: boolean;
}

export interface AvailabilityBadge {
  text: string;
  isActive: boolean;
  location: string;
}

export interface HeroData {
  name: string;
  title: string;
  availabilityBadge: AvailabilityBadge;
  valueProposition: string;
  tagline: string;
  cvDownloadUrl: string;
  socialLinks: SocialLink[];
}

export interface EngineeringPrinciple {
  title: string;
  description: string;
  icon: string;
}

export interface StoryStat {
  label: string;
  value: string;
  detail: string;
}

export interface StorytellingSection {
  title: string;
  subtitle: string;
  paragraphs: string[];
  principles: EngineeringPrinciple[];
  stats: StoryStat[];
}

export interface ProjectMetric {
  value: string;
  label: string;
  detail: string;
}

export interface ProjectTechItem {
  name: string;
  category: TechCategory;
}

export interface ProjectArchitecture {
  overview: string;
  keyPoints: string[];
}

export interface TechnicalProject {
  id: string;
  title: string;
  category: string;
  tagline: string;
  accentColor: ProjectAccentColor;
  highlighted: boolean;
  summary: string;
  problem: string;
  solutionArchitecture: ProjectArchitecture;
  metrics: ProjectMetric[];
  techStack: ProjectTechItem[];
  links: {
    liveUrl?: string;
    githubUrl?: string;
  };
}

export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  location: string;
  period: string;
  isCurrent: boolean;
  type: string;
  summary: string;
  achievements: string[];
  technologies: string[];
}

export interface SkillItem {
  name: string;
  level: 'Expert' | 'Advanced' | 'Proficient';
  featured?: boolean;
}

export interface SkillCategory {
  id: string;
  title: string;
  description: string;
  category: TechCategory;
  accentColor: ProjectAccentColor;
  skills: SkillItem[];
}

export interface ContactChannel {
  id: string;
  label: string;
  value: string;
  href: string;
  icon: string;
  copyable: boolean;
  description: string;
}

export interface ContactInfo {
  title: string;
  subtitle: string;
  email: string;
  phone: string;
  whatsappNumber: string;
  location: string;
  channels: ContactChannel[];
  githubUrl: string;
  linkedinUrl: string;
}

export interface PortfolioData {
  hero: HeroData;
  about: StorytellingSection;
  projects: TechnicalProject[];
  experience: ExperienceItem[];
  skills: SkillCategory[];
  contact: ContactInfo;
}
```

---

## 7. COMANDOS DE VERIFICACIÓN Y PIPELINE DE BUILD

### 7.1 Secuencia de Ejecución del Build

```bash
# 1. Comprobación estricta de tipos de TypeScript (sin emitir archivos)
npx tsc --noEmit

# 2. Análisis estático con ESLint para Next.js
npm run lint

# 3. Compilación de producción con Next.js App Router
npm run build
```

### 7.2 Criterios de Aceptación del Build
1. **Zero TypeScript Errors:** `tsc --noEmit` debe retornar código de salida `0`. Ningún tipo `any` no controlado o propiedad faltante en componentes.
2. **Zero Syntax or Import Errors:** Ningún import relativo roto o módulo inexistente.
3. **Valid HTML Output:** Renderizado estático (`○ / SSG`) exitoso para la ruta principal `/`.
4. **Bundle Size Optimizado:** Bundle inicial menor a 120 kB First Load JS.
5. **Assets Verificados:** El archivo `/public/cv-yoider-murillo.pdf` debe estar presente y accesible.

---

## 8. PLAN DE PRUEBAS E2E OPAQUE-BOX (TIERS 1 A 4)

El plan de pruebas E2E evalúa la aplicación como una **caja negra** (Opaque-Box), interactuando únicamente a través del DOM del navegador y validando tanto el comportamiento funcional como el cumplimiento visual y de diseño.

```
+-------------------------------------------------------------------------+
|                  MATRIZ DE PRUEBAS E2E (TIERS 1 - 4)                    |
+-------------------------------------------------------------------------+
|  Tier 1: Feature Coverage (Sanity & Smoke Tests)                        |
|  - Renderizado de todas las 7 secciones obligatorias                    |
|  - Existencia del badge pulsante verde con texto exacto                 |
|  - Integridad de datos y titulares de Yoider Murillo Salazar            |
|  - Descarga de CV (/cv-yoider-murillo.pdf) retorna HTTP 200             |
+-------------------------------------------------------------------------+
|  Tier 2: Boundary & Corner Cases (Comportamiento de Componentes)       |
|  - Apertura, navegación y cierre de Modales de los 4 proyectos          |
|  - Cierre con tecla 'Escape', botón 'X' y click en backdrop             |
|  - Copia al portapapeles de Email y Teléfono con feedback UI            |
|  - Validación de viewport móvil en 375px: cero scroll horizontal (overflow)|
+-------------------------------------------------------------------------+
|  Tier 3: Cross-Feature Integration & Flujos de Usuario                  |
|  - Navegación fluida por anclas en Navbar y scroll suave                |
|  - Transiciones entre modales sucesivos sin fuga de estado              |
|  - Menú hamburguesa responsivo en móviles: abrir, navegar, auto-cerrar  |
+-------------------------------------------------------------------------+
|  Tier 4: Real-World, Rendimiento & Conformidad con DESIGN_SYSTEM.md     |
|  - Verificación computada de tokens CSS (#090d16 canvas, #111625 cards) |
|  - Ausencia total de errores o advertencias en la consola del navegador |
|  - Contraste de texto accesible (WCAG AA) y jerarquía visual tipográfica|
+-------------------------------------------------------------------------+
```

### 8.1 Tier 1: Feature Coverage & Smoke Test Suite

| Test ID | Caso de Prueba | Entrada / Acción | Resultado Esperado |
|---|---|---|---|
| `T1-01` | **Hero Section Mount** | Cargar página raíz `/` | El H1 contiene `Yoider Murillo Salazar`, el rol dice `Software Engineer & Full Stack Developer`. |
| `T1-02` | **Status Pill Presence** | Inspeccionar selector de badge | Texto `"DISPONIBLE EN SEVILLA & REMOTO"`, existe un dot con clase de animación `animate-pulse` y color esmeralda. |
| `T1-03` | **CV Download Asset** | Request HTTP GET `/cv-yoider-murillo.pdf` | Retorna `status 200`, `Content-Type: application/pdf` (o archivo binario válido). |
| `T1-04` | **Projects Grid Count** | Contar tarjetas en `#proyectos` | Existen exactamente 4 tarjetas correspondientes a `Impulsar`, `CHRON0V4`, `Finanzas Dashboard` y `Tuma_Z`. |
| `T1-05` | **Experience Timeline** | Inspeccionar `#experiencia` | Presencia de las 3 etapas: Uno 27 S.A.S., Abai Group, y Especialización en Sevilla / IA. |
| `T1-06` | **Skills Matrix Sections** | Inspeccionar `#habilidades` | Existen las 5 categorías: Backend, Frontend, Datos, IA & Automatización, Herramientas. |
| `T1-07` | **Contact Channels** | Inspeccionar `#contacto` | Enlaces a `mailto:yodiermurillo@gmail.com`, `tel:+34604305221`, WhatsApp, GitHub y LinkedIn. |

### 8.2 Tier 2: Boundary, Edge Cases & Component State Tests

| Test ID | Caso de Prueba | Entrada / Acción | Resultado Esperado |
|---|---|---|---|
| `T2-01` | **Project Modal Open** | Click en tarjeta `impulsar` | Se monta el diálogo modal. El título del modal es `Impulsar`, muestra el problema, arquitectura y métricas. |
| `T2-02` | **Modal Close by ESC** | Pulsar tecla `Escape` con modal abierto | El modal se desmonta o se oculta (`display: none` o ausencia en DOM). |
| `T2-03` | **Modal Close by Backdrop** | Click en el overlay exterior del modal | El modal se cierra correctamente. |
| `T2-04` | **Modal Close by Button** | Click en el botón de cierre `X` | El modal se cierra. `document.body` recupera scroll normal (`overflow != hidden`). |
| `T2-05` | **Copy to Clipboard Feedback** | Click en botón "Copiar Email" | El texto cambia temporalmente a "¡Copiado!" o icono de check verde; el clipboard contiene `yodiermurillo@gmail.com`. |
| `T2-06` | **Zero Horizontal Overflow (375px)** | Configurar viewport en `375x667` (iPhone SE) | `document.documentElement.scrollWidth <= window.innerWidth`. Ningún elemento provoca desbordamiento en el eje X. |
| `T2-07` | **Zero Horizontal Overflow (414px & 768px)** | Configurar viewports estándar | Sin desbordamiento horizontal en ninguna resolución intermedia. |

### 8.3 Tier 3: Cross-Feature Integration Tests

| Test ID | Caso de Prueba | Entrada / Acción | Resultado Esperado |
|---|---|---|---|
| `T3-01` | **Navbar Anchor Navigation** | Click en enlace "Proyectos" en Navbar | El scroll de la ventana se desplaza suavemente hacia `#proyectos`. |
| `T3-02` | **Sequential Modal Navigation** | Abrir modal 1 (`Impulsar`), cerrar; abrir modal 2 (`CHRON0V4`) | El contenido del modal se actualiza limpiamente mostrando `CHRON0V4` sin residuos del modal anterior. |
| `T3-03` | **Mobile Menu Interaction** | En viewport 375px: abrir menú hamburguesa, pulsar enlace "Experiencia" | El menú se despliega, al pulsar el enlace navega hacia `#experiencia` y el menú móvil se cierra automáticamente. |
| `T3-04` | **Hero CTA Destination** | Click en botón "Ver Proyectos" en Hero | Desplaza el viewport hacia la sección `#proyectos`. |

### 8.4 Tier 4: Real-World, Visual Conformity & Quality Tests

| Test ID | Caso de Prueba | Entrada / Acción | Resultado Esperado |
|---|---|---|---|
| `T4-01` | **Background Token Conformity** | Computar `window.getComputedStyle(document.body).backgroundColor` | Corresponde exactamente a `rgb(9, 13, 22)` (`#090d16`). |
| `T4-02` | **Card Surface Conformity** | Computar estilos de tarjeta en `#proyectos` | Utiliza `#111625` (o clase `bg-zinc-900/60` / `bg-[#111625]`) con borde de `1px` (`border-zinc-800/80` o `border-[#1e293b]`). |
| `T4-03` | **Emerald Accent Limitation** | Inspeccionar uso de colores verdes en la página | El color `#10b981` / `emerald` se restringe exclusivamente a disponibilidad activa, status indicators y confirmaciones exitosas. |
| `T4-04` | **Console Cleanliness** | Escuchar eventos `console.error` y `console.warn` durante navegación completa | Cero errores de consola, cero advertencias de React hydration mismatch. |
| `T4-05` | **Font Hierarchy Verification** | Inspeccionar clases de fuentes | Elementos de código y badges usan `font-mono`; textos de lectura usan `font-sans`. |

---

## 9. IMPLEMENTACIÓN DE LA SUITE DE TESTING AUTOMATIZADO

Para ejecutar estas pruebas con Playwright de forma completamente desatendida e integrada en el flujo de verificación, se provee la siguiente especificación de archivo de prueba:

### 9.1 `tests/e2e/portfolio.spec.ts`

```typescript
import { test, expect } from '@playwright/test';

test.describe('Web CV Yoider Murillo Salazar - E2E Test Suite', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });

  // --- TIER 1: Feature Coverage & Smoke Tests ---
  test('T1-01: Hero section renders core identity and title', async ({ page }) => {
    const heading = page.locator('h1');
    await expect(heading).toContainText('Yoider Murillo Salazar');
    await expect(page.locator('text=Software Engineer & Full Stack Developer')).toBeVisible();
  });

  test('T1-02: Availability status pill displays emerald pulse', async ({ page }) => {
    const pill = page.locator('text=DISPONIBLE EN SEVILLA & REMOTO');
    await expect(pill).toBeVisible();
    const dot = page.locator('.animate-pulse');
    await expect(dot).toBeVisible();
  });

  test('T1-03: CV Download link points to valid PDF asset', async ({ page }) => {
    const cvLink = page.locator('a[href*="cv-yoider-murillo.pdf"]');
    await expect(cvLink).toBeVisible();
    const response = await page.request.get('/cv-yoider-murillo.pdf');
    expect(response.status()).toBe(200);
  });

  test('T1-04: Projects grid contains 4 featured projects', async ({ page }) => {
    const projectCards = page.locator('#proyectos [data-testid="project-card"]');
    await expect(projectCards).toHaveCount(4);
    await expect(page.locator('text=Impulsar')).toBeVisible();
    await expect(page.locator('text=CHRON0V4')).toBeVisible();
    await expect(page.locator('text=Finanzas Dashboard')).toBeVisible();
    await expect(page.locator('text=Tuma_Z')).toBeVisible();
  });

  // --- TIER 2: Boundary & Component State Tests ---
  test('T2-01 to T2-04: Project modal open and close cycles', async ({ page }) => {
    // Open modal for Impulsar
    const impulsarCard = page.locator('#proyectos [data-testid="project-card"]').filter({ hasText: 'Impulsar' });
    await impulsarCard.click();
    
    const modal = page.locator('[data-testid="project-modal"]');
    await expect(modal).toBeVisible();
    await expect(modal).toContainText('GovTech / LegalTech');

    // Close with Escape key
    await page.keyboard.press('Escape');
    await expect(modal).not.toBeVisible();

    // Reopen and close with close button
    await impulsarCard.click();
    await expect(modal).toBeVisible();
    await page.locator('[data-testid="modal-close-button"]').click();
    await expect(modal).not.toBeVisible();
  });

  test('T2-06: Zero horizontal scroll on mobile viewport 375px', async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 667 });
    await page.goto('/');

    const hasHorizontalOverflow = await page.evaluate(() => {
      return document.documentElement.scrollWidth > window.innerWidth;
    });
    expect(hasHorizontalOverflow).toBe(false);
  });

  // --- TIER 3: Cross-Feature Integration ---
  test('T3-01: Navbar anchors trigger smooth scrolling', async ({ page }) => {
    await page.locator('nav a[href="#contacto"]').click();
    const contactSection = page.locator('#contacto');
    await expect(contactSection).toBeInViewport();
  });

  // --- TIER 4: Non-Functional & Design System Compliance ---
  test('T4-01 & T4-04: Background color matches #090d16 and zero console errors', async ({ page }) => {
    const consoleErrors: string[] = [];
    page.on('console', msg => {
      if (msg.type() === 'error') consoleErrors.push(msg.text());
    });

    const bgColor = await page.evaluate(() => {
      return window.getComputedStyle(document.body).backgroundColor;
    });

    // rgb(9, 13, 22) matches #090d16
    expect(bgColor).toBe('rgb(9, 13, 22)');
    expect(consoleErrors).toHaveLength(0);
  });
});
```

---

## 10. PLAN DE IMPLEMENTACIÓN POR HITOS (TRACK B HANDOVER)

Para el equipo de implementación y el orquestador, se recomienda la siguiente secuencia de ejecución:

1. **Hito 1 — Configuración Base & Tokens:**
   - Crear `package.json`, `tsconfig.json`, `postcss.config.mjs`, `tailwind.config.ts`, `next.config.mjs`.
   - Crear `app/globals.css` y `lib/utils.ts`.
   - Crear `types/portfolio.ts` y `data/portfolio.ts`.
   - Generar/colocar `/public/cv-yoider-murillo.pdf`.
   - Ejecutar `npm install` y verificar compilación inicial con `npm run build`.

2. **Hito 2 — Componentes Estructurales:**
   - Implementar `Navbar.tsx`, `Hero.tsx` (con status pill pulsante), `About.tsx` (storytelling y principios), `Footer.tsx`.
   - Integrar en `app/layout.tsx` y `app/page.tsx`.

3. **Hito 3 — Proyectos & Modales Interactivos:**
   - Implementar `Projects.tsx` y `ProjectModal.tsx`.
   - Implementar `Experience.tsx` (timeline) y `Skills.tsx` (matriz de habilidades).
   - Implementar `Contact.tsx` con interacción de copiado rápido al portapapeles.

4. **Hito 4 — Pulido Visual, Accesibilidad & Verificación Móvil (375px):**
   - Validación minuciosa de paddings, márgenes y ausencias de overflow en 375px, 768px, 1024px.
   - Ajuste de contrastes y microinteracciones suaves (`transition-colors duration-200`).

5. **Hito 5 — Verificación Integral E2E & Gate de Calidad:**
   - Ejecución completa de la suite E2E Tiers 1-4.
   - Validación final de `npm run build` con código de salida 0.

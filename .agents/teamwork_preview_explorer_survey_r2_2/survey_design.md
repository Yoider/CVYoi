# SURVEY DESIGN & UI/UX SPECIFICATIONS
## Web CV / Interactive Portfolio — Yoider Murillo Salazar
> Documento maestro de especificación de tokens visuales, sistema de diseño, anatomía de componentes, microinteracciones y reglas de adaptación responsive para el portafolio interactivo de Yoider Murillo Salazar (Software Engineer & Full Stack Developer).
> Generado por: `teamwork_preview_explorer_survey_r2_2`
> Destinado a: Orquestador y Equipos de Implementación / E2E Testing
> Fecha: 2026-09-14

---

## 1. FILOSOFÍA VISUAL & CONCEPTO DE DISEÑO

### 1.1 Arquetipo Visual
- **Concepto:** *Modern Engineering, Dark Mode Minimalist, Tech-Driven Clarity*.
- **Referencias e Inspiración:** Interfaces de alta ingeniería como *Linear*, *Vercel*, *Stripe*, *GitHub Dark* y *Notion Dark*.
- **Audiencia Objetivo:** CTOs, Directores de Ingeniería, Tech Leads y Reclutadores Técnicos que evalúan solidez arquitectónica, atención al detalle y capacidad para construir interfaces web de clase mundial.
- **Tono Visual:** Frío, sobrio, preciso, de alta densidad informativa pero sin sobrecarga cognitiva. Menos ornamentación superflua y mayor peso en jerarquía tipográfica, microinteracciones de baja latencia y espaciados calculados.

### 1.2 Principios Rectores de UI/UX
1. **Rigor de Ingeniería en la UI:** Cada elemento visual responde a una función. No hay decoraciones arbitrarias o gradientes estridentes.
2. **Jerarquía Visual Inquebrantable:** Contraste tipográfico marcado entre titulares (`#f8fafc`), cuerpo (`#94a3b8`) y metadatos (`#64748b`).
3. **Semántica Estricta del Color:**
   - Azul / Índigo (`#3b82f6` / `#6366f1`): Núcleo tecnológico, ingeniería backend (.NET Core, C#), full-stack y acciones primarias.
   - Púrpura (`#a855f7` / `#c084fc`): Inteligencia Artificial Multimodal, agentes autónomos y pipelines de inferencia.
   - Esmeralda (`#10b981` / `#34d399`): **Exclusivo** para estado activo de disponibilidad ("DISPONIBLE EN SEVILLA & REMOTO"), balances financieros positivos y confirmaciones de copia.
4. **Respuesta Instantánea & Microinteracciones Snappy:** Transiciones suaves estandarizadas en `duration-200 ease-out`. Sin animaciones pesadas o bloqueantes.
5. **Garantía Responsive Absoluta:** Rendimiento y layout impecables desde pantallas móviles ultra-estrechas (375px) hasta monitores ultrapanorámicos, con cero desbordamiento horizontal.

---

## 2. PALETA DE COLORES & TOKENS VISUALES

### 2.1 Matriz de Tokens Visuales

| Token Semántico | Código Hex | Tailwind CSS Class / Variable | RGB / HSL Equivalente | Ratio Contraste vs Fondo (#090d16) | Propósito & Reglas de Uso |
|---|---|---|---|---|---|
| **Background Base** | `#090d16` | `bg-[#090d16]` / `bg-canvas` | `rgb(9, 13, 22)` | N/A (Canvas) | Fondo principal del viewport completo. Tono zinc-azul ultra oscuro que absorbe reflejos y crea profundidad. |
| **Card / Surface Base** | `#111625` | `bg-[#111625]` / `bg-zinc-900/60` con `backdrop-blur-md` | `rgb(17, 22, 37)` | 1.15:1 | Superficie de tarjetas de proyectos, contenedores de secciones, navbar y modales. |
| **Card Hover / Active** | `#182032` | `bg-[#182032]` / `bg-zinc-800/80` | `rgb(24, 32, 50)` | 1.35:1 | Estado hover, activo o seleccionado en tarjetas, items de lista, botones secundarios y tooltips. |
| **Border / Divider** | `#1e293b` | `border-[#1e293b]` / `border-zinc-800/80` | `rgb(30, 41, 59)` | 1.55:1 | Bordes estructurales de 1px en tarjetas, modales, separadores y headers. |
| **Border Hover** | `#334155` | `border-[#334155]` / `border-zinc-700/80` | `rgb(51, 65, 85)` | 2.2:1 | Estado hover de bordes para tarjetas y elementos interactivos. |
| **Tech Accent (Primary)** | `#3b82f6` | `text-blue-500` / `bg-blue-600` / `border-blue-500` | `rgb(59, 130, 246)` | 4.85:1 (AA) | Botón CTA primario (Descargar CV), enlaces activos, acento de backend y proyectos de software (.NET, Full Stack). |
| **Tech Accent Gradient** | `#6366f1` | `to-indigo-500` / `text-indigo-400` | `rgb(99, 102, 241)` | 4.65:1 (AA) | Extremo del gradiente sutil para acentos tecnológicos de ingeniería (`from-blue-500 to-indigo-500`). |
| **AI Accent (Secondary)** | `#a855f7` | `text-purple-500` / `bg-purple-500/10` / `border-purple-500/30` | `rgb(168, 85, 247)` | 4.52:1 (AA) | Badges de IA, menciones de Google Gemini 2.5 Flash, automatización multimodal y proyectos con agentes. |
| **AI Accent Bright** | `#c084fc` | `text-purple-400` | `rgb(192, 132, 252)` | 7.10:1 (AAA) | Texto de etiquetas de IA sobre fondos oscuros para máxima legibilidad. |
| **Status / Success Accent** | `#10b981` | `text-emerald-500` / `bg-emerald-500/10` / `border-emerald-500/20` | `rgb(16, 185, 129)` | 6.88:1 (AAA) | **USO RESTRINGIDO:** Punto pulsante del badge de disponibilidad, confirmación "¡Copiado!", deltas positivos de métricas. |
| **Status Accent Bright** | `#34d399` | `text-emerald-400` / `bg-emerald-400` | `rgb(52, 211, 153)` | 9.75:1 (AAA) | Texto del Status Pill y glow animado del dot pulsante. |
| **Text Primary (Headings)** | `#f8fafc` | `text-[#f8fafc]` / `text-zinc-50` / `text-white` | `rgb(248, 250, 252)` | 17.65:1 (AAA) | Encabezados principales H1, H2, H3, nombres de proyectos y métricas numéricas clave. |
| **Text Secondary (Body)** | `#94a3b8` | `text-[#94a3b8]` / `text-zinc-400` | `rgb(148, 163, 184)` | 7.46:1 (AAA) | Párrafos narrativos, descripciones de problemas y arquitecturas, textos de tarjetas. |
| **Text Tertiary (Metadata)** | `#64748b` | `text-[#64748b]` / `text-zinc-500` | `rgb(100, 116, 139)` | 4.67:1 (AA) | Fechas, ubicaciones, etiquetas secundarias, números de versión y textos de copyright. |
| **Text Muted / Subtle** | `#475569` | `text-zinc-600` | `rgb(71, 85, 105)` | 3.02:1 | Iconos decorativos inactivos y bordes tenues de inputs. |
| **Overlay / Backdrop** | `rgba(0, 0, 0, 0.75)` | `bg-black/75` con `backdrop-blur-sm` | `rgba(0, 0, 0, 0.75)` | N/A | Máscara de fondo modal para oscurecer el canvas y focalizar la ventana emergente. |

---

### 2.2 Sistema de Capas de Superficie (Elevation & Layering)

El diseño opera en un modelo plano con capas superpuestas mediante contraste tonal y efecto translúcido (*frosted glass*), eliminando sombras duras o skeuomorfismo:

```
[ Capa 4: Tooltips & Toasts ]      -->  #182032 (border #1e293b, z-50, shadow-lg)
[ Capa 3: Modales & Drawers ]      -->  #111625 (border #1e293b, z-50, backdrop bg-black/75)
[ Capa 2: Tarjetas Activas/Hover ] -->  #182032 (border #334155, z-10)
[ Capa 1: Tarjetas & Navbar ]      -->  #111625 / bg-zinc-900/60 con backdrop-blur-md (border #1e293b, z-0/z-40)
[ Capa 0: Lienzo Base ]            -->  #090d16 (Canvas raíz de la aplicación)
```

---

### 2.3 Reglas y Guardarraíles de Color
1. **Regla de Exclusividad Esmeralda:** El color verde esmeralda (`#10b981` / `#34d399`) está estrictamente reservado para indicadores de estado activo (disponibilidad laboral, confirmación exitosa de copia en el portapapeles y balance positivo en dashboard). **Nunca** debe usarse como color de botones genéricos, títulos o fondos decorativos.
2. **Regla de Púrpura para Inteligencia Artificial:** Cualquier insignia, etiqueta o tag relacionado con IA (Google Gemini, Function Calling, Agentes, MCP, Vision API) debe portar el acento púrpura (`#a855f7` / `#c084fc`), diferenciándose nítidamente del acento azul tecnológico.
3. **Regla de Bordes de 1px:** Todos los bordes de componentes deben ser finos de 1px (`border` en Tailwind), utilizando `#1e293b` como base y `#334155` en interacción hover. No emplear bordes de 2px o 4px que rompen la estética minimalista de ingeniería.

---

## 3. TIPOGRAFÍA & JERARQUÍA DE TEXTO

### 3.1 Familias Tipográficas

```css
/* Configuración recomendada para Tailwind CSS v3/v4 */
font-sans: "Geist Sans", "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
font-mono: "Geist Mono", "JetBrains Mono", "Fira Code", ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace;
```

- **`font-sans` (Texto de Interfaz y Lectura):** Empleada para titulares, subtítulos, párrafos, botones y navegación. Ofrece alta legibilidad en pantallas de alta densidad de píxeles y neutralidad óptica.
- **`font-mono` (Código, Badges Técnicos y Metadatos):** Empleada para el Status Pill, fechas de experiencia, etiquetas de tecnologías (`C#`, `TypeScript`, `Docker`), métricas numéricas (`-75%`, `94.2%`) y nombres de APIs/archivos. Otorga de inmediato el sello de software de ingeniería.

---

### 3.2 Escala Tipográfica & Mapeo de Clases

| Nivel Jerárquico | Familia | Tamaño / Leading Móvil | Tamaño / Leading Desktop | Peso (Weight) | Tracking (Kerning) | Color Token | Clases Tailwind CSS |
|---|---|---|---|---|---|---|---|
| **H1 (Hero Display)** | `font-sans` | `36px` / `1.1` | `60px` / `1.05` | 800 (Extrabold) | `-0.025em` (`tracking-tight`) | `#f8fafc` | `text-4xl sm:text-6xl font-extrabold tracking-tight text-white` |
| **H2 (Sección Principal)** | `font-sans` | `24px` / `1.2` | `32px` / `1.15` | 700 (Bold) | `-0.025em` (`tracking-tight`) | `#f8fafc` | `text-2xl sm:text-3xl font-bold tracking-tight text-white` |
| **H3 (Tarjeta / Empresa)** | `font-sans` | `18px` / `1.3` | `20px` / `1.3` | 600 (Semibold) | `-0.015em` | `#f8fafc` | `text-lg sm:text-xl font-semibold text-zinc-100` |
| **H4 (Subtítulo / Modal)** | `font-sans` | `15px` / `1.4` | `16px` / `1.4` | 600 (Semibold) | Normal | `#e2e8f0` | `text-sm sm:text-base font-semibold text-zinc-200` |
| **Lead / Hero Pitch** | `font-sans` | `16px` / `1.6` | `18px` / `1.6` | 400 (Regular) | Normal | `#94a3b8` | `text-base sm:text-lg text-zinc-400 leading-relaxed max-w-2xl` |
| **Body (Párrafos normales)** | `font-sans` | `14px` / `1.6` | `15px` / `1.6` | 400 (Regular) | Normal | `#94a3b8` | `text-sm sm:text-base text-zinc-400 leading-relaxed` |
| **Eyebrow / Sección Tag** | `font-mono` | `11px` / `1.2` | `12px` / `1.2` | 500 (Medium) | `+0.1em` (`tracking-widest`) | `#3b82f6` | `text-xs font-mono font-medium tracking-widest text-blue-400 uppercase` |
| **Status Pill Text** | `font-mono` | `11px` / `1.2` | `12px` / `1.2` | 500 (Medium) | `+0.05em` (`tracking-wider`) | `#34d399` | `text-xs font-mono font-medium tracking-wider text-emerald-400 uppercase` |
| **Tech Badge / Stack Tag** | `font-mono` | `11px` / `1` | `12px` / `1` | 500 (Medium) | Normal | `#cbd5e1` | `text-xs font-mono font-medium text-zinc-300` |
| **Metadatos / Fechas** | `font-mono` | `11px` / `1` | `12px` / `1` | 400 (Regular) | Normal | `#64748b` | `text-xs font-mono text-zinc-500` |
| **Métricas Numéricas** | `font-mono` | `24px` / `1.1` | `30px` / `1.1` | 700 (Bold) | `-0.02em` | `#f8fafc` | `text-2xl sm:text-3xl font-mono font-bold text-white` |

---

## 4. SISTEMA DE ESPACIADOS, BORDES & MICROINTERACCIONES

### 4.1 Escala de Border Radius
- **`rounded-lg` (8px / 0.5rem):** Botones de acción (CTA), inputs de formulario, selectores, tooltips y items de menú.
- **`rounded-2xl` (16px / 1rem):** Tarjetas de proyecto, contenedores modales, paneles de experiencia y bloques de código.
- **`rounded-full` (9999px):** Status pill, avatares circulares, pastillas de filtros y punto pulsante esmeralda.

### 4.2 Escala de Espaciados & Padding
- **Contenedor Global:** `max-w-6xl mx-auto px-4 sm:px-6 lg:px-8` (1152px de ancho máximo centrado, garantizando márgenes laterales cómodos en cualquier resolución).
- **Separación entre Secciones Maestras:** `py-20 sm:py-28` (80px en móvil, 112px en escritorio).
- **Padding Interno de Tarjetas:** `p-6 sm:p-8` (24px en móvil, 32px en escritorio).
- **Padding de Ventana Modal:** `p-6 sm:p-8` con scroll interior independiente `max-h-[90vh] overflow-y-auto`.
- **Gaps de Grid:**
  - `gap-6` (24px) para rejilla de proyectos.
  - `gap-4 sm:gap-6` para timeline y habilidades.
  - `gap-3` (12px) para grupos de botones de acción.
  - `gap-2` (8px) para listas de chips o tags.

### 4.3 Estándar de Microinteracciones & Transiciones
- **Duración & Curva Estándar:** `transition-all duration-200 ease-out`.
- **Interacción Hover en Tarjetas:**
  - Transformación vertical suave: `hover:-translate-y-1`.
  - Aclarado de fondo: de `bg-[#111625]` a `hover:bg-[#182032]`.
  - Resaltado de borde: de `border-zinc-800/80` a `hover:border-zinc-700/80` (o con resplandor sutil `hover:border-blue-500/30`).
- **Interacción Hover en Botones Primarios:**
  - `bg-blue-600 hover:bg-blue-500 active:scale-[0.98] transition-all duration-150`.
- **Interacción de Botones Secundarios:**
  - `bg-[#111625] hover:bg-[#182032] border border-zinc-800 hover:border-zinc-700 text-zinc-300 hover:text-white transition-all duration-150`.
- **Animación Pulsante de Estado:**
  - Dot pulsante continuo: `animate-pulse` de Tailwind CSS en círculo esmeralda de 8x8px (`w-2 h-2 rounded-full bg-emerald-400`).
- **Animación de Modal:**
  - Backdrop: `animate-fade-in` (opacidad de 0 a 1 en 150ms).
  - Modal Card: `animate-scale-up` (escala de 0.96 a 1.0 con opacidad en 200ms ease-out).
- **Accesibilidad de Movimiento (Reduced Motion):**
  - Todas las animaciones respetan `motion-reduce:transition-none` y `motion-reduce:animate-none`.

---

## 5. ESPECIFICACIÓN DETALLADA DE COMPONENTES UI/UX

---

### 5.1 Status Pill (Availability Badge con Pulso Esmeralda)

#### A. Anatomía Visual & Estados
- **Forma:** Cápsula `rounded-full` con borde sutil.
- **Punto de Estado:** Círculo esmeralda de 8px con animación pulsante continua (`animate-pulse`).
- **Texto:** Monospaciado en mayúsculas: `"DISPONIBLE EN SEVILLA & REMOTO"`.
- **Accesibilidad:** `role="status"`, `aria-live="polite"`, etiqueta textual accesible para lectores de pantalla.

#### B. Código de Referencia para Implementación (TSX)
```tsx
export function StatusPill() {
  return (
    <div
      role="status"
      aria-label="Estado laboral: Disponible para contratación en Sevilla y en remoto"
      className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-medium bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 shadow-sm shadow-emerald-950/30 select-none"
    >
      <span className="relative flex h-2 w-2">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
        <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
      </span>
      <span>DISPONIBLE EN SEVILLA & REMOTO</span>
    </div>
  );
}
```

---

### 5.2 Barra de Navegación (Navbar con Smooth Scroll)

#### A. Anatomía Visual
- **Fijación:** `sticky top-0 z-40 w-full`.
- **Superficie:** Fondo `#090d16` con 80% de opacidad y desenfoque de cristal: `bg-[#090d16]/80 backdrop-blur-md border-b border-zinc-800/80`.
- **Altura:** `h-16` (64px).
- **Contenedor:** `max-w-6xl mx-auto px-4 sm:px-6 flex items-center justify-between`.

#### B. Elementos del Navbar
1. **Logo / Monograma:**
   - Enlace a `#hero` o `#inicio`.
   - Texto: `<span className="font-mono font-bold text-white tracking-tight text-base">&lt;YM /&gt;</span>` o `Yoider<span className="text-blue-500">.dev</span>`.
2. **Enlaces de Navegación Escritorio (`hidden md:flex items-center gap-6`):**
   - Enlaces a secciones con desplazamiento suave (*smooth scrolling*):
     * `#sobre-mi` -> Sobre Mí
     * `#proyectos` -> Proyectos
     * `#experiencia` -> Experiencia
     * `#habilidades` -> Habilidades
     * `#contacto` -> Contacto
   - Estilo de enlaces: `text-sm font-medium text-zinc-400 hover:text-white transition-colors duration-200`.
3. **CTA Rápido en Navbar:**
   - Botón "CV PDF": `px-3 py-1.5 text-xs font-medium font-mono text-zinc-200 bg-zinc-800/70 hover:bg-zinc-700/80 border border-zinc-700/60 rounded-lg transition-colors flex items-center gap-1.5`.
4. **Menú Hamburguesa Móvil (`md:hidden`):**
   - Botón toggle con icono de menú / X (`lucide-react`).
   - Panel desplegable o drawer deslizante con fondo `#111625` y bordes `#1e293b`.
   - Cierre automático al pulsar un enlace de navegación o al pulsar fuera del menú.

---

### 5.3 Encabezados de Sección Estandarizados (Section Headers)

Todos los bloques temáticos de la página comparten una estructura consistente para garantizar coherencia editorial:

```tsx
interface SectionHeaderProps {
  eyebrow: string;     // Ej: "01 // TRAYECTORIA", "02 // INGENIERÍA & ARQUITECTURA"
  title: string;       // Ej: "Proyectos Técnicos Destacados"
  description?: string;// Ej: "Sistemas en producción con foco en escalabilidad, IA multimodal y arquitectura limpia."
}

export function SectionHeader({ eyebrow, title, description }: SectionHeaderProps) {
  return (
    <div className="mb-12 sm:mb-16">
      <div className="inline-block text-xs font-mono font-medium tracking-widest text-blue-400 uppercase mb-2">
        {eyebrow}
      </div>
      <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white mb-3">
        {title}
      </h2>
      {description && (
        <p className="text-sm sm:text-base text-zinc-400 max-w-2xl leading-relaxed">
          {description}
        </p>
      )}
    </div>
  );
}
```

---

### 5.4 Tarjetas Interactivas de Proyectos (Interactive Project Cards)

#### A. Anatomía & Contenido
- **Contenedor:** `bg-[#111625] bg-zinc-900/60 backdrop-blur-md border border-zinc-800/80 rounded-2xl p-6 sm:p-8 flex flex-col justify-between hover:bg-[#182032] hover:border-zinc-700/80 transition-all duration-200 ease-out cursor-pointer group`.
- **Sección Superior (Header de Tarjeta):**
  - Fila con insignia de categoría (ej: "GOVTECH / LEGALTECH" o "AI SAAS" con acento púrpura) y badge de estado (ej: "Producción").
  - Título del proyecto: `text-xl font-bold text-white group-hover:text-blue-400 transition-colors flex items-center justify-between`.
  - Tagline / Resumen: `text-sm text-zinc-400 mt-2 line-clamp-2`.
- **Sección Central (Aspectos Técnicos Clave):**
  - Resumen conciso del reto o impacto de ingeniería.
  - Métrica destacada: Caja de métrica con fondo `bg-zinc-800/40 border border-zinc-700/40 rounded-lg p-3 my-4 flex items-center gap-3`.
- **Sección Inferior (Stack Chips & Disparador de Modal):**
  - Lista de chips monospaciados: `flex flex-wrap gap-1.5`.
    * Estilo de chip: `px-2 py-0.5 rounded text-xs font-mono bg-zinc-800/80 text-zinc-300 border border-zinc-700/50`.
  - Botón de acción: `text-xs font-mono text-blue-400 group-hover:text-blue-300 flex items-center gap-1 mt-4 pt-4 border-t border-zinc-800/60`.

#### B. Código de Referencia para Tarjeta de Proyecto (TSX)
```tsx
export function ProjectCard({ project, onOpenModal }: { project: Project; onOpenModal: (p: Project) => void }) {
  const isAI = project.category.toLowerCase().includes('ai') || project.tags.includes('Gemini');

  return (
    <article
      onClick={() => onOpenModal(project)}
      onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') onOpenModal(project); }}
      tabIndex={0}
      role="button"
      aria-haspopup="dialog"
      aria-label={`Ver detalles completos del proyecto ${project.title}`}
      className="group relative bg-[#111625] border border-zinc-800/80 rounded-2xl p-6 sm:p-7 flex flex-col justify-between hover:bg-[#182032] hover:border-zinc-700/90 hover:-translate-y-1 transition-all duration-200 ease-out focus:outline-none focus:ring-2 focus:ring-blue-500/50"
    >
      <div>
        <div className="flex items-center justify-between gap-2 mb-3">
          <span className={`text-[11px] font-mono uppercase tracking-wider px-2.5 py-0.5 rounded-full border ${
            isAI 
              ? 'bg-purple-500/10 text-purple-400 border-purple-500/20' 
              : 'bg-blue-500/10 text-blue-400 border-blue-500/20'
          }`}>
            {project.category}
          </span>
          <span className="text-xs font-mono text-zinc-500">{project.status}</span>
        </div>

        <h3 className="text-xl font-bold text-white group-hover:text-blue-400 transition-colors flex items-center gap-2">
          {project.title}
          <span className="text-zinc-500 group-hover:text-blue-400 group-hover:translate-x-0.5 transition-transform text-sm">
            ↗
          </span>
        </h3>

        <p className="text-sm text-zinc-400 mt-2 leading-relaxed line-clamp-3">
          {project.tagline}
        </p>

        {project.keyMetric && (
          <div className="my-4 p-3 rounded-lg bg-zinc-800/50 border border-zinc-700/40 flex items-baseline gap-2">
            <span className="text-lg font-mono font-bold text-white">{project.keyMetric.value}</span>
            <span className="text-xs text-zinc-400">{project.keyMetric.label}</span>
          </div>
        )}
      </div>

      <div className="mt-5 pt-4 border-t border-zinc-800/80">
        <div className="flex flex-wrap gap-1.5 mb-3">
          {project.stack.slice(0, 4).map((tech) => (
            <span
              key={tech}
              className="px-2 py-0.5 rounded text-[11px] font-mono bg-zinc-800/80 text-zinc-300 border border-zinc-700/40"
            >
              {tech}
            </span>
          ))}
          {project.stack.length > 4 && (
            <span className="px-1.5 py-0.5 rounded text-[11px] font-mono text-zinc-500">
              +{project.stack.length - 4}
            </span>
          )}
        </div>
        <span className="text-xs font-mono text-blue-400 group-hover:underline flex items-center gap-1">
          Ver arquitectura y métricas →
        </span>
      </div>
    </article>
  );
}
```

---

### 5.5 Modal de Detalle de Proyecto / Vista Expandida

#### A. Especificaciones de UX & Comportamiento
1. **Backdrop:** `fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6 overflow-y-auto`.
2. **Caja Modal:** `relative w-full max-w-2xl sm:max-w-3xl my-auto bg-[#111625] border border-zinc-800/90 rounded-2xl p-6 sm:p-8 shadow-2xl overflow-hidden`.
3. **Bloqueo de Scroll del Body:** Al montarse el modal, aplicar `document.body.style.overflow = 'hidden'`; al desmontarse, restaurar a `''`.
4. **Cierre Accesible:**
   - Botón "X" en esquina superior derecha: `absolute top-4 right-4 p-2 text-zinc-400 hover:text-white rounded-lg hover:bg-zinc-800 transition-colors`.
   - Cierre al pulsar tecla `Escape`.
   - Cierre al pulsar sobre el backdrop (fuera del contenedor modal).
   - Trampa de foco (*focus trap*) básica: el foco inicial recae en el botón de cierre o título del modal; al cerrar, el foco retorna a la tarjeta que lo disparó.

#### B. Secciones de Contenido del Modal
1. **Encabezado del Proyecto:** Título, categoría, rol de Yoider, estado de producción y botón de cierre.
2. **El Problema de Negocio (`text-zinc-300`):** Párrafo explicativo con caja de llamada visualmente delimitada.
3. **Arquitectura de Solución:** Lista estructurada paso a paso con los patrones técnicos implementados (Webhooks, Gemini Vision, Redis Workers, Human-in-the-loop, Prisma).
4. **Rejilla de Métricas Clave (`grid grid-cols-2 sm:grid-cols-4 gap-3`):** Cajas con métricas numéricas grandes (`text-2xl font-mono font-bold text-white`) y etiqueta descriptiva (`text-xs text-zinc-400`).
5. **Stack Tecnológico Detallado:** Clasificado por capas (Frontend, Backend, AI / Modelos, Base de Datos, Infraestructura).
6. **Pie de Modal:** Enlaces externos si aplican (Demo, Repositorio, o solicitud de walkthrough) y botón secundario "Cerrar".

#### C. Código de Referencia para Modal (TSX)
```tsx
'use client';
import { useEffect, useRef } from 'react';

interface ProjectModalProps {
  project: Project | null;
  isOpen: boolean;
  onClose: () => void;
}

export function ProjectDetailModal({ project, isOpen, onClose }: ProjectModalProps) {
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };

    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen || !project) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-sm animate-fade-in overflow-y-auto"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-project-title"
    >
      <div
        ref={modalRef}
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-3xl my-auto bg-[#111625] border border-zinc-800 rounded-2xl p-6 sm:p-8 shadow-2xl max-h-[90vh] overflow-y-auto"
      >
        {/* Botón de Cierre */}
        <button
          onClick={onClose}
          aria-label="Cerrar modal de detalles"
          className="absolute top-4 right-4 p-2 text-zinc-400 hover:text-white rounded-lg hover:bg-zinc-800 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {/* Encabezado */}
        <div className="mb-6 pr-8">
          <span className="text-xs font-mono uppercase tracking-wider text-blue-400 bg-blue-500/10 border border-blue-500/20 px-2.5 py-1 rounded-full">
            {project.category}
          </span>
          <h2 id="modal-project-title" className="text-2xl sm:text-3xl font-bold text-white mt-3">
            {project.title}
          </h2>
          <p className="text-sm font-mono text-zinc-400 mt-1">
            Rol: <span className="text-zinc-200">{project.role}</span> | Estado: <span className="text-zinc-200">{project.status}</span>
          </p>
        </div>

        {/* Problema de Negocio */}
        <section className="mb-6 p-4 rounded-xl bg-zinc-900/60 border border-zinc-800/80">
          <h4 className="text-xs font-mono uppercase tracking-wider text-zinc-400 mb-2 font-semibold">
            El Problema de Negocio
          </h4>
          <p className="text-sm text-zinc-300 leading-relaxed">
            {project.problem}
          </p>
        </section>

        {/* Arquitectura de Solución */}
        <section className="mb-6">
          <h4 className="text-xs font-mono uppercase tracking-wider text-blue-400 mb-3 font-semibold">
            Arquitectura de Solución & Patrones Técnicos
          </h4>
          <div className="space-y-2.5">
            {project.architecture.map((item, idx) => (
              <div key={idx} className="flex items-start gap-3 p-3 rounded-lg bg-zinc-800/30 border border-zinc-800">
                <span className="font-mono text-xs text-blue-400 font-bold mt-0.5">{idx + 1}.</span>
                <p className="text-sm text-zinc-300 leading-relaxed">{item}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Métricas Clave */}
        {project.metrics && project.metrics.length > 0 && (
          <section className="mb-6">
            <h4 className="text-xs font-mono uppercase tracking-wider text-emerald-400 mb-3 font-semibold">
              Métricas & Resultados Medibles
            </h4>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {project.metrics.map((m, idx) => (
                <div key={idx} className="p-3.5 rounded-xl bg-[#182032] border border-zinc-800 text-center">
                  <div className="text-xl sm:text-2xl font-mono font-bold text-white">{m.value}</div>
                  <div className="text-xs text-zinc-400 mt-1 font-sans">{m.label}</div>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Stack Tecnológico */}
        <section className="mb-6">
          <h4 className="text-xs font-mono uppercase tracking-wider text-zinc-400 mb-2.5 font-semibold">
            Stack & Herramientas Empleadas
          </h4>
          <div className="flex flex-wrap gap-2">
            {project.stack.map((tech) => (
              <span
                key={tech}
                className="px-2.5 py-1 rounded-md text-xs font-mono bg-zinc-800 text-zinc-200 border border-zinc-700/60"
              >
                {tech}
              </span>
            ))}
          </div>
        </section>

        {/* Pie del Modal */}
        <div className="pt-4 border-t border-zinc-800 flex justify-end">
          <button
            onClick={onClose}
            className="px-5 py-2 text-sm font-medium text-zinc-300 bg-zinc-800 hover:bg-zinc-700 rounded-lg transition-colors"
          >
            Cerrar
          </button>
        </div>
      </div>
    </div>
  );
}
```

---

### 5.6 Botones de Contacto con Copiado al Portapapeles (Copy-to-Clipboard)

#### A. Especificaciones de UX & Feedback
- El usuario hace clic en el botón de copiar (Email o Teléfono).
- El texto es copiado mediante la API nativa `navigator.clipboard.writeText(...)`.
- El icono cambia inmediatamente de un icono de copia (copiar papeles) a un check esmeralda (`#10b981`).
- La insignia muestra `"¡Copiado al portapapeles!"` o cambia el texto por 2000 milisegundos.
- A los 2 segundos, el botón revierte suavemente a su estado original.
- Si el navegador no soporta clipboard API, provee fallback visual o abre el cliente de correo (`mailto:`).

#### B. Código de Referencia para Botón Copiable (TSX)
```tsx
'use client';
import { useState } from 'react';

interface CopyButtonProps {
  label: string;       // Ej: "Email", "Teléfono"
  value: string;       // Ej: "yodiermurillo@gmail.com", "+34 604 30 52 21"
  href?: string;       // Opcional para click secundario (mailto:, tel:)
}

export function CopyContactButton({ label, value, href }: CopyButtonProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(value);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      if (href) window.location.href = href;
    }
  };

  return (
    <div className="flex items-center justify-between p-4 rounded-xl bg-[#111625] border border-zinc-800 hover:border-zinc-700 transition-colors">
      <div className="flex flex-col">
        <span className="text-xs font-mono text-zinc-500 uppercase">{label}</span>
        <span className="text-sm font-mono font-medium text-zinc-200 mt-0.5">{value}</span>
      </div>
      <button
        onClick={handleCopy}
        aria-label={`Copiar ${label} al portapapeles`}
        className={`px-3 py-1.5 rounded-lg text-xs font-mono font-medium transition-all flex items-center gap-1.5 ${
          copied
            ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/30'
            : 'bg-zinc-800/80 hover:bg-zinc-700 text-zinc-300 border border-zinc-700/60'
        }`}
      >
        {copied ? (
          <>
            <svg className="w-3.5 h-3.5 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
            <span>¡Copiado!</span>
          </>
        ) : (
          <>
            <svg className="w-3.5 h-3.5 text-zinc-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
            </svg>
            <span>Copiar</span>
          </>
        )}
      </button>
    </div>
  );
}
```

---

### 5.7 Línea de Tiempo de Experiencia (Experience Timeline)

- **Línea Guía:** Eje vertical `border-l border-zinc-800` posicionado a la izquierda en móvil y centrado o a la izquierda en desktop.
- **Nodo / Hito:** Círculo de 12px con relleno azul tecnológico (`bg-blue-500`) y anillo exterior oscuro para separar la línea (`ring-4 ring-[#090d16]`).
- **Tarjeta de Posición:**
  - Contenedor `#111625` con padding `p-6`.
  - Fecha en pastilla monospaciada: `text-xs font-mono text-zinc-500 bg-zinc-900/80 px-2.5 py-0.5 rounded-full border border-zinc-800`.
  - Empresa & Cargo: `text-lg font-bold text-white` y `text-sm text-blue-400 font-medium`.
  - Lista de logros técnicos con bullets discretos.
  - Chips de tecnologías aplicadas.

---

### 5.8 Pie de Página (Footer de Ingeniería)

- **Fondo:** `#090d16` con borde superior sutil de 1px (`border-t border-zinc-800/80`).
- **Padding:** `py-12 sm:py-16`.
- **Estructura:**
  - Nombre y rol: Yoider Murillo Salazar — Software Engineer.
  - Indicador de horario local / base: `Sevilla, España (UTC+2)`.
  - Declaración de stack: `"Construido con Next.js (App Router), TypeScript & Tailwind CSS"`.
  - Enlaces a perfiles públicos (GitHub, LinkedIn, WhatsApp, Email).
  - Enlace smooth-scroll "Volver arriba ↑".

---

## 6. REGLAS DE RESPONSIVIDAD MÓVIL (VIEWPORT >= 375px)

### 6.1 Principio Cero Desbordamiento Horizontal (Zero Horizontal Overflow)
- **Viewport Mínimo de Prueba:** 375px (iPhone SE / iPhone 13 Mini / Android compacto).
- **Regla Estructural:**
  - El contenedor raíz debe poseer `overflow-x-hidden`.
  - Ningún elemento hijo debe tener anchuras fijas en píxeles mayores a `300px`. Emplear siempre `w-full max-w-[...]`.
  - Todos los textos largos (emails, URLs, nombres técnicos) deben contar con `break-words` o `break-all` según proceda para evitar estiramiento del viewport.
  - Los contenedores de código o bloques monospaciados deben portar `overflow-x-auto` con scrollbar delgada.

### 6.2 Matriz de Grilla Adaptativa por Breakpoints

| Sección / Componente | Móvil (< 768px) | Tablet (768px - 1024px) | Desktop (>= 1024px) |
|---|---|---|---|
| **Layout Global** | 1 columna, margen `px-4` | 1 columna, margen `px-6` | Centrado `max-w-6xl`, margen `px-8` |
| **Hero Actions** | Botones apilados verticalmente (`flex-col w-full`) | Fila horizontal (`flex-row`) | Fila horizontal con accesos directos |
| **Tarjetas de Proyecto** | `grid-cols-1` (1 tarjeta por fila) | `grid-cols-1` o `md:grid-cols-2` | `grid-cols-2` (óptimo para lectura técnica) |
| **Modal de Proyecto** | `max-w-full m-2 p-5` | `max-w-2xl p-6` | `max-w-3xl p-8` |
| **Métricas en Modal** | 2 columnas (`grid-cols-2`) | 4 columnas (`sm:grid-cols-4`) | 4 columnas |
| **Matriz de Habilidades** | 1 columna (`grid-cols-1`) | 2 columnas (`md:grid-cols-2`) | 3 columnas (`lg:grid-cols-3`) |
| **Contact Buttons** | 1 columna (`grid-cols-1`) | 2 columnas (`md:grid-cols-2`) | 2 columnas (`grid-cols-2`) |
| **Navbar** | Menú colapsable con hamburguesa | Enlaces visibles compactos | Enlaces completos + botón de acción |

### 6.3 Ergonomía Táctil (Mobile Touch Targets)
- Cualquier botón, enlace o elemento interactivo debe tener un área táctil mínima de **44 × 44 píxeles** en móviles (bien sea por dimensiones intrínsecas o mediante padding/margins invisibles).
- Espaciado mínimo de 8px entre botones contiguos para evitar pulsaciones erróneas.

---

## 7. CONFIGURACIÓN TÉCNICA PARA IMPLEMENTACIÓN EN NEXT.JS & TAILWIND

### 7.1 Definición en `globals.css` / CSS Variables

```css
@tailwind base;
@tailwind components;
@tailwind utilities;

:root {
  --bg-canvas: #090d16;
  --bg-card: #111625;
  --bg-card-hover: #182032;
  --border-subtle: #1e293b;
  --border-hover: #334155;
  --accent-tech: #3b82f6;
  --accent-tech-indigo: #6366f1;
  --accent-ai: #a855f7;
  --accent-ai-bright: #c084fc;
  --accent-status: #10b981;
  --accent-status-bright: #34d399;
  --text-primary: #f8fafc;
  --text-secondary: #94a3b8;
  --text-tertiary: #64748b;
}

html {
  scroll-behavior: smooth;
  background-color: var(--bg-canvas);
  color: var(--text-primary);
}

body {
  overflow-x: hidden;
  min-height: 100vh;
  background-color: #090d16;
  color: #94a3b8;
  font-feature-settings: "cv02", "cv03", "cv04", "cv11";
}

/* Scrollbar minimalista oscuro para modales y bloques de código */
::-webkit-scrollbar {
  width: 6px;
  height: 6px;
}

::-webkit-scrollbar-track {
  background: #090d16;
}

::-webkit-scrollbar-thumb {
  background: #1e293b;
  border-radius: 9999px;
}

::-webkit-scrollbar-thumb:hover {
  background: #334155;
}
```

### 7.2 Mapeo en `tailwind.config.ts`

```typescript
import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        canvas: '#090d16',
        surface: {
          DEFAULT: '#111625',
          hover: '#182032',
        },
        border: {
          subtle: '#1e293b',
          hover: '#334155',
        },
        tech: {
          DEFAULT: '#3b82f6',
          indigo: '#6366f1',
        },
        ai: {
          DEFAULT: '#a855f7',
          bright: '#c084fc',
        },
        status: {
          DEFAULT: '#10b981',
          bright: '#34d399',
        },
      },
      fontFamily: {
        sans: ['var(--font-geist-sans)', 'Inter', 'system-ui', 'sans-serif'],
        mono: ['var(--font-geist-mono)', 'JetBrains Mono', 'monospace'],
      },
      animation: {
        'fade-in': 'fadeIn 200ms ease-out forwards',
        'scale-up': 'scaleUp 200ms ease-out forwards',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        scaleUp: {
          '0%': { opacity: '0', transform: 'scale(0.96)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
      },
    },
  },
  plugins: [],
};

export default config;
```

---

## 8. CHECKLIST DE CONFORMIDAD DEL SISTEMA DE DISEÑO (PARA TESTING & AUDITORÍA)

- [ ] **Fondo Global:** Validado en `#090d16`. Sin blancos puros o grises cálidos accidentales.
- [ ] **Tarjetas y Superficies:** Fondo `#111625` con bordes finos `#1e293b` de 1px. Estados hover en `#182032`.
- [ ] **Semántica del Verde Esmeralda:** Únicamente presente en el Status Pill (`#10b981` / `#34d399`), confirmación de copiado y deltas positivos. No existe en botones genéricos.
- [ ] **Status Pill Animado:** Dot verde con clase `animate-pulse` o `animate-ping` con texto exacto `"DISPONIBLE EN SEVILLA & REMOTO"`.
- [ ] **Semántica de IA:** Badges de proyectos y tecnologías con acento púrpura (`#a855f7` / `#c084fc`).
- [ ] **Fuentes Tipográficas:** `font-sans` para prosa e interfaz; `font-mono` para código, stack tags, métricas numéricas y fechas.
- [ ] **Responsividad 375px:** Ausencia total de barra de scroll horizontal en viewport móvil de 375px de ancho.
- [ ] **Comportamiento Modal:** Backdrop oscuro, cierre con botón 'X', tecla `Escape`, clic exterior y bloqueo de scroll en `document.body`.
- [ ] **Copiado al Portapapeles:** Notificación visual temporal ("¡Copiado!") con reversión automática a los 2 segundos.
- [ ] **Microinteracciones:** Transiciones fluidas en `duration-200 ease-out` sin congelamientos de frame.

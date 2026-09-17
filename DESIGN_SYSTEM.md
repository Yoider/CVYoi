# DESIGN_SYSTEM.md — ESPECIFICACIÓN DE UI/UX & IDENTIDAD VISUAL (CORPORATE CV EDITION)
> Documento de directrices visuales, colores, tipografía y componentes para la construcción de la Web CV / Portafolio de Yoider Murillo Salazar.
> Inspirado directamente en la identidad cromática y tipográfica del Currículum Corporativo PDF.

---

## 1. FILOSOFÍA VISUAL & CONCEPTO
- **Arquetipo:** *Corporate Engineering, Executive Dual-Tone, Clean Tech Clarity*.
- **Sensación buscada:** Profesional, pulcra, corporativa y de alto nivel de ingeniería (estilo Stripe / Linear / Executive PDF Resume).
- **Enfoque funcional:** Barras de título contrastadas en Azul Marino Corporativo, contenedor lateral en Azul Pizarra, tipografía en mayúsculas sostenidas para secciones y espaciados calculados.

---

## 2. PALETA DE COLORES (CORPORATE PDF MAPPING)

### A. Fondo y Superficies
- **Background Principal (Canvas):** `#f8fafc` (`bg-slate-50` / Gris Hielo ultra limpio).
- **Barras Banner de Sección:** `#0b2545` (`bg-[#0b2545]` / Azul Marino Corporativo profundo).
- **Surface / Cards Secundarias:** `#ffffff` (`bg-white` con bordes finos `#e2e8f0` y sombra sutil `shadow-sm`).
- **Sidebar / Paneles Destacados:** `#1e293b` (`bg-slate-800` / Azul Pizarra con texto blanco).
- **Bordes & Divisores:** `#cbd5e1` / `#e2e8f0` (`border-slate-200` o `border-slate-300`).

### B. Acentos y Colores de Marca
- **Acento Primario (Tech / Banner Navy):** `#0b2545` (Navy Primario) y `#1d4ed8` (`blue-700` para CTAs interactivos).
- **Acento Secundario (AI / Visión Multimodal):** `#6b21a8` (`purple-800`) / `#7e22ce` (`purple-700`).
- **Acento de Éxito / Disponibilidad Inmediata:** `#10b981` (`emerald-500`) / `#059669` (`emerald-600`).
  - *Uso:* Badge pulsante de "Disponible para contratación en Sevilla".

### C. Tipografía y Textos
- **Texto Principal (Encabezados en Banner):** `#ffffff` (`text-white` en banners).
- **Texto Principal en Cuerpo:** `#0f172a` (`text-slate-900` / Charcoal Navy).
- **Texto Secundario (Subtítulos y descripciones):** `#475569` (`text-slate-600`).
- **Texto Terciario (Metadatos, fechas):** `#64748b` (`text-slate-500`).

---

## 3. TIPOGRAFÍA

### A. Familias Tipográficas
1. **Principal (Sans-serif / UI):** `Geist Sans`, `Inter` o `system-ui`.
   - *Clases:* `font-sans`
   - *Pesos recomendados:* Regular (400) para lectura; Medium (500) para subtítulos; Bold (700) / Extrabold (800) para encabezados.
2. **Monoespaciada (Código, Badges Técnicos y Números):** `Geist Mono` o `JetBrains Mono`.
   - *Clases:* `font-mono`

### B. Jerarquía y Tamaños
- **H1 (Hero Principal):** `text-4xl sm:text-6xl font-extrabold tracking-tight text-slate-900`
- **Barras de Sección (H2 Banners):** `w-full bg-[#0b2545] text-white py-3 px-6 text-xl sm:text-2xl font-bold tracking-wider uppercase text-center rounded-lg shadow-md`
- **H3 (Tarjetas de Proyecto / Empresas):** `text-lg sm:text-xl font-bold text-slate-900`
- **Body / Párrafos:** `text-sm sm:text-base text-slate-600 leading-relaxed`
- **Badges / Metadatos:** `text-xs font-mono font-medium tracking-wide uppercase`

---

## 4. SISTEMA DE ESPACIADOS Y BORDES

- **Border Radius:** `rounded-xl` (12px) para cards, `rounded-lg` para banners, `rounded-full` para badges.
- **Bordes:** `border border-slate-200 hover:border-slate-300 transition-colors shadow-sm`.
- **Gaps y Padding:** `py-12 sm:py-16`, padding interno `p-6 sm:p-8`.

---

## 5. COMPONENTES CLAVE & PAUTAS DE IMPLEMENTACIÓN

### A. Badge de Disponibilidad ("Status Pill")
```tsx
<div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-mono font-semibold bg-emerald-50 text-emerald-700 border border-emerald-300 shadow-sm">
  <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
  DISPONIBLE EN SEVILLA & REMOTO
</div>
```
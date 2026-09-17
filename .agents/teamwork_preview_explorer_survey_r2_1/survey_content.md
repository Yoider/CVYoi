# SURVEY CONTENT & DATA SPECIFICATIONS
## Web CV / Interactive Portfolio — Yoider Murillo Salazar
> Documento maestro de especificación de contenido, narrativa profesional, detalle técnico de proyectos, matriz de habilidades y esquemas de datos TypeScript para la construcción del portafolio interactivo.
> Generado por: `teamwork_preview_explorer_survey_r2_1`
> Fecha: 2026-09-14

---

## 1. RESUMEN EJECUTIVO & IDENTIDAD PROFESIONAL

- **Nombre Completo:** Yoider Murillo Salazar
- **Título Profesional:** Software Engineer & Full Stack Developer
- **Especialización:** Arquitecturas Backend Robustas (.NET Core / Clean Architecture) + Full Stack Moderno (Next.js / TypeScript) + IA Multimodal & Automatización de Procesos
- **Ubicación:** Sevilla, Andalucía, España
- **Disponibilidad:** `"DISPONIBLE EN SEVILLA & REMOTO"` (Modalidad híbrida en Sevilla o 100% Remoto)
- **Idiomas:** Español (Nativo), Inglés (Técnico / B2 Profesional)
- **Estética de Portafolio:** Modern Engineering / Dark Mode Minimalist (Inspirado en Linear, Vercel, Stripe y Notion Dark).
- **Enfoque Clave:** Alta ingeniería, soluciones desacopladas, trazabilidad técnica, rendimiento web instantáneo y aplicación práctica de Inteligencia Artificial para resolver fricciones de negocio reales.

---

## 2. SECCIÓN 1: HERO SECTION

### 2.1 Objetivos Visuales y Funcionales
- Transmitir de inmediato el calibre técnico como ingeniero de software senior/full-stack con bases sólidas en backend y dominio de tecnologías contemporáneas.
- Indicar disponibilidad inmediata de contratación en Sevilla y en remoto con indicador pulsante esmeralda (`#10b981`).
- Proveer acceso rápido a descarga de CV en formato PDF, contacto directo y enlaces a perfiles públicos (GitHub, LinkedIn).

### 2.2 Especificación de Contenidos & Copy

| Elemento | Especificación / Copy Exacto | Comportamiento / Estilo |
|---|---|---|
| **Status Pill / Badge** | `DISPONIBLE EN SEVILLA & REMOTO` | `bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 font-mono text-xs uppercase px-3 py-1 rounded-full` con punto verde pulsante `w-2 h-2 rounded-full bg-emerald-400 animate-pulse` |
| **Nombre** | `Yoider Murillo Salazar` | `text-4xl sm:text-6xl font-extrabold tracking-tight text-white font-sans` |
| **Rol / Titular** | `Software Engineer & Full Stack Developer` | Gradiente sutil o color secundario `text-zinc-400 font-medium text-xl sm:text-2xl mt-2` |
| **Propuesta de Valor (Pitch)** | "Ingeniero de software con sólida base en arquitecturas limpias y backend de alto rendimiento (.NET Core, C#), evolucionado hacia el ecosistema full-stack moderno (Next.js, TypeScript) y el despliegue de soluciones de Inteligencia Artificial Multimodal aplicadas a procesos de negocio reales." | Párrafo legible `text-zinc-400 text-base sm:text-lg leading-relaxed max-w-2xl mt-4` |
| **Subtítulo Geográfico** | "Construyendo software escalable, interfaces reactivas y sistemas desacoplados desde Sevilla, España." | `text-zinc-500 text-sm font-mono mt-1` |
| **CTA Primario** | `Descargar CV (PDF)` | Botón primario: Fondo `#3b82f6` (`bg-blue-600 hover:bg-blue-500 text-white font-medium px-5 py-2.5 rounded-lg transition-colors flex items-center gap-2`). Enlace a `/cv-yoider-murillo.pdf` con atributo `download`. |
| **CTA Secundario** | `Contactar` o `Ver Proyectos` | Botón secundario: Fondo `#111625` (`bg-zinc-900/60 hover:bg-[#182032] border border-zinc-800/80 text-zinc-200 px-5 py-2.5 rounded-lg transition-colors`). Enlace a `#contacto` o `#proyectos`. |
| **Accesos Rápidos** | GitHub, LinkedIn, Email, WhatsApp | Iconos minimalistas en `text-zinc-400 hover:text-white transition-colors` con tooltips accesibles. |

---

## 3. SECCIÓN 2: SOBRE MÍ (STORYTELLING & TRAYECTORIA)

### 3.1 Eje Narrativo: Evolución de un Ingeniero de Software
La historia de Yoider Murillo Salazar se estructura en tres etapas coherentes que demuestran rigor, adaptabilidad y hambre técnica:

1. **La Forja del Backend en Colombia (Uno 27 S.A.S. & Abai Group):**
   Comenzó en las trincheras del desarrollo backend corporativo. En entornos exigentes de telecomunicaciones y servicios empresariales, diseñó y mantuvo APIs RESTful y microservicios críticos en C# y .NET Core. La adopción de Clean Architecture, Domain-Driven Design (DDD), Entity Framework Core y SQL Server le enseñó que el software debe construirse para durar: desacoplamiento de capas, inyección de dependencias, consistencia transaccional y cobertura de pruebas unitarias.

2. **La Conquista del Full-Stack Moderno (Next.js & TypeScript):**
   Con una mentalidad orientada a la ingeniería de sistemas, dio el salto natural hacia el ecosistema web moderno. Al adoptar TypeScript, encontró la robustez del tipado estricto que valoraba en C#, pero con la agilidad y expresividad del frontend contemporáneo. Especializándose en Next.js (App Router, Server Components y Server Actions), perfeccionó la creación de aplicaciones con renderizado híbrido, latencia mínima y experiencia de usuario fluida.

3. **Sevilla, Resiliencia y la Vanguardia de la IA Multimodal:**
   Al trasladarse a Sevilla (España), consolidó su trayectoria demostrando una enorme capacidad de resiliencia y adaptación profesional. En lugar de limitarse a paradigmas convencionales, se sumergió en la revolución de la Inteligencia Artificial: ingeniería de contexto, integración de modelos de visión y lenguaje (Google Gemini 2.5 Flash), orquestación de agentes con Function Calling, el protocolo MCP (Model Context Protocol) y arquitecturas con verificación humana (Human-in-the-Loop).

### 3.2 Principios de Ingeniería de Yoider
- **Pragmatismo sobre Dogma:** Elegir la herramienta adecuada para el problema real; no añadir complejidad accidental donde una solución directa es más robusta.
- **Trazabilidad & Mantenibilidad:** Escribir código legible con contratos de tipos estrictos, modularidad y separación de responsabilidades.
- **IA como Multiplicador Operativo:** La IA no reemplaza la arquitectura de software; requiere arquitectura de software sólida para ser confiable, segura y medible.

---

## 4. SECCIÓN 3: PROYECTOS TÉCNICOS DESTACADOS

Cada proyecto se presenta en tarjeta interactiva (`#111625`, borde `1px border-zinc-800/80`, hover `#182032`) que al pulsar abre un modal detallado o vista expandida con métricas, arquitectura y aprendizajes técnicos.

---

### 4.1 Proyecto 1: Impulsar — GovTech / LegalTech SaaS & Agente Multimodal
- **Identificador:** `impulsar`
- **Categoría:** GovTech / LegalTech / AI SaaS
- **Rol en el proyecto:** Arquitecto de Software & Full Stack Developer
- **Estado:** Producción / En operación
- **Color de Acento:** Púrpura `#a855f7` (AI & Automatización)
- **Tagline:** Automatización inteligente de expedientes y trámites documentales complejos mediante IA multimodal y mensajería omnicanal.

#### A. Problema de Negocio
Las entidades, gestorías y organizaciones de servicios enfrentan avalanchas de documentación física y digital heterogénea (escrituras notariales, identificaciones, facturas, formularios escaneados de baja resolución). El procesamiento manual genera cuellos de botella de hasta 5 días hábiles, alta tasa de errores en transcripción y frustración en los usuarios debido a la falta de respuestas en tiempo real.

#### B. Arquitectura de Solución
1. **Canal de Ingesta Omnicanal:** Integración directa con Meta WhatsApp Cloud API mediante Webhooks asíncronos en Next.js App Router, permitiendo a los solicitantes enviar documentos mediante fotos o PDFs en chat.
2. **Pipeline de Inferencia Multimodal:** Orquestación con Google Gemini 2.5 Flash para visión por computadora, OCR semántico y parseo guiado por JSON Schema con Function Calling, extrayendo datos estructurados normalizados con puntuación de confianza por campo.
3. **Desacoplamiento Asíncrono:** Colas de procesamiento con Redis / background workers que garantizan respuesta instantánea al webhook (< 200ms) y ejecución de inferencias pesadas sin riesgo de timeout.
4. **Patrón Human-in-the-Loop (HITL):** Panel administrativo en Next.js donde los expedientes con confianza inferior al 95% o discrepancias críticas son derivados a revisión asistida para validación humana antes de la emisión final.
5. **Persistencia & Auditoría:** PostgreSQL con Prisma ORM, registrando trazabilidad inmutable de estados y firmas criptográficas de los documentos procesados.

#### C. Métricas Clave
- **-75%** en tiempo medio de resolución de expedientes (de 48 horas a menos de 12 minutos).
- **94.2%** de precisión en extracción de campos no tabulares en documentos degradados.
- **+80%** de reducción en carga operativa de atención manual en primera fase.
- **Uptime:** 99.8% en recepción de webhooks de mensajería.

#### D. Tech Stack
- **Frontend & API:** Next.js (App Router), TypeScript, Tailwind CSS
- **IA & Modelos:** Google Gemini 2.5 Flash (Vision & Function Calling)
- **Mensajería:** Meta WhatsApp Cloud API (Graph API Webhooks)
- **Base de Datos & ORM:** PostgreSQL, Prisma ORM
- **Infraestructura & Colas:** Docker, Redis, Node.js Workers

---

### 4.2 Proyecto 2: CHRON0V4 — Developer Productivity & Context Engine
- **Identificador:** `chron0v4`
- **Categoría:** Developer Tooling / Context Architecture
- **Rol en el proyecto:** Creador & Desarrollador Principal
- **Estado:** Activo / Herramienta interna de desarrollo
- **Color de Acento:** Azul `#3b82f6` (Core Engineering)
- **Tagline:** Motor de preservación de contexto técnico y documentación estructurada basada en la metodología Diátaxis para flujos de trabajo con agentes.

#### A. Problema de Negocio
Durante el desarrollo de software asistido por IA y en equipos con alta rotación, se produce una severa "amnesia de contexto". Los modelos de lenguaje consumen millones de tokens redundantes intentando reconstruir la arquitectura del proyecto, se pierden decisiones pasadas y la documentación técnica se desincroniza rápidamente del código fuente.

#### B. Arquitectura de Solución
1. **Modelo Diátaxis Cuatripartito:** Separación estricta del conocimiento en cuatro cuadrantes: Tutoriales (aprendizaje), Guías paso a paso (resolución de tareas), Explicaciones (conceptos y decisiones arquitectónicas) y Referencia (APIs, esquemas y contratos).
2. **Motor de Indexación & Compresión AST:** Herramienta CLI desarrollada en TypeScript que analiza el árbol sintáctico (AST) de Markdown y código fuente, extrayendo firmas de funciones, interfaces y grafos de dependencia sin sobrecargar la ventana de atención.
3. **Integración Model Context Protocol (MCP):** Servidor MCP ligero que expone el contexto del repositorio a agentes autónomos en formato de consulta semántica en tiempo real.
4. **Resúmenes Incrementales:** Algoritmo de diffs conceptuales que actualiza solo las secciones del contexto afectadas por los últimos commits.

#### C. Métricas Clave
- **-60%** de consumo en tokens de entrada en sesiones continuas de codificación con IA.
- **100%** de trazabilidad de Decisiones Arquitectónicas (ADRs) asociadas a pull requests.
- **< 80ms** en tiempo de recuperación de contexto relevante mediante consultas de herramientas.

#### D. Tech Stack
- **Lenguaje & Core:** TypeScript, Node.js
- **CLI & AST:** Remark / Unified (Markdown AST), Commander.js
- **Protocolos:** Model Context Protocol (MCP), JSON-RPC
- **Metodología:** Diátaxis Framework
- **Distribución:** NPM package / CLI local

---

### 4.3 Proyecto 3: Finanzas Dashboard — Fintech Multi-Account Wealth Tracker
- **Identificador:** `finanzas-dashboard`
- **Categoría:** Fintech / SaaS Dashboard
- **Rol en el proyecto:** Full Stack Developer
- **Estado:** Completado / Producción
- **Color de Acento:** Esmeralda `#10b981` (Fintech / Éxito)
- **Tagline:** Panel financiero de alto rendimiento con cálculo reactivo de balances patrimoniales, soporte multicuentas y mutaciones atómicas mediante Server Actions.

#### A. Problema de Negocio
Los usuarios que operan con múltiples cuentas bancarias, pasarelas de pago (Stripe, PayPal) y carteras de inversión sufren por la falta de un visor consolidado en tiempo real. Las plataformas bancarias tradicionales son lentas, presentan interfaces anticuadas y no ofrecen proyecciones de flujo de caja inmediatas ni categorización automática.

#### B. Arquitectura de Solución
1. **Next.js App Router & Server Actions:** Mutaciones atómicas ejecutadas en el servidor sin necesidad de escribir capas intermedias de API manuales, garantizando seguridad transaccional y revalidación granular de caché (`revalidatePath`).
2. **Cálculo Reactivo de Balances:** Agregación en memoria con precisión decimal garantizada para múltiples divisas (EUR, USD, COP), reconciliando ingresos, gastos fijos y variables.
3. **Seguridad y Validación Tipada:** Validación estricta en tiempo de ejecución con Zod tanto en formulario cliente como en Server Action, previniendo inyecciones y discrepancias de formato.
4. **Visualizaciones de Alto Rendimiento:** Gráficos vectoriales optimizados con Recharts y Tailwind CSS, soportando modo oscuro nativo y renderizado adaptativo en móviles.

#### C. Métricas Clave
- **< 150ms** en tiempo de renderizado de balances consolidados y gráficos interactivos.
- **0 discrepancias** en reconciliación de balances multimoneda gracias al modelado con enteros/BigInt.
- **100%** de validación tipada estricta de extremo a extremo (TypeScript + Zod).

#### D. Tech Stack
- **Framework:** Next.js (App Router, React Server Components)
- **Lenguaje:** TypeScript
- **Estilos:** Tailwind CSS, Lucide React
- **Mutaciones & Validación:** Server Actions, Zod
- **Base de Datos:** PostgreSQL / Supabase, Prisma ORM
- **Visualización:** Recharts

---

### 4.4 Proyecto 4: Tuma_Z — B2C E-Commerce & Modular Architecture
- **Identificador:** `tuma-z`
- **Categoría:** E-Commerce / B2C Web Platform
- **Rol en el proyecto:** Full Stack Developer
- **Estado:** Producción / Desplegado
- **Color de Acento:** Azul `#3b82f6` (Arquitectura & Web)
- **Tagline:** Tienda online B2C de alto rendimiento con catálogo modular dinámico, filtrado instantáneo y backend desacoplado.

#### A. Problema de Negocio
Pequeñas y medianas empresas minoristas requieren canales de venta online directos con velocidad de carga excepcional y catálogo dinámico, sin las comisiones excesivas ni la lentitud de carga de plataformas monolíticas prediseñadas.

#### B. Arquitectura de Solución
1. **Renderizado Híbrido Optimizado:** Uso de Incremental Static Regeneration (ISR) para páginas de producto y Server-Side Rendering (SSR) para vistas dinámicas, maximizando SEO y reduciendo TTFB.
2. **Catálogo Modular Facetado:** Sistema de filtrado por múltiples facetas (precio, categorías, disponibilidad) ejecutado con latencia sub-50ms mediante estados optimizados.
3. **Gestión de Carrito Desacoplada:** Carrito reactivo con persistencia en LocalStorage sincronizado con servidor y cálculo automático de impuestos y envíos.
4. **Backend Estructurado:** API construida bajo principios de Clean Architecture con separación de casos de uso para órdenes, gestión de inventario y pasarela de pago.

#### C. Métricas Clave
- **98+** en Google Lighthouse (Performance, Accesibilidad, SEO, Best Practices).
- **1.1 segundos** de Time-to-Interactive (TTI) en dispositivos móviles con conexión 4G.
- **+35%** en tasa de conversión respecto a la versión monolítica anterior.

#### D. Tech Stack
- **Frontend:** Next.js, React, TypeScript, Tailwind CSS
- **Estado:** Zustand / React Context
- **Backend / API:** .NET Core Web API / Node.js
- **Base de Datos:** PostgreSQL / MySQL
- **Despliegue:** Vercel, Docker

---

## 5. SECCIÓN 4: LÍNEA DE TIEMPO DE EXPERIENCIA (EXPERIENCE TIMELINE)

### 5.1 Etapa 1: Uno 27 S.A.S. (Colombia)
- **Cargo:** Backend Software Engineer
- **Empresa:** Uno 27 S.A.S.
- **Ubicación:** Cali / Bogotá, Colombia
- **Periodo:** 2019 – 2021
- **Tipo:** Jornada completa
- **Descripción General:** Desarrollo de servicios backend empresariales de alta disponibilidad, diseño de APIs RESTful y gestión de bases de datos relacionales para clientes corporativos.
- **Hitos & Responsabilidades Técnicas:**
  - Diseño y mantenimiento de APIs RESTful en C# y .NET Core (.NET Framework / .NET Core 3.1 & 5).
  - Implementación de Clean Architecture (separación estricta en Domain, Application, Infrastructure y Presentation) y principios SOLID.
  - Modelado y optimización de bases de datos relacionales en SQL Server y PostgreSQL mediante Entity Framework Core y Dapper para consultas de alto rendimiento.
  - Implementación de esquemas de autenticación JWT y autorización granular por roles.
  - Creación de suites de pruebas unitarias automatizadas con xUnit y Moq, alcanzando una cobertura superior al 85% en la lógica de negocio nuclear.
- **Impacto:** Reducción del 40% en tiempos de respuesta en consultas transaccionales clave y estandarización del flujo de integración continua.
- **Tecnologías:** C#, .NET Core, ASP.NET Web API, Clean Architecture, SQL Server, PostgreSQL, Entity Framework Core, xUnit, Git, Docker.

---

### 5.2 Etapa 2: Abai Group (Colombia)
- **Cargo:** Full Stack / Backend Engineer
- **Empresa:** Abai Group (tras integración / expansión corporativa)
- **Ubicación:** Colombia (Operaciones Internacionales)
- **Periodo:** 2021 – 2023
- **Tipo:** Jornada completa
- **Descripción General:** Ingeniería y evolución de plataformas críticas de contact center, automatización de flujos omnicanal y desarrollo de microservicios distribuidos.
- **Hitos & Responsabilidades Técnicas:**
  - Desarrollo de microservicios en .NET Core / C# interconectados mediante colas de mensajería (RabbitMQ) y consumo de APIs de terceros.
  - Construcción e integración de módulos frontend interactivos con React y Vue.js para paneles de operación en tiempo real.
  - Optimización de consultas complejas y procedimientos almacenados en SQL Server para el procesamiento de millones de registros telefónicos y de soporte.
  - Despliegue de contenedores Docker en pipelines de CI/CD en Azure DevOps y entornos Linux.
  - Participación activa en ceremonias ágiles Scrum, revisiones cruzadas de código (Code Reviews) y redacción de especificaciones OpenAPI/Swagger.
- **Impacto:** Plataforma con capacidad para procesar más de 200,000 transacciones diarias con una disponibilidad garantizada del 99.9%.
- **Tecnologías:** .NET Core, C#, React, Vue.js, JavaScript/TypeScript, RabbitMQ, SQL Server, Azure DevOps, Docker, REST APIs, Microservicios.

---

### 5.3 Etapa 3: Consolidación, Resiliencia & Especialización en IA en Sevilla, España
- **Cargo:** Software Engineer & Multimodal AI Specialist
- **Empresa / Entorno:** Proyectos de Consultoría Tecnológica, I+D Aplicada & GovTech/Fintech
- **Ubicación:** Sevilla, Andalucía, España
- **Periodo:** 2023 – Presente
- **Tipo:** Autónomo / Freelance / Investigación y Desarrollo
- **Descripción General:** Traslado estratégico a España, demostrando enorme adaptabilidad y resiliencia profesional. Profundización acelerada en el stack web moderno (Next.js, TypeScript) y especialización pionera en Inteligencia Artificial Generativa y Multimodal.
- **Hitos & Responsabilidades Técnicas:**
  - Diseño de arquitecturas de software de extremo a extremo utilizando Next.js (App Router), TypeScript estricto y Tailwind CSS.
  - Creación de pipelines de IA multimodal combinando visión por computadora y LLMs (Google Gemini 2.5 Flash, OpenAI) para extracción estructurada de información documental.
  - Implementación de flujos de automatización con WhatsApp Cloud API, Function Calling y el protocolo Model Context Protocol (MCP).
  - Arquitectura de productos propios y para clientes: *Impulsar* (GovTech/LegalTech), *CHRON0V4* (preservación de contexto y Diátaxis) y *Finanzas Dashboard*.
  - Autoaprendizaje continuo e incorporación inmediata de nuevas especificaciones y herramientas del ecosistema open-source.
- **Impacto:** Creación de un catálogo de soluciones con valor comercial directo, automatizando hasta el 80% de tareas repetitivas en procesos documentales.
- **Tecnologías:** Next.js, React, TypeScript, Tailwind CSS, Google Gemini 2.5 Flash, WhatsApp Cloud API, MCP, PostgreSQL, Prisma, Python, Server Actions, Docker.

---

## 6. SECCIÓN 5: MATRIZ DE HABILIDADES TÉCNICAS (SKILLS MATRIX)

Organizada rigurosamente por capas según los requerimientos de la orden original:

```
┌─────────────────────────────────────────────────────────────────────────────┐
│ 1. BACKEND ARCHITECTURE & CORE                                              │
│ C# · .NET Core · ASP.NET Web API · Clean Architecture · REST APIs ·         │
│ Microservices · Entity Framework Core · CQRS · Dependency Injection · JWT  │
├─────────────────────────────────────────────────────────────────────────────┤
│ 2. MODERN FRONTEND                                                          │
│ Next.js (App Router) · React · TypeScript · Tailwind CSS · Vue.js ·         │
│ Server Components · Server Actions · Responsive Design · Zustand            │
├─────────────────────────────────────────────────────────────────────────────┤
│ 3. DATA & STORAGE                                                           │
│ PostgreSQL · Microsoft SQL Server · MySQL · Prisma ORM · EF Core ·          │
│ Redis · Supabase · Database Modeling & Query Optimization                   │
├─────────────────────────────────────────────────────────────────────────────┤
│ 4. AI & AUTOMATION                                                          │
│ Google Gemini Multimodal · LLM Vision · Function Calling · Structured JSON  │
│ Model Context Protocol (MCP) · Multi-Agent Systems · WhatsApp Cloud API     │
│ Human-in-the-Loop Pattern · Async Decoupling                                │
├─────────────────────────────────────────────────────────────────────────────┤
│ 5. TOOLS, DEVOPS & METHODOLOGIES                                            │
│ Git & GitHub · Docker · Turbopack · CI/CD · Postman / OpenAPI ·             │
│ Diátaxis Documentation · Linux / Bash · Visual Studio / VS Code             │
└─────────────────────────────────────────────────────────────────────────────┘
```

### Detalle por Categoría:

1. **Backend:**
   - **C# / .NET Core:** Dominio profundo de C# moderno, runtime .NET 6/7/8, desarrollo de APIs RESTful de alto rendimiento con ASP.NET Core.
   - **Clean Architecture:** Estructuración de proyectos desacoplados en capas (Domain, Application, Infrastructure, Presentation) garantizando independencia de frameworks y testabilidad.
   - **Entity Framework Core & Dapper:** Mapeo relacional objeto-relacional, optimización de queries LINQ, migraciones y ejecución de consultas directas de alto rendimiento.
   - **Patrones de Diseño:** CQRS, Mediator, Repository, Unit of Work, Inyección de Dependencias nativa, Middleware personalizado y validación con FluentValidation.
   - **Seguridad & APIs:** Autenticación/Autorización con JWT Bearer tokens, políticas de claims, hashing seguro y rate limiting.

2. **Frontend:**
   - **Next.js (App Router):** Dominio de React Server Components (RSC), Server Actions, Streaming SSR, rutas dinámicas y caché incremental.
   - **TypeScript:** Tipado estricto, interfaces avanzadas, genéricos, utility types y validación en tiempo de compilación.
   - **React 18 / 19:** Hooks personalizados, Concurrent Features, optimización con useMemo/useCallback y gestión reactiva de estado.
   - **Tailwind CSS:** Diseño mobile-first, variables CSS, layouts fluidos con Grid y Flexbox, y microinteracciones de 200ms sin dependencias pesadas.
   - **Vue.js:** Experiencia en componentes SFC, Vuex/Pinia y renderizado reactivo.

3. **Datos (Data):**
   - **PostgreSQL & MySQL:** Diseño relacional normalizado, índices B-Tree, restricciones de integridad y triggers.
   - **Microsoft SQL Server:** Procedimientos almacenados complejos, vistas indexadas, optimización de planes de ejecución y transaccionalidad ACID.
   - **Prisma ORM:** Modelado declarativo con `schema.prisma`, migraciones automatizadas y consultas fuertemente tipadas en TypeScript.
   - **Redis:** Almacenamiento clave-valor en memoria para caché distribuida, invalidación de sesiones y colas de trabajo asíncronas.

4. **IA & Automatización:**
   - **Google Gemini 2.5 Flash / Pro:** Integración de APIs multimodales para análisis de texto, documentos escaneados e imágenes de alta resolución.
   - **Function Calling & Structured Outputs:** Definición rigurosa de esquemas JSON para forzar al modelo a devolver salidas deterministas e interoperables con bases de datos.
   - **Model Context Protocol (MCP):** Implementación de clientes y servidores para proporcionar contexto de código y datos a agentes de IA.
   - **WhatsApp Cloud API:** Configuración y manejo de webhooks de la API de Meta para conversaciones bidireccionales y recepción de archivos multimedia.
   - **Human-in-the-Loop:** Diseño de interfaces de auditoría donde los humanos supervisan decisiones con bajo umbral de confianza del modelo.

5. **Herramientas & Metodologías:**
   - **Docker & Docker Compose:** Contenerización de microservicios, bases de datos y entornos locales reproducibles.
   - **Git & GitHub:** Flujo GitFlow, branches semánticos, pull requests rigurosos y GitHub Actions para CI/CD.
   - **Turbopack & Bundlers:** Optimización de builds y recarga ultrarrápida en Next.js.
   - **Metodología Diátaxis:** Organización de documentación técnica en cuatro dimensiones complementarias (Tutorials, How-To, Explanation, Reference).

---

## 7. SECCIÓN 6: CONTACTO DIRECTO & METADATOS

### Canales de Contacto Directo

| Canal | Valor / Enlace | Interacción / Comportamiento |
|---|---|---|
| **Email Principal** | `yodiermurillo@gmail.com` | Enlace `mailto:` directo con botón de "Copiar al portapapeles" y feedback de éxito visual (icono check esmeralda). |
| **Teléfono Móvil** | `+34 604 30 52 21` | Enlace `tel:+34604305221` para llamada directa desde dispositivos móviles. |
| **WhatsApp Directo** | `+34 604 30 52 21` | Enlace directo a `https://wa.me/34604305221?text=Hola%20Yoider,%20he%20visto%20tu%20portfolio%20y%20me%20gustar%C3%ADa%20conversar.` |
| **GitHub** | `https://github.com/yoi-hub` | Enlace externo con `target="_blank" rel="noopener noreferrer"`. Muestra badge con repositorios públicos. |
| **LinkedIn** | `https://www.linkedin.com/in/yoider-murillo-salazar/` | Enlace profesional externo directo al perfil verificado. |
| **Ubicación Física** | `Sevilla, Andalucía, España` | Badge geográfico con disponibilidad presencial/híbrida local. |
| **Currículum PDF** | `/cv-yoider-murillo.pdf` | Botón con descarga directa y previsualización. |

---

## 8. SECCIÓN 7: ESQUEMA DE MODELOS DE DATOS TYPESCRIPT (`types/portfolio.ts`)

A continuación se define la especificación estricta de interfaces TypeScript requeridas para tipar todo el contenido del sitio web:

```typescript
// types/portfolio.ts

export type AccentColor = 'blue' | 'purple' | 'emerald' | 'zinc';

export interface SocialLink {
  id: string;
  name: string;
  url: string;
  icon: string; // Nombre del icono de Lucide (p. ej. 'Github', 'Linkedin', 'Mail', 'Phone')
  displayValue: string;
  isPrimary?: boolean;
}

export interface HeroData {
  name: string;
  title: string;
  availabilityBadge: {
    text: string;
    isActive: boolean;
    location: string;
  };
  valueProposition: string;
  tagline: string;
  cvDownloadUrl: string;
  socialLinks: SocialLink[];
}

export interface StorytellingSection {
  title: string;
  subtitle: string;
  paragraphs: string[];
  principles: {
    title: string;
    description: string;
    icon: string;
  }[];
  stats: {
    label: string;
    value: string;
    detail: string;
  }[];
}

export interface ProjectMetric {
  value: string;
  label: string;
  detail?: string;
}

export interface TechnicalProject {
  id: string;
  title: string;
  category: string;
  tagline: string;
  accentColor: AccentColor;
  summary: string;
  problem: string;
  solutionArchitecture: {
    overview: string;
    keyPoints: string[];
  };
  metrics: ProjectMetric[];
  techStack: {
    name: string;
    category: 'frontend' | 'backend' | 'ai' | 'data' | 'tools';
  }[];
  links: {
    liveUrl?: string;
    githubUrl?: string;
    docsUrl?: string;
  };
  highlighted: boolean;
}

export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  location: string;
  period: string;
  isCurrent: boolean;
  type: string; // 'Jornada completa', 'Freelance / R&D', etc.
  description: string;
  responsibilities: string[];
  achievements: string[];
  technologies: string[];
}

export interface SkillCategory {
  id: string;
  title: string;
  description: string;
  accentColor: AccentColor;
  icon: string;
  skills: {
    name: string;
    highlight?: boolean;
    level?: 'Avanzado' | 'Experto' | 'Dominio Profesional';
  }[];
}

export interface ContactInfo {
  email: string;
  phone: string;
  phoneRaw: string;
  whatsappUrl: string;
  location: string;
  availability: string;
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

## 9. SECCIÓN 8: OBJETO DE DATOS COMPLETO (`data/portfolioData.ts`)

A continuación se detalla el archivo de datos listo para consumo directo por la aplicación:

```typescript
// data/portfolioData.ts
import { PortfolioData } from '@/types/portfolio';

export const portfolioData: PortfolioData = {
  hero: {
    name: 'Yoider Murillo Salazar',
    title: 'Software Engineer & Full Stack Developer',
    availabilityBadge: {
      text: 'DISPONIBLE EN SEVILLA & REMOTO',
      isActive: true,
      location: 'Sevilla, España'
    },
    valueProposition:
      'Ingeniero de software con sólida base en arquitecturas limpias y backend de alto rendimiento (.NET Core, C#), evolucionado hacia el ecosistema full-stack moderno (Next.js, TypeScript) y el despliegue de soluciones de Inteligencia Artificial Multimodal aplicadas a procesos de negocio reales.',
    tagline: 'Construyendo software escalable, interfaces reactivas y sistemas desacoplados desde Sevilla, España.',
    cvDownloadUrl: '/cv-yoider-murillo.pdf',
    socialLinks: [
      {
        id: 'github',
        name: 'GitHub',
        url: 'https://github.com/yoi-hub',
        icon: 'Github',
        displayValue: 'github.com/yoi-hub',
        isPrimary: true
      },
      {
        id: 'linkedin',
        name: 'LinkedIn',
        url: 'https://www.linkedin.com/in/yoider-murillo-salazar/',
        icon: 'Linkedin',
        displayValue: 'linkedin.com/in/yoider-murillo-salazar',
        isPrimary: true
      },
      {
        id: 'email',
        name: 'Email',
        url: 'mailto:yodiermurillo@gmail.com',
        icon: 'Mail',
        displayValue: 'yodiermurillo@gmail.com',
        isPrimary: true
      },
      {
        id: 'phone',
        name: 'Teléfono',
        url: 'tel:+34604305221',
        icon: 'Phone',
        displayValue: '+34 604 30 52 21'
      },
      {
        id: 'whatsapp',
        name: 'WhatsApp',
        url: 'https://wa.me/34604305221?text=Hola%20Yoider,%20he%20visto%20tu%20portfolio%20y%20me%20gustar%C3%ADa%20conversar.',
        icon: 'MessageSquare',
        displayValue: 'WhatsApp Directo'
      }
    ]
  },

  about: {
    title: 'Sobre Mí',
    subtitle: 'De la ingeniería backend tradicional a la vanguardia de la IA multimodal',
    paragraphs: [
      'Mi trayectoria como ingeniero de software comenzó en Colombia, enfocado en el desarrollo de arquitecturas backend robustas con C# y .NET Core en Uno 27 S.A.S. y Abai Group. Allí aprendí a diseñar pensando en la escalabilidad, la consistencia transaccional y la separación estricta de responsabilidades bajo Clean Architecture y DDD.',
      'Con esa base estructural, di el salto hacia el desarrollo web moderno con TypeScript, React y Next.js. El tipado estricto y la evolución del App Router me permitieron crear experiencias digitales donde la velocidad de renderizado y la fiabilidad del servidor conviven sin fisuras.',
      'Radicado en Sevilla, España, he combinado resiliencia y autoformación continua para especializarme en Inteligencia Artificial Multimodal. Hoy diseño sistemas que integran modelos de visión y lenguaje (Google Gemini 2.5 Flash), automatización de mensajería empresarial con WhatsApp Cloud API y protocolos como MCP para resolver fricciones operativas reales.'
    ],
    principles: [
      {
        title: 'Arquitectura Limpia & Tipado Estricto',
        description: 'Separación estricta de capas, código autodocumentado y validación de tipos de extremo a extremo.',
        icon: 'Layers'
      },
      {
        title: 'IA Pragmática & Human-in-the-Loop',
        description: 'La inteligencia artificial no es magia: es un componente que requiere orquestación, validación determinista y supervisión.',
        icon: 'Bot'
      },
      {
        title: 'Rendimiento & Resiliencia',
        description: 'Interfaces instantáneas sin desbordamientos, consultas optimizadas y tolerancia ante fallos en producción.',
        icon: 'Zap'
      }
    ],
    stats: [
      {
        label: 'Años de Experiencia',
        value: '+5',
        detail: 'En desarrollo de software profesional'
      },
      {
        label: 'Stack Dominante',
        value: '.NET & Next.js',
        detail: 'C#, TypeScript, React y PostgreSQL'
      },
      {
        label: 'Especialización Actual',
        value: 'Multimodal AI',
        detail: 'Gemini, WhatsApp API, MCP'
      },
      {
        label: 'Ubicación',
        value: 'Sevilla',
        detail: 'Disponible presencial & remoto'
      }
    ]
  },

  projects: [
    {
      id: 'impulsar',
      title: 'Impulsar',
      category: 'GovTech / LegalTech / AI SaaS',
      tagline: 'Automatización inteligente de expedientes y trámites con IA multimodal y mensajería omnicanal.',
      accentColor: 'purple',
      highlighted: true,
      summary:
        'Plataforma SaaS diseñada para procesar y validar expedientes documentales complejos (PDFs, escrituras, identificaciones) mediante Google Gemini 2.5 Flash y WhatsApp Cloud API, con desacoplamiento asíncrono y panel Human-in-the-loop.',
      problem:
        'La revisión manual de documentación jurídica y administrativa genera cuellos de botella de días, transcripciones erróneas y saturación de canales de soporte en organismos y gestorías.',
      solutionArchitecture: {
        overview:
          'Arquitectura desacoplada en Next.js App Router que recibe documentos vía webhooks de WhatsApp Cloud API, procesa inferencias multimodales en segundo plano con Redis y presenta auditoría con flags de confianza.',
        keyPoints: [
          'Ingesta omnicanal con Webhooks asíncronos en Meta WhatsApp Cloud API',
          'Extracción estructurada con Google Gemini 2.5 Flash y JSON Schema mediante Function Calling',
          'Colas de inferencia asíncronas con Redis para respuesta inmediata (<200ms) al webhook',
          'Patrón Human-in-the-Loop: panel administrativo para casos de confianza <95%',
          'Persistencia relacional y auditoría inmutable con PostgreSQL y Prisma ORM'
        ]
      },
      metrics: [
        { value: '-75%', label: 'Tiempo de Resolución', detail: 'De 48 horas a menos de 12 minutos por expediente' },
        { value: '94.2%', label: 'Precisión de Extracción', detail: 'En documentos no tabulares y escaneos de baja resolución' },
        { value: '+80%', label: 'Atención Automatizada', detail: 'Sin intervención humana en primera fase de recepción' }
      ],
      techStack: [
        { name: 'Next.js App Router', category: 'frontend' },
        { name: 'TypeScript', category: 'frontend' },
        { name: 'Google Gemini 2.5 Flash', category: 'ai' },
        { name: 'WhatsApp Cloud API', category: 'ai' },
        { name: 'PostgreSQL', category: 'data' },
        { name: 'Prisma ORM', category: 'data' },
        { name: 'Redis', category: 'data' },
        { name: 'Tailwind CSS', category: 'frontend' },
        { name: 'Docker', category: 'tools' }
      ],
      links: {
        liveUrl: '#',
        githubUrl: 'https://github.com/yoi-hub'
      }
    },
    {
      id: 'chron0v4',
      title: 'CHRON0V4',
      category: 'Developer Productivity / Context Architecture',
      tagline: 'Motor de productividad técnica y preservación de contexto basado en la metodología Diátaxis.',
      accentColor: 'blue',
      highlighted: true,
      summary:
        'Herramienta CLI y motor de preservación de contexto que estructura el conocimiento arquitectónico en los cuatro cuadrantes de Diátaxis, optimizando la interacción con agentes de IA y reduciendo la pérdida de memoria técnica.',
      problem:
        'La dispersión de contexto técnico y la amnesia en sesiones de codificación con LLMs provocan un desperdicio masivo de tokens y pérdida de trazabilidad en decisiones de diseño.',
      solutionArchitecture: {
        overview:
          'Motor TypeScript que parsea el AST de documentación y código, construye un grafo contextual Diátaxis y expone herramientas semánticas mediante Model Context Protocol (MCP).',
        keyPoints: [
          'Estructura Diátaxis: Tutoriales, Guías Prácticas, Explicaciones y Referencias',
          'Indexación semántica y compresión del árbol sintáctico (AST) de Markdown y código',
          'Servidor ligero MCP (Model Context Protocol) para alimentar agentes autónomos en tiempo real',
          'Trazabilidad total de Decisiones Arquitectónicas (ADRs) conectadas con commits'
        ]
      },
      metrics: [
        { value: '-60%', label: 'Consumo de Tokens', detail: 'En sesiones de codificación y prompts de contexto continuo' },
        { value: '100%', label: 'Trazabilidad Arquitectónica', detail: 'De decisiones de diseño documentadas e indexadas' },
        { value: '< 80ms', label: 'Tiempo de Recuperación', detail: 'De contexto relevante mediante herramientas MCP' }
      ],
      techStack: [
        { name: 'TypeScript', category: 'backend' },
        { name: 'Node.js', category: 'backend' },
        { name: 'Model Context Protocol (MCP)', category: 'ai' },
        { name: 'Remark / Unified (AST)', category: 'tools' },
        { name: 'Diátaxis Framework', category: 'tools' },
        { name: 'Tailwind CSS', category: 'frontend' }
      ],
      links: {
        githubUrl: 'https://github.com/yoi-hub'
      }
    },
    {
      id: 'finanzas-dashboard',
      title: 'Finanzas Dashboard',
      category: 'Fintech / SaaS Analytics',
      tagline: 'Panel financiero reactivo con cálculo en tiempo real de balances y Server Actions.',
      accentColor: 'emerald',
      highlighted: true,
      summary:
        'Dashboard patrimonial multi-cuenta que ofrece conciliación en tiempo real de saldos multidivisa (EUR, USD, COP), proyecciones de flujo de caja y mutaciones seguras mediante Server Actions.',
      problem:
        'Falta de visibilidad financiera consolidada al operar con múltiples cuentas bancarias e inversiones, con dashboards bancarios lentos e interfaces complejas.',
      solutionArchitecture: {
        overview:
          'Aplicación Next.js App Router con Server Components para renderizado instantáneo y Server Actions para mutaciones transaccionales sin recarga, respaldadas por validación estricta con Zod.',
        keyPoints: [
          'Mutaciones atómicas en servidor con Server Actions y revalidación granular de caché',
          'Cálculo reactivo de balances con precisión decimal estricta y soporte multicuentas',
          'Validación tipada en cliente y servidor mediante esquemas Zod',
          'Visualizaciones optimizadas con gráficos vectoriales en modo oscuro nativo'
        ]
      },
      metrics: [
        { value: '< 150ms', label: 'Carga de Dashboard', detail: 'Renderizado ultrarrápido con React Server Components' },
        { value: '0 Error', label: 'Precisión Decimal', detail: 'Garantizada en conciliación multidivisa y multicuentas' },
        { value: '100%', label: 'Seguridad Tipada', detail: 'En todas las mutaciones transaccionales' }
      ],
      techStack: [
        { name: 'Next.js App Router', category: 'frontend' },
        { name: 'React Server Components', category: 'frontend' },
        { name: 'TypeScript', category: 'frontend' },
        { name: 'Server Actions', category: 'backend' },
        { name: 'Tailwind CSS', category: 'frontend' },
        { name: 'PostgreSQL', category: 'data' },
        { name: 'Prisma ORM', category: 'data' },
        { name: 'Zod', category: 'tools' },
        { name: 'Recharts', category: 'frontend' }
      ],
      links: {
        githubUrl: 'https://github.com/yoi-hub'
      }
    },
    {
      id: 'tuma-z',
      title: 'Tuma_Z',
      category: 'E-Commerce / B2C Web Platform',
      tagline: 'Comercio electrónico B2C con catálogo dinámico, filtrado instantáneo y backend desacoplado.',
      accentColor: 'blue',
      highlighted: true,
      summary:
        'Tienda online moderna con catálogo modular optimizado para SEO, filtrado multifacético sub-50ms y gestión de inventario y pedidos con arquitectura limpia.',
      problem:
        'Plataformas minoristas lentas y rígidas que perjudican la tasa de conversión en dispositivos móviles y encarecen los costes operativos.',
      solutionArchitecture: {
        overview:
          'Frontend Next.js con renderizado híbrido (ISR/SSR) para máxima velocidad de catálogo, combinado con un backend modular estructurado por capas para pedidos e inventario.',
        keyPoints: [
          'Generación estática incremental (ISR) para páginas de productos con latencia mínima',
          'Filtrado facetado dinámico del lado del cliente con tiempos de respuesta sub-50ms',
          'Carrito de compras reactivo con persistencia local y sincronización de stock',
          'Arquitectura backend modular con Clean Architecture y principios SOLID'
        ]
      },
      metrics: [
        { value: '98+', label: 'Lighthouse Score', detail: 'En Performance, SEO, Accesibilidad y Mejores Prácticas' },
        { value: '1.1s', label: 'Time-to-Interactive', detail: 'En conexiones móviles 4G sin degradación' },
        { value: '+35%', label: 'Tasa de Conversión', detail: 'Frente a la arquitectura monolítica tradicional' }
      ],
      techStack: [
        { name: 'Next.js', category: 'frontend' },
        { name: 'React', category: 'frontend' },
        { name: 'TypeScript', category: 'frontend' },
        { name: 'Tailwind CSS', category: 'frontend' },
        { name: 'Zustand', category: 'frontend' },
        { name: '.NET Core API', category: 'backend' },
        { name: 'PostgreSQL', category: 'data' },
        { name: 'Docker', category: 'tools' }
      ],
      links: {
        githubUrl: 'https://github.com/yoi-hub'
      }
    }
  ],

  experience: [
    {
      id: 'exp-uno27',
      role: 'Backend Software Engineer',
      company: 'Uno 27 S.A.S.',
      location: 'Cali / Bogotá, Colombia',
      period: '2019 – 2021',
      isCurrent: false,
      type: 'Jornada completa',
      description:
        'Diseño y desarrollo de servicios backend empresariales y APIs RESTful de alto rendimiento en C# y .NET Core para clientes del sector servicios.',
      responsibilities: [
        'Diseño y desarrollo de APIs RESTful en C# y ASP.NET Core bajo Clean Architecture y principios SOLID.',
        'Modelado y optimización de bases de datos relacionales en SQL Server y PostgreSQL mediante Entity Framework Core.',
        'Implementación de esquemas de autenticación JWT y autorización granular por roles.',
        'Estandarización de pruebas unitarias con xUnit y Moq, elevando la cobertura a más del 85% en servicios críticos.'
      ],
      achievements: [
        'Reducción del 40% en tiempos de respuesta de endpoints transaccionales mediante optimización de consultas SQL e indexación.',
        'Disminución del 30% en incidencias en producción gracias a la adopción de Clean Architecture y testing riguroso.'
      ],
      technologies: [
        'C#',
        '.NET Core',
        'ASP.NET Web API',
        'Clean Architecture',
        'SQL Server',
        'PostgreSQL',
        'Entity Framework Core',
        'xUnit',
        'Git',
        'Docker'
      ]
    },
    {
      id: 'exp-abai',
      role: 'Full Stack / Backend Engineer',
      company: 'Abai Group',
      location: 'Colombia (Operaciones Internacionales)',
      period: '2021 – 2023',
      isCurrent: false,
      type: 'Jornada completa',
      description:
        'Ingeniería de plataformas críticas corporativas de contact center, automatización de eventos y desarrollo de microservicios distribuidos.',
      responsibilities: [
        'Desarrollo de microservicios desacoplados en .NET Core / C# interconectados mediante colas de mensajería (RabbitMQ).',
        'Construcción de dashboards de supervisión operativa en tiempo real con React y Vue.js.',
        'Mantenimiento y optimización de procedimientos almacenados en SQL Server procesando millones de registros diarios.',
        'Automatización de despliegues y contenedores Docker en pipelines de CI/CD con Azure DevOps.'
      ],
      achievements: [
        'Mantenimiento de disponibilidad 99.9% en sistema con más de 200,000 transacciones operativas diarias.',
        'Modernización de herramientas legacy hacia arquitectura de microservicios con APIs documentadas en OpenAPI.'
      ],
      technologies: [
        '.NET Core',
        'C#',
        'React',
        'Vue.js',
        'RabbitMQ',
        'SQL Server',
        'Azure DevOps',
        'Docker',
        'REST APIs',
        'TypeScript'
      ]
    },
    {
      id: 'exp-spain',
      role: 'Software Engineer & Multimodal AI Specialist',
      company: 'Proyectos de I+D Aplicada & Consultoría Tecnológica',
      location: 'Sevilla, Andalucía, España',
      period: '2023 – Presente',
      isCurrent: true,
      type: 'Resiliencia, Consolidación & R&D',
      description:
        'Consolidación profesional en España combinando ingeniería de software rigurosa con especialización de vanguardia en IA Multimodal, Next.js y agentes.',
      responsibilities: [
        'Arquitectura e implementación de soluciones SaaS completas con Next.js (App Router), TypeScript y Tailwind CSS.',
        'Diseño de flujos de IA multimodal (visión, OCR semántico y parseo JSON guiado) con Google Gemini 2.5 Flash.',
        'Automatización omnicanal integrando WhatsApp Cloud API con colas asíncronas y Human-in-the-loop.',
        'Investigación e implementación de herramientas de productividad técnica con Model Context Protocol (MCP) y Diátaxis.'
      ],
      achievements: [
        'Lanzamiento de Impulsar, reduciendo el 75% del tiempo de resolución de expedientes legales/administrativos.',
        'Desarrollo de CHRON0V4, logrando un ahorro del 60% en consumo de tokens en sesiones de ingeniería asistida por IA.'
      ],
      technologies: [
        'Next.js',
        'TypeScript',
        'Tailwind CSS',
        'Google Gemini 2.5 Flash',
        'WhatsApp Cloud API',
        'MCP',
        'PostgreSQL',
        'Prisma ORM',
        'Server Actions',
        'Docker'
      ]
    }
  ],

  skills: [
    {
      id: 'backend',
      title: 'Backend Architecture & Core',
      description: 'Arquitecturas limpias, alta consistencia transaccional y servicios desacoplados.',
      accentColor: 'blue',
      icon: 'Server',
      skills: [
        { name: 'C#', highlight: true, level: 'Experto' },
        { name: '.NET Core / .NET 8', highlight: true, level: 'Experto' },
        { name: 'ASP.NET Web API', highlight: true, level: 'Experto' },
        { name: 'Clean Architecture', highlight: true, level: 'Experto' },
        { name: 'RESTful APIs', highlight: true, level: 'Experto' },
        { name: 'Entity Framework Core', highlight: true, level: 'Experto' },
        { name: 'CQRS & MediatR', level: 'Dominio Profesional' },
        { name: 'Dependency Injection', level: 'Experto' },
        { name: 'JWT & Autenticación', level: 'Experto' },
        { name: 'Microservicios', level: 'Dominio Profesional' }
      ]
    },
    {
      id: 'frontend',
      title: 'Modern Frontend',
      description: 'Interfaces de usuario reactivas, renderizado híbrido y tipado estricto.',
      accentColor: 'blue',
      icon: 'Layout',
      skills: [
        { name: 'Next.js (App Router)', highlight: true, level: 'Experto' },
        { name: 'TypeScript', highlight: true, level: 'Experto' },
        { name: 'React 18 / 19', highlight: true, level: 'Experto' },
        { name: 'Tailwind CSS', highlight: true, level: 'Experto' },
        { name: 'Server Actions', highlight: true, level: 'Avanzado' },
        { name: 'Server Components', highlight: true, level: 'Experto' },
        { name: 'Vue.js', level: 'Dominio Profesional' },
        { name: 'Zustand & State Mgmt', level: 'Dominio Profesional' },
        { name: 'Mobile-First Design', level: 'Experto' }
      ]
    },
    {
      id: 'data',
      title: 'Data & Storage',
      description: 'Modelado relacional, persistencia eficiente y caché distribuida.',
      accentColor: 'blue',
      icon: 'Database',
      skills: [
        { name: 'PostgreSQL', highlight: true, level: 'Experto' },
        { name: 'Microsoft SQL Server', highlight: true, level: 'Experto' },
        { name: 'Prisma ORM', highlight: true, level: 'Experto' },
        { name: 'MySQL', level: 'Dominio Profesional' },
        { name: 'Redis (Cache & Queues)', highlight: true, level: 'Dominio Profesional' },
        { name: 'Supabase', level: 'Dominio Profesional' },
        { name: 'Optimización de Consultas', level: 'Avanzado' }
      ]
    },
    {
      id: 'ai-automation',
      title: 'AI & Automation',
      description: 'Integración multimodal, agentes autónomos y automatización omnicanal.',
      accentColor: 'purple',
      icon: 'Bot',
      skills: [
        { name: 'Google Gemini 2.5 Flash', highlight: true, level: 'Experto' },
        { name: 'Visión Multimodal & OCR', highlight: true, level: 'Avanzado' },
        { name: 'Function Calling & JSON Schema', highlight: true, level: 'Experto' },
        { name: 'Model Context Protocol (MCP)', highlight: true, level: 'Avanzado' },
        { name: 'WhatsApp Cloud API', highlight: true, level: 'Avanzado' },
        { name: 'Patrón Human-in-the-Loop', highlight: true, level: 'Avanzado' },
        { name: 'Colas & Desacoplamiento Asíncrono', level: 'Avanzado' }
      ]
    },
    {
      id: 'tools-devops',
      title: 'Herramientas & DevOps',
      description: 'Flujo de trabajo ágil, reproducibilidad y estándares de documentación.',
      accentColor: 'emerald',
      icon: 'Terminal',
      skills: [
        { name: 'Git & GitHub', highlight: true, level: 'Experto' },
        { name: 'Docker & Compose', highlight: true, level: 'Dominio Profesional' },
        { name: 'Turbopack / Vite', level: 'Dominio Profesional' },
        { name: 'CI/CD (GitHub Actions / Azure)', level: 'Dominio Profesional' },
        { name: 'Postman & Swagger / OpenAPI', level: 'Experto' },
        { name: 'Metodología Diátaxis', highlight: true, level: 'Avanzado' },
        { name: 'Linux / Bash / PowerShell', level: 'Dominio Profesional' }
      ]
    }
  ],

  contact: {
    email: 'yodiermurillo@gmail.com',
    phone: '+34 604 30 52 21',
    phoneRaw: '+34604305221',
    whatsappUrl: 'https://wa.me/34604305221?text=Hola%20Yoider,%20he%20visto%20tu%20portfolio%20y%20me%20gustar%C3%ADa%20conversar.',
    location: 'Sevilla, Andalucía, España',
    availability: 'Disponible inmediatamente para incorporación en Sevilla o Remoto',
    githubUrl: 'https://github.com/yoi-hub',
    linkedinUrl: 'https://www.linkedin.com/in/yoider-murillo-salazar/'
  }
};
```

---

## 10. SECCIÓN 9: MAPEADO CON DESIGN_SYSTEM.MD & CLASES TAILWIND

A continuación se detalla cómo se aplican los tokens de diseño visual especificados en `DESIGN_SYSTEM.md`:

| Token / Concepto | Valor Hex / Código | Mapeo Tailwind CSS | Aplicación en Componentes |
|---|---|---|---|
| **Fondo Principal** | `#090d16` | `bg-[#090d16]` o `bg-zinc-950` | Contenedor principal del body (`<main className="bg-[#090d16] text-zinc-100 min-h-screen">`) |
| **Superficie de Tarjetas** | `#111625` | `bg-[#111625]` (`bg-zinc-900/60 backdrop-blur-md`) | Cards de proyectos, bloques de experiencia, matriz de habilidades |
| **Hover de Tarjetas** | `#182032` | `hover:bg-[#182032]` (`transition-colors duration-200`) | Efecto hover al pasar sobre proyectos o elementos clicables |
| **Bordes & Divisores** | `#1e293b` | `border-zinc-800/80` o `border-white/10` | Bordes finos de 1px en tarjetas, modales y separadores (`rounded-2xl border border-zinc-800/80`) |
| **Acento Primario (Tech/.NET)** | `#3b82f6` | `text-blue-500` / `bg-blue-600` | Botón principal de descarga CV, títulos técnicos, enlaces activos |
| **Acento IA (Multimodal)** | `#a855f7` | `text-purple-400` / `bg-purple-500/10` / `border-purple-500/30` | Badges de Gemini, IA, proyectos de automatización |
| **Acento Estado Activo** | `#10b981` | `text-emerald-400` / `bg-emerald-500/10` / `border-emerald-500/20` | Badge pulsante "DISPONIBLE EN SEVILLA & REMOTO", balances positivos |
| **Texto Títulos (H1/H2)** | `#f8fafc` | `text-white` / `text-zinc-50 font-bold tracking-tight` | Titulares del Hero y nombres de secciones |
| **Texto Cuerpo** | `#94a3b8` | `text-zinc-400 leading-relaxed` | Párrafos de descripción, storytelling y detalles |
| **Texto Metadatos / Fechas** | `#64748b` | `text-zinc-500 font-mono text-xs uppercase` | Fechas de experiencia, badges de tecnologías, tags |

---

## 11. CONCLUSIÓN Y SIGUIENTES PASOS PARA EL EQUIPO

1. **Modelos e Ingesta:** Los archivos `types/portfolio.ts` y `data/portfolioData.ts` pueden copiarse y montarse directamente en la estructura de código fuente.
2. **Modales de Proyectos:** El campo `solutionArchitecture`, `problem` y `metrics` proporcionan todo el material textual y técnico para los modales interactivos de *Impulsar*, *CHRON0V4*, *Finanzas Dashboard* y *Tuma_Z*.
3. **Badge de Disponibilidad:** Implementar con exactitud el snippet del status pill con dot verde `#10b981` animado con `animate-pulse`.
4. **Responsividad:** Todas las grillas deben implementarse con `grid-cols-1 md:grid-cols-2 lg:grid-cols-3` y gaps controlados (`gap-6`), sin padding horizontal que rompa en 375px.

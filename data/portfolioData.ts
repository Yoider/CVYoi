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
        url: 'https://github.com/Yoider?tab=repositories',
        icon: 'Github',
        displayValue: 'github.com/Yoider',
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
      'Mi trayectoria como desarollador de software comenzó en Colombia, enfocado en el desarrollo de arquitecturas backend robustas con C# y .NET Core en Uno 27 S.A.S. Allí aprendí a diseñar pensando en la escalabilidad, la consistencia transaccional y la separación estricta de responsabilidades bajo Clean Architecture y DDD.',
      'Tras los primeros 6 meses especializándome en backend (.NET, Clean Architecture y SQL Server) y en el despliegue directo en servidores físicos tangibles propios de la empresa, asumí un proyecto para liderar el desarrollo frontend utilizando Vue.js (90% de las aplicaciones). En este esquema, el frontend consumía nuestras APIs en .NET, delegando en el servidor toda la lógica de negocio. Posteriormente, trabajé durante 1 año como desarrollador Full Stack antes de especializarme en la arquitectura web moderna e IA Multimodal.',
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
        label: 'Años en el entorno',
        value: '+5',
        detail: 'En desarrollo de software profesional'
      },
      {
        label: 'Stack Dominante',
        value: '.NET & Next.js',
        detail: 'C#, Python (Django), TypeScript (React/Vue), SQL Server y PostgreSQL'
      },
      {
        label: 'Especialización Actual',
        value: 'Multimodal AI',
        detail: 'Gemini, Meta API, MCP, n8n'
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
      id: 'quimera',
      title: 'Quimera',
      category: 'Gastronomic Platform / Next.js 16 & SaaS',
      tagline: 'Carta interactiva digital, filtrado de alérgenos en tiempo real y portal de gestión /staff contenedorizado.',
      clientType: 'Hostelería & Restauración (Taberna Quimera, Sevilla)',
      solvedFunctions: [
        'Carta digital interactiva con navegación fluida y categorizada en tiempo real',
        'Filtrado dinámico multifacético de los 14 alérgenos de la normativa europea (<50ms)',
        'Portal /staff para actualización instantánea de stock de platos ("Disponible / Agotado")',
        'Contenedorización multi-stage en Docker lista para despliegue en servidor VPS'
      ],
      accentColor: 'purple',
      highlighted: true,
      summary:
        'Aplicación web full-stack para "Taberna Quimera" (Sevilla). Combina una carta interactiva ultrarrápida con filtrado de alérgenos en tiempo real, arquitectura modular con área privada para trabajadores (/staff) para control de disponibilidad de comandas y despliegue en producción con Docker.',
      problem:
        'Los establecimientos de hostelería sufren rigidez en la actualización de cartas físicas, falta de filtrado dinámico de alérgenos y cuellos de botella en la gestión en tiempo real del stock de platos y comandas.',
      solutionArchitecture: {
        overview:
          'Arquitectura Next.js 16 App Router con Server Components para renderizado ultrarrápido, React 19, Server Actions para mutaciones de disponibilidad y Prisma ORM con capa de abstracción para fallback a datos Mock y persistencia relacional.',
        keyPoints: [
          'Frontend interactivo "Modern Tavern" estilizado con Tailwind CSS v4 y tipografía Serif/Sans',
          'Filtrado dinámico multifacético de 14 alérgenos alimentarios y buscador sub-50ms',
          'Portal privado /staff para actualización en tiempo real de disponibilidad ("Disponible / Agotado")',
          'Esquema relacional en Prisma ORM con datos mock iniciales listos para producción',
          'Contenedorización multi-stage en Docker (output: standalone) con docker-compose.yml'
        ]
      },
      metrics: [
        { value: '< 100ms', label: 'Tiempo de Filtrado', detail: 'En catálogo de platos y matriz de alérgenos' },
        { value: '100%', label: 'Cobertura de Alérgenos', detail: 'Filtros dinámicos de los 14 alérgenos oficiales EU' },
        { value: '-50%', label: 'Tiempo de Gestión', detail: 'En actualización de disponibilidad de platos en sala' }
      ],
      techStack: [
        { name: 'Next.js 16 (App Router)', category: 'frontend' },
        { name: 'React 19', category: 'frontend' },
        { name: 'TypeScript', category: 'frontend' },
        { name: 'Tailwind CSS v4', category: 'frontend' },
        { name: 'Prisma ORM', category: 'data' },
        { name: 'Server Actions', category: 'backend' },
        { name: 'Lucide React', category: 'frontend' },
        { name: 'Docker & Compose', category: 'tools' }
      ],
      githubMetadata: {
        repoName: 'Yoider/Quimera',
        repoUrl: 'https://github.com/Yoider/Quimera',
        language: 'TypeScript'
      },
      links: {
        liveUrl: 'https://quimera.n0v4.es',
        githubUrl: 'https://github.com/Yoider/Quimera'
      }
    },
    {
      id: 'chron0v4',
      title: 'Chron0v4',
      category: 'Developer Productivity / Context Architecture',
      tagline: 'Motor de productividad técnica y preservación de memoria contextual basado en Diátaxis y MCP.',
      clientType: 'Desarrolladores de Software, Equipos de Ingeniería & Agentes IA',
      solvedFunctions: [
        'Estructuración del conocimiento técnico en los cuatro cuadrantes de Diátaxis',
        'Reducción del 60% en consumo de tokens en sesiones de prompts continuos con LLMs',
        'Servidor ligero Model Context Protocol (MCP) para alimentar agentes en tiempo real',
        'Trazabilidad total de Decisiones Arquitectónicas (ADRs) conectadas a commits'
      ],
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
      githubMetadata: {
        repoName: 'Yoider/Chron0v4',
        repoUrl: 'https://github.com/Yoider/Chron0v4',
        language: 'TypeScript'
      },
      links: {
        githubUrl: 'https://github.com/Yoider/Chron0v4'
      }
    },
    {
      id: 'wellness-club',
      title: 'The Wellness Club',
      category: 'Booking & Event Management / Luxury Lifestyle',
      tagline: 'Plataforma de reserva y gestión nominal de plazas bajo experiencia visual "Quiet Luxury".',
      clientType: 'Sector Wellness / Salud & Eventos de Bienestar (Malabo, Guinea Ecuatorial)',
      solvedFunctions: [
        'Reserva nominal y asignación de plazas exclusivas con cupos actualizados en tiempo real',
        'Validación instantánea de formulario y prevención de sobrecupos',
        'Diseño visual "Quiet Luxury" responsive con paleta cromática personalizada',
        'Persistencia relacional y confirmación automatizada para asistentes'
      ],
      accentColor: 'emerald',
      highlighted: true,
      summary:
        'Aplicación web oficial para la reserva y gestión nominal de plazas para las sesiones de lanzamiento de The Wellness Club en Malabo (Guinea Ecuatorial), con interfaz refinada y experiencia de usuario fluida.',
      problem:
        'La gestión manual de reservas para eventos premium provoca listas de espera desordenadas, falta de control en el aforo nominal y experiencias de registro poco alineadas con marcas de alta gama.',
      solutionArchitecture: {
        overview:
          'Aplicación Next.js App Router con Server Actions para mutaciones transaccionales inmediatas de reserva, persistencia relacional con PostgreSQL/Prisma y componentes reactivos optimizados.',
        keyPoints: [
          'Bloqueo transaccional de plaza para evitar reservas concurrentes por encima del aforo',
          'Diseño "Quiet Luxury" con paleta Warm Cream, Pale Sage y tipografía serif elegante',
          'Validación estricta de datos nominales de cada asistente mediante esquemas tipados',
          'Panel de supervisión rápida de plazas restantes por sesión'
        ]
      },
      metrics: [
        { value: '< 200ms', label: 'Respuesta de Reserva', detail: 'Validación y bloqueo atómico de plaza' },
        { value: '100%', label: 'Control de Aforo', detail: 'Prevención estricta de plazas duplicadas' },
        { value: '99+', label: 'Puntuación UI/UX', detail: 'Adaptabilidad móvil y diseño minimalista' }
      ],
      techStack: [
        { name: 'Next.js App Router', category: 'frontend' },
        { name: 'TypeScript', category: 'frontend' },
        { name: 'React', category: 'frontend' },
        { name: 'Tailwind CSS', category: 'frontend' },
        { name: 'PostgreSQL', category: 'data' },
        { name: 'Prisma ORM', category: 'data' },
        { name: 'Server Actions', category: 'backend' }
      ],
      githubMetadata: {
        repoName: 'Yoider/WellnessClub',
        repoUrl: 'https://github.com/Yoider/WellnessClub',
        language: 'TypeScript'
      },
      links: {
        githubUrl: 'https://github.com/Yoider/WellnessClub'
      }
    },
    {
      id: 'cvyoi',
      title: 'CVYoi',
      category: 'Portfolio Engineering / Interactive Full Stack',
      tagline: 'Portafolio profesional interactivo con diseño corporativo minimalista y arquitectura Dockerizada.',
      clientType: 'Reclutadores Técnicos, CTOs & Empresas de Ingeniería de Software',
      solvedFunctions: [
        'Presentación interactiva de experiencia, proyectos y stack técnico por capas',
        'Descarga sincronizada de CV oficial en PDF con enlace dinámico verificado',
        'Contenedorización multi-stage en Docker (standalone) con proxy inverso Nginx y SSL',
        'Suite completa de pruebas E2E automatizadas (23 checks en 4 niveles)'
      ],
      accentColor: 'blue',
      highlighted: true,
      summary:
        'Plataforma web del CV profesional de Yoider Murillo Salazar. Construida con arquitectura moderna Next.js standalone, diseño fiel al currículum corporativo (#0b2545 / #f8fafc), Docker Compose y verificación continua.',
      problem:
        'Los currículums estáticos en PDF carecen de interactividad para explorar arquitecturas de proyectos, demos funcionales en producción o verificar métricas técnicas reales.',
      solutionArchitecture: {
        overview:
          'Next.js 14 con App Router y modo standalone empaquetado en imagen Docker multi-stage mínima sobre Alpine Linux, servida tras Nginx con certificado SSL automatizado.',
        keyPoints: [
          'Generación estática completa de páginas para carga instantánea (<100ms)',
          'Diseño corporativo basado en el sistema de diseño PDF con Tailwind CSS',
          'Verificación E2E continua ejecutada en tests locales antes de cada despliegue',
          'Infraestructura autónoma con docker-compose.yml y reinicio automático'
        ]
      },
      metrics: [
        { value: '23/23', label: 'Tests E2E Verificados', detail: '100% de cobertura en 4 niveles de pruebas' },
        { value: '< 100ms', label: 'Latencia de Carga', detail: 'Renderizado estático optimizado con Docker' },
        { value: '100%', label: 'HTTPS & SSL', detail: 'Despliegue en VPS con Let’s Encrypt' }
      ],
      techStack: [
        { name: 'Next.js 14 (Standalone)', category: 'frontend' },
        { name: 'TypeScript', category: 'frontend' },
        { name: 'React 18 / 19', category: 'frontend' },
        { name: 'Tailwind CSS', category: 'frontend' },
        { name: 'Docker', category: 'tools' },
        { name: 'Nginx', category: 'tools' },
        { name: 'Node.js', category: 'backend' }
      ],
      githubMetadata: {
        repoName: 'Yoider/CVYoi',
        repoUrl: 'https://github.com/Yoider/CVYoi',
        language: 'TypeScript'
      },
      links: {
        liveUrl: 'https://cvyoi.n0v4.es',
        githubUrl: 'https://github.com/Yoider/CVYoi'
      }
    }
  ],

  experience: [
    {
      id: 'exp-uno27',
      role: 'Full Stack & Backend Developer',
      company: 'Uno 27 S.A.S.',
      location: 'Cali / Bogotá, Colombia',
      period: '2019 – 2021',
      isCurrent: false,
      type: 'Jornada completa',
      description:
        'Inicios en desarrollo backend con C#, .NET Core, Clean Architecture y SQL Server en servidores físicos tangibles de la empresa. Tras 6 meses de especialización backend, transición hacia desarrollo Full Stack creando aplicaciones web con Vue.js conectadas a APIs .NET que procesaban toda la lógica de negocio.',
      responsibilities: [
        'Diseño y desarrollo de APIs RESTful en C# y ASP.NET Core bajo Clean Architecture y bases de datos relacionales en SQL Server.',
        'Despliegue directo y administración de aplicaciones en servidores físicos tangibles propiedad de la empresa.',
        'Desarrollo de interfaces frontend dinámicas utilizando Vue.js (90% de los proyectos) y sus librerías oficiales para el consumo de datos backend.',
        'Desempeño durante 1 año como Full Stack Developer integrando vistas reactivas con servidores backend de alta consistencia transaccional.'
      ],
      achievements: [
        'Reducción del 40% en tiempos de respuesta de endpoints transaccionales mediante optimización de consultas SQL e indexación en SQL Server.',
        'Despliegue continuo y exitoso de proyectos integrales (Vue.js + .NET) en infraestructura de servidores físicos locales.'
      ],
      technologies: [
        'C#',
        '.NET Core',
        'Vue.js',
        'ASP.NET Web API',
        'Clean Architecture',
        'SQL Server',
        'Servidores Físicos (On-Premise)',
        'xUnit',
        'Git'
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
        { name: 'Python & Django', highlight: true, level: 'Avanzado' },
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
        { name: 'Vue.js', highlight: true, level: 'Experto' },
        { name: 'Tailwind CSS', highlight: true, level: 'Experto' },
        { name: 'Server Actions', highlight: true, level: 'Avanzado' },
        { name: 'Server Components', highlight: true, level: 'Experto' },
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
        { name: 'Meta API (WhatsApp Cloud)', highlight: true, level: 'Avanzado' },
        { name: 'n8n (Workflow Automation)', highlight: true, level: 'Avanzado' },
        { name: 'Patrón Human-in-the-Loop', highlight: true, level: 'Avanzado' },
        { name: 'Colas & Desacoplamiento Asíncrono', level: 'Avanzado' }
      ]
    },
    {
      id: 'tools-devops',
      title: 'Herramientas & DevOps',
      description: 'Flujo de trabajo ágil, reproducibilidad y estándares de documentación.',
      accentColor: 'blue',
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
    githubUrl: 'https://github.com/Yoider?tab=repositories',
    linkedinUrl: 'https://www.linkedin.com/in/yoider-murillo-salazar/'
  }
};

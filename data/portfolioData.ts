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
    githubUrl: 'https://github.com/yoi-hub',
    linkedinUrl: 'https://www.linkedin.com/in/yoider-murillo-salazar/'
  }
};

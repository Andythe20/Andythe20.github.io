export type Link = {
  label: string;
  href: string;
  external?: boolean;
};

export type Project = {
  id: string;
  name: string;
  tagline: string;
  description: string;
  problem: string;
  role?: string;
  status?: string;
  stack: string[];
  image: string;
  imageAlt: string;
  imageCaption?: string;
  browserLabel?: string;
  mobileImage?: string;
  mobileImageAlt?: string;
  mobileImageCaption?: string;
  architectureImage?: string;
  architectureAlt?: string;
  architectureCaption?: string;
  links: Link[];
  privateNote?: string;
  highlights?: string[];
  ecosystem?: Link[];
};

export type SkillGroup = {
  id: string;
  title: string;
  summary: string;
  items: string[];
};

export type TimelineEntry = {
  period: string;
  title: string;
  place: string;
  description: string;
};

export const profile = {
  name: "Andrés Ortega Suazo",
  title: "Desarrollador de software",
  role: "Backend & Fullstack · Java 21 / Spring Boot",
  location: "Concón, Valparaíso, Chile",
  available: true,
  summary:
    "Desarrollador backend especializado en el ecosistema Java 21 y Spring Boot, con experiencia en el diseño y construcción de microservicios, APIs RESTful y bases de datos MySQL. Implemento autenticación y autorización con Spring Security y JWT, trabajo bajo patrones como MVC y arquitectura limpia, y despliego con Docker, AWS y CI/CD en GitHub Actions. En el lado fullstack construyo interfaces con React, TypeScript y Vue, y en el móvil desarrollo apps nativas en Kotlin con Jetpack Compose.",
  highlights: [
    "Microservicios y APIs RESTful con Spring Boot 3",
    "MySQL, modelado relacional y diseño multi-tenant",
    "Autenticación y autorización con Spring Security y JWT",
    "CI/CD con GitHub Actions, Docker y despliegue en AWS",
  ],
};

export const specialties = [
  {
    id: "servicios",
    title: "APIs y microservicios",
    detail: "Java 21, Spring Boot, Spring Security, JWT y API Gateway",
  },
  {
    id: "datos",
    title: "Datos",
    detail:
      "MySQL, modelado relacional, JPA/Hibernate y migraciones con Flyway",
  },
  {
    id: "arquitectura",
    title: "Arquitectura",
    detail:
      "Microservicios, arquitectura limpia, diseño multi-tenant e IA aplicada",
  },
  {
    id: "devops",
    title: "DevOps",
    detail: "Docker, AWS (EC2, S3, VPC), Terraform y CI/CD con GitHub Actions",
  },
];

export const navLinks = [
  { id: "inicio", label: "Inicio" },
  { id: "proyectos", label: "Proyectos" },
  { id: "stack", label: "Tecnologías" },
  { id: "sobre-mi", label: "Sobre mí" },
  { id: "contacto", label: "Contacto" },
];

export const socials: Link[] = [
  { label: "GitHub", href: "https://github.com/Andythe20", external: true },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/andres-ortega-suazo/",
    external: true,
  },
  { label: "Email", href: "mailto:andresortegasuazo@gmail.com" },
  { label: "Teléfono", href: "tel:+56935609990" },
];

export const cvLink: Link = { label: "Descargar CV", href: "./curriculum.pdf" };

export const projects: Project[] = [
  {
    id: "sifa",
    name: "SIFA — Sistema Integrado de Fiscalización Automática",
    tagline:
      "Ecosistema de microservicios para la fiscalización vehicular municipal",
    status: "Proyecto de solución municipal",
    description:
      "Sistema empresarial de la I. Municipalidad de El Quisco (Valparaíso) que digitaliza la fiscalización vehicular en terreno: el inspector captura la patente, la IA la reconoce, se consulta el vehículo, se cursa la infracción y el Juzgado de Policía Local emite la citación oficial. Es un ecosistema de microservicios con API Gateway, autenticación con JWT, servicio core de infracciones, detector de patentes con IA y panel web de gestión.",
    problem:
      "La fiscalización vehicular se llevaba en papel y planillas dispersas: el inspector anotaba infracciones en terreno, el dato viajaba en físico hasta el juzgado y la emisión de citaciones era lenta y poco trazable. SIFA elimina ese papeleo, unifica la evidencia fotográfica con la infracción y deja un registro auditable de todo el proceso.",
    role: "Desarrollé el Core Service (microservicio de infracciones, evidencias y citaciones) y la app móvil SIFA GO para fiscalizadores en terreno, dentro de un equipo de 3 personas.",
    stack: [
      "Java 21",
      "Spring Boot 3",
      "Spring Security",
      "JWT",
      "Spring Data JPA",
      "Spring Cloud Gateway",
      "MySQL 8",
      "Python",
      "FastAPI",
      "YOLO",
      "Paddle OCR",
      "Kotlin",
      "Jetpack Compose",
      "Docker",
      "Terraform",
      "AWS",
      "GitHub Actions",
    ],
    highlights: [
      "Microservicio core con Spring Data JPA sobre MySQL, entitys, repositorios y DTOs para infracciones, evidencias y citaciones.",
      "App móvil en Kotlin + Jetpack Compose con captura de evidencia (CameraX), OCR de patentes vía API, autenticación biométrica y soporte offline con Room.",
      "Integración con un servicio de visión artificial (FastAPI + YOLO + Paddle OCR) para el reconocimiento automático de patentes.",
      "Despliegue del ecosistema en AWS con Terraform (VPC, EC2, S3, NAT Gateway) y pipeline de CI/CD en GitHub Actions.",
    ],
    image: "./projects/sifa-web.png",
    imageAlt:
      "Panel web de gestión de infracciones y citaciones del sistema SIFA",
    imageCaption:
      "Panel web: registro de infracciones, evidencias y citaciones.",
    browserLabel: "SIFA · panel web",
    mobileImage: "./projects/sifa-movil.png",
    mobileImageAlt: "App móvil SIFA GO para fiscalizadores en terreno",
    mobileImageCaption:
      "App móvil SIFA GO: captura de evidencia y citación en terreno.",
    architectureImage: "./projects/sifa-arquitectura.png",
    architectureAlt: "Diagrama de la arquitectura del ecosistema SIFA",
    architectureCaption:
      "Arquitectura del ecosistema: la app móvil captura la evidencia, el API Gateway valida el JWT y reparte el tráfico hacia el Auth Service, el Core Service y el detector de patentes con IA, sobre MySQL y desplegado en AWS con Terraform.",
    links: [
      {
        label: "Repositorio central del proyecto",
        href: "https://github.com/jarodsmdev/Grupo10_TPY1101_001D",
        external: true,
      },
    ],
    ecosystem: [
      {
        label: "API Gateway — Spring Cloud Gateway",
        href: "https://github.com/jarodsmdev/BEsifaAPIGateway",
        external: true,
      },
      {
        label: "Auth Service — Spring Security + JWT",
        href: "https://github.com/jarodsmdev/BEsifaAuthService",
        external: true,
      },
      {
        label: "Core Service — Spring Boot (mi código)",
        href: "https://github.com/Andythe20/BEsifaCoreService",
        external: true,
      },
      {
        label: "SIFA GO — App Android (mi código)",
        href: "https://github.com/Andythe20/sifa_go",
        external: true,
      },
      {
        label: "Plate Detector — FastAPI + YOLO + OCR",
        href: "https://github.com/jarodsmdev/sifaPlateDetectorBE",
        external: true,
      },
      {
        label: "Dashboard Web — React + Vite + Tailwind",
        href: "https://github.com/Nicolas-15/SIFA_Dashboard",
        external: true,
      },
      {
        label: "Infraestructura — Terraform + AWS",
        href: "https://github.com/jarodsmdev/TerraformProyectSIFA",
        external: true,
      },
    ],
  },
  {
    id: "ventas-greta",
    name: "Sistema de Ventas Greta",
    tagline: "API REST y aplicación de escritorio para un negocio mayorista",
    status: "En desarrollo",
    description:
      "Sistema de ventas e inventario para un negocio mayorista: una API REST en Spring Boot que ordena el negocio por dominios (ventas, stock, caja, proveedores, empleados y sucursales) y una aplicación de escritorio en Tauri para operar el punto de venta. El backend ya expone autenticación con JWT, autorización por roles, esquema versionado con Flyway y persistencia en MySQL.",
    problem:
      "El control de ventas e inventario se llevaba en planillas y cuadernos: el stock se desactualizaba, no había trazabilidad de los movimientos de dinero y cualquier empleado podía tocar los números. El sistema centraliza cada venta, cada entrada de mercadería y cada movimiento de caja, con acceso según el rol y un historial auditable.",
    role: "Desarrollo el backend completo en Spring Boot (modelado de datos, API REST, seguridad y pruebas) y el frontend de escritorio con Tauri, React y TypeScript.",
    stack: [
      "Java 21",
      "Spring Boot 4",
      "Spring Security",
      "JWT",
      "Spring Data JPA",
      "Hibernate",
      "Flyway",
      "MySQL 8.4",
      "Docker",
      "Maven",
      "React",
      "TypeScript",
      "Vite",
      "Tauri 2",
      "Rust",
    ],
    highlights: [
      "API REST en Spring Boot 4.1 sobre Java 21, con controladores organizados por dominio: autenticación, usuarios, empleados, sucursales, productos, ventas, caja, proveedores, recepción de stock, ajustes de inventario y regiones/comunas.",
      "Autenticación JWT con access y refresh token, rotación y revocación persistida en base de datos, más autorización por roles ADMIN, CASHIER y WAREHOUSE.",
      "Persistencia con Spring Data JPA e Hibernate sobre MySQL 8.4 y esquema versionado con Flyway, incluyendo catálogos de regiones y comunas de Chile y datos iniciales.",
      "Capa de servicios con DTOs record, mappers manuales, validación de entrada, manejo global de errores y pruebas sobre seguridad, autenticación, empleados y regiones.",
      "Base de datos en contenedores con Docker Compose y cliente de escritorio con Tauri 2 (React + Vite + TypeScript sobre Rust).",
    ],
    image: "./projects/ventas-greta.png",
    imageAlt: "Captura de la aplicación de escritorio del sistema de ventas",
    imageCaption:
      "Aplicación de escritorio en Tauri para operar el punto de venta",
    links: [],
    privateNote:
      "El código vive en un repositorio privado (frontend y backend). Puede revisarse bajo acuerdo de confidencialidad.",
  },
];

export const skillGroups: SkillGroup[] = [
  {
    id: "frontend",
    title: "Frontend",
    summary: "Interfaces tipadas, accesibles y con estado manejable.",
    items: [
      "React",
      "TypeScript",
      "JavaScript",
      "Vite",
      "Vue 3",
      "Inertia.js",
      "React Router",
      "Context API",
      "TailwindCSS",
      "Bootstrap",
      "ApexCharts",
      "HTML5",
      "CSS3",
    ],
  },
  {
    id: "backend",
    title: "Backend",
    summary: "APIs REST, seguridad y lógica de negocio con Java.",
    items: [
      "Java 21",
      "Spring Boot 3",
      "Spring Security",
      "Spring Data JPA",
      "Spring Cloud Gateway",
      "Hibernate",
      "JWT",
      "REST APIs",
      "MVC",
      "Arquitectura limpia",
      "PHP",
      "Laravel",
      "Python",
      "FastAPI",
      "SQL",
      "PL/SQL",
    ],
  },
  {
    id: "datos",
    title: "Bases de datos",
    summary:
      "Modelado relacional, consultas complejas e aislamiento por cliente.",
    items: [
      "MySQL 8",
      "Modelado relacional",
      "Consultas complejas",
      "Procedimientos almacenados",
      "Diseño multi-tenant",
      "Hibernate ORM",
      "SQLite",
      "Room",
      "SQLCipher",
    ],
  },
  {
    id: "movil",
    title: "Móvil",
    summary: "Apps nativas Android orientadas al trabajo en terreno.",
    items: [
      "Kotlin",
      "Jetpack Compose",
      "Material 3",
      "CameraX",
      "Retrofit",
      "Firebase (FCM)",
      "Biometric",
      "Navigation Compose",
      "Coil",
      "Android Studio",
    ],
  },
  {
    id: "herramientas",
    title: "Herramientas & DevOps",
    summary:
      "Del commit al despliegue: contenedores, nube e integración continua.",
    items: [
      "Git",
      "GitHub",
      "GitHub Actions",
      "CI/CD",
      "Docker",
      "Docker Compose",
      "Maven",
      "Gradle",
      "AWS (EC2, S3, VPC)",
      "Terraform",
      "Linux (Ubuntu)",
      "Postman",
      "OpenAPI",
      "Swagger UI",
      "JUnit 5",
      "Mockito",
      "AssertJ",
      "Scrum",
    ],
  },
  {
    id: "escritorio",
    title: "Escritorio",
    summary: "Aplicaciones nativas de escritorio, ligeras y portables.",
    items: ["Tauri", "Rust", "React", "TypeScript", "Vite"],
  },
];

export const timeline: TimelineEntry[] = [
  {
    period: "2026",
    title: "Práctica profesional — RTIAP Soluciones Tecnológicas",
    place: "Viña del Mar, Chile",
    description:
      "Desarrollador fullstack/frontend en la migración de un ecosistema legacy hacia un monolito moderno en Laravel con arquitectura multi-inquilino, Vue 3 e Inertia.js, modelando la base de datos de tenants en MySQL para datos de sensores IoT y dashboards de monitoreo en tiempo real.",
  },
  {
    period: "2024 — 2026",
    title: "Analista Programador — DUOC UC, Sede Viña del Mar",
    place: "Valparaíso, Chile",
    description:
      "Formación en desarrollo de software, bases de datos y metodologías ágiles, con foco en Java, SQL, arquitectura de software y calidad de código.",
  },
];

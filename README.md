# Portafolio — Andrés Ortega Suazo

Portafolio profesional para posiciones de **desarrollador de software backend / fullstack**.
Sitio estático construido con React, TypeScript y Vite, desplegado automáticamente en
GitHub Pages con GitHub Actions.

🌐 **Demo en producción:** https://andythe20.github.io/

## Contenido del sitio

1. **Presentación personal** — nombre, título, resumen, panel de especialidad, botones a
   GitHub/contacto y CV en PDF.
2. **Proyectos destacados** — SIFA (sistema municipal de fiscalización vehicular con IA,
   mostrado con su arquitectura completa) y Sistema de Ventas Greta (API REST en Spring Boot
   + aplicación de escritorio en Tauri para un negocio mayorista).
3. **Tecnologías y conocimientos** — frontend, backend, bases de datos, móvil, herramientas
   y DevOps, escritorio.
4. **Sobre mí y contacto** — perfil, trayectoria, formas de contacto y descarga del CV.

## Stack

- [React](https://react.dev) 19 + [TypeScript](https://www.typescriptlang.org)
- [Vite](https://vite.dev) 8
- CSS nativo con custom properties (sin frameworks ni dependencias extra)
- [GitHub Actions](https://docs.github.com/actions) + GitHub Pages para el despliegue

## Desarrollo local

```bash
npm install
npm run dev      # servidor de desarrollo en http://localhost:5173
npm run build    # compila TypeScript y genera el sitio en dist/
npm run preview  # sirve dist/ localmente para revisar el resultado
npm run lint     # ESLint
```

## Estructura

```
├── public/
│   ├── curriculum.pdf        # CV descargable desde el sitio
│   ├── favicon.svg
│   └── projects/             # capturas de cada proyecto (ver projects/README.md)
├── src/
│   ├── components/           # Header, Hero, Projects, ProjectCard, Skills, About, Contact, Footer
│   ├── data/portfolio.ts     # todo el contenido del sitio en un solo lugar
│   ├── App.tsx
│   ├── index.css             # tokens de diseño, reset y estilos base
│   └── main.tsx
├── .github/workflows/static.yml
└── vite.config.ts
```

Todo el texto, proyectos, habilidades y enlaces se editan en
`src/data/portfolio.ts`. Para cambiar imágenes, reemplaza los archivos en
`public/projects/` respetando los nombres indicados en `public/projects/README.md`.

## Despliegue

Cada `push` a `main` dispara `.github/workflows/static.yml`, que instala dependencias,
compila el sitio y publica la carpeta `dist/` en GitHub Pages.

Para activarlo en el repositorio: **Settings → Pages → Source → GitHub Actions**.

## Contacto

- Email: andresortegasuazo@gmail.com
- LinkedIn: [in/andres-ortega-suazo](https://www.linkedin.com/in/andres-ortega-suazo/)
- GitHub: [Andythe20](https://github.com/Andythe20)

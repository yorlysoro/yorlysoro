# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [0.6.0] - 2026-04-27

### Added

- **Experiencia Laboral Section**: Carrusel interactivo implementado.
- **Arquitectura DRY**: Reutilización exitosa del módulo nativo `src/js/components/carousel.js` sin duplicación de código ni dependencias externas.
- **Accesibilidad y Semántica**: Implementación de etiquetas `<time>` para las fechas de la línea temporal, mejorando el SEO técnico y la legibilidad para _screen readers_.

## [0.5.0] - 2026-04-27

### Added

- **Portafolio Section**: Grid de proyectos implementado.
- **Micro-Thumbnails**: Arquitectura de imágenes restringida a 106x54px integrada como un "Data-Badge" para mantener resolución sin pixelado y respetar la estética de la interfaz de usuario.
- **Performance**: Atributo `loading="lazy"` aplicado a imágenes off-screen para proteger el Largest Contentful Paint (LCP).

## [0.4.0] - 2026-04-27

### Added

- **Servicios Section**: Implementación del carrusel de servicios con UI Cyberpunk.
- **Vanilla JS Carousel**: Lógica de desplazamiento nativa (`src/js/components/carousel.js`) usando las APIs del DOM y `scrollBy` para un rendimiento de 60fps sin librerías externas.
- **Scroll-Snap CSS**: Utilidades en `main.css` para ocultar la barra de desplazamiento nativa manteniendo la accesibilidad táctil y de teclado.

## [0.3.0] - 2026-04-27

### Added

- **Acerca de Mí Section**: Implementación de cuadrícula semántica (Grid) estilo "Chips de CPU" en `index.html`.
- **Estilos CSS/Tailwind**: Emulación de hardware (pines, conectores) utilizando bordes degradados y sombras interiores (`shadow-[inset...]`) sin requerir assets gráficos pesados, manteniendo el LCP en cero.

## [0.2.0] - 2026-04-27

### Added

- **Design System**: Configuración de `tailwind.config.js` inyectando paleta Cyberpunk (cyber-dark, cyber-cyan, cyber-magenta, cyber-yellow) y tipografías (Orbitron, Space Grotesk).
- **Core CSS**: Archivo `src/css/main.css` con directivas base de Tailwind.
- **Hero Section**: Maquetación semántica del `index.html` con la sección de inicio, optimizada para SEO (H1, H2, keywords) y Core Web Vitals (sin assets pesados de bloqueo).

## [Unreleased]

## [0.1.0] - 2026-04-27

### Added

- Inicialización del proyecto.
- Arquitectura de directorios base optimizada para Vanilla JS + Vite + TailwindCSS.
- Archivos `.gitignore` y configuración de control de versiones.
- Estructura vacía para componentes JavaScript (`carousel`, `form`, `nav`).

# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [1.0.0] - 2026-04-27

### Added

- **CI/CD Pipeline**: Implementación de GitHub Actions (`deploy.yml`) para automatizar la compilación y despliegue del proyecto en GitHub Pages.
- **PostCSS Configuration**: Integración del puente `postcss.config.js` para habilitar el procesamiento en tiempo de compilación de las directivas de TailwindCSS.

### Fixed

- **SVG Vector Integrity**: Estandarización de las coordenadas de las curvas de Bézier (`C` y `s`) en el icono de Telegram para evitar fallos de validación estricta de XML/SVG (`Expected arc flag`) causados por minificación agresiva.
- **Build Step**: Corrección de la renderización del entorno de producción. Migración de servir código fuente crudo a servir el _build_ minificado y procesado a través de la carpeta `dist/`.

## [0.7.0] - 2026-04-27

### Added

- **Contacto Section**: Nodos de comunicación seguros y centrados implementados.
- **Seguridad**: Uso estricto de `rel="noopener noreferrer"` en enlaces externos para mitigar riesgos de _Reverse Tabnabbing_.
- **Rendimiento**: Implementación de enlaces `mailto:` nativos, evitando la sobrecarga de dependencias de terceros y mitigando la superficie de ataque (SPAM/Inyección).

## [0.6.0] - 2026-04-27

### Added

- **Experiencia Laboral Section**: Carrusel interactivo implementado con línea temporal estética.
- **Arquitectura DRY**: Reutilización exitosa del módulo nativo `src/js/components/carousel.js` sin duplicación de lógica ni dependencias externas.
- **Accesibilidad y Semántica**: Implementación de etiquetas `<time>` para las fechas, mejorando el SEO técnico y la legibilidad _machine-readable_.

## [0.5.0] - 2026-04-27

### Added

- **Portafolio Section**: Grid de proyectos desplegados implementado.
- **Micro-Thumbnails**: Arquitectura de imágenes restringida a 106x54px integrada como un "Data-Badge" visual.
- **Performance**: Atributo `loading="lazy"` aplicado a imágenes _off-screen_ para proteger las Core Web Vitals (LCP).

## [0.4.0] - 2026-04-27

### Added

- **Servicios Section**: Implementación del carrusel de servicios con UI Cyberpunk.
- **Vanilla JS Carousel**: Lógica de desplazamiento nativa (`initCarousel`) aislada en módulo. Utiliza las APIs del DOM y `scrollBy` para un rendimiento de 60fps libre de librerías.
- **Scroll-Snap CSS**: Utilidades de Tailwind/CSS para ocultar la barra de desplazamiento nativa manteniendo la accesibilidad.

## [0.3.0] - 2026-04-27

### Added

- **Acerca de Mí Section**: Implementación de cuadrícula semántica (Grid) estilo "Chips de CPU".
- **Estilos CSS/Tailwind**: Emulación de hardware (pines, conectores) utilizando bordes degradados y sombras interiores (`shadow-inset`) sin requerir assets gráficos adicionales, manteniendo el LCP en cero.

## [0.2.0] - 2026-04-27

### Added

- **Design System**: Configuración de `tailwind.config.js` inyectando paleta Cyberpunk (cyber-dark, cyber-cyan, cyber-magenta, cyber-yellow) y tipografías.
- **Hero Section**: Maquetación semántica del inicio optimizada para SEO (H1, H2, keywords).

## [0.1.0] - 2026-04-27

### Added

- Inicialización del proyecto.
- Arquitectura de directorios base optimizada para Vanilla JS + Vite + TailwindCSS.
- Archivos `.gitignore` y configuración estandarizada de control de versiones.

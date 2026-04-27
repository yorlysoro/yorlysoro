import { initCarousel } from './components/carousel.js';

// Inicialización cuando el DOM esté listo
document.addEventListener('DOMContentLoaded', () => {
    console.log("YORLYS.SYS // INICIALIZADO V1.0");
    
    // Inicializar carrusel de servicios
    initCarousel('services-track', 'btn-prev', 'btn-next');
});

document.addEventListener('DOMContentLoaded', () => {
    console.log("YORLYS.SYS // INICIALIZADO V1.0");
    
    // Inicializar carrusel de Servicios
    initCarousel('services-track', 'btn-prev', 'btn-next');

    // Inicializar carrusel de Experiencia Laboral (Reutilización de módulo)
    initCarousel('experience-track', 'btn-prev-exp', 'btn-next-exp');
});
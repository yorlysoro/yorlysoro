import { initCarousel } from './components/carousel.js';

// Inicialización cuando el DOM esté listo
document.addEventListener('DOMContentLoaded', () => {
    console.log("YORLYS.SYS // INICIALIZADO V1.0");
    
    // Inicializar carrusel de servicios
    initCarousel('services-track', 'btn-prev', 'btn-next');
});
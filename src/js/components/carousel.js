/**
 * @fileoverview Lógica del carrusel nativo.
 * Utiliza el scroll nativo del navegador para el máximo rendimiento.
 */

/**
 * Inicializa los controles de un carrusel
 * @param {string} trackId - El ID del contenedor que hace scroll
 * @param {string} prevBtnId - El ID del botón de retroceso
 * @param {string} nextBtnId - El ID del botón de avance
 */
export const initCarousel = (trackId, prevBtnId, nextBtnId) => {
    const track = document.getElementById(trackId);
    const prevBtn = document.getElementById(prevBtnId);
    const nextBtn = document.getElementById(nextBtnId);

    if (!track || !prevBtn || !nextBtn) {
        console.warn(`[Sistema] Faltan nodos del DOM para inicializar el carrusel: ${trackId}`);
        return;
    }

    // Calcula cuánto scrollear (el ancho del primer elemento + gap)
    const getScrollAmount = () => {
        const firstElement = track.firstElementChild;
        if (!firstElement) return 0;
        // Obtenemos el ancho + el margen/gap (usualmente computado por flex/grid)
        return firstElement.getBoundingClientRect().width + 24; // 24px es aprox el gap-6 de Tailwind
    };

    nextBtn.addEventListener('click', () => {
        track.scrollBy({ left: getScrollAmount(), behavior: 'smooth' });
    });

    prevBtn.addEventListener('click', () => {
        track.scrollBy({ left: -getScrollAmount(), behavior: 'smooth' });
    });

    // Opcional: IntersectionObserver para desactivar botones al llegar al final/inicio
    // Para no sobre-ingenierizar, confiamos en la física nativa del 'overscroll', 
    // pero el event listener garantiza la navegación por clicks.
};
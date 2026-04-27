/** @type {import('tailwindcss').Config} */
export default {
  // Escaneamos el index.html y la carpeta js buscando clases
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Paleta Cyberpunk Base
        'cyber-dark': '#0a0a0f',      // Fondo principal (abismo)
        'cyber-darker': '#050507',    // Variación para secciones intercaladas
        'cyber-cyan': '#00f3ff',      // Acento principal
        'cyber-magenta': '#ff003c',   // Alertas / Call to Action secundario
        'cyber-yellow': '#fcee0a',    // Destacados de texto (estilo Cyberpunk 2077)
        'cyber-purple': '#7B2CBF',    // Tonos medios para gradientes
      },
      fontFamily: {
        // 'Orbitron' para títulos (tecnológico, display)
        display: ['Orbitron', 'sans-serif'],
        // 'Space Grotesk' o 'Inter' para lectura (limpio, geométrico)
        body: ['Space Grotesk', 'sans-serif'],
      },
      boxShadow: {
        // Utilidades de Neón personalizadas
        'neon-cyan': '0 0 5px theme("colors.cyber-cyan"), 0 0 20px theme("colors.cyber-cyan")',
        'neon-magenta': '0 0 5px theme("colors.cyber-magenta"), 0 0 20px theme("colors.cyber-magenta")',
        'neon-yellow': '0 0 5px theme("colors.cyber-yellow"), 0 0 20px theme("colors.cyber-yellow")',
      },
      textShadow: {
        // Requiere un plugin o CSS personalizado, lo manejaremos con utilidades de Tailwind si es posible, 
        // o lo inyectamos como variable nativa.
        'glitch': '2px 0 theme("colors.cyber-magenta"), -2px 0 theme("colors.cyber-cyan")',
      }
    },
  },
  plugins: [],
}
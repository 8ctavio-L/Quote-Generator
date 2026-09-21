# Quote Generator — Afirmaciones

## Generador de frases de afirmación diaria con una interfaz tipo "tarjeta de índice" sobre un escritorio nocturno. Construido con HTML, CSS y JavaScript puro, con animaciones vía GSAP.

# Demo en vivo: https://8ctavio-l.github.io/Quote-Generator/

## Características
Banco de frases local: 12 afirmaciones curadas a mano, sin repetir la misma dos veces seguidas.
Fuente externa opcional: soporte para traer frases de una API pública (dummyjson.com/quotes), activable con la constante USE_EXTERNAL_API.
Animaciones con GSAP: transición de entrada/salida de la frase con stagger palabra por palabra, y micro-interacciones en el botón.
Nueva frase al hacer scroll: usando ScrollTrigger, cada sección de scroll dispara una frase nueva la primera vez que entra en el viewport.
Diseño responsive: la tarjeta se adapta en pantallas pequeñas (@media (max-width: 480px)).

Estructura del proyecto

Quote-Generator/

├── index.html      # Estructura de la página

├── style.css        # Estilos (paleta, tipografía, layout)

├── script.js         # Lógica: selección de frases, animaciones, scroll

└── img/
    └── noise.png     # Textura de ruido para el fondo

## Tecnologías
HTML5 / CSS3
JavaScript (vanilla)
GSAP + ScrollTrigger (vía CDN)
Google Fonts: Newsreader e IBM Plex Mono
Cómo correrlo localmente

No requiere instalación ni build. Basta con abrir index.html en el navegador, o servirlo con un servidor local simple:

bash
# con Python
python3 -m http.server

# o con la extensión Live Server de VS Code
Personalizar las frases

Las afirmaciones viven en el arreglo localQuotes dentro de script.js. Cada frase tiene esta forma:

js
{ text: "Tu frase aquí.", }

Autor

Octavio López — 8ctavio-l

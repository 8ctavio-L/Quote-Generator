

const quotes = [
    { text: "Confía en el proceso: cada pequeño avance cuenta." },
    { text: "Hoy elijo ver los obstáculos como oportunidades de aprender." },
    { text: "Soy capaz de crear cosas nuevas, un paso a la vez." },
    { text: "La vida es o una gran aventura o nada." },
    { text: "No desees que las cosas sean más fáciles, desea tú ser mejor." },
    { text: "La vida es lo que pasa mientras estás ocupado haciendo otros planes." },
    { text: "Solo vives una vez, pero si lo haces bien, una es suficiente." },
    { text: "Cuando dejas de soñar, dejas de vivir." },
    { text: "Cada aprendizaje en la vida nos hace más sabios." },
    { text: "El tiempo todo lo cura, pero la vida solo puede ser vivida una vez." },
    { text: "Nunca es tarde para bien hacer; haz hoy lo que no hiciste ayer." },
    { text: "Sé quién necesitabas cuando eras joven." },
    { text: "Eres lo que haces, no lo que dices que harás." },
    { text: "Cualquier cosa que te plantee la vida, florécela con gracia." },
    { text: "Nunca bajes tus metas, aumenta tus esfuerzos." },
    { text: "La ocasión hay que crearla, no esperar a que llegue." },
    { text: "La vida es como una montaña rusa. Disfrútala." },
    { text: "Si amas la vida, la vida te amará." },
    { text: "Sonríe, que la vida vuela." },
    { text: "La salud y el intelecto son las dos bendiciones de la vida." },
    { text: "Saber comer es saber vivir." },
    { text: "Tu cuerpo es lo más preciado que tienes en la vida. Cuídalo." },
    { text: "Merezco amor, paz y felicidad en mi vida." },
    { text: "Confío plenamente en mis capacidades." },
    { text: "Tengo valor y soy útil." },
    { text: "Me doy la oportunidad de pedir lo que necesito." },
    { text: "Dejo en el pasado lo que ya no me sirve." },
    { text: "Crezco y mejoro cada día." },
    { text: "Yo transmito belleza y gracia." },
    { text: "Está bien avanzar poco a poco." },
];

let currentIndex = -1;

function getRandomQuote() {
    let newIndex;

    do {

        newIndex = Math.floor(Math.random() * quotes.length);

    } while (newIndex === currentIndex);

    currentIndex = newIndex;
    return quotes[currentIndex];
}

const quoteTextEl = document.getElementById("quoteText");
const quoteAuthorEl = document.getElementById("quoteAuthor");
const newQuoteBtn = document.getElementById("newQuoteBtn");
const quoteCounterEl = document.getElementById("quoteCounter");

function renderQuote(quote) {
    quoteTextEl.textContent = quote.text;
    quoteAuthorEl.textContent = quote.author
    fitTextSize(quoteTextEl);
}

function updateCounter() {
    const position = String(currentIndex + 1).padStart(2, "0");
    const total = String(quotes.length).padStart(2, "0");
    quoteCounterEl.textContent = `No. ${position}/${total}`;
}

function fitTextSize(el, maxSize = 1200, minSize = 50) {
    let fontSize = maxSize;
    el.style.fontSize = fontSize + "px";

    while (
        (el.scrollHeight > el.clientHeight || el.scrollWidth > el.clientWidth) &&
        fontSize > minSize
    ) {
        fontSize -= 1;
        el.style.fontSize = fontSize + "px";
    }
}

function showNewQuote() {
    const quote = getRandomQuote();

    gsap.timeline()
        .to(quoteTextEl, {
            opacity: 0,
            clipPath: "inset(0 0 100% 0)",
            filter: "blur(5px)",
            duration: 0.6,
            ease: "expo.in",
        })
        .call(() => {
            renderQuote(quote);
            updateCounter();
        })
        .fromTo(
            quoteTextEl,
            { filter: "blur(3px)" },
            {
                opacity: 1,
                clipPath: "inset(0 0 0% 0)",
                filter: "blur(0px)",
                duration: 0.9,
                ease: "expo.out",
            }
        );
}

newQuoteBtn.addEventListener("click", showNewQuote);

renderQuote(getRandomQuote());
updateCounter();

gsap.to(".frame-oval", {
    opacity: 1,
    duration: 2.0,
    ease: "power1.out",
});

const cursorOrb = document.querySelector(".cursor-orb");

const moveOrbX = gsap.quickTo(cursorOrb, "x", { duration: 0.4, ease: "power4" });
const moveOrbY = gsap.quickTo(cursorOrb, "y", { duration: 0.4, ease: "power4" });

window.addEventListener("mousemove", (Event) => {
    moveOrbX(Event.clientX);
    moveOrbY(Event.clientY);
});

// background blobs

gsap.to(".blob--orange", {
    x: 60,
    y: 40,
    duration: 2,
    repeat: -1,
    yoyo: true,
    ease: "sine.inOut",
});

gsap.to(".blob--pink", {
    x: -50,
    y: 60,
    duration: 10,
    repeat: -1,
    yoyo: true,
    ease: "sine.inOut",
});

gsap.to(".blob--blue", {
    x: 40,
    y: -50,
    duration: 4,
    repeat: -1,
    yoyo: true,
    ease: "sine.inOut",
});

gsap.registerPlugin(ScrollTrigger);


document.fonts.ready.then(() => {
    ScrollTrigger.refresh();
});




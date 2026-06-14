const elementos = document.querySelectorAll("section, .card");

const observador = new IntersectionObserver((entradas) => {
    entradas.forEach((entrada) => {
        if (entrada.isIntersecting) {
            entrada.target.classList.add("mostrar");
        }
    });
});

elementos.forEach((elemento) => {
    elemento.classList.add("oculto");
    observador.observe(elemento);
});

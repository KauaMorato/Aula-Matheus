// Espera a página inteira carregar antes de fazer qualquer coisa
document.addEventListener("DOMContentLoaded", () => {

    // Pega os elementos do HTML e guarda em "caixinhas" (variáveis)
    const formulario = document.querySelector("#formulario");
    const botao = document.querySelector("#entrar");
    const textoBotao = document.querySelector("#texto-botao");

    // ---------------- 1) ANIMAÇÃO DE ENTRADA (GSAP) ----------------
    // Sai do estado invisível (CSS) e vai ATÉ visível e na posição certa
    gsap.to("form input, #entrar", {
        opacity: 1,      // fica visível
        y: 0,            // volta para posição original
        duration: 1,     // dura 1 segundo
        stagger: 0.2,    // elementos um após o outro, com 0,2s de diferença
        ease: "power2.out"
    });

    // ---------------- 2) ANIMAÇÃO DE CARREGAMENTO (JavaScript) ----------------
    formulario.addEventListener("submit", (evento) => {
        evento.preventDefault(); // impede a página de recarregar

        if (botao.disabled) return; // evita cliques repetidos

        textoBotao.textContent = "Carregando...";
        botao.classList.add("loading");
        botao.disabled = true;

        // Depois de 3 segundos, volta tudo ao normal
        setTimeout(() => {
            textoBotao.textContent = "Entrar";
            botao.classList.remove("loading");
            botao.disabled = false;
        }, 3000);
    });

    // ---------------- 3) PULSAÇÃO NO HOVER (GSAP) ----------------
    botao.addEventListener("mouseenter", () => {
        gsap.to(botao, {
            scale: 1.08,
            duration: 0.4,
            ease: "power1.inOut",
            repeat: -1, // repete para sempre
            yoyo: true  // vai e volta
        });
    });

    botao.addEventListener("mouseleave", () => {
        gsap.killTweensOf(botao); // PARA a pulsação
        gsap.to(botao, { scale: 1, duration: 0.2 });
    });

});
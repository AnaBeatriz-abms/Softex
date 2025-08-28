
// Função que calcula o dobro
function dobro(x) {
    return x * 2;
}

document.addEventListener("DOMContentLoaded", () => {
    const btnCalcular = document.getElementById("btn-idade");
    const input = document.getElementById("numero");
    const mensagem = document.getElementById("mensagem-idade");
    const btnProximo = document.getElementById("btn-proximo");

    btnCalcular.addEventListener("click", () => {
        const valor = Number(input.value);

        if (isNaN(valor)) {
            mensagem.textContent = "Digite um número válido!";
            return;
        }

        mensagem.textContent = `O dobro de ${valor} é ${dobro(valor)}.`;
    });

    btnProximo.addEventListener("click", () => {
        window.location.href = "pagina3.html"; 
    });
});

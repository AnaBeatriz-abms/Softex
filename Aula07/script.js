
document.addEventListener("DOMContentLoaded", function () {
    const botao = document.getElementById("btn");
    const botaoProximo = document.getElementById("btn-proximo");

    botao.addEventListener("click", function () {
        const nome = document.getElementById("nome").value;
        const mensagem = `Olá, ${nome}`;
        document.getElementById("mensagem").textContent = mensagem;

        // Armazena o nome (opcional)
        localStorage.setItem("nomeUsuario", nome);
    });

    botaoProximo.addEventListener("click", function () {
        window.location.href = "pagina2.html";
    });
});
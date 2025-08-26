document.addEventListener("DOMContentLoaded", () => {
    let matrizAlunos = [
        [7, 8, 6],
        [5, 3, 10],
        [6, 7, 5],
        [4, 6, 7]  // ← Aluno 4
    ];

    const table = document.querySelector("#tabelaNotas");

    for (let i = 0; i < matrizAlunos.length; i++) {
        let linha = document.createElement("tr");

        // Nome do aluno
        let celAluno = document.createElement("td");
        celAluno.textContent = `Aluno ${i + 1}`;
        linha.appendChild(celAluno);

        // Notas do aluno
        let soma = 0;
        for (let j = 0; j < matrizAlunos[i].length; j++) {
            let celNota = document.createElement("td");
            celNota.textContent = matrizAlunos[i][j];
            linha.appendChild(celNota);
            soma += matrizAlunos[i][j];
        }

        // Média
        let media = soma / matrizAlunos[i].length;
        let celMedia = document.createElement("td");
        celMedia.textContent = media.toFixed(2);
        linha.appendChild(celMedia);

        // Situação (Aprovado ou Reprovado)
        let situacao = media >= 6 ? "Aprovado" : "Reprovado";
        let celSituacao = document.createElement("td");
        celSituacao.textContent = situacao;
        linha.appendChild(celSituacao);

        // Alerta ao clicar na linha
        linha.addEventListener("click", () => {
            alert(`O Aluno ${i + 1} está ${situacao}`);
        });

        table.appendChild(linha);
    }
});

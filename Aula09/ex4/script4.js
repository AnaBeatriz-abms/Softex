
const notas = [
    [8, 7, 9], // Aluno 1
    [6, 5, 8], // Aluno 2
    [7, 6, 10] // Aluno 3
];

function calcularMedia(notasAluno) {
    const soma = notasAluno.reduce((acc, nota) => acc + nota, 0);
    return soma / notasAluno.length;
}


document.getElementById('calcularBtn').addEventListener('click', function() {
    const tabelaBody = document.getElementById('tabelaNotas').getElementsByTagName('tbody')[0];

    
    tabelaBody.innerHTML = '';

   
    notas.forEach((notasAluno, index) => {
        const media = calcularMedia(notasAluno).toFixed(2);
        const linha = tabelaBody.insertRow();

        
        linha.insertCell(0).innerText = `Aluno ${index + 1}`;
        linha.insertCell(1).innerText = notasAluno[0];
        linha.insertCell(2).innerText = notasAluno[1];
        linha.insertCell(3).innerText = notasAluno[2];
        linha.insertCell(4).innerText = media;
    });
});

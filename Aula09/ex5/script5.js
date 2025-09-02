
function gerarMatriz() {
    let matriz = [];
    for (let i = 0; i < 4; i++) {
        let linha = [];
        for (let j = 0; j < 4; j++) {
            linha.push(Math.floor(Math.random() * 100) + 1); // Números aleatórios entre 1 e 100
        }
        matriz.push(linha);
    }
    return matriz;
}


function exibirMatriz() {
    let matriz = gerarMatriz();
    let tabelaBody = document.getElementById('matrizTabela').getElementsByTagName('tbody')[0];
    let listaDiagonal = document.getElementById('diagonalValores');

   
    tabelaBody.innerHTML = '';
    listaDiagonal.innerHTML = '';

   
    matriz.forEach((linha, i) => {
        let tr = tabelaBody.insertRow();
        linha.forEach((valor, j) => {
            let td = tr.insertCell();
            td.innerText = valor;
           
            if (i === j) {
                let li = document.createElement('li');
                li.innerText = `Elemento da Diagonal Principal: ${valor}`;
                listaDiagonal.appendChild(li);
            }
        });
    });
}


window.onload = exibirMatriz;

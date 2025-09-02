
function gerarMatriz() {
    let matriz = [
        [Math.floor(Math.random() * 100) + 1, Math.floor(Math.random() * 100) + 1, Math.floor(Math.random() * 100) + 1],
        [Math.floor(Math.random() * 100) + 1, Math.floor(Math.random() * 100) + 1, Math.floor(Math.random() * 100) + 1]
    ];
    return matriz;
}


function gerarTransposta(matriz) {
    let transposta = [
        [matriz[0][0], matriz[1][0]],
        [matriz[0][1], matriz[1][1]],
        [matriz[0][2], matriz[1][2]]
    ];
    return transposta;
}


function exibirMatriz() {
    let matriz = gerarMatriz();
    let transposta = gerarTransposta(matriz);


    let tabelaBody = document.getElementById('matrizTabela').getElementsByTagName('tbody')[0];
    tabelaBody.innerHTML = ''; 

    matriz.forEach(linha => {
        let tr = tabelaBody.insertRow();
        linha.forEach(valor => {
            let td = tr.insertCell();
            td.innerText = valor;
        });
    });

    
    let transpostaBody = document.getElementById('transpostaTabela').getElementsByTagName('tbody')[0];
    transpostaBody.innerHTML = ''; 

    transposta.forEach(linha => {
        let tr = transpostaBody.insertRow();
        linha.forEach(valor => {
            let td = tr.insertCell();
            td.innerText = valor;
        });
    });
}

window.onload = exibirMatriz;

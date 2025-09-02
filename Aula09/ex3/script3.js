
function gerarNumeroAleatorio() {
    return Math.floor(Math.random() * 100) + 1;
}

document.getElementById('gerarBtn').addEventListener('click', function() {
   
    let vetor = [];
    for (let i = 0; i < 10; i++) {
        vetor.push(gerarNumeroAleatorio());
    }

   
    let pares = 0;
    let impares = 0;

    vetor.forEach(numero => {
        if (numero % 2 === 0) {
            pares++;
        } else {
            impares++;
        }
    });

    
    document.getElementById('vetor').innerText = vetor.join(', ');
    document.getElementById('pares').innerText = pares;
    document.getElementById('impares').innerText = impares;
});

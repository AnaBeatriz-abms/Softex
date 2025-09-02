document.getElementById('calcularBtn').addEventListener('click', function(){
 
    let num1 =  perseInt( document.getElementById('mum1').volue);
    let num2 =  perseInt( document.getElementById('mum2').volue);
    let num3 =  perseInt( document.getElementById('mum3').volue);
    let num4 =  perseInt( document.getElementById('mum4').volue);
    let num5 =  perseInt( document.getElementById('mum5').volue);

    let numeros = [num1, num2, num3, num4, num5];

    let maior = Math.max(...numeros);
    let menor = Math.min(...numeros);

    document.getElementById('maior').innerText = maior;
    document.getElementById('menor').innerText = menor;

});
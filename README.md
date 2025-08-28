Aula 07 > Exercicio 02 > JS script.js >...

1

// função que calcula o dobro

2 function dobro(x) {

345

return x * 2;

6

7

8

9

// escopo principal

document.addEventListener("DOMContentLoaded", () => {

const btn = document.getElementById("btnCalcular");

const input = document.getElementById("numero");

10

11

const resultado = document.getElementById("resultado");

12

btn.addEventListener("click", () => {

13

const valor = Number(input.value);

14

15

16

if (isNaN(valor)) {

resultado.textContent = "Digite um número válido!";

17

return;

18

} resultado.textContent = `0 dobro de ${valor} é ${dobro(valor)}.`;

19

});

20

});

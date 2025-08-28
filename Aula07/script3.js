function soma(a, b) {
    return a + b;
}

function subtracao(a, b) {
    return a - b;
}

function multiplicacao(a, b) {
    return a * b;
}

function divisao(a, b) {
    if (b === 0) {
        return "Erro: divisão por zero";
    }
    return a / b;
}

document.addEventListener("DOMContentLoaded", () => {
    const btn = document.getElementById("btn-calcular");

    btn.addEventListener("click", () => {
        const num1 = Number(document.getElementById("numero1").value);
        const num2 = Number(document.getElementById("numero2").value);
        const operacao = document.getElementById("operacao").value;
        const resultado = document.getElementById("resultado");

        let res;

        if (isNaN(num1) || isNaN(num2)) {
            resultado.textContent = "Por favor, digite dois números válidos.";
            return;
        }

        switch (operacao) {
            case "soma":
                res = soma(num1, num2);
                break;
            case "subtracao":
                res = subtracao(num1, num2);
                break;
            case "multiplicacao":
                res = multiplicacao(num1, num2);
                break;
            case "divisao":
                res = divisao(num1, num2);
                break;
            default:
                res = "Operação inválida.";
        }

        resultado.textContent = `Resultado: ${res}`;
    });
});

class Retangulo {

    constructor(largura, altura) {
        this.largura = largura;
        this.altura = altura;
    }

    area() {
        const calcularArea = this.largura * this.altura;
        return calcularArea;
    }

    perimetro() {
        const calcularPerimetro = 2 * (this.largura + this.altura);
        return calcularPerimetro;
    }

}

const retangulo1 = new Retangulo(5, 3);
console.log(retangulo1.area());  

console.log(retangulo1.perimetro()); 

class Carro{

    constructor(marca, modelo, ano){
        this.marca = marca;
        this.modelo = modelo;
        this.ano = ano;
    }

    detalhe(){
        return `O Carro: ${this.marca} ${this.modelo}; Ano: ${this.ano}`;
    }

}

const veiculo1 = new Carro("Honda", "Civic", 2001);
console.log(veiculo1.detalhe());

const veiculo2 = new Carro("Volkswagen", "Jetta", 2020);
console.log(veiculo2.detalhe());
class Pessoa{

    constructor(name, idade){
        this.nome = this.nome;
        this.idade = this.idade;
    }

    apresentar(){
        return `Olá! Meu nome é ${this.nome} e eu tenho ${this.idade}`;
    }

}

const aluno1 = new Pessoa("Ana",24);
console.log(aluno1.apresentar());
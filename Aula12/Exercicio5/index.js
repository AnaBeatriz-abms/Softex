class Funcionario {
    constructor(nome, salario) {
        this.nome = nome;
        this.salario = salario;
    }

    descricao() {
        return `Funcionário ${this.nome}, salário: ${this.salario}`;
    }
}


class Gerente extends Funcionario {
    constructor(nome, salario, departamento) {
        super(nome, salario);  
        this.departamento = departamento;
    }

    descricao() {
        return `Gerente ${this.nome}, salário: ${this.salario}, departamento: ${this.departamento}`;
    }
}

const f = new Funcionario("Carolana", 15000);
const g = new Gerente("Jorge", 2000, "TI");

console.log(f.descricao()); 
console.log(g.descricao());  

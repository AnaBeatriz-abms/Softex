class ContaBancaria {
  #saldo = 0;

  constructor(saldoInicial) {
    this.#saldo = saldoInicial;
  }

  depositar(valor) {
    this.#saldo += valor;
    return this.#saldo;
  }

  sacar(valor) {
    if (valor > this.#saldo) {
      return 'Saldo insuficiente!';
    }
    this.#saldo -= valor;
    return this.#saldo;
  }

  verSaldo() {
    return this.#saldo;
  }
}


const contaBancaria1 = new ContaBancaria(0);

console.log(contaBancaria1.depositar(100)); 
console.log(contaBancaria1.sacar(30));     
console.log(contaBancaria1.verSaldo());     

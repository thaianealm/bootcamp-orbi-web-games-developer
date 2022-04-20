class contaBancaria {
    constructor(agencia, numero, tipo){
        this.agencia = agencia;
        this.numero = numero;
        this.tipo = tipo;
        this._saldo = 0; //sempre que tiver um get e um set colocar um underline na frente para que possa ser utilizado o nome no get e no set.
    }
    get saldo(){
        return this._saldo;
    }

    set saldo(valor){
        this._saldo = valor;
    }

    sacar(valor){
        if(valor > this._saldo){
            return 'Operação negada.';
        }
        this._saldo = this.saldo - valor;

        return this._saldo;
    }

    depositar(valor){
        this._saldo = this._saldo + valor;

        return this._saldo;
    }
}

class contaCorrente extends contaBancaria {
    constructor(agencia, numero, cartaoCredito){
        super(agencia, numero);
        this.tipo = 'corrente';
        this._cartaoCredito = cartaoCredito;
    }

    get cartaoCredito(){
        return this._cartaoCredito;
    }

    set cartaoCredito(valor){
        this._cartaoCredito = valor;
    }
}

class contaPoupanca extends contaBancaria {
    constructor(agencia, numero){
        this.tipo = 'poupança';
    }
}

class contaUniversitaria extends contaBancaria {
    constructor(agencia, numero){
        super(agencia, numero);
        this.tipo = 'universitaria';
    }

    sacar(valor) {
        if (valor > 500){
            return 'Operação negada. Com a Conta Universitária só é possível sacar valores menores que R$ 500,00'
        }

        this._saldo = this._saldo - valor;
        return this._saldo;
    }
} 
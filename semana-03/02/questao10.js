const contaBancaria = {
    nome: "Maria",
    saldo: 0,
    historicos: [],
    depositar: function  (valor) {
        saldo += valor;
        historicos = [ {
            tipo: "Depósito",
            valor: 10000
        }
    ]
    console.log(`${this.depositar.historicos.tipo} de R$ ${(this.depositar.historicos.valor / 100).toFixed(2)} para o cliente: ${this.nome}.`);

const carrinho = {
    nomeDoCliente: "Guido Bernal",
    produtos: [
        {
            id: 1,
            nome: "Camisa",
            qtd: 3,
            precoUnit: 3000
        },
        {
            id: 2,
            nome: "Bermuda",
            qtd: 2,
            precoUnit: 5000
        }
    ],
    imprimirResumo: function () {
        let totalItens = 0, valorTotal = 0;
    
    
    for (let i = 0; i < this.produtos.length; i++) {
        const quantidadeItens = this.produtos[i].qtd;
        const precoUnitarioItem = this.produtos[i].precoUnit;
      
      totalItens += quantidadeItens;
      valorTotal += precoUnitarioItem * quantidadeItens;
    }

    console.log(`Cliente: ${this.nomeDoCliente}`);
    console.log(`Total de itens: ${totalItens} itens`);
    console.log(`Total a pagar: R$ ${(valorTotal / 100).toFixed(2)}`);
    }
}


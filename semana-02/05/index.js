//tipo de pagamento (dinheiro, credito, debito, cheque).
const tipoDePagamento = "credito";

//valor da mercadoria (centavos)
const valorDoProduto = 13000;

//valor da mercadoria, em reais.
const valorProdutoEmReais = valorDoProduto / 100;

// verifica o tipo de desconto, calcule o valor do produto com o desconto e imprima o resultado.

//crédito = 5% ; cheque = 3% ; débito ou dinheiro = 10%; 

//valor do pagamento no crédito, em reais.
const pagamentoCredito = (valorProdutoEmReais - (valorProdutoEmReais * 0.05)).toFixed(2);

//valor do pagamento em cheque, em reais.
const pagamentoCheque = (valorProdutoEmReais - (valorProdutoEmReais * 0.03)).toFixed(2);

//valor do pagamento no débito ou em dinheiro, em reais.
const pagamentoAVista = (valorProdutoEmReais - (valorProdutoEmReais * 0.1)).toFixed(2);

// condicionais 
if (tipoDePagamento === "credito") {
    console.log(`Valor a ser pago: R$ ${pagamentoCredito}.`);
} else if (tipoDePagamento === "cheque") {
    console.log(`Valor a ser pago: R$ ${pagamentoCheque}.`);
} else if (tipoDePagamento === "debito" || tipoDePagamento === "dinheiro") {
    console.log(`Valor a ser pago: R$ ${pagamentoAVista}.`);
};


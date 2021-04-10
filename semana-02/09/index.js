//valor do produto comprado.
const valorDoProduto = 100000;

//quantidade de parcelas
const quantidadeDoParcelamento = 10;

//valor pago
const valorPago = 300;

// saber o valor restante para pagamento e quantas parcelas faltam pagar

//valor das parcelas, em reais.
const valorDasParcelas = (100000 / 100) / quantidadeDoParcelamento;

//valor restante a ser pago, em reais.
const valorRestante = (100000 / 100) - valorPago;

//quantidade das parcelas restantes.
const parcelasRestantes = valorRestante / valorDasParcelas;

console.log(`Restam ${parcelasRestantes} parcelas de R$ ${valorDasParcelas}.`)

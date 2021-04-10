//renda mensal do aluno, em centavos.
const rendaMensalEmCentavos = 300000;

// Tempo decorrido de contrato. Se for maior que 60 meses, o aluno não deve mais nada.
const mesesDecorridos = 12;

// Soma das parcelas já pagas pelo aluno nos meses anteriores (em centavos). Se for igual a 18 mil reais, o aluno não deve pagar mais nada, pois já quitou a dívida.
const totalJaPagoPeloAluno = 1000000;

//Valor da parcela a ser paga, em reais.
const valorDaParcelaEmReais = ((0.18 * rendaMensalEmCentavos) / 100).toFixed(2);

// não deve nada SE mesesDecorridos > 60 OU totalJaPagoPeloAluno === 18 mil -> caso contrário, imprime o valor da parcela a ser paga.

if (mesesDecorridos > 60 || totalJaPagoPeloAluno === 1800000) {
    console.log("A sua dívida está quitada.");
} else {
    console.log(`O valor da parcela desse mês é R$ ${valorDaParcelaEmReais}.`)
}




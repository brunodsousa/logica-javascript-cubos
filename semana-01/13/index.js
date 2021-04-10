// c = capital, i = taxa de juros, n = número de períodos, m = montante

let c = 60000, m = 90000, n = 24, i = 0;

// cálculo da taxa
i = Math.pow((m / c), (1 / n)) - 1;

console.log(`O seu financiamento de ${c} reais teve uma taxa de juros de ${i}%, pois após ${n} meses você teve que pagar ${m} reais.`);

// c = capital, i = taxa fixa de juros (valor da taxa / 100), t = tempo, m = montante

let c = 1000, i = 12.5, t = 5, m = 0;

const calculoJurosCompostos = c * (Math.pow(1 + (i / 100), t));
m = calculoJurosCompostos;

console.log(m);

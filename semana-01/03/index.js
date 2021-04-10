// po = população inicial infectada, x = pessoas p/ as quais um paciente infectado pode transmitir, t = tempo percorrido, p = qtd final de infectados

let po = 1000, x = 4, t = 100, p = 0;

const qtdFinalInfectados = po * Math.pow(x, (t / 7));
p = qtdFinalInfectados;

console.log(p);
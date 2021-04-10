const numeros = [0, 122, 4, 6, 7, 8, 44];

const pares = numeros.every(x => x % 2 === 0);
const verificacao = pares ? "array válido" : "array inválido";

console.log(verificacao);

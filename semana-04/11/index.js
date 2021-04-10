const numeros = [10, 1, 5, 50, 20, 30, 3, 4, 8, 2];
const frutas = ["Banana", "Amora", "abacaxi", "uva", "Pera"];

// a. ordenar em ordem crescente.
const ordemCrescente = numeros.sort((a, b) => a - b);

//b. ordenar em ordem decrescente.
const ordemDecrescente = numeros.sort((a, b) => b - a);

//c. ordem crescente, com base nos valores dos pontos de códig Unicode
const crescenteUnicode = numeros.sort();

//d. em ordem alfabética.
const ordemAlfabetica = frutas.sort((a, b) => a.localeCompare(b));

//e. ordem alfabética decrescente.
const alfabeticaDescrescente = frutas.sort((a, b) => b.localeCompare(a));

//f. ordem crescente, de acordo com quantidade de caracters.
const caractersCrescente = frutas.sort((a, b) => a.length - b.length);

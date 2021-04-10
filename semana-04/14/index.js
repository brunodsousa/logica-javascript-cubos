const palavras = ['livro', 'caneta', 'sol', 'carro', 'orelha'];

const existePalavra = palavras.some(x => x.length > 5);
const verificacao = existePalavra ? "Existe palavra inválida." : "Array validado.";

console.log(verificacao);

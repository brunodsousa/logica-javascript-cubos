const palavras = ["arroz", "feijão", "carne", "cerveja", "macarrão"];

const possuiItemProibido = palavras.some(x => x === "cerveja" || x === "vodka");
const verificacao = possuiItemProibido ? "Revise sua lista, João. Possui bebida com venda proibida!" : "Tudo certo, vamos às compras!";

console.log(verificacao);

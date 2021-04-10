const filaDeDentro = ["Jose", "Maria", "Joao"];
const filaDeFora = ["Joana", "Roberta", "Marcos", "Felipe"];

let limiteAtingido = false;

while (filaDeDentro.length < 5 && filaDeFora.length != 0) {
    filaDeDentro.push(filaDeFora[0]);
    filaDeFora.shift();
    limiteAtingido = true;
}

if (!limiteAtingido) {
    console.log("O limite de pessoas dentro da agência foi atingido. Por favor, aguarde.");
}

console.log(filaDeDentro);
console.log(filaDeFora);

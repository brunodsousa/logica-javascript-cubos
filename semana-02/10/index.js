const jogada1 = "pedra";
const jogada2 = "tesoura";

//deve imprimir o nome da jogada vencedora, ou "empate", em caso de empate.

// pedra ganha de tesoura, tesoura ganha de papel, papel ganha de pedra

if ((jogada1 === "pedra" && jogada2 === "tesoura") || (jogada1 === "papel" && jogada2 === "pedra") || (jogada1 === "tesoura" && jogada2 === "papel")) {
    console.log(jogada1);
} else if (jogada1 === jogada2) {
    console.log("empate");
} else {
    console.log(jogada2);
}

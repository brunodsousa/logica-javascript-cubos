const jogadores = ['Guido', 'Dina', 'Léo', 'Nanda', 'Juninho'];

let i = 0;
function rodada() {
    if (i < jogadores.length) {
        console.log(jogadores[i]);
        i++;
    } else {
        console.log("Fim da rodada");
        clearInterval(intervalId);
    }
}

const intervalId = setInterval(rodada, (10 / jogadores.length) * 1000);

rodada(jogadores);
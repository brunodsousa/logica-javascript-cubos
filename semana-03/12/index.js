const comentario = "Esse covid é muito perigoso!";

let palavrasProibidas = ['pandemia', 'Pandemia', 'PANDEMIA', 'covid', 'Covid', 'COVID'];
let possuiPalavraProibida = false;
for (let i of palavrasProibidas) {
    if (comentario.includes(i)) {
        possuiPalavraProibida = true;
        console.log("Comentário bloqueado por conter palavras proibidas.")
    } 
}

if (!possuiPalavraProibida) {
    console.log("Comentário autorizado.");
}

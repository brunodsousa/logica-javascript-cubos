const jogadores = ['Guido', 'Dina', 'Léo', 'Nanda', 'Juninho'];

const fs = require('fs');

const meuarquivo = "Estou aprendendo JavaScript na Cubos Academy";

fs.writeFile("./meuarquivo.txt", meuarquivo, () => {
    console.log("Arquivo foi escrito.");
});

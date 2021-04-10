const nomes = ['Ford Ká', 'Ranger', 'Hilux', 'Corola', 'Fusca', 'Chevete', 'Brasilia'];
const posicao = 3;

function gruposDeCarros (carros, posicao) {
    const grupo = [carros[posicao], carros[posicao + 1], carros[posicao + 2]].join(" - ");
    console.log(grupo);
}

const nomes = ["Ana", "Joana", "Carlos", "amanda"];

const nomesFiltrados = [];

for (let i = 0; i < nomes.length; i++) {
    const nome = nomes[i];
    const primeiraLetra = nome[0];
    if (primeiraLetra === "A" || primeiraLetra === "a") {
        nomesFiltrados.push(nome);
    }
}

console.log(nomesFiltrados);

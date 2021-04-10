const livros = ['Guerra e Paz', 'A Montanha Mágica', 'Cem Anos de Solidão', 'Dom Quixote', 'A Divina Comédia'];
const nomeDoLivro = "Dom Quixote";

const posicao = livros.indexOf(nomeDoLivro) + 1;

if (posicao === 0) {
    console.log('O título pesquisado não pôde ser encontrado');
} else {
    console.log(`O livro está na posição ${posicao}`);
}

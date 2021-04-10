const nomes = ['Juninho', 'Léo', 'Guido', 'Dina', 'Vitinho', 'Nanda'];
const tamanhoDoGrupo = 4;

function separaGrupo (lista, tamanho) {
    let numeroGrupo = 1;
    for (let i = 0; i < lista.length; i += tamanho) {
        console.log(`Grupo ${numeroGrupo}: ${lista.slice(i, (i + tamanho)).join(', ')}`);
        numeroGrupo++;
    }
}

separaGrupo(nomes, tamanhoDoGrupo);

const nomes = ['Juninho', 'Léo', 'Guido', 'Dina', 'Vitinho', 'Nanda'];
const tamanhoDoGrupo = 4;

let nickname = '';

function gerarNickName(nome) {
    
    nome = nome.toLowerCase();
    nickname = '@' + nome;
    nickname = nickname.replace(/\s+/g, '');

    if (nome.length <= 13) {
        console.log(nickname);
    } else {
        nickname = nickname.substr(0, 12);
        console.log(nickname);
    }
    
}

let identificador = "123";
let nome = "José silva costa";
let email = "      jose@email.com  ";
let tags = ['financeiro', 'administrativo', 'geral'];


// verificando se identificador se encaixa ao padrão.
    if (identificador.length < 6) {
        identificador = identificador.padStart(6, "0");
    }

// retirando espaços em branco do e-mail.
    email = email.trim();

// transformando o array de tags em uma única string
    tags = tags.join(',');

// formatando o nome e sobrenome para o padrão
    let arrayNome = nome.split(' ');
    let nomeCompleto = [];
    
    for (let i of arrayNome) {
        i = i.replace(i[0], i[0].toUpperCase());
        nomeCompleto.push(i);
    }
    
    nome = nomeCompleto.join(' ');

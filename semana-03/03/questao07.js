const prova = {
    aluno: "João",
    materia: "Português",
    valor: 10,
    questoes: [
        {
            resposta: "a",
            correta: "b"
        },
        {
            resposta: "c",
            correta: "c"
        },
        {
            resposta: "e",
            correta: "b"
        },
        {
            resposta: "b",
            correta: "b"
        },
        {
            resposta: "c",
            correta: "c"
        }
    ]
};

let nota = 0, numeroDeAcertos = 0;

function corrigirProva (dados) {

    for (let i = 0; i < prova.questoes.length; i++) {
    
    const respostaCorreta = prova.questoes[i].correta;
    const respostaAluno = prova.questoes[i].resposta;
    
    if (respostaAluno === respostaCorreta) {
        numeroDeAcertos++;
    }
    
    nota = (prova.valor / prova.questoes.length) * numeroDeAcertos
    
    }
    
    console.log(`O aluno(a) ${prova.aluno} acertou ${numeroDeAcertos} questões e obteve nota ${nota}.`);
}

corrigirProva(prova);

const cpf = "011.022.033-44";

function removerPontuacao (numero) {
    numero = numero.replace(/[./-]/g, "");
    console.log(numero);
}  

const cpf = "12345678900";
const cnpj = "12345678900";

// formatar CPF
function formatarCpf (cpf) {
    if (cpf.length < 11) {
        console.log("CPF inválido");
    } else {
        cpf = cpf.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, "$1.$2.$3-$4");
        console.log(cpf); 
    }
}

// formatar CNPJ
function formatarCnpj (cnpj) {
    if (cnpj.length < 14) {
        console.log('CNPJ inválido');
    } else {
        cnpj = cnpj.replace(/(\d{2})(\d{3})(\d{3})(\d{4})(\d{2})/, "$1.$2.$3/$4-$5");
        console.log(cnpj);
    }
}

const email = "alunos@cubos.academy";

const possuiPonto = email.slice(1, email.length - 1).includes(".");
const naoValido = email[0] === "." || email[email.length - 1] === ".";
const valido = email.includes("@");

// condicionais para verificação completa.

if (naoValido || !valido || !possuiPonto) {
    console.log('E-mail inválido');
} else {
    console.log('E-mail válido');
}

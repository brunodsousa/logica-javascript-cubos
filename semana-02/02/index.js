const caractere = "E";

//deverá dizer qual a categoria do caractere. Caso a categoria seja `Vogal`, seu programa deverá ainda informar se a vogal é maiúscula ou minúscula.

//Vogal | A E I O U a e i o u
//Consoante | Qualquer letra que não seja uma vogal
//Número | 1 2 3 4 5 6 7 9 0

if (caractere === "A" || caractere === "E" || caractere === "I" || caractere === "O" || caractere === "U") {
    console.log("Vogal maiúscula");
} else if (caractere === "a" || caractere === "e" || caractere === "i" || caractere === "o" || caractere === "u") {
    console.log("Vogal minúscula");
} else if (caractere === 1 || caractere === 2 || caractere === 3 || caractere === 4 || caractere === 5 || caractere === 6 || caractere === 7 || caractere === 8 || caractere === 9 || caractere === 0) {
    console.log("Número");
} else {
    console.log("Consoante");
}
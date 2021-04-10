const celular = 7199918888;

// com ddd e sem 9 = 10; com ddd e com 9 = 11 
// sem ddd com 9 = 9; sem ddd e sem 9 = 8

function formatarNumero (numero) {
    numero = numero.toString(); 
    if (numero.length === 11) {
        numero = numero.replace(/(\d{2})(\d{1})(\d{4})/, "($1) $2 $3-");
        console.log(numero);
    } else if (numero.length === 10) {
        numero = numero.replace(/(\d{2})(\d{4})/, "($1) 9 $2-");
        console.log(numero);
    } else if (numero.length === 9) {
        numero = numero.replace(/(\d{1})(\d{4})/, "$1 $2-");
        console.log(numero);
    } else if (numero.length === 8) {
        numero = numero.replace(/(\d{4})/, "9 $1-");
        console.log(numero);
    }

}

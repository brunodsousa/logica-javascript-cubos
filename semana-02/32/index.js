const numeros = [3, 4, 1, 8, 11, 7, 5];

//encontre o maior número desse array e o imprima no console

let maiorNumero = numeros[0];

for (let i = 1; i < numeros.length; i++) {
    if (numeros[i] > maiorNumero) {
        maiorNumero = numeros[i];
    }
}

console.log(maiorNumero);

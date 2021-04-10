const numeros = [8, 11, 4, 5, 2, 20];

let maiorDiferenca = -99999;

for (let i = 0; i < numeros.length; i++) {
    const aditivo = numeros[i];

    for (let j = i + 1; j < numeros.length; j++) {
        const subtrativo = numeros[j];
        const diferenca = aditivo - subtrativo;
        if (diferenca > maiorDiferenca) {
            maiorDiferenca = diferenca;
        } 
    }
}

console.log(maiorDiferenca);

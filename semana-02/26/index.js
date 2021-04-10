const letras = ["A", "a", "B", "C", "L", "z"];

let quantidade = 0;

for (let e of letras) {
    if (e === "E" || e === "e") {
        quantidade++;
    }
} 

if (quantidade === 0) {
    console.log('Não foi encontrada nenhuma letra "E" ou "e".');
} else if (quantidade === 1) {
    console.log(`Foi encontrada apenas ${quantidade} letra "E" ou "e".`);
} else {
    console.log(`Foram encontradas ${quantidade} letras "E" ou "e".`);
}

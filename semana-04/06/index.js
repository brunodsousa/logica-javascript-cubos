const frutas = ["Manga", "UVA", "abacaxi", "banaNA", "MAçã"];

const novoArray = frutas.map((x, index) => {
    let fruta = x.toLowerCase(), 
    primeiraLetra = fruta.substr(0, 1).toUpperCase(), 
    semPrimeiraLetra = fruta.substr(1);
    
    let nomeFruta = `${index} - ${primeiraLetra}${semPrimeiraLetra}`;

    return nomeFruta;
});

console.log(novoArray);

const frutas = ['Banana', 'Maçã', 'Abacaxi', 'Pêra', 'Uva'];


// a) ordem inversa e transforma em uma única string
const frutasInverso = frutas.reverse().join(', ');

// b) remove o primeiro e o último item, inverte e adiciona a fruta 'Melão'
frutas.shift();
frutas.pop();
frutas.reverse();
frutas.push('Melão');
console.log(frutas);

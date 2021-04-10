const cidades = ['Salvador', 'São Paulo', 'Brasilia', 'Recife', 'Rio de Janeiro'];

const arrayFiltrada = cidades.filter(x => x.length <= 8);

console.log(arrayFiltrada.join(', '));

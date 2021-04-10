const cidades = ['Salvador', 'São Paulo', 'Brasilia', 'Recife', 'Rio de Janeiro'];

const maiorString = cidades.reduce((acc, item) => item.length > acc.length ? item : acc);

console.log(maiorString);

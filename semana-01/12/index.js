// proposto: cálculo do volume de uma esfera a partir do diâmetro.

let pi = 3.14, raio = 5, diametro = 0, volume = 0;

//cálculo diâmetro 
diametro = 2 * raio;


//cálculo volume
volume = (4 / 3) * pi * Math.pow((diametro / 2), 3);


console.log(`O volume de uma esfera de raio ${raio} é ${volume}.`);
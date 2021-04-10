// proposto: calcular a área total de um cilindro a partir do raio da sua base e da sua altura.

// ab = área da base, al = área lateral, at = área total, h = altura

let ab = 0, al = 0, at = 0, pi = 3.14, raio = 5, h = 6;

ab = pi * Math.pow(raio, 2);
al = 2 * pi * raio * h;
at = al + (2 * ab);

console.log(at);

const disjuntores = [false, false, true, false, false, true, false, false];

let ligados = 0;

for (let i of disjuntores) {
    if (i) {
        ligados++;
    }
}

console.log(ligados);

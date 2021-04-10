const ladoA = 1;
const ladoB = 1;

const bucha = ladoA === ladoB;
                       
if (ladoA === 0 && bucha) {
    console.log("Branco");
} else if (ladoA === 1 && bucha) {
    console.log("Ás");
} else if (ladoA === 2 && bucha) {
    console.log("Duque");
} else if (ladoA === 3 && bucha) {
    console.log("Terno");
} else if (ladoA === 4 && bucha) {
    console.log("Quadra");
} else if (ladoA === 5 && bucha) {
    console.log("Quina");
} else if (ladoA === 6 && bucha) {
    console.log("Sena");
} else if (!bucha) {
    console.log("NÃO");
}



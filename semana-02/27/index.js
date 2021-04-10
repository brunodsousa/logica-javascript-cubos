const numeros = [54, 22, 14, 87, 284];

let temDez = false;

for (let i = 0; i <= numeros.length; i++) {
    if (numeros[i] === 10) {
        temDez = true;
        console.log(i);
        break;
    }
}

if (!temDez) {
    console.log("-1");
}

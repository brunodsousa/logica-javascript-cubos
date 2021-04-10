const texto = "Aprenda programar do zero na Cubos Academy";

function urlAmigavel (texto) {
    const url = texto.replace(/\s+/g, '-');
    console.log(url.toLowerCase());
}

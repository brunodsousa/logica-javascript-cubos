const notas = [6, 8, 9, 8];

function numeroUnico (numeros) {
    let unico = [];

    numeros.forEach(item => {
        const verificarExistencia = unico.find(x => x === item);
    

    if (!verificarExistencia) {
        unico.push(item);
    }
    
    });

    console.log(unico);

}

const nomeArquivo = 'Foto da Familia.pdf';

const arquivosPermitidos = ["jpg", "jpeg", "gif", "png"];
let ehValido = false;

for (let i of arquivosPermitidos) {
    if (nomeArquivo.includes(i)) {
        ehValido = true;
        console.log("Arquivo válido");
    } 
} 

if (!ehValido) {
    console.log("Arquivo inválido");
}

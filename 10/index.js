const nomeArquivo = 'Foto da Familia.pdf';

function validarExtencao(nomeArquivo) {
    const validarFormato = nomeArquivo.includes("jpg", "jpeg", "gif", "png");
    const validar = nomeArquivo.includes(".");

    if (validar === true && validarFormato === true) {
        console.log("Formato aceito.")
    } else {
        console.log("Formato invalido.")
    }
    return formato;
}

console.log(validarExtencao(nomeArquivo));
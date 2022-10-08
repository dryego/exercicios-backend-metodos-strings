const nomeArquivo = 'Foto da Familia.pdf';

function validarExtencao(nomeArquivo) {
    const validarFormato = nomeArquivo.includes("jpg", "jpeg", "gif", "png");
    const validar = nomeArquivo.includes(".");

    const formato = validar === true && validarFormato === true ? "Formato aceito." : "Formato invalido.";

    return formato;
}

console.log(validarExtencao(nomeArquivo));
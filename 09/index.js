const nome = 'Guido Cerqueira';

function nicknome(nome) {
    const nomeMinusculo = nome.toLowerCase();
    const nomeFormatado = nomeMinusculo.replace(/[^a-z]/g, "")
    if (nome.length <= 13) {

        const nicknome = (`@${nomeFormatado}`);

        return nicknome;
    } else {
        return "Nickname invalido"
    }
}

console.log(nicknome(nome));
const cnpj = "37.876.501/0001-46";
const cpf = "011.022.033-44"

function removerCaracter(cpf, cnpj) {
    const dados = cnpj || cpf;
    const Formatado = dados.replace(/[^0-9]/g, "");
    return Formatado;
}

console.log(removerCaracter(cnpj));
console.log(removerCaracter(cpf));
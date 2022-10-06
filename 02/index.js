const cpf = "12345678900";
const cnpj = "12345678900000";

function formatadorCPF(cpf) {
    if (cpf.length === 11) {
        cpf = cpf.replace(/[^\d]/g, "");
        return cpf.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, "$1.$2.$3-$4");
    } else {
        console.log("CPF invalido.")
    }
}
function formatadorCNPJ(cnpj) {
    if (cnpj.length === 14) {
        cnpj = cnpj.replace(/[^\d]/g, "");
        return cnpj.replace(/(\d{2})(\d{3})(\d{3})(\d{4})(\d{2})/, "$1.$2.$3/$4-$5");
    } else {
        console.log("CNPJ invalido.")

    }
}

console.log(formatadorCNPJ(cnpj));
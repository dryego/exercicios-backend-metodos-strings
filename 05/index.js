const numeroCartao = '1111222233334444';

if (numeroCartao.length === 16) {

    //numeroCartao.replace(/\D/g, " ");
    const ocultarCartao = numeroCartao.replace(/(\d{4})(\d{4})(\d{4})(\d{4})/, "$1********$4")

    console.log(ocultarCartao);
} else {
    console.log("Numero cartão invalido.");
}
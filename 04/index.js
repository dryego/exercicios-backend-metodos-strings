let identificador = "123";
let nome = "José silva costa";
let email = "      jose@email.com  ";

function formatador(identificador, nome, email) {
    let identFormatado = "";
    identFormatado = identificador.padStart(6, "0")
    console.log(identFormatado);

    const arrayNome = nome.split(" ");
    let nomeFormatado = "";
    for (let letra of arrayNome) {
        let primeiraLetra = letra.slice(0, 1);
        let restoNome = letra.slice(1);

        nomeFormatado += (primeiraLetra.toUpperCase() + restoNome + " ");
    }
    console.log(nomeFormatado);

    console.log(email.trim());
}

formatador(identificador, nome, email);
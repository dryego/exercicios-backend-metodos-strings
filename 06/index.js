const celular = 7199918888;

function formatarCelular(celular) {
    let celularString = celular.toString();
    let ddd = "";
    const nonoDigito = 9;
    let primeiraParte = "";
    let segundaParte = "";
    let numeroAdicionado = "";


    if (celularString.length === 11) {
        ddd = celularString.slice(0, 2);
        primeiraParte = celularString.slice(3, 7);
        segundaParte = celularString.slice(7, celularString.length);

        console.log(`(${ddd}) ${nonoDigito} ${primeiraParte}-${segundaParte}`);

    } else if (celularString.length > 9 && celularString.length < 11) {
        numeroAdicionado = celularString.padStart(11, "0")
        celularString.padStart(2, nonoDigito);
        ddd = numeroAdicionado.slice(1, 3);
        primeiraParte = numeroAdicionado.slice(3, 7);
        segundaParte = numeroAdicionado.slice(7, numeroAdicionado.length);

        console.log(`(${ddd}) ${nonoDigito} ${primeiraParte}-${segundaParte}`);

    } else if (celularString.length <= 9) {
        numeroAdicionado = celularString.padStart(11, "0");
        primeiraParte = numeroAdicionado.slice(3, 7);
        segundaParte = numeroAdicionado.slice(7, numeroAdicionado.length);

        console.log(`${nonoDigito} ${primeiraParte}-${segundaParte}`)

    }
}

formatarCelular(celular);
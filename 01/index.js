const comentario = "Esse covid é muito perigoso!";

const conversaoMaiuscula = comentario.toUpperCase();
const localizadorCovid = comentario.indexOf("COVID");
const localizadorPandemia = comentario.indexOf("PANDEMIA");

if (localizadorCovid === -1 || localizadorPandemia === -1) {
    console.log("Comentário autorizado");
} else {
    console.log("Comentário bloqueado por conter palavras proibidas");
}

// const validacao = localizadorCovid === false || localizadorPandemia === false ? "Comentário autorizado" : "Comentário bloqueado por conter palavras proibidas";
// console.log(validacao);
const email = "aluno@cubos.academy";

const verificadorArroba = email.indexOf("@");
const verificadorPonto = email.indexOf(".", verificadorArroba);
const validar = email.includes("@")
const inicio = email.slice(0, 1);
const finalEmail = email.slice(email.length - 1);

if (validar === true && verificadorPonto > verificadorArroba && inicio != "." && finalEmail != "." && email.length > 3) {

    console.log("E-mail valido.")
} else {
    console.log("E-mail inválido.");
}
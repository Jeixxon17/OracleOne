//Funcion Para Encripar El Texto 
function Textencriptado(texto) {
    var resultado = "";
    for (let i = 0; i < texto.length; i++) {
        letra = texto[i];
        if (letra === "a") {
            resultado = resultado + "ai";
        }
        else if (letra === "e") {
            resultado = resultado + "enter";
        }
        else if (letra === "i") {
            resultado = resultado + "imes";
        }
        else if (letra === "o") {
            resultado = resultado + "ober";
        }
        else if (letra === "u") {
            resultado = resultado + "ufat";
        }
        else{
            resultado = resultado + letra;
        }
    }
    return resultado;
}
//Funcion para llamar la funcion de texto encriptado y mostrarlo en pantalla
function encriptar() {
    var texto = document.getElementById("texto").value;
    var textoEncriptado = Textencriptado(texto);
    document.getElementById("encriptador").value = textoEncriptado;
}

//Funcion para desencriptar
function desencriptarTexto(textoEncriptado) {
    let resultado = "";
    for (let i = 0; i < textoEncriptado.length; i++) {
        letra = textoEncriptado;
        if (letra.substr(i, 2) === "ai") {
            resultado = resultado + "a";
            i = i + 1;
        } else if (letra.substr(i, 5) === "enter") {
            resultado = resultado + "e";
            i = i + 4;
        } else if (letra.substr(i, 4) === "imes") {
            resultado = resultado + "i";
            i = i + 3;
        } else if (letra.substr(i, 4) === "ober") {
            resultado = resultado + "o";
            i = i + 3;
        } else if (letra.substr(i, 4) === "ufat") {
            resultado = resultado + "u";
            i = i + 3;
        } else {
            resultado += letra[i];
      }
    }
    return resultado;
  }
  

//Funcion para llamar la funcion de texto encriptado y mostrarlo en pantalla
function desencriptar() {
    var textoEncriptado = document.getElementById("texto").value;
    var textoDesencriptado = desencriptarTexto(textoEncriptado);
    document.getElementById("encriptador").value = textoDesencriptado;
}
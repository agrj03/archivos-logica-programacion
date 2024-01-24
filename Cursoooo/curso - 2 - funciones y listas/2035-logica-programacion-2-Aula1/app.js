//QuerySelector permite interactuar mediante JS con los documentos HTML
let titulo = document.querySelector('h1');
//Inserto texto dentro del Header
titulo.innerHTML = "Juego del Número Secreto";
//Ahora selecciono el párrafo "p" del doc index.html
let parrafo = document.querySelector("p");

parrafo.innerHTML = "Dígita un número entre el 1 y el 10";

//Declaro la funcion mediante la palabra reservada "Function"
function intentoDeUsuario(){
    alert("Funciona");
}
/**
* Cambia el contenido de la etiqueta h1 con document.querySelector y asigna el siguiente texto: 
"Hora del Desafío".
* Crea una función que muestre en la consola el mensaje "El botón fue clicado" 
    siempre que se presione el botón "Console".
* Crea una función que se ejecute cuando se haga clic en el botón "prompt", preguntando el nombre 
    de una ciudad de Brasil. Luego, muestra una alerta con el mensaje concatenando la respuesta con 
    el texto: "Estuve en {ciudad} y me acordé de ti".
*Crea una función que muestre una alerta con el mensaje: "Yo amo JS" siempre que se presione el 
    botón "Alerta".
* Al hacer clic en el botón "suma", pide 2 números y muestra el resultado de la suma en una alerta.
 */
//Cambiar contenido del H1 mediante querySelector
let titulo = document.querySelector("h1");
titulo.innerHTML = "Hora del Desafío";

//Crear funcion que muestre mensaje al hacer clic al boton consola
function ActionConsole(){
    console.log("El botón fue clicado");
}

//funcion del boton prompt, que pregunta una ciudad de brasil para después mostrar una alerta
function MsgPrompt(){
    let ciudad = prompt("Escribe el nombre de una ciudad");

    alert(`Estuve en ${ciudad} y me acordé de ti.`);
}

//Function del boton alert. Muestra una alerta al darle clic
function JsAlert(){
    alert("Yo amo JS");
}

//Funcion que pide dos números para después sumarlos y mostrarlos en una alerta

function btnSuma(){
    let num1 = parseInt(prompt("Dame un primer numero para sumar"));
    let num2 = parseInt(prompt("Dime un segundo número"));
    let resultado = num1 + num2;
    alert("Resultado: "+ resultado);
}

/*
1.-Pregunta al usuario qué día de la semana es. Si la respuesta es "Sábado" o "Domingo",
 muestra "¡Buen fin de semana!". De lo contrario, muestra "¡Buena semana!".
2.- Verifica si un número ingresado por el usuario es positivo o negativo. Muestra una alerta informativa.
*/

//primera parte
let diaSemana = prompt("¿Qué día de la semana es? :");
//parte 4
let saldoUser = 450;

console.log(diaSemana);
console.log(saldoUser);

if(diaSemana == "sábado" || diaSemana == "sabado" || diaSemana == "Domingo"){
    alert("¡Buen fin de semana!");
}else{
    alert("¡Buena semana!");
}

//Segunda parte
let Numero = 0; 

numero = prompt("Dame un número: ");

if(numero >= 0 ){
    alert(`Diste un número Positivo, el cual fue: ${numero}`);
    alert("Intenta nuevamente para ganar.");
    /* 3.- Crea un sistema de puntuación para un juego. Si la puntuación es mayor o igual a 100, 
    muestra "¡Felicidades, has ganado!". En caso contrario, muestra "Intenta nuevamente para ganar.". */
    
    if(numero >= 100 ){
        alert("¡Felicidades, has ganado!");
    }

}else{
    alert(`Diste un número Negativo, el cual fue: ${numero}`);
    alert("Intenta nuevamente para ganar.");
}
/* 4.- Crea un mensaje que informe al usuario sobre el saldo de su cuenta, 
utilizando un template string para incluir el valor del saldo.*/

alert(` Estimado usuario, el saldo de su cuenta es de ${saldoUser} `);

/*5.- Pide al usuario que ingrese su nombre mediante un prompt. Luego, muestra una alerta de 
bienvenida usando ese nombre. */
let nombre = prompt("Escribe tu nombre:");
alert(`Bienvenido ${nombre}`);
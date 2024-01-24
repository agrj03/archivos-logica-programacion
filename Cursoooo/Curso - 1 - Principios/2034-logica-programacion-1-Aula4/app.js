//Variables
let rangoMaximoJuego = parseInt(prompt("Elige un numero maximo para tratar de adivinar en el juego"));
let numeroSecreto = Math.floor(Math.random()* rangoMaximoJuego )+1;
let numeroUsuario = 0;
let intentos = 1;
//let palabraVeces = 'vez';
let maximosIntentos = 4;

if(rangoMaximoJuego >= 100){
    maximosIntentos = Math.floor( Math.random() * 5) + 4;
}

console.log("maximo de intentos: "+ maximosIntentos);


console.log(rangoMaximoJuego);
console.log(numeroSecreto);


while (numeroUsuario != numeroSecreto) {
    numeroUsuario = parseInt(prompt(`Me indicas un número entre 1 y ${rangoMaximoJuego} por favor:`));

    console.log(typeof(numeroUsuario));
    if (numeroUsuario == numeroSecreto) {
        //Acertamos, fue verdadera la condición
        alert(`Acertaste, el número es: ${numeroUsuario}. Lo hiciste en ${intentos} ${intentos == 1 ? 'vez' : 'veces' }`);
    } else {
        if (numeroUsuario > numeroSecreto) {
            alert('El número secreto es menor');
        } else {
            alert('El número secreto es mayor');
        }
        //Incrementamos el contador cuando no acierta
        //intentos = intentos + 1;
        //intentos += 1;
        intentos++;

        //palabraVeces = 'veces';
        if (intentos > maximosIntentos) {
            alert(`Llegaste al número máximo de ${maximosIntentos} intentos`);
            console.log('El numero secreto era: ' + numeroSecreto);
            break;
        }
        //La condición no se cumplió
        //alert('Lo siento, no acertaste el número');
    }
}
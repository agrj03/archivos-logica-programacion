/*Para evitar redundancia, se devuelve el resultado de la funcion, 
el cual se puede almacenar en una variable*/
let numeroSecreto = generarNumeroSecreto();
let intentos = 0;

console.log(numeroSecreto);

/**Para no tener codigo redundante, se encapsulo dentro de una funcion para poder ser reutilizada
 * de una forma mas practica y eficiente, simplificando y reduciendo el codigo
 */
function asignarTextoElemento(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

function verificarIntento() {
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);
    
    if (numeroDeUsuario === numeroSecreto) {
        console.log('Acertaste el número!');
    } 
    return;
}


function generarNumeroSecreto() {
    /*Mediante Floor obtengo un numero Entero en base al valor decimal que otorga la funcion random.
    Ya que se esta trabajando de 1 a 10, se multiplica por 10, ademas se le suma 1 ya que `random`
    puede dar como resultado un cero, lo cual perjudica el rango mencionado*/
    return Math.floor(Math.random()*10)+1;

}

asignarTextoElemento('h1','Juego del número secreto!');
asignarTextoElemento('p',`Indica un número del 1 al 10`);
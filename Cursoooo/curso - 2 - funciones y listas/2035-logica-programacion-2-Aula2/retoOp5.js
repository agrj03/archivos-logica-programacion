/**1 Crear una función que muestre "¡Hola, mundo!" en la consola.
2.Crear una función que reciba un nombre como parámetro y muestre "¡Hola, [nombre]!" en la consola.
3. Crear una función que reciba un número como parámetro y devuelva el doble de ese número.
4. Crear una función que reciba tres números como parámetros y devuelva su promedio.
5. Crear una función que reciba dos números como parámetros y devuelva el mayor de ellos.
6. Crear una función que reciba un número como parámetro y devuelva el resultado de 
multiplicar ese número por sí mismo. */
//1 saludo
function saludo(){
    return console.log('¡Hola, mundo!');
}

saludo();

//2 funcion para recibir un parametro y mandar un mensaje
function SaludarUsuario(nombre){
    return console.log(`¡Hola, ${nombre}!`);
}

SaludarUsuario("Esteban"); 

//3 Toma un NUMERO como parametro y lo devuelve al doble

function numeroAlDoble(numero) {
    return parseInt(numero) * 2;
    //console.log(typeof(NumeroDoble));
}
let elDoble = numeroAlDoble(20);
console.log("El doble de 20 es = "+ elDoble);

//4 Recibe tres numeros para dar como resultado un promedio 
function ObtenerPromedio(calificacion1, calif2, calif3) {
    return parseInt(calificacion1 + calif2 + calif3) / 3;
}

let promedio = ObtenerPromedio(10 , 9 , 8);
console.log("El promedio fue de: "+ promedio);

//5 Recibe dos numeros, muestra como resultado el numero mayor
function numeroMayor(valor1, valor2) {
    // ¿A es mayor que B?, si es verdadero devuelve la opcion 1, de ser falso devuelve la opcion 2
    return parseInt(valor1) > parseInt(valor2) ?  parseInt(valor1) : parseInt(valor2);
}

let cualEsMayor = numeroMayor(24, 18);
console.log("El mayor fue = "+ cualEsMayor);

//6 Recibe un numero y devuelve su cuadrado 
function alCuadrado(numero) {
    //Math.pow sirve para elevar al cuadrado/multiplicar
    return Math.pow(parseInt(numero), 2);
}

let elCuadrado = alCuadrado(7);
console.log(`El cuadrado de 7 es ${elCuadrado}`);
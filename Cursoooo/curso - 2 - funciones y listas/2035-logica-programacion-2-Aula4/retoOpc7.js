//1. Crea una lista vacía llamada "listaGenerica".
let listaGenerica = [];

/**2. Crea una lista de lenguajes de programación llamada "lenguagesDeProgramacion con los siguientes 
elementos: 'JavaScript', 'C', 'C++', 'Kotlin' y 'Python'. */

let lenguagesDeProgramacion = ['JavaScript', 'C', 'C++', 'Kotlin', 'Python'];

/**3. Agrega a la lista "lenguagesDeProgramacion los siguientes elementos: 'Java', 'Ruby' y 'GoLang'. */

lenguagesDeProgramacion.push('Java', 'Ruby','GoLang' );

/*4. Crea una función que muestre en la consola todos los elementos de la lista "lenguagesDeProgramacion.*/
function mostrarListaLenguages() {
    return console.log(lenguagesDeProgramacion);
}
mostrarListaLenguages();

/**5. Crea una función que muestre en la consola todos los elementos de la lista 
 * "lenguagesDeProgramacion en orden inverso. */

function ListaLenguagesInversa() {
    let contador = lenguagesDeProgramacion.length; 
    while(contador > 0){
        console.log(`Array Position ${contador-1} : ${lenguagesDeProgramacion[contador-1]}`);
        contador--;
    }
}
ListaLenguagesInversa();

/*6. Crea una función que calcule el promedio de los elementos en una lista de números.*/
let listaRandom = [10, 8, 7.5, 8.7, 9, 7, 10];

function calcularPromedioA(arreglo) {
    let promedio = 0, suma = 0;
    let contador = 0;
    let total = arreglo.length - 1;
    
    while(contador <= total){
        suma = suma + arreglo[contador];
        console.log(`contador: ${contador}, suma va en ${suma}`);
        contador++;
    }
    return promedio = suma/arreglo.length;
}
let media = calcularPromedioA(listaRandom);
console.log(`El promedio obtenido fue de: ${media}`);
/*
7. Crea una función que muestre en la consola el número más grande y el número más pequeño en una lista.*/
function ListaMayorMenor(lista) {
    let mayor = 0; 
    let menor = lista[0]; //Tiene que inicializarse con el primer elemento de la lista
    let contador = 0
    let largo = lista.length-1;

    while (contador <= largo) {
        console.log(contador);
        //Si mayor es menor que el nuevo elemento, se le asigna el susodicho
        if (mayor < lista[contador]) {
            mayor = lista[contador];
        }
        //si el nuevo elemento de la lista es menor que la variable, se le asigna
        if (lista[contador] < menor ) {
            menor = lista[contador];
        }
        contador++;
    }
    return console.log(`El numero Mayor de la lista Fue ${mayor} , 
    El número menor de la lista fue ${menor}`);
}

ListaMayorMenor(listaRandom);
/*
8. Crea una función que devuelva la suma de todos los elementos en una lista.*/
function sumarLista(arreglo) {
    let suma = 0;
    let contador = 0;
    let total = arreglo.length - 1;
    
    while(contador <= total){
        suma = suma + arreglo[contador];
        contador++;
    }
    return console.log(`La suma total fue de ${suma}`);
}

sumarLista(listaRandom);
/*
9. Crea una función que devuelva la posición en la lista donde se encuentra un elemento 
pasado como parámetro, o -1 si no existe en la lista.*/
function buscarElemento(arreglo, posicion) {

    if(arreglo.indexOf(posicion) != -1){
        console.log(`El elemento existe en la posicion ${arreglo.indexOf(posicion)}`);
    }else{
        console.log(`El elemento no existe ${arreglo.indexOf(posicion)}`);
    }
}

buscarElemento(listaRandom, 10);

/*10. Crea una función que reciba dos listas de números del mismo tamaño y devuelva una 
nueva lista con la suma de los elementos uno a uno.*/
let listaRandom2 = [2, 4, 6, 8, 10, 12, 14];
function fusionDeListas(arreglo) {
    let nueva = arreglo.concat(listaRandom2);
    console.log(nueva);
    return nueva;
}

let parte11 = fusionDeListas(listaRandom);

/*11. Crea una función que reciba una lista de números y devuelva una nueva lista con el 
cuadrado de cada número.*/
function listaElevadoAlCuadrado(arreglo) {
    let resul = [];
    contador = 0;
    while(contador <= arreglo.length-1){
        resul[contador] = Math.pow(arreglo[contador], 2);
        contador++;
    }
    console.log(resul);
}
listaElevadoAlCuadrado(parte11);


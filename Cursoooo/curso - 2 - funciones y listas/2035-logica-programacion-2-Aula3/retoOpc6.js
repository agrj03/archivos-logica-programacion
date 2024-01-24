/**1. Crea una función que calcule el índice de masa corporal (IMC) de una persona a partir de 
 * su altura en metros y peso en kilogramos, que se recibirán como parámetros.
 * IMC = Peso (Kg) / Estatura x Estatura (M2)
 * 2. Crea una función que calcule el valor del factorial de un número pasado como parámetro.
3. Crea una función que convierta un valor en dólares, pasado como parámetro, y devuelva 
   el valor equivalente en reales(moneda brasileña,si deseas puedes hacerlo con el valor 
   del dólar en tu país). Para esto, considera la cotización del dólar igual a R$4,80.
4. Crea una función que muestre en pantalla el área y el perímetro de una sala rectangular, 
utilizando la altura y la anchura que se proporcionarán como parámetros.
5. Crea una función que muestre en pantalla el área y el perímetro de una sala circular, 
utilizando su radio que se proporcionará como parámetro. Considera Pi = 3,14.
6. Crea una función que muestre en pantalla la tabla de multiplicar de un número dado como parámetro. */

//1. Calcula el Indice de Masa Corporal (IMC) de una persona. Toma su peso en Kg y altura en Metros
function calcularIMC(peso, estatura) {
    //console.log(`Estatura * Estatura da: ${Math.pow(estatura,2)}`);
    return ( peso / Math.pow(estatura, 2) );
}

let indiceMC = calcularIMC( 83, 1.83 );
console.log(`Con un peso de 83Kg y una estatura de 1.83 M, se obtuvo ${indiceMC} como IMC`);

/*2. Calcula el factorial de un número 
Cuando tú factorizas un número, tú estás multiplicando ese número por cada número consecutivo menos uno.
Si tu número es 5, deberías tener:
5! = 5 * 4 * 3 * 2 * 1
*/
function calcularFactorial(numero) {
    if (numero === 0) {
        return 1; 
    } else {
        return numero * calcularFactorial(numero - 1);
    }
}

console.log(`Factorial del número 5 es ${calcularFactorial(5)}`);

//3. Convertidor de Pesos a dólares 
function calcularPesoDolar(pesos) {
    //Divido los pesos entre el valor cotizado del dolar 
    let valorDolar = 16.35;
    return (pesos/ valorDolar); 
}

let cantPesos = 1500;
console.log(`La conversión de ${cantPesos} Pesos Mexicanos equivalen a  ${calcularPesoDolar(cantPesos)}`);

/**4. funcion para calcular Área y Perimetro de una zona Rectangular mediante su Altura y Anchura 
 * Decidi dividir las funciones para mayor modularidad, facilidad de entender y mantener*/

//Area = Base * Altura | La Base es el ancho
function CalcularAreaRectangular(alto, ancho) {
    let area = alto * ancho;
    return area;
}
//Perimetro = 2 * (Base + Altura) | La Base es el ancho
function CalcularPerimetroRectangular(alto, ancho) {
    let perimetro = 2 * (alto + ancho);
    return `${perimetro} metros cuadrados`;
}

console.log(`Tenemos un área Rectangular con unas dimensiones de 3 Metros de ancho por 7 Metros de alto.
Esto nos daría un Área de ${CalcularAreaRectangular(3, 7)} , con un Perimetro de ${CalcularPerimetroRectangular(3, 7)} `);

//5. Funcion para calcular el Área de un Circulo mediante su radio.

//Area = π * r² . π equivaliendo 3.14. Area = Pi por radio al cuadrado
function calcularAreaCircular(radio) {
    let areaCirculo = 3.14 * Math.pow(radio, 2); //Pow calcula el cuadrado
    return areaCirculo;
}

//Función para calcular el perímetro de un circulo mediante su radio.
//Perimetro = 2 * π * r
function calcularPerimetroCircular(radio) {
    let perimetroCirculo = (2 * 3.14 * radio);
    return perimetroCirculo;
}

console.log(`Tenemos un área circular con un Radio de X. Mediante ese valor, concluimos que: 
 Su Área correspondiente es de "${calcularAreaCircular(5)}" Y un perímetro de "${calcularPerimetroCircular(5)}" `);

 //Función para mostrar la tabla de multiplicar de un número 
 function tablaDeMultiplicar(valor) {
    let contador = 1;
    while(contador <= 10){
        resultado = valor * contador;
        console.log(`${valor} X ${contador} = ${resultado} `);
        contador++;
    }
    return;
 }

 console.log(`Tabla de multiplicar del 6`);
 tablaDeMultiplicar(6); 
/* 
1. Crea un contador que comience en 1 y vaya hasta 10 usando un bucle 'while'. Muestra cada número.
2. Crea un contador que comience en 10 y vaya hasta 0 usando un bucle 'while'. Muestra cada número.
3. Crea un programa de cuenta progresiva. Pide un número y cuenta desde 0 hasta ese número 
utilizando un bucle 'while' en la consola del navegador.
4. Crea un programa de cuenta progresiva. Pide un número y cuenta desde 0 hasta ese número 
utilizando un bucle 'while' en la consola del navegador. */

let contador1 = 1;
let contador2 = 10;
//1
while(contador1 < 10){
    console.log(contador1);
    contador1++;
}
console.log(contador1);
//2
while(contador2 > 0){
    console.log(contador2);
    contador2--;
}
console.log(contador2);
//3
let numeroElegido = 0;
contador3 = 0;

numeroElegido = prompt('Dame un numero entero: ');
while(numeroElegido != contador3 ){
    console.log("Contando: " + contador3);
    contador3++;
}
console.log(contador3);
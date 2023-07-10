'use strict'

/* 
Muestre todos los numeros divisores de un numeros introducidos por un prompt
*/

var numero = parseInt(prompt("Introduce el primer numero: ", 0));

for (var i =1; i <= numero; i++){
    if(numero%i==0){
        console.log("Divisor: "+ i);
    }
}
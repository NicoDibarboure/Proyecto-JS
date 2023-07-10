'use strict'

/*
Que nos diga si un numero es par o impar
*/

var numero = parseInt(prompt("Introduce un numero: ", 0));

if (numero % 2 == 0){
    console.log("El numero "+ numero + " es par.");
} else if (numero % 2 != 0){
console.log("El numero "+ numero + " es impar.");
} else { console.log("Ingrese un numero valido!");
return;
}
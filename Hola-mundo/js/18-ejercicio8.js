'use strict'
/* 
Hacer una calculadora

- Pida dos numeros por pantalla
- Si se ingresa un numero no valido que vuelva a pedir otro numero
- En el cuerpo de la pagina en una alerta y por la consola el resultado de sumar, restar, etc.
*/

var numero1 = parseInt(prompt("Introduce el primer numero: ", 0));
var numero2 = parseInt(prompt("Introduce el segundo numero: ", 0));

while (numero1 < 0 || numero2 < 0 || isNaN(numero1) || isNaN(numero2)){
     numero1 = parseInt(prompt("Introduce el primer numero: ", 0));
     numero2 = parseInt(prompt("Introduce el segundo numero: ", 0));

}

var resultado = "La suma es: "+ (numero1+numero2)+ " \n" +
                "La resta es: "+(numero1-numero2)+ " \n" +
                "La multiplicacion es: "+(numero1*numero2)+ " \n" +
                "La division es: "+(numero1/numero2)+ " \n"; 

alert(resultado);

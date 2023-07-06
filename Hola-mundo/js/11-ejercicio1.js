'use strict'

/* 
Programa que pida dos numeros y que nos diga cual es mañor, el menor y si son iguales
*/

var num1 = parseInt(prompt("Introduce el primer numero: ", 0));
var num2 = parseInt(prompt("Introduce el segundo numero: ", 0));

while (num1 <= 0 || num2 <= 0 || isNaN(num1) || isNaN(num2)){
    num1 = parseInt(prompt("Introduce el primer numero: ", 0));
    num2 = parseInt(prompt("Introduce el segundo numero: ",0));

}

if (num1 > num2){
    alert ("El numero "+num1+" es mayor a "+num2);
}else if (num1 < num2){
    alert ("El numero "+num2+" es mayor a "+num1);
}else if (num1 == num2){
    alert ("Ambos numeros son iguales");
}else{
    alert("Introduce numeros correctos.")
}
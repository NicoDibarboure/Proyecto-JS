'use strict'

// Condicional IF
// Si A es igual a B entonces haz algo.

// var a = "Nicolas";
// var b = "Nicolaas"

// if(a == b){
//     alert("A es igual a B");
// }
//     else{
//         alert("A es distinto a B") 
//     }

/*
> Mayor
>= Mayor o igual
< Menor
< Menor o igual
== Igual
!= Diferente
*/

// var edad = 15;
// var nombre = "Nikitoflow";

// if (edad >= 18){
//     // Es mayor
//     console.log(nombre +" es mayor de edad con "+edad+" años.");
// }else{
//         // Es menor
//         console.log(nombre +" es menor de edad con "+edad+" años.");
// }

/*
// Operadores logicos
AND(Y): &&
OR(O): ||
Negacion: !
*/
// Negacion
var year = 2018;


if(year != 2016){
    console.log("El año no es 2016, realmente es "+year);
}

//AND 

if(year >= 2000 && year <= 2020){
    console.log("Estamos en la era actual");
}else{
    console.log("Estamos en la era post moderena");
}

// OR

if(year == 2008 || (year >= 2018 && year == 2028)){
    console.log("El año acaba en 8");
}else{
    console.log("AÑO NO REGISTRADO");
}



'use strict'

// Funciones anonimas
// Es una funcion que no contiene nombre

function sumame(num1,num2,sumaYmuestra,sumaPorDos){
    var sumar = num1+num2;

    sumaYmuestra(sumar);
    sumaPorDos(sumar);
}

console.log(sumame(15,10, dato => {
    console.log("La suma es: ",dato);
},
dato => {
    console.log("La suma por dos es: ", (dato*2));
}));


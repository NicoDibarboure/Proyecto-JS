'use strict'

// Pruebas con let y var

//Prueba con var
var numero = 40; 
console.log(numero) //Valor 40
if(true){
    var numero = 50;
    console.log(numero); // Valor 50;
}

console.log(numero); // Valor 50;

//Prueba con let

let texto = "Hola mundo";
console.log(texto); //Valor "Hola"

if(true){
    let texto = "Curso Laravel 5";
    console.log(texto); // Laravel 5
}

console.log(texto); // Valor "Hola"

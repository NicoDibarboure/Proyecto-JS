'use strict'

// Transformación de textos

var numero = 444;
var texto1 = "Bienvenido al curso de JS";
var texto2 = "Segunda variable de texto";

// Como transformar de un numero a un string

var dato1 = numero.toString();
var dato2 = texto1.toUpperCase();
var dato3 = texto2.toLowerCase();


    // console.log(dato1);
    // console.log(dato2);
    // console.log(dato3);
    
// Calcular longitud de un string

var nombre = "Nicolas Dibarboure";
    nombre = ["Hola", "Hola?", "Si soy yo"];
// console.log(nombre.length);

// Concatenar strings

// var textoTotal = texto1+ ", "+texto2;
var textoTotal = texto1.concat(", "+ texto1);
console.log(textoTotal);
'use strict'

/*
Tabla de multiplicar de un numero introducido por pantalla
*/

var numero = parseInt(prompt("De que numero quieres la tabla? ", 1));

for (var i=1; i<=10; i++){
    document.write("<strong>" + numero+" * "+i+ " = "+ (numero*i)+ "</br></strong>");
}

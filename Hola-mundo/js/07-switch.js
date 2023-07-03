'use strict'

//Switch

var edad = 90;
var imprime = "";
switch(edad){
    case 18:
        imprime = "Acabas de ser legal";
        break;
    case 25:
        imprime = "Ya sos adulto";
        break;
    case 40:
        imprime = "Crisis de los 40";
        break;
    case 12:
        imprime = "Sos un menor";
        break;
    default: 
        imprime = "Tu edad no esta registrada";
        break;
}

console.log(imprime);
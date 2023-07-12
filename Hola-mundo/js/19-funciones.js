'use strict'

//Funciones
// Una funcion es una agrupacion reutilizable de un conjunto de instrucciones.

//Defino la funcion
function calculadora (numero1, numero2, mostrar = false){

    // Conjunto de instrucciones

function porConsola (numero1,numero2){
    console.log("Suma: " + (numero1+numero2));
    console.log("Resta: " + (numero1-numero2));
    console.log("Multiplicacion: " + (numero1*numero2));
    console.log("Division: " + (numero1/numero2));
    console.log("------------------------------------");
}

function porPantalla (numero1,numero2){
    document.write("Suma: " + (numero1+numero2)+"<br/>");
    document.write("Resta: " + (numero1-numero2)+"<br/>");
    document.write("Multiplicacion: " + (numero1*numero2)+"<br/>");
    document.write("Division: " + (numero1/numero2)+"<br/>");
    document.write("------------------------------------");
}

if(mostrar == false){
    porConsola(numero1,numero2);
}else{
    porPantalla(numero1,numero2)
}

return true;
}


// Invoco o llamo a la funcion SIEMPRE FUERA DE LA FUNCION.

calculadora(12,47);
calculadora(52,31,true);
calculadora(2,7,true);

/* 
for (var i = 1; i<=10; i++){
    console.log(i);
    console.log("-------------");
    calculadora(i,6);
}
*/

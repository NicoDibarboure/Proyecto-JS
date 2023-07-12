'use strict'

// Parametros REST y SPREAD

//REST
function listadoFrutas(fruta1,fruta2, ...resto_las_frutas){
    console.log("Fruta 1: ",fruta1);
    console.log("Fruta 2: ",fruta2);
    console.log(resto_las_frutas);
}


//SPREAD

listadoFrutas("Naranja","Banana","Sandia","Melon","Coco","Manzana");
var frutas = ["Naranja","Banana"]
listadoFrutas(...frutas,"Sandia","Melon","Coco","Manzana");


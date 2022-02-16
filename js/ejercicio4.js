/*Resolución ejercicio 4*/

let marcaAuto = prompt("Ingrese la marca del auto").toUpperCase();

let modeloAuto = prompt("Ingrese el modelo del auto").toUpperCase();

console.log(marcaAuto);

console.log(modeloAuto);

if (marcaAuto == "FORD" && modeloAuto == "FIESTA") {
  console.log("Usted tiene un descuento del %5");
} else if (marcaAuto == "FORD" && modeloAuto == "FOCUS") {
  console.log("Usted tiene un descuento del %10");
} else {
  console.log("Usted no tiene descuentos disponibles");
}

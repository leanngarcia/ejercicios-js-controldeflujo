/*Resolución ejercicio 2*/

let nombreUsuario = prompt("Ingrese su nombre");

let edadUsuario = parseInt(prompt("Ingrese su edad"));

const edadAdulto = 18;

if (edadUsuario > edadAdulto) {
  alert("Bienvenido " + nombreUsuario);
} else if (edadUsuario < edadAdulto) {
  alert("No se permite el ingreso a menores de edad");
}

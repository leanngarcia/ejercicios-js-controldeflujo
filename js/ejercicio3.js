/*Resolución ejercicio 3*/

let notaAlumno = parseFloat(prompt("Ingrese su nota:"));

if (notaAlumno >= 9 && notaAlumno <= 10) {
  console.log("Aprobado. No rinde final");
} else if (notaAlumno < 9 && notaAlumno >= 6.5) {
  console.log("Aprobado. Rinde final");
} else if (notaAlumno < 6.5 && notaAlumno >= 0) {
  console.log("Debe presentar recupetario");
} else {
  console.log("Ingrese un número válido del 0 al 10");
}

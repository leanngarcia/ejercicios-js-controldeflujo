/*Resolución ejercicio 5*/

/*Fijo los valores de monedas para realizar las conversiones*/
const valorDolar = 112;

const valorReal = 2200;

const valorEuro = 124;

let pesos;

let resultadoConversion;

let menuOpciones = parseInt(
  prompt(`Ingrese el número de operación que desea realizar:
"1" para convertir a dólares.
"2" para convertir a reales.
"3" para convertir a euros.
`)
);

if (menuOpciones >= 1 && menuOpciones <= 3) {
  pesos = parseFloat(prompt("Ingrese la cantidad de pesos que desea convertir:"));

  switch (menuOpciones) {
    case 1:
      resultadoConversion = pesos / valorDolar;
      console.log("El resultado de su conversión es " + resultadoConversion + " dólares");
      break;

    case 2:
      resultadoConversion = pesos / valorReal;
      console.log("El resultado de su conversión es " + resultadoConversion + " reales");
      break;

    case 3:
      resultadoConversion = pesos / valorEuro;
      console.log("El resultado de su conversión es " + resultadoConversion + " euros");
      break;
  }
} else {
  console.log("Ingrese un número de opción válido");
}

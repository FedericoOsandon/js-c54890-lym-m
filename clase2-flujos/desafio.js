// Pedir número mediante prompt y si es mayor a 1000 mostrar un alert
var numero = prompt("Ingresa un número:");
if (numero > 1000) {
  alert("El número ingresado es mayor a 1000");
}

// Pedir un texto mediante prompt, y si es igual a "Hola" mostrar un alert por consola
var texto = prompt("Ingresa un texto:");
if (texto === "Hola") {
  console.log("El texto ingresado es igual a 'Hola'");
}

// Pedir un número por prompt y evaluar si está entre 10 y 50. En caso positivo mostrar un alert
var otroNumero = prompt("Ingresa otro número:");
if (otroNumero >= 10 && otroNumero <= 50) {
  alert("El número ingresado está entre 10 y 50");
}
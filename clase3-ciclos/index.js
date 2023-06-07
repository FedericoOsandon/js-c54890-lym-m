// definición de la función for

//  for(desde; hasta; actualización) {
//      … //lo que se escriba acá se ejecutará mientras dure el ciclo
//  }


// for para contar de 0 a 9
// for (let i = 0; i < 10; i++) {
//     alert(i);
// }

// for para contar de 1 a 10
// for (let i = 1; i <= 10; i++) {
//     alert(i);
// }


// Solicitamos un valor al usuario
// let ingresarNumero = parseInt(prompt("Ingresar Numero"));
// En cada repetición, calculamos el número ingresado x el número de repetición (i)
// for (let i = 1; i <= 10; i++) {
//     let resultado = ingresarNumero * i ;
//     alert(ingresarNumero +" X "+ i +" = "+ resultado);
// }

// for (let i = 1; i <= 20; i++) {
//     // En cada repetición solicitamos un nombre.
//     let ingresarNombre = prompt("Ingresar nombre");
//     // Informamos el turno asignado usando el número de repetición (i).
//     alert(" Turno  N° "+i+" Nombre: "+ingresarNombre);
// }


// for (let i = 1; i <= 10; i++) {
//     //Si la variable i es igual 5 interrumpo el for. 
//     if(i == 5){
//         break;
//     }
//     alert(i);
// }


// for (let i = 1; i <= 10; i++) {
//     //Si la variable i es 5, no se interpreta la repetición
//     if(i == 5){
//         continue;
//     }
//     alert(i);
// }

// WHILE ___________________________________________________________________


// let repetir = true;
// while(repetir){
//     alert("Al infinito y...¡Más allá!");
// }




// let entrada = prompt("Ingresar un dato");
// //Repetimos con While hasta que el usuario ingresa "ESC"
// while(entrada != "ESC" ){
//     alert("El usuario ingresó "+ entrada);
//     //Volvemos a solicitar un dato. En la próxima iteración se evalúa si no es ESC.
//     entrada = prompt("Ingresar otro dato");
// }


/// DO WHILE ___________________________________________________________________

// let repetir = false;
// do{
// console.log("¡Solo una vez!");
// }while(repetir)

// let numero = 0;
// do{
//    //Repetimos con do...while mientras el usuario ingresa un n°
//    numero = prompt("Ingresar Número");
//    console.log(numero);
// //Si el parseo no resulta un número se interrumpe el bucle.   
// }while(parseInt(numero));


// SWITCH ___________________________________________________________________

// switch(numero) {
//     case 5:
//       ...
//       break;
//     case 8:
//       ...
//       break;
//     case 20:
//       ...
//       break;
//     default:
//       ...
//       break;
//    }
   

// let entrada = prompt("Ingresar un nombre");
// //Repetimos hasta que se ingresa "ESC"
// while(entrada != "ESC" ){
//    switch (entrada) {
//        case "ANA":
//             alert("HOLA ANA");
//             break;
//         case "JUAN":
//             alert("HOLA JUAN");
//             break;
//        default:
//            alert("¿QUIÉN SOS?")
//            break;
//    }
//    entrada = prompt("Ingresar un nombre");
// }

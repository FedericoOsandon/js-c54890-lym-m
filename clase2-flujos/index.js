if (true) {
    console.log('vas a ver esto en la consola')
}
if (false) {  // esto se llama hardcodeado -> o sea es puesto a mano
    console.log('no vas a ver esto en la consola')
}

// ___________________________________________________________
let unNumero = 5
if (unNumero == 5) {
    console.log('vas a ver esto en la consola')
}

if (unNumero==6) {
    console.log('no vas a ver esto en la consola')    
}
// explicar diferencia entre =, == y === ___________________________________________________________
let unColor = 'rojo'

if (unColor == 'rojo') {
    console.log('El color es rojo')
} else {
    console.log('El color no es rojo')
}
// ___________________________________________________________
let nombreUsuario = prompt('Ingresa tu nombre de usuario')

if (nombreUsuario == '') {
    alert('No ingresaste un nombre de usuario')
} else {
    alert('Hola ' + nombreUsuario)
}   

// ___________________________________________________________
let precio = 100.5

if (precio < 20) {
    alert('El precio es menor que 20')
}
else if (precio < 50) {
    alert('El precio es menor que 50')
}
else if (precio < 100) {
    alert('El precio es menor que 100')
}
else {
    alert('El precio es mayor que 100')
}


/// ___________________________________________________________
let numero   = 10
let esMayor5 = (numero > 5)

if (esMayor5) {
    console.log('Es un valor boolean true')
}

//___________________________________________________________
let nombreIngresado   = prompt("Ingresar nombre");
let apellidoIngresado = prompt("Ingresar apellido");

if((nombreIngresado !="") && (apellidoIngresado !="")){
    alert("Nombre: "+nombreIngresado +"\nApellido: "+apellidoIngresado); 
}else{
    alert("Error: Ingresar nombre y apellido");
}


//___________________________________________________________

let nombreIngresado1   = prompt("Ingresar nombre");

if((nombreIngresado1 == "ANA") || (nombreIngresado1 =="ana")){
    alert("El nombre ingresado es Ana"); 
}else{
    alert("El nombre ingresado NO ES Ana"); 
}

//___________________________________________________________

let nombreIngresado2   = prompt("Ingresar nombre");

if((nombreIngresado2 == "ANA") || (nombreIngresado2 =="ana")){
    alert("El nombre ingresado es Ana"); 
}else{
    alert("El nombre ingresado NO ES Ana"); 
}






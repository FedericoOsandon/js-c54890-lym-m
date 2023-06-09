let hola = 'Saludo'
let word = 'world'
// console.error(hola, word, 'texto')

// let condition = true


// while (edad>=18) { // puede no ejecutarse nunca 0 o muchas veces
//     if (edad>=18) {     17
        
//         alert('Bienvenido')   
//         condition = false
//     }else {
//         alert('No puede ver esta página')
//         edad = parseInt(prompt('Ingrese nueva edad: '))
//     }
// }


// let edad = parseInt(prompt('Ingrese su edad: ')) // 17 - 18
// do {
    
//     if (edad>=18) {  
//         alert('Bienvenido')   
//     }else {
//         alert('No puede ver esta página') // 16
//         edad = parseInt(prompt('Ingrese una nueva edad: ')) // 17 - 18
//     }
// }
// while (edad < 18)  // puede no ejecutarse nunca 0 o muchas veces


// let nombreUsuario = prompt('Ingrese su nombre: ') // 17 - 18
// do {
    
//     if (nombreUsuario !== '') {  
//         alert('Bienvenido'+ ' ' + nombreUsuario)   
//     }else {
//         alert('Debe ingresar un nombre') // 16
//         nombreUsuario = prompt('Ingrese nombre: ') // 17 - 18
//     }
// }
// while (nombreUsuario === '')  // puede no ejecutarse nunca 0 o muchas veces
// alert('Bienvenido'+ ' ' + nombreUsuario)   

// let dia 
// let mes 
// let anio 

// false



// do { // si o si se realiza una vez 
//     console.log('do while')    
// } while (condition);


// ingresar la edad 
// preguntar si es mayor o igual 18
// si es mayor dejo avanzar 
// alert es menor de edad 
// ingrese una nueva edad hasta que ingrese 18 o mas 

// for(número fijo de veces) while(número indeterminado de veces)

// pedir un número por prompt , sumarle otro () en cada repetición realizando una salida por cada resultado

// let numeroPrompt = Number(prompt('Ingrese un número: ')) // 2
// for (let index = 0; index < 10; index++) {
//     numeroPrompt = numeroPrompt + index // 2 + 0 - 2 + 1 // 2 + 3
//     console.log(numeroPrompt)
// }
// let texto = prompt('Ingrese un texto: ')
// // hola !== Esc
// while (texto !== 'esc') {
//     console.log(texto + 'Hola')
//     texto = prompt('Ingrese un texto: ')
// }

let repetir = parseInt(prompt('Ingrese la cantidad de veces que se repite hola: '))
for (let index = 1; index <= repetir; index++) {
    console.log('Hola')    
}

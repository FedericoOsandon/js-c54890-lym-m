

// let total = 0
// for (let i = 1; i <= 10; i++) {
//     total += i
// }
// let total = 0
// for (let i = 1; i <= 20; i++) {
//     total += i
// }
// let total = 0
// for (let i = 1; i <= 30; i++) {
//     total += i
// }

// function sumaRango( desde,hasta){
//     let total = 0
//     for (desde; desde <= hasta; desde++) {
//         total += desde
//     }
//     return total
// }

// console.log(sumaRango(1,10))  //  55
// console.log(sumaRango(1,20))  //  55

// FUNCIÓN DE ÓRDEN SUPERIOR
// 1- return func()
// - function(fn){}


// Ejemplos de 1
// function mayorQue(n){
//     return (m) => m > n
// }

// let mayorQueDiez = mayorQue(10) // 10 -> (m) => m > 10




// console.log(mayorQueDiez(9))
// console.log(mayorQueDiez(10))
// console.log(mayorQueDiez(111))

// function asignarOperacion(operacion) {
//     if (operacion === 'sumar') {
//         return function(numero1, numero2){return numero1+numero2} 
//     } else if(operacion === 'restar') {
//         return (numero1, numero2) => numero1 - numero2       
//     }
// }

// let sumar  = asignarOperacion('sumar')
// let restar = asignarOperacion('restar')

// console.log(sumar(4,6))
// console.log(restar(4,6))

// Ejemplos de 2 funciones pasadas por parámetros:
// let total = 0

// function porCadaUno(arr, fn) { // callback
//     for(const elemento of arr){
//         fn(elemento)
//     }
// }

// const numeros = [ 0, 1, 2, 3, 4 ]

// porCadaUno( numeros, console.log )

// function acumular(num){
//     total += num
// }

// porCadaUno( numeros, acumular )


// console.log(total)

// function porCadaUno(arr, fn) { // callback
//     for(const elemento of arr){
//         fn(elemento)
//     }
// }

// const numeros = [ 0, 1, 2, 3, 4 ]

// const duplicado = []

// // const agragarDuplicado = (elemento) => {
// //     duplicado.push(elemento * 2)
// // }

// porCadaUno( numeros, (elemento) => {
//     duplicado.push(elemento * 2)
// })

// console.log(duplicado)


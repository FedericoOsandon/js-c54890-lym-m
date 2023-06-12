// function saludar() {
//     // instrucciones
//     console.log('Hola esto es un saludo')
//     console.log('Hola esto es un saludo')
//     console.log('Hola esto es un saludo')
//     console.log('Hola esto es un saludo')
// }

// saludar()
// saludar()
// saludar()
// saludar()

// ejemplo de funciones 


// function ingresarNombreSaludar(){
//     let nombreIngresado = prompt('Ingresar nombre: ')
//     console.log('El nombre ingresado es '+ nombreIngresado)
// }

// ...
// let nombreIngresado2 = prompt('Ingresar nombre')
// console.log('El nombre ingresado es '+ nombreIngresado2)

// let nombreIngresado3 = prompt('Ingresar nombre')
// console.log('El nombre ingresado es '+ nombreIngresado3)


// ingresarNombre()
// ingresarNombre()

// let numero = 0

// while (numero < 2) {
//     ingresarNombre()    
//     numero ++
// }




// Parámetros
// let nombreIngresado = prompt('Ingresar nombre: ')
// let apellidoIngresado = prompt('Ingresar apellido: ')

// function saludar(nombre, apellido, edad, dni) { // 255
//     console.log('Bienvenido sr/a: ' + nombre + ' ' + apellido + 'y su edad es: '+ edad + dni)
// }
// uno o dos parametros
// saludar('Fede', 'Peréz', 35, 6554654)

// let resultado = 0

// function mostrarResultado(resultadoParam) {
//     console.log('el resultado es', resultadoParam);
// }

// function sumar(numero1, numero2) {
//     // return
//     console.log(numero1)
//     console.log(numero2)
//     // resultado = numero1 + numero2
//     return numero1 + numero2
// }



// // resultado = sumar(3,10)


// mostrarResultado(sumar(3,10))

// calculadora con funciones + switch

// function calculadora(numero1, numero2, operacion){
//     switch(operacion){
//         case '+':
//             return numero1 + numero2
//             break 
//         case '-':
//             return numero1 - numero2
//         break 
//         case '*':
//             return numero1 * numero2
//         break 
//         case '/':
//             if (numero2 === 0) {
//                 return 'no se puede dividi por cero'
//             }
//             return numero1 / numero2
//         break 
//         default:
//             return 'Debe definir una operación correcta +  - * / '
//         break
//     }
// }

// let resultado = calculadora(10, 3, '+')
// console.log(resultado)

// console.log(calculadora(10, 1, '*'))

// scope - Rango - alcance o ámbito variables y funciones tienen un scope

// let resultado = 0

// function sumar(paramatro1, parametro2) { // ámbito
//     let resultado = 0
//     resultado = paramatro1 + parametro2
//     console.log(resultado)
//     if (true) {
//         // let resultado = 1
//         console.log(resultado)
//     }
// }


// sumar(5, 6)

// console.log(resultado)

// Ej
// function sumar(numero1, numero2) {
//     let resultado = numero1 + numero2
//     console.log(resultado)
// }

// function restar(numero1, numero2) {
//     let resultado = numero1 - numero2
//     console.log(resultado)
// }

// sumar(3,10)
// restar(3,10)

// función anónima


// const saludos = function (params) {
//     console.log(params)
// }

// saludos('Fede')

// const sumar = function (param1, param2) {
//     console.log(param1 + param2)
// }

// sumar(10, 3)

// // Funciones de tipo flecha
// const sumar2 = (param1, param2) => {
//     console.log(param1 + param2)
// }

// sumar2(10, 3)

//

// const suma = (a, b) => {
//     return a + b
// }
// const resta = (a, b) => {
//     return a - b
// }
const suma = (a, b) => a + b
const resta = (a, b) => a - b

while (condition) {
    if (!procuto) {
        
    }
    const calcularIva = valorProducto => valorProducto * 0.21 
    
    
    const  calcularValorProducto = valor => {
        console.log(valor)
        return valor + calcularIva(valor)
    }
    
    console.log(calcularValorProducto(100))
    
}
// Fede una ecommerce



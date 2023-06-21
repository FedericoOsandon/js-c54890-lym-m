// objetos

// let nombre   = "Juan"
// let apellido = 'Perez'
// let edad     = 30

// const persona = { // objeto literal
//     nombre: 'Homero',
//     apellido: 'Simpsons',
//     edad: 35,
//     email: 'homero@gmail.com',
//     esMayoEdad: true,
//     calle: 'Av Siempreviva 742'
// }

// console.log(persona.nombre, persona.esMayoEdad)
// console.log(persona)

// console.log(persona['nombre'], persona['email'])


//asignando un nuevo nombre y edad
// persona['nombre'] = 'Marge'
// persona.edad = 36

// console.log(persona.nombre, persona.edad)

// no se puede
// persona = 'fede'

// persona.phone = '321321321'

// const persona2 = {}
// persona2.nombre = 'Fede'
// console.log(persona2)

// const persona2 = {
//     nombre: 'Fede',
//     apellido: 'Osandón',
//     edad: 35,
//     email: 'fede@gmail.com',
//     esMayoEdad: true,
//     calle: 'Av Siempreviva 742'
// }

// console.log(persona2)

// funciones constructoras

// this -> 'este' objeto
// function Persona(nombre, apellido, edad){
//     // console.log(this)
//     this.nombre   = nombre
//     this.apellido = apellido
//     this.edad     = edad
//     this.hablar   = function(){}
// }

// for (let i = 0; i < 3; i++) {    
//     const nombre = prompt('ingresar nombre')
//     const apellido = prompt('ingresar apellido')
//     const email = prompt('ingresar email')
// }

// creando dos objetos (instancias)
// const nombre = prompt('ingresar nombre')
// const apellido = prompt('ingresar apellido')
// const email = prompt('ingresar edad')

// const persona3 = new Persona(nombre, apellido, email)

// const persona4 = new Persona('Fede', 'El mejor', 30)

// console.log(persona3)
// console.log(persona4)

// const saludar = ()=>{
    // console.log('hola como están')
//     return 'Hola como están'
// }
// console.log(saludar())

// métodos
//  let texto = 'Hola Coders'
//  console.log(texto.length) // length es un método
//  console.log(texto.toLowerCase())
//  console.log(texto.toUpperCase())

//  function Persona(nombre, apellido, edad){
//     this.nombre   = nombre
//     this.apellido = apellido
//     this.edad     = edad
//     this.hablar   = function(){return 'Hola soy ' + this.nombre}
//     this.getFullName = function(){return this.nombre+ ' ' + this.apellido}
//     // this.fechaNacimiento = '04/12/2000'
//     // this.getEdad  = function(){}
//     // this.hablar   = function(){console.log('Hola soy ' + this.nombre)}
// }

// const persona1 = new Persona('Fede', 'El mejor', 28)
// const persona2 = new Persona('Fede2', 'El mejor2', 30)
// const persona3 = new Persona('Fede3', 'El mejor3', 40)

// console.log(persona1)
// console.log(persona2.hablar())
// console.log(persona3.getFullName())

// operadon in y for in

// function Persona(nombre, apellido, edad){
//     this.nombre   = nombre
//     this.apellido = apellido
//     this.edad     = edad
//     this.hablar   = function(){return 'Hola soy ' + this.nombre}
//     this.getFullName = function(){return this.nombre+ ' ' + this.apellido}
    // this.fechaNacimiento = '04/12/2000'
    // this.getEdad  = function(){}
    // this.hablar   = function(){console.log('Hola soy ' + this.nombre)}
// }
// const persona1 = new Persona('Fede', 'El mejor', 28)

// console.log('nombre' in persona1)
// console.log('apellido' in persona1)
// console.log('email' in persona1)

// for(const propiedad in persona1){
//     console.log('propiedad:',propiedad)
//     console.log('valor: ',persona1[propiedad])
// }

// clases -> swggar sintax -> forma genérica de escribir func. constructoras

//  function Persona(nombre, apellido, edad){
//     this.nombre   = nombre
//     this.apellido = apellido
//     this.edad     = edad
//     this.hablar   = function(){return 'Hola soy ' + this.nombre}
//     this.getFullName = function(){return this.nombre+ ' ' + this.apellido}

// }

// class Persona {
//     constructor(nombre, apellido, edad){
//         this.nombre = nombre
//         this.apellido = apellido
//         this.edad = edad
//     }
//     hablar() {
//         console.log('Hola soy ' + this.nombre)    
//     }
//     getFullName(){
//         return this.nombre + ' ' + this.apellido
//     }
// }   

// const persona1 = new Persona('Fede', 'Osandón', 30)
// persona1.hablar()

// console.log(persona1.getFullName())


// ejemplo

class Producto {
    constructor(nombre, precio){
        this.nombre  = nombre
        this.precio  = parseFloat(precio) 
        this.vendido = false
        // this.isStock = true
        // this.active = true
        // this.cantidadStock
    }
    sumarIva(){
        this.precio = this.precio * 1.21
    }
    vender(){
        this.vendido = true
    }
}

const producto1 = new Producto('arroz', 1)
const producto2 = new Producto('fideo', '1')


producto2.sumarIva()
producto2.vender()

console.log(producto2)

// ingresar datos del producto prompt 
function calcularPrecioVenta(precioProducto) {
    return precioProducto * 1.21 + 10
}

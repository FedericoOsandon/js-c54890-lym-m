console.log('index.js')


// localstorage
// localStorage.setItem('esValido', true)
// localStorage.setItem('unNumero', 20)

// // getItem 
// let mensaje = localStorage.getItem('saludo')
// let booleano = localStorage.getItem('esValido')
// let numero = localStorage.getItem('unNumero')

// console.log(mensaje)
// console.log(booleano)
// console.log(numero)

// Session Storage
// primitivos (string, number, booleano, etc) , object(objetos, funciones, array)
// sessionStorage.setItem('seleccionados', [1,2,3])
// sessionStorage.setItem('esValido', false)
// sessionStorage.setItem('email', 'f@gmail.com')

// let lista = sessionStorage.getItem('seleccionados').split(',') // '1,2,3'
// let bandera = (sessionStorage.getItem('esValido') === 'true')
// let email = sessionStorage.getItem('email')

// console.log(lista)
// console.log(bandera)
// console.log(email)
// console.log(typeof lista)
// console.log(typeof bandera)
// console.log(typeof email)

// recorrer el storage 
// console.log(localStorage.key(2))
// for (let i = 0; i < localStorage.length; i++) {
//     let clave = localStorage.key(i) // i = 0   
//     console.log('Clave: ',clave)
//     console.log('Valor: ', localStorage.getItem(clave))
// }

// eliminar datos del storage

// localStorage.clear()

// sessionStorage.removeItem('seleccionados')

// almacenar objetos en el storage

// let user = localStorage.setItem('usuario', {id:1, nombre: 'Fede', email: 'f@gmail.com'})

// json -> js object notation

// js
// {
//     id:1, 
//     nombre: 'Fede', 
//     email: 'f@gmail.com'
// }
// json
// {
//     "id":1, 
//     "nombre": "Fede", 
//     "email": "f@gmail.com"
// }


// 
// localStorage.numeroPrueba = 5

// console.log(localStorage.numeroPrueba)

// let clave = 'toString'
// localStorage[clave] = '6' 

// const producto     = {id: 2, producto: 'Arroz'}
// const productoJson = JSON.stringify(producto)

// console.log(productoJson)
// console.log(typeof productoJson)
// console.log(typeof producto)
// localStorage.setItem('producto',productoJson) 

// const productoJs = JSON.parse(localStorage.getItem('producto'))
// console.log(productoJs)
// console.log(productoJs.id)

// almacenar array de objetos

const products = [
    {id: 1, producto: 'Arroz', precio: 500},
    {id: 2, producto: 'Fideo', precio: 600},
    {id: 3, producto: 'Pan', precio: 400},
    {id: 4, producto: 'Flan', precio: 700},
]

const guardarLocal = (clave, valor) => { localStorage.setItem(clave, valor)}

// for(const product of products){
//     guardarLocal(product.id, JSON.stringify(product))
// }

// guardarLocal('listadoProductos', JSON.stringify(products))

// // almacenar array de objetos class

// class Producto {
//     constructor(objetoProducto){
//         this.nombre = objetoProducto.producto.toUpperCase()
//         this.precio = parseFloat(objetoProducto.precio)
//     }

//     sumarIva(){
//         this.precio = this.precio * 1.21
//     }

//     // almacenarProudc
// }

// const  almacenados = JSON.parse(localStorage.getItem('listadoProductos'))

// const productos = []
// for(const obj of almacenados){
//     productos.push(new Producto(obj))
// }
// for(const producto of productos){
//     producto.sumarIva()
// }

// console.log(productos)


// almacenados.push({id: 5, producto: 'Harina', precio: 800})
// console.log(almacenados)
// localStorage.setItem('listadoProductos', JSON.stringify(almacenados))


// let usuario

// let usuarioEnLS = JSON.parse(localStorage.getItem('usuario'))

// if (usuarioEnLS) {
//     usuario = usuarioEnLS
// }else{
//     usuario = prompt('Ingrese nombre de usuario: ')
//     localStorage.setItem('usuario', JSON.stringify({id: 1, nombre: usuario}))
// }

let carrito     = []

let carritoEnLs = JSON.parse(localStorage.getItem('carrito')) 

if(carritoEnLs){
    carrito = carritoEnLs
}

const renderCarrito =(carrito ) => {
    console.log(carrito)
}
renderCarrito(carrito)

carrito.push({id: 5, producto: 'Harina', precio: 800})
console.log(carrito)
localStorage.setItem('carrito', JSON.stringify(carrito))

console.log(JSON.parse(localStorage.getItem('carrito')))
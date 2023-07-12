console.log('Hello World')

// let i = 0

// // i = i + 1 -> i++
// i = i + 1  // 1
// i++ //2da
// i++
// i++
// i += 1 // 3
// i += 3 // 3

// console.log(i)

// let temperatura = 31

// if (temperatura>30) {
//     console.log('que calor')
// } else {
//     console.log('Que día agradable')    
// }

// // condición ? caso 1 por el verdero :  caso 2 entra por el false

// (temperatura > 30 ) ? console.log('que calor') : console.log('Que día agradable') 

// const usuario = {
//     edad: 18
// }

// let permiso 

// if (usuario.edad >= 18) {
//     permiso = true
// }else{
//     permiso = false
// }

// if (permiso) {
//     console.log('Puede comprar cerveza')
// } else {
//     console.log('NO Puede comprar cerveza')    
// }

// let permiso1 = usuario.edad >= 18 ? return true : return false
// let permiso1 = usuario.edad >= 18 ? true : false
// permiso1 ? console.log('puede tomar cerveza') : console.log('no puede tomar cerveza')
// let permiso1 = usuario.edad >= 18 
// console.log(permiso1 ? 'Puede tomar cerveza' : 'no puede tomar cerveza')

// operador and && 

// let carrito

// if (carrito.length === 0) {
//     console.log('El carrito está vacío')
// }

// carrito.length ? : X condition && caso 1
// carrito.length === 0 && console.log('El carrito está vacío')

// const usuario = {
//     nombre: 'Federico Osandón',
//     edad: 118
// }

// const registroIngreso = usuario.edad >= 18 && new Date()

// console.log(registroIngreso)

// si no if else - ? :  -  and si verdadero && - or el o || 

// numero || string - v v verdadero 
// console.log( 0            || 'Falsy')
// console.log( 40           || 'Falsy')
// console.log( null         || 'Falsy')
// console.log( undefined    || 'Falsy')
// console.log( 'hola mundo' || 'Falsy')
// console.log( ''           || 'Falsy')
// console.log( NaN          || 'Falsy')
// console.log( true         || 'Falsy')
// console.log( false        || 'Falsy')
// console.log( false        || false)

// const usuario2 = null

// console.log( usuario || 'El usuario no exista' )
// console.log( usuario2 || 'El usuario no exista' )

// console.log(carrito)

// let carritoLocalStorage = JSON.parse(localStorage.getItem('carrito'))
// if (carritoLocalStorage) {
//     carrito = carritoLocalStorage
// } else {
//     carrito = []
// }


// carrito = JSON.parse(localStorage.getItem('carrito')) || []




// console.log(carrito)

// operador nullish coalescing


// console.log( 0            || 'Falsy')
// console.log( 40           || 'Falsy')
// console.log( null         || 'Falsy')
// console.log( undefined    || 'Falsy')
// console.log( 'hola mundo' || 'Falsy')
// console.log( ''           || 'Falsy')
// console.log( NaN          || 'Falsy')
// console.log( true         || 'Falsy')
// console.log( false        || 'Falsy')

// console.log( 0            ?? 'Nullish')
// console.log( 40           ?? 'Nullish')
// console.log( null         ?? 'Nullish')
// console.log( undefined    ?? 'Nullish')
// console.log( 'hola mundo' ?? 'Nullish')
// console.log( ''           ?? 'Nullish') // ''
// console.log( NaN          ?? 'Nullish')
// console.log( true         ?? 'Nullish')
// console.log( false        ?? 'Nullish')


// acceso condicional a un Object

// let usuario = null
//  console.log( usuario.nombre || 'El usuario no exista')
// console.log( usuario?.nombre || 'El usuario no exista')
// const usuario = {
//     nombre: 'Federico Osandón',
//     edad: 22, 
//     cursos: {
//         javascript: 'aprobado'
//     },
//     telefono: {
//         casa: 1111,
//         movil: 2222,
//         trabajo: 3333
//     }
// }
// const usuario2 = {
//     nombre: 'Federico Osandón',
//     edad: 22, 
//     trabajos: {
//         coderhouse: true
//     }
// }

// console.log(usuario?.cursos?.javascript || 'la propiedad no existe')
// console.log(usuario?.trabajos?.coderhouse || 'la propiedad no existe')

// destructuración
// const usuario2 = usuario
// usuario2.nombre = 'Juan Perez'

// console.log(usuario, usuario2)

// let nombre = usuario.nombre
// let edad = usuario.edad

// const usuario = {
//     nombre: 'Federico Osandón',
//     edad: 22, 
//     cursos: {
//         javascript: 'aprobado'
//     },
//     telefono: {
//         casa: 1111,
//         movil: 2222,
//         trabajo: 3333
//     },
//     apellido: 'Lucas'
// }

// const { nombre = nombre } = usuario
// const { nombre: first_name, edad, telefono: {casa, movil, trabajo}, apellido='Perez' } = usuario
// console.log(first_name)
// console.log(edad)
// console.log(casa)
// console.log(movil)
// console.log(trabajo)
// console.log(apellido)

// alias


// const producto = {
//     id: 10,
//     nombre: 'Curso javascrip', 
//     precio: 12500
// }

// const destructurar = (prod) => {
//     const {id, nombre} = prod
//     console.log(id, nombre)
// }
// const destructurar = ( {id, nombre} ) => {
//     // const {id, nombre} = prod
//     console.log(id, nombre)
// }

// destructurar(producto)

// window.addEventListener('click', ({x,y})=>{
//     console.log(x, y)
// })

// destructuring[]

const nombres = ['Juan', 'Julietas', 'Carlos', {nombre: 'fede'}]
const [,,,pos4] = nombres
// console.log(pos0)
// console.log(pos1)
const {nombre } = pos4
console.log(nombre)

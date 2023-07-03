// console.dir(document)
// console.dir(document.head)
// console.dir(document.body)
//metodos son funciones de los objetos

// traer la etiqueta por el id 
// let div     = document.getElementById('app')
// let parrafo = document.getElementById('parrafo1')

// console.log('div: ',div.innerHTML)
// console.log('parrafo: ',parrafo.innerHTML)


// acceder al elemento por clase
// let paises = document.getElementsByClassName('paises')

// console.log(paises[0].innerHTML)
// console.log(paises[1].innerHTML)
// console.log(paises[2].innerHTML)

// traer elemento por etiqueta
// let contenedores = document.getElementsByTagName('div')
// console.log(contenedores)
// console.log(contenedores[0].innerHTML)
// console.log(contenedores[1].innerHTML)
// console.log(contenedores[2].innerHTML)
// console.log(contenedores[3].innerHTML)

// recorriendo html collection

// let paises       = document.getElementsByClassName('paises')
// let contenedores = document.getElementsByTagName('div')

// for(const pais of paises){
//     console.log(pais.innerHTML)
// }
// for(const contenedor of contenedores){
//     console.log(contenedor.innerHTML)
// }

// Modificando nodos

// let titulo = document.getElementById('titulo')
// let parrafo = document.getElementById('parrafo1')
// console.log(titulo.innerHTML)
// titulo.innerHTML = '<strong>Fede el mejor</strong>'
// parrafo.innerHTML = '<strong>Fede el mejor</strong>'
// console.log(titulo.innerHTML)

// let container = document.getElementById('contenedor')

// container.innerHTML = '<h2>hola mundo</h2><p>lorem ipsum</p>'
// container.className = 'container row'

// crear elementos

// let parrafo       = document.createElement('p')
// parrafo.innerHTML = '<h2>Hola coder !!</h2>' 
// console.log(parrafo);
// document.body.append(parrafo)

// let parrafo = document.getElementById('parrafo1')
// parrafo.remove()

// let paises  = document.getElementsByClassName('paises')

// paises[0].remove()

// document.getElementById('nombre').value =  'Homero'
// document.getElementById('edad').value   = 39

// Creando opciones 

// let etiquetaIdPersona = document.getElementById('personas')
// let personasArray     = ['Homero', 'Marge', 'Bart', 'Lisa', 'Maggie']  

// for(const persona of personasArray){
//     let li       = document.createElement('li')
//     li.innerHTML = persona
//     etiquetaIdPersona.appendChild(li)
// }

let producto = {
    id: 1,
    nombre: 'Arroz',
    precio: 600
}

// let concatenado1 = 'Id: ' + producto.id + ', Producto: '+ producto.nombre
// console.log(concatenado1);
// let concatenadoTemplate = `Id: ${producto.id}, el nombre es: ${producto.nombre}, y el precio es: ${producto.precio}`
// console.log(concatenadoTemplate);

// let contenedor = document.createElement('div')

// const productos = [
//     {id: 1, nombre: 'Arroz', precio: 666},
//     {id: 2, nombre: 'lechuga', precio: 700},
//     {id: 3, nombre: 'fideo', precio: 1000},
//     {id: 4, nombre: 'papas', precio: 1200},
// ]
// let contenedor = document.createElement('div') // div row

// document.body.appendChild(contenedor)

// for (const producto of productos) {
//     let div = document.createElement('div') // div card
//     div.innerHTML= `
//         <h3>Id: ${producto.id}</h3>
//         <p>Nombre: ${producto.nombre}</p>
//         <b>Precio: ${producto.precio}</b>
//     ` 

//     contenedor.appendChild(div) 
// }

let parrafo = document.querySelector('#contenedor p')
let conetenedor = document.querySelector('#contenedor')

// parrafo = document.querySelector('.texto')

// console.log(parrafo)
let radioChecked = document.querySelector('.radio:checked')
let input = document.querySelectorAll('input')
console.log(input)




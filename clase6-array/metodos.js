// const arrayA = []
// const arrayA = [1, 2] // 0 y 1 tamaño del array 2, 
// const arrayA = [1, 2, 'C3', 'fede'] // 0 y 3 tamaño del array 4,

// tamaño del array -> ultima posición + 1
// tamaño = 6 entonces la ultima posición es tamaño - 1
// const arrayA = [true, 2, 'C3', {nombre: 'fede', apellido: 'osandon'}] // 0 y 3 tamaño del array 4,
// const numeros = [1,2,'3',4,'fede',true]

// // obj.nombre -> obj['nombre']
// console.log(numeros[2]+numeros[4])
// console.log(numeros[3])
// console.log(numeros[4])

// for(let indice=0; indice < 6; indice++){   // numero[0], numero[1], numero[2], 3, 4, 5
//     alert(numeros[indice])
// }

// métodos

// length

// const miArray = ['Fede', 1, 10,5,6,7,9,7]

// console.log(miArray.length) // tamaño
// console.log(miArray[ miArray.length - 1 ]) // accediendo al último


// [1,2,3] ultima pos= 2    length = 3

// for(let indice=0; indice < numeros.length ; indice++){   // numero[0], numero[1], numero[2], 3, 4, 5
//     console.log(numeros[indice])
// }

// console.log(numeros)
// console.dir(numeros)

// push
// const numeros = [1,2,'3',4,'fede',true, 6, 98, 6]
// numeros.push({nombre: 'fede'})
// numeros.unshift('último agregado')
// console.log(numeros)

// eliminar items, último y primero

// numeros.shift()
// numeros.pop()

// splice -> eliminar 

// numeros.splice(2, 3)

// join 

// console.log(numeros.join(', '))
// console.log(numeros.join(' '))


// concat 
// const nombres = ['Fede', 'Juan', 'lucas']

// const arrayConcat = numeros.concat(nombres)
// console.log(arrayConcat)

// slice copiar desde hasta, no modifica el array original
// (desde, hasta) 
// const numeros = [1,2,'3',4,'fede',true, 6, 98, 6]
// const copiaNumerosParcial = numeros.slice(2, 6)
// console.log(numeros)

// indexOf

// console.log(numeros.indexOf('lucas'))
// console.log(numeros.indexOf('fede'))
// console.log(numeros.indexOf(98))
// console.log(numeros.indexOf(6))

// includes

// console.log(numeros.includes('lucas'))
// console.log(numeros.includes('fede'))
// console.log(numeros.includes(98))
// console.log(numeros.includes(6))
// Reverse
const numeros = [1,2,'3',4,'fede',true, 6, 98, 6]
numeros.reverse()

console.log(numeros)
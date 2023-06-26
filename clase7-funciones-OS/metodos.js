
// FOREACH 

// let numeros = [0,1,2,3,4,5]

// let funcion = (num) => {
//     console.log(num)
// }

// numeros.forEach((num) => {
//     console.log(num)
// })

// FIND 

// const cursos = [
//     {nombre: 'Javascript', precio: 15000},
//     {nombre: 'ReactJs', precio: 22000},
//     {nombre: 'AngularJs', precio: 22000},
//     {nombre: 'Desarollo Web', precio: 16000}
// ]

// let resultado = cursos.find((cursoObject) => cursoObject.nombre === 'Javascript')
// let resultado1 = cursos.find((cursoObject) => cursoObject.nombre === 'Java')
// let resultado2 = cursos.find((cursoObject) => cursoObject.precio === 22000)

// console.log(resultado1)
// console.log(resultado2)

// FILTER

// const cursos = [
//     {nombre: 'Javascript', precio: 15000},
//     {nombre: 'ReactJs', precio: 22000},
//     {nombre: 'AngularJs', precio: 22000},
//     {nombre: 'Desarollo Web', precio: 16000}
// ]

// let resultado = cursos.find( (cursoObject) => cursoObject.precio === 22000  )
// let resultado = cursos.filter( (cursoObject) => cursoObject.precio < 22000  )
// let resultado1 = cursos.filter( (cursoObject) => cursoObject.nombre.includes('js')  )
// console.log(resultado)

// SOME
// console.log( cursos.some((curso) => curso.nombre === 'Javascript'))
// console.log (cursos.some((curso) => curso.nombre === 'Java'))

// // map  <- nuevo array a partir de un array base ['javascript','ReactJs,'Angular', ... ]

// const nombres = cursos.map( curso => curso.nombre)
// const preciosCaluclados = cursos.map( curso => {
//     return { 
//         nombre:  curso.nombre.toLocaleUpperCase(), 
//         precio: curso.precio * 1.21 
//     }
// })

// console.log(preciosCaluclados)

// reduce

// const numeros = [0,1,2,3,4,5]
// // let total = 0
// const total = numero.reduce( (total, elemento)=> total += elemento , 0)
// console.log(total)

// SORT 

// const numeros = [40,1,5,200]

// numeros.sort((numero1,numero2) => numero1 - numero2) // ascendente
// numeros.sort((numero1,numero2) => numero2-numero1) // descendente
// console.log(numeros)


// cursos.sort((a,b)=>{
//     if(a.nombre > b.nombre){
//         return 1
//     }
//     if(a.nombre < b.nombre){
//         return -1
//     }

//     return 0
// })
// cursos.sort((a,b)=>{
//     if(a.nombre > b.nombre){
//         return -1
//     }
//     if(a.nombre < b.nombre){
//         return 1
//     }

//     return 0
// })
// cursos.sort((a,b)=>{
//     if(a.precio > b.precio){
//         return -1
//     }
//     if(a.precio < b.precio){
//         return 1
//     }

//     return 0
// })

// console.log(cursos)



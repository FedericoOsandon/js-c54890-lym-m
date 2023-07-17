// console.log('index.js')


// spread operators ...  (array, objetos) -> tipo de dato Object
// const nombres = [ 'Juan', 'Pedro', 'Pablo', 'Luis'   ]

// console.log(nombres)


// console.log(...nombres)

// // eqivalente a 
// console.log('Juan', 'pedro', 'Pablo', 'Luis')

// const numeros = [ 1,23,3,-40,52,6 ]
// console.log(Math.max(numeros)) // max(2,3,4)
// console.log(Math.max(...numeros)) // max(2,3,4)

// const nombres1 = ['Juan', 'Julieta']
// const nombres2 = ['Fede', 'Lucas']

// // const nombres = ['Juan', 'Julieta','Fede', 'Lucas']
// const nombres = [...nombres1, ...nombres2] 
// console.log(nombres)

// const nombresObj = {
//     ...nombres
// }

// console.log(nombresObj)

// spread de objetos

// const usuario1 = {
//     nombre: 'Fede',
//     apellido: 'Osandón',
//     curso: 'JS',
//     email: 'f@gmail.com'
// }
// const usuario2 = {
//     ...usuario1
// }

// const usuario3 = {
//     ...usuario1,
//     curso: 'React JS',
//     edad: 24
// }

// console.log(usuario3)


// REST PARAMETERS // refactorizar : corregir - acomodar, mejorar

function suma(...numeros){
    console.log(numeros.length)
    return numeros.reduce((total, numero) => total +=numero,0)
}

console.log(suma( 2,4,6,7,98,2,3,-155 ))
// suma(2,4)
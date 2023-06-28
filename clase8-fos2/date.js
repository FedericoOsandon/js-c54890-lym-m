
// const fecha = new Date(2020, 5, 5)
// console.log(fecha)
// console.log( Date())

// Constructor

// const casiNavidad =  new Date(2021, 11, 24, 23, 59, 59)
// const casiNavidad =  new Date('December 25, 2021 23:59:59')
// const casiNavidad =  new Date('2021-12-24')

// console.log(casiNavidad.getDate())
// console.log(casiNavidad.getDay())
// console.log(casiNavidad.getMonth())
// console.log(casiNavidad.getFullYear())

// const hoy = new Date('December 17, 2021')
// const hoyTimestamp = Date.now()
// console.log(hoyTimestamp) 1/1/1970 + segundo hasta ahora

// console.log(hoy)
// console.log(hoy.toDateString())
// console.log(hoy.toLocaleString())
// console.log(hoy.toLocaleDateString())
// console.log(hoy.toTimeString())

// console.log(hoy.getFullYear())
// console.log(hoy.getMonth())
// console.log(hoy.getDay())
// console.log(hoy.getDate())


// ejemplo 

// const navidad = new Date('December 25, 2021')
// const hoy = new Date('December 17, 2021')

// // resultado de las diferencias en milisegundos 10000
// console.log(navidad - hoy)

// const milisegundosPorDia = 86400000
// console.log((navidad-hoy)/milisegundosPorDia)

// ejemplo 2

const inicio = new Date()
let total = 0
for (let i = 0; i < 1000; i++) {
    console.log('realizando tareas...') 
    //    total += i
}

const final = new Date()

console.log(`El procesos tardó: ${final - inicio} milisegundos `) // alt + 96 - o teclado latino: altgr + }
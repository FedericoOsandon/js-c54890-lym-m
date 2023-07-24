// console.log('tarea 1')
// console.log('tarea 2')
// console.log('tarea 3')
// console.log('tarea 4')

// setTimeout(fn, time)

// console.log('tarea 1 - inicia el proceso')    

// setTimeout(()=>{
//     console.log('tarea 2 - mitad el proceso')    
// }, 2000)

// console.log('tarea 3 - fin de proceso')    


// const btn   = document.querySelector('#boton')
// const popup = document.querySelector('#popup-mensaje')
// // console.log(btn)
// // console.log(popup)
// btn.addEventListener('click', ()=>{
//     popup.classList.add('popup-active')
//     // console.log(popup)
//     setTimeout(()=>{
//         popup.classList.remove('popup-active')
//     }, 2500)

// })

// string es un array de carácteres 
// for(let letra of 'hola'){
//     console.log(letra)
// }
// for(let letra of 'mundo'){
//     console.log(letra)
// }
// for(let letra of 'hola'){
//     setTimeout(()=>{
//         console.log(letra)

//     }, 1000)
// }
// for(let letra of 'mundo'){
//     setTimeout(()=>{
//         console.log(letra)

//     }, 1000)
// }



// console.log('tarea 1 - inicia el proceso')    

// setTimeout(()=>{
//     console.log('tarea 2 - mitad el proceso')    
// }, 0)

// console.log('tarea 3 - fin de proceso')    


// function mult(x,y){
//     return x*y
// }

// function printSquare(x) {
//     let s = mult(x,x)
//     console.log(s)
// }

// printSquare(5)

// setTimeout - setInterval

// setInterval(()=>{
//     console.log('tic')
// }, 1000)

// let counter = 0

// const interval = setInterval(()=>{
//     counter++
//     console.log('counter: ', counter)
//     if (counter >= 5) {
//         clearInterval(interval)
//         console.log('se removió el intervalo')
//     }
// },1000)

// console.log('inicio ')

// const fin = setTimeout(()=>{
//     console.log('fin')
// }, 2000)

// clearTimeout(fin)

// const accionAFuturo = (condition) => {
//     return new Promise((res, rej)=>{    
//         console.log('te preste plata - esperando el pago del prestamo')
//         // acciones
       
//         // if (condition) {
//             setTimeout(()=>{
//                 condition ? res('Te devuelvo la plata') : rej('no te puedo devolver')
//             },2000)
//         // } else {
//             // rej('no te puedo devolver')        
//         // }
//     })

// }
// accionAFuturo(false)
//     .then(respuesta => console.log(respuesta))
//     .catch(error => console.log(error))
//     .finally(()=> console.log('Este se ejecuta siempre y al último'))
// accionAFuturo(false)
//     .then(respuesta => console.log(respuesta))
//     .catch(error => console.log(error))



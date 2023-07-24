// const button = document.querySelector('#button')
// button.addEventListener('click', ()=>{
    // alert('hola soy click')
    
    // Swal.fire({
    //     title: 'Error!',
    //     text: 'Do you want to continue?',
    //     icon: 'error',
    //     confirmButtonText: 'Continuar'
    // })

    // Swal.fire({
    //     title: 'Genial!',
    //     text: 'Haz click en el botón',
    //     icon: 'success',
    //     confirmButtonText: '=('
    // })
    
    // Swal.fire({
    //     position: 'top-end',
    //     text: 'Haz click en el botón',
    //     title: 'Genial!',
    //     icon: 'success',
    //     showConfirmButton: false,
    //     timer: 3000//ms 
    // })

    // Swal.fire({
    //     title: 'Genial!',
    //     text: 'Haz click en el botón',
    //     // icon: 'success',
    //     imageUrl: 'https://unsplash.it/400/200',
    //     imageWidth: 400,
    //     imageHeight: 200,
    //     imageAlt: 'Custom Image'
    // })

    // Swal.fire({
    //     title: 'Genial!',
    //     width: 600,
    //     padding: '3em',
    //     color: '#716add',
    //     background: '#fff url(https://unsplash.it/400/200)',
    //     backdrop: `
    //         rgba(0,0,123,0.4)
    //         url((https://unsplash.it/400/200)
    //         left top
    //         no-repeat
    //     `
    // })

    
    // Swal.fire({
    //     text: 'Haz click en el botón',
    //     icon: 'warning',
    //     showCancelButton: true,
    //     confirmButtonText: 'Si, seguro', // true
    //     cancelButtonText: 'No, no quiero' // false
    // })
    // .then( resultado => {
    //     if (resultado.isConfirmed) {
    //         Swal.fire({
    //             title: 'Eliminado del carrito',
    //             icon: 'success',
    //             text: 'El producto ha sido eliminado del carrito'
    //         })   
    //     }

    //     // console.log(resultado)
    // })

    // toastify

    // Toastify({
    //     text: 'Probando toast',
    //     duration: 3000
    // }).showToast()

    // Toastify({
    //     text: 'Probando toast',
    //     duration: 3000,
    //     gravity:'top',
    //     position: 'center'
    // }).showToast()
  
    // Toastify({
    //     text: 'Probando toast',
    //     duration: 3000,
    //     gravity:'top',
    //     position: 'right',
    //     style: {
    //         background: 'linear-gradient(to right, #00b09b, #96c92d)'
    //     }
    // }).showToast()
    
    // Toastify({
    //     text: 'Probando toast',
    //     duration: 3000,
    //     gravity:'top',
    //     position: 'right',
    //     onClick: () => {
    //         Toastify({
    //             text: 'Clikiaste un toast',
    //             duration: 1500,
    //             position: 'left'
    //         }).showToast()
    //      }
        
    // }).showToast()
    
    // Toastify({
    //     text: 'Probando toast',
    //     duration: 3000,
    //     destination: 'https://coderhouse.com'  
        
    // }).showToast()

// })

// luxon



// console.log(DateTime)
// configuración sencilla
// const dateTime = DateTime.local(2000, 2, 25, 12, 10)

// console.log(dateTime.toString())
// console.log(dateTime.toLocaleString())
// // configurando a travez de un objeto
// const dtObject = DateTime.fromObject(
//     {day: 22, hour: 12, month: 2},
//     {zona: 'America/Buenos_Aires', numberingSystem: 'beng'}
// )

// console.log(dtObject.toString())

// const dtString = DateTime.fromISO('2017-05-15')
// const dtString1 = DateTime.fromISO('2017-05-15T08:30:00')

// console.log(dtString.toString())
// console.log(dtString1.toString())

// const dtNow = DateTime.now()
// console.log(dtNow.toString())

// console.log(dtNow.year)
// console.log(dtNow.month)
// console.log(dtNow.day)
// console.log(dtNow.second)
// console.log(dtNow.weekday)

// console.log(dtNow.zoneName)
// console.log(dtNow.daysInMonth)

// console.log(dateTime.daysInMonth)

// console.log(dtNow.toLocaleString())
// console.log(dtNow.toLocaleString(DateTime.DATE_FULL))
// console.log(dtNow.toLocaleString(DateTime.TIME_SIMPLE))
// console.log(dtNow.setLocale('en').toLocaleString(DateTime.DATE_FULL))


// console.log(dtNow.toLocaleString(DateTime.DATETIME_SHORT))

// const suma = dtNow.plus({hours: 5, minutes: 15})
// console.log(suma.toLocaleString(DateTime.DATETIME_SHORT))

// const resta = dtNow.minus({month: 2, days: 10})
// console.log(resta.toLocaleString(DateTime.DATETIME_SHORT))

// console.log(dtNow.set({hour: 3}).hour)
const DateTime = luxon.DateTime

// const Duration = luxon.Duration

// const dt = DateTime.now();
// const dur = Duration.fromObject({ hours: 3, minutes: 15 });

// console.log( dur.hours ) // 3
// console.log( dur.minutes ) // 15
// console.log( dur.seconds ) // 0

// console.log( dt.toLocaleString(DateTime.DATETIME_SHORT) )
// //  25/1/2022 14:35

// const suma = dt.plus(dur)
// console.log(suma.toLocaleString(DateTime.DATETIME_SHORT))
// // 25/1/2022 17:50

// const resta = dt.minus(dur)
// console.log(resta.toLocaleString(DateTime.DATETIME_SHORT))
// 25/1/2022 11:20


const Interval = luxon.Interval

const now = DateTime.now() // fecha actual


const later = DateTime.local(1997, 5, 2) // fecha de cumpleaños

const iterval = Interval.fromDateTimes( later, now)

console.log(iterval.length('days') ) // 0.3905736111111111
console.log(iterval.length('hours') ) // 9.373766666666667
console.log(iterval.length('year') ) // 562.426

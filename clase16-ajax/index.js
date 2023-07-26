// console.log( fetch('https://jsonplaceholder.typicode.com/posts') )
// const productsBD = [
//     {id: 1, nombre: 'Producto 1', precio: 1500},
//     {id: 2, nombre: 'Producto 2', precio: 2500},
//     {id: 3, nombre: 'Producto 3', precio: 3500},
//     {id: 4, nombre: 'Producto 4', precio: 3500},
// ]
// const gFetch = () => {
//     return new Promise( (resolve, reject) => {
//         setTimeout(() => {
//             resolve(productsBD)
//         }, 3000)
//     })
// }

// gFetch()
// .then((res) => {
//     productos = res
//     renderProductos(productos)
// })
// .catch((error) => {
//     console.log(error)
// })
// .finally(() => {
//     const loader = document.querySelector('#loader')
//     loader.style.display = 'none'
// })

// JSON.parse()
// fetch('https://jsonplaceholder.typicode.com/posts') 
// .then( respuesta => respuesta.json())
// .then(data => {
//     console.log(data[0].title)
//     console.log(data[0].body)
// })
// .catch(err => console.log(err))

// const listaUl = document.querySelector('#listado')

// fetch('https://jsonplaceholder.typicode.com/posts',{
//     method: 'GET',
//     headers: {
//         'Content-Type': 'application/json; charset=utf8',        
//     }
// }) 
// .then( respuesta => respuesta.json())
// .then(data => {
//     // console.table(data)

//     data.forEach(post => {
//         const li = document.createElement('li')
//         li.innerHTML=`
//             <h4>${post.title}</h4>
//             <p>${post.body}</p>
//         `
//         listaUl.append(li)  
//     })
    
// })
// .catch(err => console.log(err))

// let data = {
//     title: "Fede el mejor",
//     body: "Fede es un genio",
//     userId: 1
// }

// fetch('https://jsonplaceholder.typicode.com/posts',{
//     method: 'POST',
//     headers: {
//         'Content-type': 'application/json; charset=UTF-8',
//     },
//     body: JSON.stringify(data)
// }) 
// .then( respuesta => respuesta.json())
// .then( respuesta => console.log(respuesta))
// .catch(err => console.log(err))


const listaUl = document.querySelector('#listado')

// fetch('/assets/data/data.json') 
// .then( respuesta => respuesta.json())
// .then(data => {
//     console.table(data)

//     data.forEach(post => {
//         const li = document.createElement('li')
//         li.innerHTML=`
//             <h4>Nombre: ${post.nombre}</h4>
//             <p>Precio: ${post.precio}</p>
//         `
//         listaUl.append(li)  
//     })
    
// })


// fetch('/assets/data/data.json') 
// .then( respuesta => respuesta.json())
// .then(data => {
//     console.table(data)

//     data.forEach(post => {
//         const li = document.createElement('li')
//         li.innerHTML=`
//             <h4>Nombre: ${post.nombre}</h4>
//             <p>Precio: ${post.precio}</p>
//         `
//         listaUl.append(li)  
//     })
    
// })

// async await -> promesa, swgar syntax

// async function pedirDatos () {}
// const pedirDatos = async () => {
//     let data = await fetch('/assets/data/data.json')
//     let dataParser = await data.json()
    
//     dataParser.forEach(post => {
//         const li = document.createElement('li')
//         li.innerHTML=`
//             <h4>Nombre: ${post.nombre}</h4>
//             <p>Precio: ${post.precio}</p>
//         `
//         listaUl.append(li)  
//     })
// }

// https://fakestoreapi.com/docs
// https://fakestoreapi.com/products
const pedirDatos = async () => {
    let data = await fetch('https://fakestoreapi.com/products')
    let dataParser = await data.json()
    console.log(dataParser)
    
    dataParser.forEach(post => {
        const li = document.createElement('li')
        li.innerHTML=`
            <img src='${post.image}' >
            <h4>Nombre: ${post.title}</h4>
            <p>Precio: ${post.price}</p>
            <p>Descripción: ${post.description}</p>
            <p>Categoría: ${post.category}</p>
        `
        listaUl.append(li)  
    })
}
pedirDatos()
// .then(resp => {
//       resp.forEach(post => {
//         const li = document.createElement('li')
//         li.innerHTML=`
//             <h4>Nombre: ${post.nombre}</h4>
//             <p>Precio: ${post.precio}</p>
//         `
//         listaUl.append(li)  
//     })
// })



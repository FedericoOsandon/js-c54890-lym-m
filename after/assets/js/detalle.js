// funcciones para llevar a otro archivos

const getParamUrl = (param) => {
    const urlParam = new URLSearchParams(window.location.search)
    // console.log(urlParam)
    return parseInt(urlParam.get(param))
}


const getProduct = async (pid) => {
    const respuesta = await fetch('/assets/data/data.json')
    const data =  await respuesta.json()

    return data.find(producto => producto.id === pid)
}

const renderProducto = (producto, elemento) => {
        
    // crear la card
    const div = document.createElement('div')
    div.classList.add('row', 'w-100')

    div.innerHTML = `
        <div class='col-6'>
            <img src="${producto.imgUrl}" class='card-img-top w-75'> 
            </div>
        <div class='col-6'>            
                <h3>Nombre: ${producto.nombre}</h3>
                <p>Categoría: ${producto.categoria}</p>
                <h3>Precio: ${producto.precio}</h3>
                <button class='btn btn-outline-dark' id='agregarCarrito'>Agregar el carrito</button>            
        </div>                    
    `
    elemento.appendChild(div)

}

const agregarAlCarrito = (producto) => {
    const carritoLS = JSON.parse(localStorage.getItem('carrito'))
    if (carritoLS) {
        const existIndice = carritoLS.findIndex(prod => prod.id === producto.id)
        if (existIndice===-1) {
            producto.cantidad = 1
            carritoLS.push(producto)
        } else {
            carritoLS[existIndice].cantidad += 1
        }
        localStorage.setItem('carrito', JSON.stringify(carritoLS))
        Toastify({
            text: 'Producto agregado el carrito -> ',
            duration: 3000,
            destination: 'carrito.html'
        }).showToast()
    } else {
        producto.cantidad = 1
        localStorage.setItem('carrito', JSON.stringify([producto]))
        Toastify({
            text: 'Producto agregado el carrito -> ',
            duration: 3000,
            destination: 'carrito.html'
        }).showToast()
    }
}

// lógica de detalle.js

const pid = getParamUrl('pid')

const producto = await getProduct(pid)

const detalleProducto = document.querySelector('#detalleProducto')
detalleProducto.classList.add('w-100')

renderProducto(producto, detalleProducto)

let button = document.querySelector('#agregarCarrito')
button.addEventListener('click', () => agregarAlCarrito(producto))
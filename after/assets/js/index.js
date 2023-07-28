const getProducts = async () => {
    const respuesta = await fetch('/assets/data/data.json')
    return await respuesta.json()
}

const renderProductos = (productos, elemento) => {
    productos.forEach(producto => {
        // crear la card
        const card = document.createElement('div')
        card.classList.add('card', 'col-4')

        card.innerHTML = `
            <div class='card-body'> 
                <a href="/detalle.html?pid=${producto.id}">
                    <img src="${producto.imgUrl}" class='card-img-top w-100'>
                    <h3>Nombre: ${producto.nombre}</h3>
                </a>
            </div>
        `
        elemento.appendChild(card)
    })
}


const listadoProductos = document.querySelector('#listadoProductos')
listadoProductos.classList.add('row', 'w-100')

const productos = await getProducts()

renderProductos(productos, listadoProductos)


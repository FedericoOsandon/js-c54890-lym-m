console.log('Hello World')

const productosDB = [
    {
        id: 1, 
        nombre: 'Remera Negra', 
        precio: 5000, 
        categoria: 'remeras', 
        stock: 100 , 
        imgUrl: 'https://marinaracewear.com/storage/media/attributes/8/7/4/5/8/87458/2.jpg'
    },
    {
        id: 2, 
        nombre: 'Gorra Rosa', 
        precio: 2500, 
        categoria: 'gorras', 
        stock: 150 , 
        imgUrl: 'https://cdn.palbincdn.com/users/31244/images/GORRA-BASICA-JUNIOR-CUSTOMIZASHOPBF10B-COLOR-ROSA-1611838353.jpg'
    }
]

// ingresar cod postal prompt (1 cp)
// calcular precio 
// recorrer al array reduce precio total y cantidad de día sumarlo envio
// mostrar el precio total y la cantidad de días


// funcion que reciba un producto y lo muestre en pantalla

/// buscar - ingrensar un proucto 
//  prompt - ingresar un producto

// funcioncita que reciba un producto y lo busque en el array de productos
let productos = []

const gFetch = () => { // fetch
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            resolve(productosDB)
        },2000)
    })
}




const listadoProductos = document.getElementById('listadoProductos')
listadoProductos.classList.add('row')




// let miFormulario = document.getElementById('formulario')
// miFormulario.onsubmit = (evt)=>{
//     evt.preventDefault()
//     let form = evt.target

//     console.log(form.children[0].value)
//     console.log(form.children[1].value)
//     console.log(form.children[2].value)
//     console.log(form.children[3].value)
//     console.log(form.children[4].value)
// } 
gFetch()
.then(resp => {
    for(const product of resp){
        const divCard = document.createElement('div')
        divCard.classList.add('card', 'col-4')
        divCard.innerHTML = `
            <div class='card-body'>
                <img src='${product.imgUrl}' class='card-img-top' alt='' >
                <h3>Nombre: ${product.nombre}</h3>
                <h3>Categoria: ${product.categoria}</h3>
                <p>Precio: ${product.precio}</p>
                <p>Stock: ${product.stock}</p>
                <div class='card-footer'>
                    <button  class='btn btn-outline-dark w-100' id='detalle'>detalle</button>
                </div>
            </div>
        `
                   
        listadoProductos.appendChild(divCard)
    }
        
})
.catch(err => console.log(err))
.finally(()=>{
    const loader = document.querySelector('#loader')
    loader.style.display = 'none'
})
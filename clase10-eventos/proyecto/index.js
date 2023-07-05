console.log('Hello World')

const productos = [
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

const listadoProductos = document.getElementById('listadoProductos')


const divRow = document.createElement('div')
divRow.classList.add('row', 'w-100')

for(const product of productos){
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
        
    divRow.appendChild(divCard)          
}
    
listadoProductos.appendChild(divRow)


let miFormulario = document.getElementById('formulario')
miFormulario.onsubmit = (evt)=>{
    evt.preventDefault()
    let form = evt.target

    console.log(form.children[0].value)
    console.log(form.children[1].value)
    console.log(form.children[2].value)
    console.log(form.children[3].value)
    console.log(form.children[4].value)
} 

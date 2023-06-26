// ejemplo 

const productos = [
    {id: 1, producto: 'Fideo', precio: 15000},
    {id: 2, producto: 'Arroz', precio: 22000},
    {id: 3, producto: 'Pan', precio: 22000},
    {id: 4, producto: 'Flan', precio: 16000}
]

const buscado = productos.find(producto => producto.id === 3 ) // 3 ingresado por prompt
const exist   = productos.some(prod => prod.nombre === 'Harina')
const baratos = productos.filter(producto => producto.precio < 20000)
const listaProductosNombres = productos.map(prod => prod.producto)

console.log(buscado)
console.log(exist)
console.log(baratos)
console.log(listaProductosNombres)

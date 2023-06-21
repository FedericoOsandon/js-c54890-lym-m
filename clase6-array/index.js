// const listaNombre = []
// console.log(listaNombre.length)
// let cantidad = Number(prompt('Ingrese cantidad de nombres: 2'))

// do {
//     let entrada = prompt('Ingresar nombre:')
//     listaNombre.push(entrada.toUpperCase())
//     console.log('listado',listaNombre)
//     console.log('tamaño array: ',listaNombre.length)
// }while(listaNombre.length !== cantidad)

// const nuevaLista = listaNombre.concat(['FEDE', 'JUANA'])
// console.log(nuevaLista.join('\n'))

// alert(nuevaLista.join('\n'))

// ejemplo 2

// const nombres = ['Fede', 'Rita', 'Miguel', 'Vane']
// const eliminar = (nombre) => {
//    let indice = nombres.indexOf(nombre) 
//    if (indice !== -1) {
//         nombres.splice(indice, 1)
//    }
// }
// eliminar('Miguel')
// console.log(nombres)


// const producto1 = {id: 1, nombre: 'Arroz'}

// const productosArray = [producto1, {id: 2, nombre: 'Fideo'}, {id: 3, nombre: 'pate'}]

// productosArray.push({id: 4, nombre: 'Pasta'})

// // console.log(productosArray)

// // for(in) -> objetos
// // for(of)
// for (const producto of productosArray){
//     if(producto.id === 2){
//         producto['nombre'] = 'Lentejas'
//     }
//     // console.log(producto)
// }

// console.log(productosArray)



class Producto {
    constructor(nombre, precio){
        this.nombre  = nombre.toUpperCase()
        this.precio  = parseFloat(precio)
        this.vendido = false
    }
    sumarIva(){
        this.precio = this.precio * 1.21
    }
}

const productos = []

productos.push(new Producto('arroz', '125'))
productos.push(new Producto('fideo', '75'))
productos.push(new Producto('harina', '150'))

console.log(productos)

for(const product of productos){
    product.sumarIva()
}

console.log(productos)


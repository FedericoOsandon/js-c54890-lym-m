
class Producto {
    constructor(nombre, precio){
        this.nombre  = nombre
        this.precio  = parseFloat(precio) 
        this.vendido = false
        // this.isStock = true
        // this.active = true
        // this.cantidadStock
    }
    sumarIva(){
        this.precio = this.precio * 1.21
    }
    vender(){
        this.vendido = true
    }
}

// simulador de compra
function calcularPrecioTotal(precioProducto) {   
    if (isNaN(precioProducto)) {
        return 'El precio ingresado no es un número'
    }
    let costoEnvio  = 10
    let iva         = 1.21

    return (precioProducto * iva) + costoEnvio
}

const cantidadProductos = Number(prompt('ingrese cantidad de productos: '))

if (!isNaN(cantidadProductos)) {
    for (let index = 0; index < cantidadProductos; index++) {
        const producto1 = prompt('ingrese el precio del producto '+ (index+1) +': ')      
        alert('el precio total es: ' + calcularPrecioTotal(producto1))
    }
} else {
    alert('la cantidad de productos ingresada no es un número')
}


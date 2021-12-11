//Importaciones
import { mercarProducto } from './mercarProducto.js'
import { mostrarInfoProducto } from './mostrarInfoProducto.js'
import { pintarProductos } from './pintarProductos.js'

//Variables globales
let carrito = []
let producto

//Referencias al HTML
let modalCompra = new bootstrap.Modal(document.getElementById('carrito'))
let listaProductos = document.getElementById("listaProductos")
let botonAgregar = document.getElementById("botonAgregar")
let botonvercarrito = document.getElementById("botonvercarrito")

//1. Iniciamos detectando el click en el producto seleccionado
listaProductos.addEventListener("click", function (event) {

    producto = mercarProducto(event)
    mostrarInfoProducto(producto)
    modalCompra.show()

})

//2. Si el usuario hace clic en agregar producto al carrito
botonAgregar.addEventListener("click", function () {

    let cantidad = document.getElementById("cantidad").value
    producto.cantidad = cantidad
    carrito.push(producto)

    let pildora = document.getElementById("pildora")
    pildora.textContent = carrito.length
    pildora.classList.remove("invisible")

    modalCompra.hide()

})

//3. si el usuario quiere ver el carrito de compras
botonvercarrito.addEventListener("click", function () {
    pintarProductos(carrito)
})
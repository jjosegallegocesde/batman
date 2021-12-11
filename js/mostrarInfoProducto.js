export function mostrarInfoProducto(producto) {

    let imagenCarrito = document.getElementById("imagenCarrito")
    imagenCarrito.src = producto.foto

    let tituloCarrito = document.getElementById("tituloCarrito")
    tituloCarrito.textContent = producto.nombre

    let precioCarrito = document.getElementById("precioCarrito")
    precioCarrito.textContent = producto.precio

}
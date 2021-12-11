export function pintarProductos(carrito) {

    let fila = document.getElementById("filacarrito")
    fila.innerHTML = ''

    if (carrito.length != 0) {

        console.log(carrito)

        carrito.forEach(function (producto) {

            let columna1 = document.createElement("col")
            columna1.classList.add("col-12")
            columna1.classList.add("col-md-5")

            let columna2 = document.createElement("col")
            columna2.classList.add("col-12")
            columna2.classList.add("col-md-7")
            columna2.classList.add("align-self-center")

            let foto = document.createElement("img")
            foto.classList.add("img-fluid")
            foto.classList.add("w-100")
            foto.src = producto.foto

            let nombre = document.createElement("h5")
            nombre.textContent = producto.nombre

            let precio = document.createElement("h6")
            precio.textContent = "precio unidad: " + producto.precio

            let cantidad = document.createElement("h6")
            cantidad.textContent = "Cantidad: " + producto.cantidad

            columna1.appendChild(foto)

            columna2.appendChild(nombre)
            columna2.appendChild(precio)
            columna2.appendChild(cantidad)

            fila.appendChild(document.createElement("hr"))

            fila.appendChild(columna1)
            fila.appendChild(columna2)

        })
    } else {

        let columna1 = document.createElement("col")
        columna1.classList.add("col-12")

        let foto = document.createElement("img")
        foto.classList.add("img-fluid")
        foto.classList.add("w-100")
        foto.src = "img/carritovacio.png"

        columna1.appendChild(foto)

        fila.appendChild(columna1)

    }
}
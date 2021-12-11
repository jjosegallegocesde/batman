export function mercarProducto(event) {

    let producto = {}

    if (event.target.classList.contains("btn-warning")) {

        let datosProducto = event.target.parentElement.parentElement

        producto = {
            foto: datosProducto.querySelector('img').src,
            nombre: datosProducto.querySelector('h4').textContent,
            precio: datosProducto.querySelector('p').textContent,
            cantidad: 0
        }

    }

    return producto

}
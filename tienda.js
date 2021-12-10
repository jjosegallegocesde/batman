let carrito = []

let listaProductos=document.getElementById("listaProductos")
listaProductos.addEventListener("click",mercarProducto)



function mercarProducto(event){
   
    if(event.target.classList.contains("btn-warning")){
        let datosProducto=event.target.parentElement.parentElement
        leerDatosProducto(datosProducto)
    }   
}

function leerDatosProducto(datosProducto){
    let producto={
        foto:datosProducto.querySelector('img').src,
        nombre:datosProducto.querySelector('h4').textContent,
        precio:datosProducto.querySelector('p').textContent,
        cantidad:0    
    }

    habilitarModal(producto)
    

}

function habilitarModal(producto){
   
    let imagenCarrito=document.getElementById("imagenCarrito")
    imagenCarrito.src=producto.foto

    let tituloCarrito=document.getElementById("tituloCarrito")
    tituloCarrito.textContent=producto.nombre

    let precioCarrito=document.getElementById("precioCarrito")
    precioCarrito.textContent=producto.precio

    let myModal = new bootstrap.Modal(document.getElementById('carrito'))
    myModal.show()

    
    let botonAgregar=document.getElementById("botonAgregar")
    botonAgregar.addEventListener("click",function(){
        let cantidad=document.getElementById("cantidad").value
        producto.cantidad=cantidad

        console.log(carrito)
    })

   
   

}


let fila=document.getElementById("listaProductos")

let productosBD=[

    { foto:'img/tienda1.jpg',nombre:"Batimovil Escala",precio:150000,cantidad:0 },
    { foto:'img/tienda2.jpg',nombre:"Camiseta Batman",precio:50000,cantidad:0 },
    { foto:'img/tienda3.jpg',nombre:"Gorra Batman",precio:25000,cantidad:0 },
    { foto:'img/tienda4.jpg',nombre:"Termo Batman",precio:35500,cantidad:0 },
    { foto:'img/tienda5.jpg',nombre:"Batman v Superman",precio:95000,cantidad:0 },
    { foto:'img/tienda6.jpg',nombre:"Maleta Batman",precio:250000,cantidad:0 },
    { foto:'img/tienda7.jpg',nombre:"Silla Batman PRO",precio:1500000,cantidad:0 },
    { foto:'img/tienda8.jpg',nombre:"Comics Batman",precio:350000,cantidad:0 },
    { foto:'img/tienda9.jpg',nombre:"Caja sorpresa",precio:187000,cantidad:0 },
    { foto:'img/tienda2.jpg',nombre:"Lonchera Batman",precio:70000,cantidad:0 }

]

let filtrado=productosBD.forEach(function(producto){
    
    let columna = document.createElement("div")
    columna.classList.add("col")

    let tarjeta = document.createElement("div")
    tarjeta.classList.add("card")
    tarjeta.classList.add("p-2")
    tarjeta.classList.add("shadow")

    let imagen=document.createElement("img")
    imagen.classList.add("card-img-top")
    imagen.src=producto.foto

    let divisor=document.createElement("hr")

    let cuerpoTarjeta=document.createElement("div")
    cuerpoTarjeta.classList.add("card-body")

    let nombreProducto=document.createElement("h4")
    nombreProducto.classList.add("card-title")
    nombreProducto.classList.add("text-muted")
    nombreProducto.textContent=producto.nombre

    let precioProducto=document.createElement("p")
    precioProducto.classList.add("card-text")
    precioProducto.textContent="$"+producto.precio

    let botonComprar=document.createElement("button")
    botonComprar.setAttribute("type","button")
    botonComprar.classList.add("btn")
    botonComprar.classList.add("btn-warning")
    botonComprar.classList.add("w-100")
    botonComprar.classList.add("shadow")
    botonComprar.textContent="ver producto"

    cuerpoTarjeta.appendChild(nombreProducto)
    cuerpoTarjeta.appendChild(precioProducto)
    cuerpoTarjeta.appendChild(botonComprar)

    tarjeta.appendChild(imagen)
    tarjeta.appendChild(divisor)
    tarjeta.appendChild(cuerpoTarjeta)

    columna.appendChild(tarjeta)

    fila.appendChild(columna)





})








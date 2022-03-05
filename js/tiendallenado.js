let productosBD = [

    { foto: 'img/tienda1.jpg', nombre: "Batimovil Escala", precio: 150000},
    { foto: 'img/tienda2.jpg', nombre: "Camiseta Batman", precio: 50000},
    { foto: 'img/tienda3.jpg', nombre: "Gorra Batman DC", precio: 25000},
    { foto: 'img/tienda4.jpg', nombre: "Termo Batman DC", precio: 35500 },
    { foto: 'img/tienda5.jpg', nombre: "Batman v Superman", precio: 95000 },
    { foto: 'img/tienda6.jpg', nombre: "Maleta Batman", precio: 250000 },
    { foto: 'img/tienda7.jpg', nombre: "Silla Batman PRO", precio: 1500000},
    { foto: 'img/tienda8.jpg', nombre: "Comics Batman", precio: 350000},
    { foto: 'img/tienda9.jpg', nombre: "Caja sorpresa", precio: 187000},
    { foto: 'img/tienda10.jpg', nombre: "Lonchera Batman", precio: 70000}

]

//creo la referencia al componente padre
//creo una variable para almacenar la base
//sobre la cual voy a pintar
let fila=document.getElementById("fila")

//Recorrer arreglo
//forEach
productosBD.forEach(function(producto){
    console.log(producto.nombre)
    console.log(producto.precio)
    console.log(producto.foto)
    //receta para pintar js

    //1. comience a crear la estructura que necesite

    //creo la columna
    let columna=document.createElement("div")
    columna.classList.add("col")

    //creo la tarjeta
    let tarjeta=document.createElement("div")
    tarjeta.classList.add("card")
    tarjeta.classList.add("h-100")

    // creo la imagen
    let foto = document.createElement("img")
    foto.classList.add("card-img-top")
    foto.src= producto.foto

    //2. ordenar la estructura
    //Padres e hijos

    tarjeta.appendChild(foto)
    columna.appendChild(tarjeta)
    fila.appendChild(columna)



})


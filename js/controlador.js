//IMPORTANDO MODULOS
import {pintarTienda} from './tiendallenado.js'


//Llamando al modulo de pintar
pintarTienda()

//Lanzando el modal
let contenedorTienda=document.getElementById("fila")

contenedorTienda.addEventListener("click",function(evento){

    if(evento.target.classList.contains("btn")){
       
        let modalinfo = new bootstrap.Modal(document.getElementById('modalinformacion'))
        
        //cargar informaciond el producto dentro del modal
        
        let fotoInfo=document.getElementById("fotoInfo")
        fotoInfo.src=evento.target.parentElement.querySelector("img").src

        let tituloFoto=document.getElementById("nombreInfo")
        tituloFoto.textContent=evento.target.parentElement.querySelector("h4").textContent
        
        modalinfo.show()


    }

})
//IMPORTANDO MODULOS
import {pintarTienda} from './tiendallenado.js'
import{ampliarInformacion} from './ampliarInfo.js'

//Llamando al modulo de pintar
pintarTienda()

//Llamando al modulo amplairInfo
let contenedorTienda=document.getElementById("fila")
contenedorTienda.addEventListener("click",function(event){
    
    let modalinfoproducto = new bootstrap.Modal(document.getElementById('modalinfoproducto'))
    ampliarInformacion(event)
    modalinfoproducto.show()


})
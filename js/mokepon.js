

window.addEventListener("load", iniciarJuego)

let ataqueJugador = ""
let ataquePc = ""

function iniciarJuego() { 

    let botonMascota = document.getElementById("boton_mascota")
    botonMascota.addEventListener("click", seleccionarMascotaJugador)
 
    function seleccionarMascotaJugador() {
        
    let casillaHipodoge = document.getElementById("hipodoge")
    let casillaCapipepo = document.getElementById("capipepo")
    let casillaRatigueya = document.getElementById("ratigueya")
    let spanMascotaJugador = document.getElementById("mascota_jugador")
    
    if (casillaHipodoge.checked) {
        spanMascotaJugador.innerHTML = "Hipodoge 🐶"
    }
    else if (casillaCapipepo.checked) {
        spanMascotaJugador.innerHTML = "Capipepo 🐢"
    }
    else if (casillaRatigueya.checked) {
        spanMascotaJugador.innerHTML = "Ratigueya 🐭"
    }
    else {
        alert("Opción no válida. Por favor selecciona una mascota.")
    }

//--- Selección de mascota de la PC -----------------------------------------------

    function aleatorioMascotaPc(min, max) {
        return Math.floor(Math.random() * (max - min + 1) + min);
    }
    let pcAleatorio = aleatorioMascotaPc(1, 3)
    let spanMascotaPc = document.getElementById("mascota_pc")


    if (pcAleatorio == 1) {
        spanMascotaPc.innerHTML = "Hipodoge 🐶"
    }
    else if (pcAleatorio == 2) {
        spanMascotaPc.innerHTML = "Capipepo 🐢"
    }
    else {
        spanMascotaPc.innerHTML = "Ratigueya 🐭"
    }
    }
 
//--- Selección de ataque jugador y pc----------------------------------------------------------
   
    let botonFuego = document.getElementById("boton_fuego")
    botonFuego.addEventListener("click", ataqueFuego)

    let botonAgua = document.getElementById("boton_agua")
    botonAgua.addEventListener("click", ataqueAgua)

    let botonTierra = document.getElementById("boton_tierra")
    botonTierra.addEventListener("click", ataqueTierra)

   
    let spanAtaqueJugador = document.getElementById("ataque_jugador")

    function ataqueFuego() {
        ataqueJugador = "Fuego 🔥"
        spanAtaqueJugador.innerHTML = ataqueJugador
        ataquePcAleatorio(1, 3)
    }
    function ataqueAgua() {
        ataqueJugador = "Agua 💧"
        spanAtaqueJugador.innerHTML = ataqueJugador
        ataquePcAleatorio(1, 3)
    }    
    function ataqueTierra() {
        ataqueJugador = "Tierra 🌲"
        spanAtaqueJugador.innerHTML = ataqueJugador
        ataquePcAleatorio(1, 3)
    }
   
    let aleatorioMascotaPc = function(min, max) {
        return Math.floor(Math.random() * (max - min + 1) + min);
    }
    
    function ataquePcAleatorio() {
        
        let pcAleatorio = aleatorioMascotaPc(1, 3)
        let spanAtaquePc = document.getElementById("ataque_pc")
        
        if (pcAleatorio == 1) {
            ataquePc = "Fuego 🔥"
            spanAtaquePc.innerHTML = ataquePc
        }
        else if (pcAleatorio == 2) {
            ataquePc = "Agua 💧"
            spanAtaquePc.innerHTML = ataquePc
        }
        else {
            ataquePc = "Tierra 🌲"
            spanAtaquePc.innerHTML = ataquePc
        }
    }
}

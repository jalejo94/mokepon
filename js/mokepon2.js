

window.addEventListener("load", iniciarJuego)

let ataqueJugador = ""
let ataquePc = ""
let vidasJugador = 3
let vidasPc = 3

function numeroAleatorio(min, max) {
        return Math.floor(Math.random() * (max - min + 1) + min);
    }


function iniciarJuego() { 

//--- Selección de mascota jugador ----------------------------------------------------------    
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

    
    let pcAleatorio = numeroAleatorio(1, 3)
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
        ataquePcAleatorio()
        crearMensaje()
        
    }
    function ataqueAgua() {
        ataqueJugador = "Agua 💧"
        spanAtaqueJugador.innerHTML = ataqueJugador
        ataquePcAleatorio()
        crearMensaje()
        
    }    
    function ataqueTierra() {
        ataqueJugador = "Tierra 🌲"
        spanAtaqueJugador.innerHTML = ataqueJugador
        ataquePcAleatorio()
        crearMensaje()
        
    }
   
   
    
    function ataquePcAleatorio() {
        
        let pcAleatorio = numeroAleatorio(1, 3)
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

//--- Combate ----------------------------------------------------------    

function crearMensaje() {

    let parrafo = document.createElement("p")
    let parrafo_2 = document.createElement("h2")
    let resultadoCombate = ""
    let seccionMensajes = document.getElementById("mensajes")
    let seccionMensajes2 = document.getElementById("mensajes_ganador")
    
    seccionMensajes.appendChild(parrafo)
    combate()
    seccionMensajes2.appendChild(parrafo_2)

    parrafo.innerHTML = "Tu mascota atacó con " + ataqueJugador + ", la mascota de la PC atacó con " + ataquePc 
    parrafo_2.innerHTML = "Resultado combate: " + resultadoCombate

    function combate() {

        let spanVidasJugador = document.getElementById("vidas_jugador")
        let spanVidasPc = document.getElementById("vidas_pc")

        if (ataqueJugador == ataquePc) {
            alert("EMPATE")
            resultadoCombate = "EMPATE"
            
        }
        else if ((ataqueJugador == "Fuego 🔥" && ataquePc == "Tierra 🌲") 
            || (ataqueJugador == "Agua 💧" && ataquePc == "Fuego 🔥") 
            || (ataqueJugador == "Tierra 🌲" && ataquePc == "Agua 💧")) {
            alert("GANASTE")
            resultadoCombate = "GANASTE"
            vidasPc--
            spanVidasPc.innerHTML = vidasPc 
            
        }
        else {
            alert("PERDISTE")
            resultadoCombate = "PERDISTE"
            vidasJugador--
            spanVidasJugador.innerHTML = vidasJugador 
        }

        function revisarVidas() {
            if (vidasPc == 0) {
                alert("FELICIDADES GANASTE, ERES UN CRACK 🥳")

            if (vidasJugador == 0) {
                alert("LO SIENTO, PERDISTE ERES UNA AREPA. INTENTA DE NUEVO 😞")
                
            }
        }
    }    

}
//--- Mensajes de vidas ----------------------------------------------------------




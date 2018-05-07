var juego = ["", "", "", "", "", "", "", "", ""]
var turno = true    //true es turno del jugador x
var contadorX = 0
var contadorO = 0
window.onload = function () {
    var el = document.getElementById("body")

    el.setAttribute("style", "height:" + window.innerHeight + "px")
    var celdas = document.getElementsByClassName("celda")
    destaca()
    for (let celda of celdas) {
        celda.onclick = function () {
            if (this.innerHTML == "") { //si no hay nada en la celda que voy a hacer click
                if (turno) {    //turno x
                    this.innerHTML = "X";
                    juego[this.id] = "X"
                    turno = false;
                    destaca()
                } else {   //turno o
                    this.innerHTML = "O";
                    juego[this.id] = "O"
                    turno = true;
                    destaca()
                }
                comprobar(juego)
            }
        }
    }
}
function comprobar(juego) {
    if ((juego[0] == juego[1]) && (juego[1] == juego[2]) && (juego[0] != "")) {
        alert("Ha ganado el equipo " + juego[0])
        if (sumaVictoria()) {
            document.getElementById("contadorX").innerHTML = contadorX
        } else {
            document.getElementById("contadorO").innerHTML = contadorO
        }
        vaciar()
    }
    if ((juego[3] == juego[4]) && (juego[4] == juego[5]) && (juego[3] != "")) {
        alert("Ha ganado el equipo " + juego[3])
        if (sumaVictoria()) {
            document.getElementById("contadorX").innerHTML = contadorX
        } else {
            document.getElementById("contadorO").innerHTML = contadorO
        }
        vaciar()
    }
    if ((juego[6] == juego[7]) && (juego[7] == juego[8]) && (juego[6] != "")) {
        alert("Ha ganado el equipo " + juego[6])
        if (sumaVictoria()) {
            document.getElementById("contadorX").innerHTML = contadorX
        } else {
            document.getElementById("contadorO").innerHTML = contadorO
        }
        vaciar()
    }
    if ((juego[0] == juego[3]) && (juego[3] == juego[6]) && (juego[0] != "")) {
        alert("Ha ganado el equipo " + juego[0])
        if (sumaVictoria()) {
            document.getElementById("contadorX").innerHTML = contadorX
        } else {
            document.getElementById("contadorO").innerHTML = contadorO
        }
        vaciar()
    }
    if ((juego[1] == juego[4]) && (juego[4] == juego[7]) && (juego[1] != "")) {
        alert("Ha ganado el equipo " + juego[1])
        if (sumaVictoria()) {
            document.getElementById("contadorX").innerHTML = contadorX
        } else {
            document.getElementById("contadorO").innerHTML = contadorO
        }
        vaciar()
    }
    if ((juego[2] == juego[5]) && (juego[5] == juego[8]) && (juego[2] != "")) {
        alert("Ha ganado el equipo " + juego[2])
        if (sumaVictoria()) {
            document.getElementById("contadorX").innerHTML = contadorX
        } else {
            document.getElementById("contadorO").innerHTML = contadorO
        }
        vaciar()
    }
    if ((juego[0] == juego[4]) && (juego[4] == juego[8]) && (juego[0] != "")) {
        alert("Ha ganado el equipo " + juego[0])
        if (sumaVictoria()) {
            document.getElementById("contadorX").innerHTML = contadorX
        } else {
            document.getElementById("contadorO").innerHTML = contadorO
        }
        vaciar()
    }
    if ((juego[2] == juego[4]) && (juego[4] == juego[6]) && (juego[2] != "")) {
        alert("Ha ganado el equipo " + juego[2])
        if (sumaVictoria()) {
            document.getElementById("contadorX").innerHTML = contadorX
        } else {
            document.getElementById("contadorO").innerHTML = contadorO
        }
        vaciar()
    }
    if (empate()) {
        vaciar()
    }
}
function empate() {
    for (let aux of juego) {
        if (aux == "") {
            return false
        }
    }
    alert("EMPATE")
    return true
}
function vaciar() {
    var celdas = document.getElementsByClassName("celda")
    for (let c of celdas) {
        c.innerHTML = "";
    }
    this.juego = ["", "", "", "", "", "", "", "", ""]
    return true
}
function destaca() {
    if (turno) {    //pinto x vacio o
        var divX = document.getElementById("X")
        divX.setAttribute("style", "border:" + "1px solid black")
        divX.setAttribute("style", "background:" + "#AACBD8")
        var divO = document.getElementById("O")
        divO.setAttribute("style", "border:" + " ")
    } else {    //pinto o vacio x
        var divO = document.getElementById("O")
        divO.setAttribute("style", "border:" + "1px solid black")
        divO.setAttribute("style", "background:" + "#AACBD8")
        var divX = document.getElementById("X")
        divX.setAttribute("style", "border:" + " ")
    }
}
function sumaVictoria() {
    if (turno) {
        contadorO++
        return false
    } else {
        contadorX++
        return true
    }
}
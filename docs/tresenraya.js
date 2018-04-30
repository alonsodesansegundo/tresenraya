window.onload = function () {
    var el = document.getElementById("body")
    var turno = true
    var juego=["","","","","","","","",""]
    el.setAttribute("style", "height:" + window.innerHeight + "px")
    var celdas = document.getElementsByClassName("celda")
    for (let celda of celdas) {
        celda.onclick = function () {
            if (turno) {
                this.innerHTML = "X";
                juego[this.id]="X"
                turno = false;
            } else {
                    this.innerHTML = "O";
                    juego[this.id]="O"
                    turno = true;

            }
            comprobar(juego)
        }
        
    }
}
function comprobar(juego){
    if((juego[0]==juego[1])&&(juego[1]==juego[2])&&(juego[0]!="")){
        alert("Ha ganado el equipo "+juego[0])
        vaciar()
    }
    if((juego[3]==juego[4])&&(juego[4]==juego[5])&&(juego[3]!="")){
        alert("Ha ganado el equipo "+juego[3])
        vaciar()
    }
    if((juego[6]==juego[7])&&(juego[7]==juego[8])&&(juego[6]!="")){
        alert("Ha ganado el equipo "+juego[6])
        vaciar()
    }
    if((juego[0]==juego[3])&&(juego[3]==juego[6])&&(juego[0]!="")){
        alert("Ha ganado el equipo "+juego[0])
        vaciar()
    }
    if((juego[1]==juego[4])&&(juego[4]==juego[7])&&(juego[1]!="")){
        alert("Ha ganado el equipo "+juego[1])
        vaciar()
    }
    if((juego[2]==juego[5])&&(juego[5]==juego[8])&&(juego[2]!="")){
        alert("Ha ganado el equipo "+juego[2])
        vaciar()
    }
    if((juego[0]==juego[4])&&(juego[4]==juego[8])&&(juego[0]!="")){
        alert("Ha ganado el equipo "+juego[0])
        vaciar()
    }
    if((juego[2]==juego[4])&&(juego[4]==juego[6])&&(juego[2]!="")){
        alert("Ha ganado el equipo "+juego[2])
        vaciar()
    }
    empate(juego)
    if(empate(juego)){
        vaciar()
    }
}
function empate(juego){
    for(let aux of juego){
        if(aux==""){
            return false
        }
    }
    alert("EMPATE")
    return true
}
function vaciar(){
    var celdas=document.getElementsByClassName("celda")
    for (let c of celdas){
        c.innerHTML="";
    }
    juego=["","","","","","","","",""]
}
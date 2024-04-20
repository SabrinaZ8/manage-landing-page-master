/*------ Navbar Mobile ------*/

const navHeader = document.querySelector(".nav-header")
const navList = document.querySelector(".list-nav")
const btnOpen = document.getElementById("btn-open")
const btnClose = document.getElementById("btn-close")
const body = document.querySelector("body")

let valor = true

function menu() {
    if(valor) {
        valor = false
        navList.classList.add("style-menu-cell");
        navHeader.style.display = "block";
        btnOpen.style.display = "none";
        btnClose.style.display = "block";
        body.style.overflow = "hidden";
    } else {
        valor = true
        navHeader.style.display = "none";
        navList.classList.remove("style-menu-cell");
        btnOpen.style.display = "block";
        btnClose.style.display = "none";
        body.style.overflow = "visible"
    }
}
/*----- Radio auto -----*/

document.getElementById("radio1").checked = true
    let cont = 1
setInterval(() => {
    nextImg()
}, 5000)

function nextImg() {
    cont++

    if(cont > 4) {
        cont = 1
    }
    document.getElementById("radio" + cont).checked = true
}



let width = window.screen.width;
if (width > 1024) {
    setInterval(function () {
    if (window.scrollY <= 100) {
        document.getElementById("menu").style = "background-color: transparent";
    }
    else {
        document.getElementById("menu").style = "background-color: rgb(31, 40, 65)";
    }
}, 10)
}

/*menu*/
var openm = false;
function openmenu() {
    if (openm == false) {
        document.getElementById("menu").style.height = "1900px";
        openm = true;
        document.getElementById("menubutton").style.transform = "rotate(-90deg)";
    }
    else if (openm == true) {
        document.getElementById("menu").style.height = "180px";
        openm = false;
        document.getElementById("menubutton").style.transform = "rotate(90deg)";
    }
}

setInterval(function() {
    let width = window.screen.width;
    if (width < 1024 && openm == true) {
        document.getElementById("menu").style.height = "1900px";
        document.getElementById("menu").style.backgroundColor = "rgb(31, 40, 65)";
    }
    else if (width > 1024) {
        document.getElementById("menu").style.height = "85px";
    }

}, 10);

document.getElementById("contactlink").onmouseover = function() {
    document.getElementById("contactlink").style.cursor = "pointer";
}
document.getElementById("contactlink").onclick = function() {
    window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' })
    if (width < 1024 && openm == true) {
        openm = false;
        document.getElementById("menubutton").style.transform = "rotate(90deg)";
        document.getElementById("menu").style.height = "180px";
    }
}   
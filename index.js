setInterval(function () {
    if (window.scrollY <= 500) {
        document.getElementById("titlebox").style = "height: 200px"; 
    }
    else {
        document.getElementById("titlebox").style = "height: 2500px"; 
    }
}, 10)



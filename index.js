setInterval(function () {
    if (window.scrollY <= 100) {
        document.getElementById("titlebox").style = "height: 200px"; 
    }
    else {
        document.getElementById("titlebox").style = "height: 1000px"; 
    }
}, 10)
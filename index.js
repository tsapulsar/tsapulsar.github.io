setInterval(function () {
    if (window.scrollY <= 500) {
        document.getElementById("titlebox").style = "height: 200px"; 
    }
    if (window.scrollY>= 500 && window.scrollY <=1750) {
        document.getElementById("titlebox").style = "height: 275vh"; 
    }
    if (window.scrollY>= 1750 && window.scrollY <=3000) {
        document.getElementById("titlebox").style = "height: 620vh"; 
    }

}, 10)



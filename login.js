if (localStorage.getItem("loggedIn") == "true") {
    window.location.href = "./index.html"; ;
  }

function pagetrans() {
    document.getElementById("paget").style = "left: 0; width:100%";
    document.getElementById("pagettext").style = "opacity: 1";
    document.getElementById("loadcircle").style = "opacity: 1;";
  }
  

function submitting() {
    if (document.getElementById("uname").value == "john@site.com" && document.getElementById("pass").value == "1234") {
        localStorage.setItem("loggedIn", "true");
        console.log(localStorage.getItem("loggedIn"));
        pagetrans();
        setTimeout(function(){ window.location.href = String(localStorage.getItem("page"));; }, animateSpeed);
    }
    else {
        document.getElementById("error").style = "opacity: 1";
    }
}

document.addEventListener("keyup", function(event) {
    if (event.keyCode === 13) {
        if (document.getElementById("uname").value == "john@site.com" && document.getElementById("pass").value == "1234") {
            localStorage.setItem("loggedIn", "true");
            console.log(localStorage.getItem("loggedIn"));
            pagetrans();
            setTimeout(function(){ window.location.href = String(localStorage.getItem("page"));; }, animateSpeed);
        }
        else {
            document.getElementById("error").style = "opacity: 1";
        }
    }
});
    






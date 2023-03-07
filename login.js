

function pagetrans() {
    document.getElementById("paget").style = "left: 0; width:100%";
    document.getElementById("pagettext").style = "opacity: 1";
    document.getElementById("loadcircle").style = "opacity: 1;";
  }
  

function submitting() {
    if (document.getElementById("uname").value == "John" && document.getElementById("pass").value == "1234") {
        localStorage.setItem("loggedIn", "true");
        console.log(localStorage.getItem("loggedIn"));
        pagetrans();
        setTimeout(function(){ window.location.href = String(localStorage.getItem("page"));; }, animateSpeed);
    }
    else {
        document.getElementById("error").style = "opacity: 1";
    }
}
    






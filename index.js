document.getElementById("secbutton").onmousedown = function(){
  document.getElementById("paget").style = "left: 0; width:100%";
  document.getElementById("pagettext").style = "opacity: 1";
  setTimeout(function(){ window.location.href = "./about.html"; }, animateSpeed);
};
document.getElementById("secbutton1").onmousedown = function(){
  document.getElementById("paget").style = "left: 0; width:100%";
  document.getElementById("pagettext").style = "opacity: 1";
  setTimeout(function(){ window.location.href = "./safety.html"; }, animateSpeed);
};
document.getElementById("secbutton2").onmousedown = function(){
  document.getElementById("paget").style = "left: 0; width:100%";
  document.getElementById("pagettext").style = "opacity: 1";
  setTimeout(function(){ window.location.href = "./visit.html"; }, animateSpeed);
};
document.getElementById("toption").onmousedown = function(){
  document.getElementById("paget").style = "left: 0; width:100%";
  document.getElementById("pagettext").style = "opacity: 1";
  setTimeout(function(){ window.location.href = "./travel.html"; }, animateSpeed);
};
document.getElementById("toption1").onmousedown = function(){
  document.getElementById("paget").style = "left: 0; width:100%";
  document.getElementById("pagettext").style = "opacity: 1";
  setTimeout(function(){ window.location.href = "./travel.html"; }, animateSpeed);
};
document.getElementById("vehiclebutton").onmousedown = function(){
  document.getElementById("paget").style = "left: 0; width:100%";
  document.getElementById("pagettext").style = "opacity: 1";
  setTimeout(function(){ window.location.href = "./vehicles.html"; }, animateSpeed);
};

if (localStorage.getItem("subscribed") == "true") {
  subscribed();
}
else {

}


$(function() {
    $('#contentbutton1').hover(function() {
      $('#sec3').css('background', 'linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 89, 167, 0.8)), url(./images/earth.jpg)');
    }, function() {
      // on mouseout, reset the background colour
      $('#sec3').css('background', 'linear-gradient(rgba(0, 43, 161, 0.2), var(--main)), url(./mages/earth.jpg)');
    });
  });

function scrolltop(){
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

function subscribed() {
  document.getElementById("subscribe").style = "color: transparent";
  setTimeout(function(){ 
    document.getElementById("subscribe").style = "color: var(--third)";
    document.getElementById("subscribe").innerHTML = "You're Subscribed!";
    document.getElementById("email").style = "display: none";
    document.getElementById("submitemail").style = "display: none";
    document.getElementById("error").style = "opacity: 0";
    document.getElementById("unsubscribe").style = "display: block";
  }, animateSpeed);
}

function unsubscribed() {
  document.getElementById("subscribe").style = "color: transparent";
  setTimeout(function(){ 
    document.getElementById("subscribe").style = "color: var(--third)";
    document.getElementById("subscribe").innerHTML = "Subscribe to our newsletter today for our latest updates and news!";
    document.getElementById("email").style = "display: block";
    document.getElementById("submitemail").style = "display: block";
    document.getElementById("error").style = "opacity: 0";
    document.getElementById("unsubscribe").style = "display: none";
  }, animateSpeed);
}

document.getElementById("submitemail").onmousedown = function(){
    if (document.getElementById("email").value.length > 3 && document.getElementById("email").value.includes("@")){  
      localStorage.setItem("subscribed", "true");
      subscribed();
        
    }
    else {
      document.getElementById("error").style = "opacity: 1";
    }
};

document.getElementById("unsubscribe").onmousedown = function() {
  localStorage.removeItem("subscribed");
  unsubscribed();
}

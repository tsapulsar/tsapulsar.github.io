function pagetrans() {
    document.getElementById("paget").style = "left: 0; width:100%";
    document.getElementById("pagettext").style = "opacity: 1";
    document.getElementById("loadcircle").style = "opacity: 1;";
  }
  
document.getElementById("ahead1").onmousedown = function(){
    pagetrans();
    setTimeout(function(){ window.location.href = "./newsletter1.html"; }, animateSpeed);
  };
  document.getElementById("ahead3").onmousedown = function(){
    pagetrans();
    setTimeout(function(){ window.location.href = "./newsletter3.html"; }, animateSpeed);
  };
  
  document.getElementById("aimg1").onmousedown = function(){
    pagetrans();
    setTimeout(function(){ window.location.href = "./newsletter1.html"; }, animateSpeed);
  };
  document.getElementById("aimg3").onmousedown = function(){
    pagetrans();
    setTimeout(function(){ window.location.href = "./newsletter3.html"; }, animateSpeed);
  };

function pagetrans3() {
    document.getElementById("paget").style = "left: 0; width:100%";
    document.getElementById("pagettext").style = "opacity: 1";
    document.getElementById("loadcircle").style = "opacity: 1;";
  }
  
document.getElementById("ahead1").onmousedown = function(){
  pagetrans3();
    setTimeout(function(){ window.location.href = "./newsletter1.html"; }, animateSpeed);
  };
  document.getElementById("ahead2").onmousedown = function(){
    pagetrans3();
    setTimeout(function(){ window.location.href = "./newsletter2.html"; }, animateSpeed);
  };
  
  document.getElementById("aimg1").onmousedown = function(){
    pagetrans3();
    setTimeout(function(){ window.location.href = "./newsletter1.html"; }, animateSpeed);
  };
  document.getElementById("aimg2").onmousedown = function(){
    pagetrans3();
    setTimeout(function(){ window.location.href = "./newsletter2.html"; }, animateSpeed);
  };

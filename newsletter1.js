function pagetrans1() {
    document.getElementById("paget").style = "left: 0; width:100%";
    document.getElementById("pagettext").style = "opacity: 1";
    document.getElementById("loadcircle").style = "opacity: 1;";
  }
  
  document.getElementById("ahead2").onmousedown = function(){
    pagetrans1();
    setTimeout(function(){ window.location.href = "./newsletter2.html"; }, animateSpeed);
  };
  document.getElementById("ahead3").onmousedown = function(){
    pagetrans1();
    setTimeout(function(){ window.location.href = "./newsletter3.html"; }, animateSpeed);
  };
  
  document.getElementById("aimg2").onmousedown = function(){
    pagetrans1();
    setTimeout(function(){ window.location.href = "./newsletter2.html"; }, animateSpeed);
  };
  document.getElementById("aimg3").onmousedown = function(){
    pagetrans1();
    setTimeout(function(){ window.location.href = "./newsletter3.html"; }, animateSpeed);
  };

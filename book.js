if (localStorage.getItem("loggedIn") == null) {
  localStorage.setItem("page", "." + "/" + window.location.pathname.split("/").pop());
  window.location.href = "./login.html"; ;
}

function pagetrans() {
    document.getElementById("paget").style = "left: 0; width:100%";
    document.getElementById("pagettext").style = "opacity: 1";
    document.getElementById("loadcircle").style = "opacity: 1;";
}
localStorage.setItem("numtickets", 0);

document.getElementById("m1").onmousedown = function() {
  scrollTo({top: document.getElementById("experiencehead").offsetTop - 150, behavior: "smooth"});
};
document.getElementById("m2").onmousedown = function() {
  scrollTo({top: document.getElementById("datehead").offsetTop - 150, behavior: "smooth"});
};
document.getElementById("m3").onmousedown = function() {
  scrollTo({top: document.getElementById("addresssec").offsetTop - 150, behavior: "smooth"});
};
document.getElementById("m4").onmousedown = function() {
  scrollTo({top: document.getElementById("datehead1").offsetTop - 150, behavior: "smooth"});
};


var rewardsfilled = false;
var rewards = 0;
document.getElementById("button1").onmousedown = function(){
  document.getElementById("button1").style = "filter: grayscale(0%)";
  document.getElementById("button2").style = "filter: grayscale(100%)";
  document.getElementById("followup").style = "opacity: 0; height: 0px; margin-top: 0px;";
  localStorage.setItem("rewardMember", "Yes");
  rewardsfilled = true;
  rewards = 0;
};
document.getElementById("button2").onmousedown = function(){
  document.getElementById("button2").style = "filter: grayscale(0%)";
  document.getElementById("button1").style = "filter: grayscale(100%)";
  document.getElementById("followup").style = "opacity: 1; height: 200px; margin-top: 50px;";
  rewards = 0;
  rewardsfilled = true;
};
document.getElementById("button3").onmousedown = function() {
  document.getElementById("button3").style = "filter: grayscale(0%)";
  document.getElementById("button4").style = "filter: grayscale(100%)";
  localStorage.setItem("rewardMember", "Yes");
  rewards = 299;
  rewardsfilled = true;
};
document.getElementById("button4").onmousedown = function() {
  document.getElementById("button4").style = "filter: grayscale(0%)";
  document.getElementById("button3").style = "filter: grayscale(100%)";
  localStorage.setItem("rewardMember", "No");
  rewards = 0;
  rewardsfilled = true;
};


var roomfilled = false;
document.getElementById("roomselect1").onmousedown = function() {
  document.getElementById("roomselect2").innerHTML = "Select";
  document.getElementById("bed2").style = "filter: grayscale(100%)";
  document.getElementById("bed1").style = "filter: grayscale(0%)";
  document.getElementById("roomselect1").innerHTML = "Selected";
  localStorage.setItem("roomType", "King Bed Room");
  roomfilled = true;
};
document.getElementById("roomselect2").onmousedown = function() {
  document.getElementById("roomselect1").innerHTML = "Select";
  document.getElementById("bed1").style = "filter: grayscale(100%)";
  document.getElementById("bed2").style = "filter: grayscale(0%)";
  document.getElementById("roomselect2").innerHTML = "Selected";
  localStorage.setItem("roomType", "Twin Sized Bed Room");
  roomfilled = true;
};

  setInterval(() => {
    localStorage.setItem("numtickets", document.getElementById("numtickets").value);
  }, 50);

  var ticketCost = 0;
  var ticketselect = false;
   if (localStorage.getItem("bookselected") == "one") {
    document.getElementById("t2").innerHTML = "Select";
    document.getElementById("t3").innerHTML = "Select";
    document.getElementById("choice2").style = "filter: grayscale(100%)";
    document.getElementById("choice3").style = "filter: grayscale(100%)";
    document.getElementById("choice1").style = "filter: grayscale(0%)";
    document.getElementById("t1").innerHTML = "Selected";
    ticketCost = 5499;
    ticketselect = true;
    localStorage.setItem("ticket", "Dramangode | Vanichor");
   }
  document.getElementById("t1").onmousedown = function() {
    document.getElementById("t2").innerHTML = "Select";
    document.getElementById("t3").innerHTML = "Select";
    document.getElementById("choice2").style = "filter: grayscale(100%)";
    document.getElementById("choice3").style = "filter: grayscale(100%)";
    document.getElementById("choice1").style = "filter: grayscale(0%)";
    document.getElementById("t1").innerHTML = "Selected";
    ticketCost = 5499;
    ticketselect = true;
    localStorage.setItem("ticket", "Dramangode | Vanichor");
  };

    if (localStorage.getItem("bookselected") == "two") {
    document.getElementById("t1").innerHTML = "Select";
    document.getElementById("t3").innerHTML = "Select";
    document.getElementById("choice1").style = "filter: grayscale(100%)";
    document.getElementById("choice3").style = "filter: grayscale(100%)";
    document.getElementById("choice2").style = "filter: grayscale(0%)";
    document.getElementById("t2").innerHTML = "Selected";
    ticketCost = 6599;
    ticketselect = true;
    localStorage.setItem("ticket", "Terran-57 | Agenon-901");
   }
  document.getElementById("t2").onmousedown = function() {
    document.getElementById("t1").innerHTML = "Select";
    document.getElementById("t3").innerHTML = "Select";
    document.getElementById("choice1").style = "filter: grayscale(100%)";
    document.getElementById("choice3").style = "filter: grayscale(100%)";
    document.getElementById("choice2").style = "filter: grayscale(0%)";
    document.getElementById("t2").innerHTML = "Selected";
    ticketCost = 6599;
    ticketselect = true;
    localStorage.setItem("ticket", "Terran-57 | Agenon-901");
  };

  if (localStorage.getItem("bookselected") == "three") {
    document.getElementById("t2").innerHTML = "Select";
    document.getElementById("t1").innerHTML = "Select";
    document.getElementById("choice2").style = "filter: grayscale(100%)";
    document.getElementById("choice1").style = "filter: grayscale(100%)";
    document.getElementById("choice3").style = "filter: grayscale(0%)";
    document.getElementById("t3").innerHTML = "Selected";
    ticketCost = 7699;
    ticketselect = true;
    localStorage.setItem("ticket", "Bizzario | Solar System");
   }
  document.getElementById("t3").onmousedown = function() {
    document.getElementById("t2").innerHTML = "Select";
    document.getElementById("t1").innerHTML = "Select";
    document.getElementById("choice2").style = "filter: grayscale(100%)";
    document.getElementById("choice1").style = "filter: grayscale(100%)";
    document.getElementById("choice3").style = "filter: grayscale(0%)";
    document.getElementById("t3").innerHTML = "Selected";
    ticketCost = 7699;
    ticketselect = true;
    localStorage.setItem("ticket", "Bizzario | Solar System");
  };


  setInterval(() => {
    localStorage.setItem("total", (ticketCost*localStorage.getItem("numtickets"))+rewards);
    document.getElementById("numtotal").innerHTML = "$" + ((ticketCost*localStorage.getItem("numtickets"))+rewards);
  }, 10);


document.getElementById("bookflight").onmousedown = function(){
  if (rewardsfilled == true && roomfilled == true && ticketselect == true && document.getElementById("street").value.length > 0 && document.getElementById("city").value.length > 0 &&document.getElementById("state").value.length > 0 && document.getElementById("first").value.length > 0 &&document.getElementById("last").value.length > 0 &&document.getElementById("cardnum").value.length > 0 &&document.getElementById("cvv").value.length > 0 &&document.getElementById("exdate").value.length > 0 &&document.getElementById("numtickets").value.length > 0) {
    localStorage.setItem("startDate", document.getElementById("start").value);
    localStorage.setItem("street", document.getElementById("street").value);
    localStorage.setItem("zip", document.getElementById("zip").value);
    localStorage.setItem("city", document.getElementById("city").value);
    localStorage.setItem("state", document.getElementById("state").value);
    localStorage.setItem("first", document.getElementById("first").value);
    localStorage.setItem("last", document.getElementById("last").value);
    localStorage.setItem("cardnum", document.getElementById("cardnum").value);
    localStorage.setItem("cvv", document.getElementById("cvv").value);
    localStorage.setItem("exdate", document.getElementById("exdate").value);
    localStorage.setItem("numtickets", document.getElementById("numtickets").value);
    pagetrans();
    setTimeout(function(){ window.location.href = "./bookingConfirm.html"; }, animateSpeed);
  }
  else {
    document.getElementById("error").style.opacity = "1";
  }


};























/*
            var date = new Date('03/29/2023 11:59 PM');
        
            var _second = 1000;
            var _minute = _second * 60;
            var _hour = _minute * 60;
            var _day = _hour * 24;
            var timer;
        
            function showRemaining() {
                var now = new Date();
                var distance = date - now;
                var days = Math.floor(distance / _day);
                var hours = Math.floor((distance % _day) / _hour);
                var minutes = Math.floor((distance % _hour) / _minute);
                var seconds = Math.floor((distance % _minute) / _second);
        
                document.getElementById('days').innerHTML = days;
                document.getElementById('hours').innerHTML = hours;
                document.getElementById('minutes').innerHTML = minutes;
                document.getElementById('seconds').innerHTML = seconds;
            }
            timer = setInterval(showRemaining, 1000);
*/



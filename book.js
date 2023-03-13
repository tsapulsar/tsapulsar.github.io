function pagetrans() {
    document.getElementById("paget").style = "left: 0; width:100%";
    document.getElementById("pagettext").style = "opacity: 1";
    document.getElementById("loadcircle").style = "opacity: 1;";
  }          
  var total = 0;

  document.getElementById("button1").onmousedown = function(){
    document.getElementById("button1").style = "filter: grayscale(0%)";
    document.getElementById("button2").style = "filter: grayscale(100%)";
    document.getElementById("followup").style = "opacity: 0; height: 0px; margin-top: 0px;";
    localStorage.setItem("rewardMember", "Yes");
  };
  document.getElementById("button2").onmousedown = function(){
    document.getElementById("button2").style = "filter: grayscale(0%)";
    document.getElementById("button1").style = "filter: grayscale(100%)";
    document.getElementById("followup").style = "opacity: 1; height: 200px; margin-top: 50px;";
  };
  document.getElementById("button3").onmousedown = function() {
    document.getElementById("button3").style = "filter: grayscale(0%)";
    document.getElementById("button4").style = "filter: grayscale(100%)";
    localStorage.setItem("rewardMember", "Yes");
  };
  document.getElementById("button4").onmousedown = function() {
    document.getElementById("button4").style = "filter: grayscale(0%)";
    document.getElementById("button3").style = "filter: grayscale(100%)";
    localStorage.setItem("rewardMember", "No");
  };

  document.getElementById("roomselect1").onmousedown = function() {
    document.getElementById("roomselect2").innerHTML = "Select";
    document.getElementById("bed2").style = "filter: grayscale(100%)";
    document.getElementById("bed1").style = "filter: grayscale(0%)";
    document.getElementById("roomselect1").innerHTML = "Selected";
    localStorage.setItem("roomType", "King Bed Room");
  };
  document.getElementById("roomselect2").onmousedown = function() {
    document.getElementById("roomselect1").innerHTML = "Select";
    document.getElementById("bed1").style = "filter: grayscale(100%)";
    document.getElementById("bed2").style = "filter: grayscale(0%)";
    document.getElementById("roomselect2").innerHTML = "Selected";
    localStorage.setItem("roomType", "Twin Sized Bed Room");
  };

  setInterval(() => {
    localStorage.setItem("startDate", document.getElementById("start").value);
    localStorage.setItem("street", document.getElementById("street").value);
    localStorage.setItem("city", document.getElementById("city").value);
    localStorage.setItem("state", document.getElementById("state").value);
    localStorage.setItem("first", document.getElementById("first").value);
    localStorage.setItem("last", document.getElementById("last").value);
    localStorage.setItem("cardnum", document.getElementById("cardnum").value);
    localStorage.setItem("cvv", document.getElementById("cvv").value);
    localStorage.setItem("exdate", document.getElementById("exdate").value);
    localStorage.setItem("numtickets", document.getElementById("numtickets").value);
  }, 50);

  document.getElementById("t1").onmousedown = function() {
    document.getElementById("t2").innerHTML = "Select";
    document.getElementById("t3").innerHTML = "Select";
    document.getElementById("choice2").style = "filter: grayscale(100%)";
    document.getElementById("choice3").style = "filter: grayscale(100%)";
    document.getElementById("choice1").style = "filter: grayscale(0%)";
    document.getElementById("t1").innerHTML = "Selected";
    localStorage.setItem("ticket", "Trip to Dramangode and Vanichor");
  };
  document.getElementById("t2").onmousedown = function() {
    document.getElementById("t1").innerHTML = "Select";
    document.getElementById("t3").innerHTML = "Select";
    document.getElementById("choice1").style = "filter: grayscale(100%)";
    document.getElementById("choice3").style = "filter: grayscale(100%)";
    document.getElementById("choice2").style = "filter: grayscale(0%)";
    document.getElementById("t2").innerHTML = "Selected";
    localStorage.setItem("ticket", "Trip to Terran-57 and Agenon-901");
  };
  document.getElementById("t3").onmousedown = function() {
    document.getElementById("t2").innerHTML = "Select";
    document.getElementById("t1").innerHTML = "Select";
    document.getElementById("choice2").style = "filter: grayscale(100%)";
    document.getElementById("choice1").style = "filter: grayscale(100%)";
    document.getElementById("choice3").style = "filter: grayscale(0%)";
    document.getElementById("t3").innerHTML = "Selected";
    localStorage.setItem("ticket", "Trip to Bizzario and a tour of our Solar System");
  };

  if (localStorage.getItem("rewardsMember") == "Yes") {
      total += 200;
  }
  if (localStorage.getItem("ticket") == "Trip to Dramangode and Vanichor") {
      total += 5499;
  }
  if (localStorage.getItem("ticket") == "Trip to Dramangode and Vanichor") {
    total += 6599;
  }
  if (localStorage.getItem("ticket") == "Trip to Dramangode and Vanichor") {
    total += 7699;
  }

  setInterval(() => {
    document.getElementById("numtotal").innerHTML = "$" + total;
  }, 10);
























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



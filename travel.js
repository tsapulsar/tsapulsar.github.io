function pagetrans() {
    document.getElementById("paget").style = "left: 0; width:100%";
    document.getElementById("pagettext").style = "opacity: 1";
    document.getElementById("loadcircle").style = "opacity: 1;";
}

localStorage.setItem("bookselected", "none");

document.getElementById("book").onmousedown = function(){
    localStorage.setItem("bookselected", "one");
    pagetrans();
    setTimeout(function(){ window.location.href = "./book.html"; }, animateSpeed);
};
document.getElementById("book1").onmousedown = function(){
    localStorage.setItem("bookselected", "two");
    pagetrans();
    setTimeout(function(){ window.location.href = "./book.html"; }, animateSpeed);
};
document.getElementById("book2").onmousedown = function(){
    localStorage.setItem("bookselected", "three");
    pagetrans();
    setTimeout(function(){ window.location.href = "./book.html"; }, animateSpeed);
};


var c1 = 0;
var c2 = 0;
var c3 = 0;
var c4 = 0;
var c5 = 0;

document.getElementById("qa1").style = "height: 0px; padding-top: 0; padding-bottom: 0; padding-left: 50px; padding-right: 50px; border: 0;";
document.getElementById("q1").style = "height: 0; display: none;";

document.getElementById("qa2").style = "height: 0px; padding-top: 0; padding-bottom: 0; padding-left: 50px; padding-right: 50px; border: 0;";
document.getElementById("q2").style = "height: 0; display: none;";

document.getElementById("qa3").style = "height: 0px; padding-top: 0; padding-bottom: 0; padding-left: 50px; padding-right: 50px; border: 0;";
document.getElementById("q3").style = "height: 0; display: none;";

document.getElementById("qa4").style = "height: 0px; padding-top: 0; padding-bottom: 0; padding-left: 50px; padding-right: 50px; border: 0;";
document.getElementById("q4").style = "height: 0; display: none;";

document.getElementById("qa5").style = "height: 0px; padding-top: 0; padding-bottom: 0; padding-left: 50px; padding-right: 50px; border: 0;";
document.getElementById("q5").style = "height: 0; display: none;";

document.getElementById("tripheader").onmousedown = function(){
        if (c1 % 2 == 0) {
            document.getElementById("qa1").style = "height: 600px;padding-top: 50px;padding-left: 50px;padding-right: 50px;padding-bottom: 50px;border-bottom: 6px solid var(--third);border-right: 6px solid var(--third);";
            document.getElementById("q1").style = "height: 600px";
            if (window.innerWidth < 1024) {
                document.getElementById("q1").style = "height: 1850px; width: 100%; padding-top: 50px;padding-left: 50px;padding-right: 50px;padding-bottom: 50px;border-bottom: 6px solid var(--third);border-right: 6px solid var(--third);";
                document.getElementById("qa1").style = "height: 1850px";
            }
            c1++;
        } 
        else {
            document.getElementById("qa1").style = "height: 0px; padding-top: 0; padding-bottom: 0; border: 0;";
            document.getElementById("q1").style = "height: 0; display: none;";
            c1++;
        }
};

document.getElementById("roomheader").onmousedown = function(){
    if (c2 % 2 == 0) {
        document.getElementById("qa2").style = "height: 550px;padding-top: 50px;padding-left: 50px;padding-right: 50px;padding-bottom: 50px;border-bottom: 6px solid var(--third);border-right: 6px solid var(--third);";
        document.getElementById("q2").style = "height: 550px";
        if (window.innerWidth < 1024) {
            document.getElementById("q2").style = "height: 2000px; width: 100%; padding-top: 50px;padding-left: 50px;padding-right: 50px;padding-bottom: 50px;border-bottom: 6px solid var(--third);border-right: 6px solid var(--third);";
            document.getElementById("qa2").style = "height: 2000px";
        }
        c2++;
    } 
    else {
        document.getElementById("qa2").style = "height: 0px; padding-top: 0; padding-bottom: 0; border: 0;";
        document.getElementById("q2").style = "height: 0; display: none;";
        c2++;
    }
};

document.getElementById("activityheader").onmousedown = function(){
    if (c3 % 2 == 0) {
        document.getElementById("qa3").style = "height: 650px;padding-top: 50px;padding-left: 50px;padding-right: 50px;padding-bottom: 50px;border-bottom: 6px solid var(--third);border-right: 6px solid var(--third);";
        document.getElementById("q3").style = "height: 650px";
        if (window.innerWidth < 1024) {
            document.getElementById("q3").style = "height: 4200px; width: 100%; padding-top: 50px;padding-left: 50px;padding-right: 50px;padding-bottom: 50px;border-bottom: 6px solid var(--third);border-right: 6px solid var(--third);";
            document.getElementById("qa3").style = "height: 4200px";
        }
        c3++;
    } 
    else {
        document.getElementById("qa3").style = "height: 0px; padding-top: 0; padding-bottom: 0; border: 0;";
        document.getElementById("q3").style = "height: 0; display: none;";
        c3++;
    }
};

document.getElementById("planetsheader").onmousedown = function(){
    if (c4 % 2 == 0) {
        document.getElementById("qa4").style = "height: 1150px;padding-top: 50px;padding-left: 50px;padding-right: 50px;padding-bottom: 50px;border-bottom: 6px solid var(--third);border-right: 6px solid var(--third);";
        document.getElementById("q4").style = "height: 1150px";
        if (window.innerWidth < 1024) {
            document.getElementById("q4").style = "height: 4250px; width: 100%; padding-top: 50px;padding-left: 50px;padding-right: 50px;padding-bottom: 50px;border-bottom: 6px solid var(--third);border-right: 6px solid var(--third);";
            document.getElementById("qa4").style = "height: 4250px";
        }
        c4++;
    } 
    else {
        document.getElementById("qa4").style = "height: 0px; padding-top: 0; padding-bottom: 0; border: 0;";
        document.getElementById("q4").style = "height: 0; display: none;";
        c4++;
    }
};

document.getElementById("foodheader").onmousedown = function(){
    if (c5 % 2 == 0) {
        document.getElementById("qa5").style = "height: 750px;padding-top: 50px;padding-left: 50px;padding-right: 50px;padding-bottom: 50px;border-bottom: 6px solid var(--third);border-right: 6px solid var(--third);";
        document.getElementById("q5").style = "height: 750px";
        if (window.innerWidth < 1024) {
            document.getElementById("q5").style = "height: 2800px; width: 100%; padding-top: 50px;padding-left: 50px;padding-right: 50px;padding-bottom: 50px;border-bottom: 6px solid var(--third);border-right: 6px solid var(--third);";
            document.getElementById("qa5").style = "height: 2800px";
        }
        c5++;
    } 
    else {
        document.getElementById("qa5").style = "height: 0px; padding-top: 0; padding-bottom: 0; border: 0;";
        document.getElementById("q5").style = "height: 0; display: none;";
        c5++;
    }
};
var date = new Date('06/22/2024 12:00 AM');
        
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
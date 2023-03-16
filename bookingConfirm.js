function pagetrans() {
    document.getElementById("paget").style = "left: 0; width:100%";
    document.getElementById("pagettext").style = "opacity: 1";
    document.getElementById("loadcircle").style = "opacity: 1;";
}

document.getElementById("option").onmousedown = function(){
    pagetrans();
    setTimeout(function(){ window.location.href = "./index.html"; }, animateSpeed);
};
document.getElementById("option1").onmousedown = function(){
    pagetrans();
    setTimeout(function(){ window.location.href = "./visit.html"; }, animateSpeed);
};


function getRandomInt(max, low) {
    return Math.floor(Math.random() * max) + low;
}
document.getElementById("totalt").innerHTML = "$" + localStorage.getItem("total");
document.getElementById("datet").innerHTML = localStorage.getItem("startDate");
document.getElementById("roomt").innerHTML = localStorage.getItem("roomType");
document.getElementById("dest").innerHTML = localStorage.getItem("ticket");
document.getElementById("numticketst").innerHTML = localStorage.getItem("numtickets");
document.getElementById("rewardst").innerHTML = localStorage.getItem("rewardMember");
document.getElementById("confirmation").innerHTML = "Your booking has been confirmed. <br>Thanks for choosing Pulsar, " + localStorage.getItem("first") + "!";
document.getElementById("ordert").innerHTML = getRandomInt(9000000, 1000000);


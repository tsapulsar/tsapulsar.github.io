
(function () {
    var div = document.createElement('div'),
    ref = document.getElementsByTagName('base')[0] || 
    document.getElementsByTagName('script')[0];
    div.innerHTML = '&shy;<style> iframe { visibility: hidden; } </style>';
    ref.parentNode.insertBefore(div, ref);
    window.onload = function() {

        window.scrollTo(0, 0);
        div.parentNode.removeChild(div);
        var openm = false;

        let width = window.screen.width;
        
        document.getElementById("paget").style = "width:0";
        document.getElementById("pagettext").style = "opacity: 0;";
        document.getElementById("loadcircle").style = "opacity: 0;";

        if (width < 1024) {
            document.getElementById("followmouse").style = "display: none";
        }
        const blob = document.getElementById("followmouse");

        window.onpointermove = event => { 
            const { clientX, clientY } = event;
            blob.animate({
                left: `${clientX + 0}px`,
                top: `${clientY + 0}px`
            }, { duration: 400, fill: "forwards" });
        }
        setInterval(() => {
            if (localStorage.getItem("loggedIn") == "true") {
                document.getElementById("rightbutton2").innerHTML = "Log Out";
            }
        }, 10);
        
        

        let headerMain = `
        <nav>
            <div id="menu">
                <div id="menucontent">
                    <p><p id="username">PULSAR</p></p>
                    <button id="menubutton" onclick="openmenu()">></button>
                </div>
                <div id="header-main">
                    <p class="menu-link" id="homeb">Home</p>
                    <p class="menu-link" id="aboutb">About</p>
                    <p class="menu-link" id="travelb">Travel</p>
                    <p class="menu-link" id="safetyb">Safety</p>
                    <p class="menu-link" id="vehiclesb">Vehicles</p>
                    <p class="menu-link" id="visitb">Visit</p>
                    <p class="menu-link" id="refb">References</p>
                    <p class="menu-link" id="contactlink" onclick="contactScroll()">Contact</p>
                    
                    <div id="menu-right">
                        <a id="rightbutton1">Book</a>
                        <a id="rightbutton2">Login</a>
                    </div>
                </div>
                <script async src="universal.js"></script> 
            </div>
        </nav>
        `;

        document.getElementById("menu-main").innerHTML = headerMain;

        function pagetrans() {
            document.getElementById("paget").style = "left: 0; width:100%";
            document.getElementById("pagettext").style = "opacity: 1";
            document.getElementById("loadcircle").style = "opacity: 1;";
        }

        document.getElementById("username").onmousedown = function(){
            pagetrans();
            setTimeout(function(){ window.location.href = "./index.html"; }, animateSpeed);
        };
        document.getElementById("homeb").onmousedown = function(){
            pagetrans();
            setTimeout(function(){ window.location.href = "./index.html"; }, animateSpeed);
        };
        document.getElementById("aboutb").onmousedown = function(){
            pagetrans();
            setTimeout(function(){ window.location.href = "./about.html"; }, animateSpeed);
        };
        document.getElementById("travelb").onmousedown = function(){
            pagetrans();
            setTimeout(function(){ window.location.href = "./travel.html"; }, animateSpeed);
        };
        document.getElementById("safetyb").onmousedown = function(){
            pagetrans();
            setTimeout(function(){ window.location.href = "./safety.html"; }, animateSpeed);
        };
        document.getElementById("vehiclesb").onmousedown = function(){
            pagetrans();
            setTimeout(function(){ window.location.href = "./vehicles.html"; }, animateSpeed);
        };
        document.getElementById("visitb").onmousedown = function(){
            pagetrans();
            setTimeout(function(){ window.location.href = "./visit.html"; }, animateSpeed);
        };
        document.getElementById("refb").onmousedown = function(){
            pagetrans();
            setTimeout(function(){ window.location.href = "./references.html"; }, animateSpeed);
        };
        document.getElementById("rightbutton1").onmousedown = function(){
            pagetrans();
            setTimeout(function(){ window.location.href = "./book.html"; }, animateSpeed);
        };
        document.getElementById("rightbutton2").onmousedown = function(){
            pagetrans();
            localStorage.removeItem("loggedIn");
            localStorage.setItem("page", "." + "/" + window.location.pathname.split("/").pop());
            setTimeout(function(){ window.location.href = "./login.html"; }, animateSpeed);
        };
        /*index buttons*/
        
        /*ADD NEWSLETTER LINKS*/

        let footerMain = `
        <nav>
        <div class="contactdetails">
            <div class="contactdetail">
                <p id="contactheader">PULSAR</p>
                <image src="./images/facebook.png" id="social"></image>
                <image src="./images/twitter.png" style="margin-left: 10px;" id="social"></image>
                <image src="./images/youtube.png" style="margin-left: 10px;" id="social"></image>
                <p id="copyright">Copyright © 2140 - 2148 PULSAR</p>

            </div>
            <div class="contactdetail">
                <p class="contacttitle">Headquarters Location & <br>Mailing Address</p>
                <p class="contactinfo">5783 Newport Drive<br>Charlotte NC, 28328</p>
            </div>
            <div class="contactdetail">
                <p class="contacttitle">Questions?</p>
                <p class="contactinfo"><b>Email:</b> contact@tsapulsar.com<br><b>Phone:</b> 745-473-1365</p>
            </div>
        </div>

        </nav>
    `;
    document.getElementById("footer-main").innerHTML = footerMain;


  }
  
})();


function wait(ms){
    var start = new Date().getTime();
    var end = start;
    while(end < start + ms) {
      end = new Date().getTime();
   }
 }

var animateSpeed = 300;
var width = window.screen.width;
/*menu*/
var openm = false;
function openmenu() {
    if (openm == false) {
        document.getElementById("menu").style.height = "1900px";
        openm = true;
        document.getElementById("menubutton").style.transform = "rotate(-90deg)";
    }
    else if (openm == true) {
        document.getElementById("menu").style.height = "180px";
        openm = false;
        document.getElementById("menubutton").style.transform = "rotate(90deg)";
    }
}
if (width > 1024) {
    setInterval(function () {
    if (window.scrollY <= 100) {
        document.getElementById("menu").style = "background-color: transparent";
    }
    else {
        document.getElementById("menu").style = "background-color: rgb(31, 40, 65)";
    }
}, 10)
}
setInterval(function() {
    let width = window.screen.width;
    if (width < 1024 && openm == true) {
        document.getElementById("menu").style.height = "1900px";
        document.getElementById("menu").style.backgroundColor = "rgb(31, 40, 65)";
    }
    else if (width > 1024) {
        document.getElementById("menu").style.height = "85px";
    }

}, 10);

function contactScroll() {
    window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' })
    if (width < 1024) {
        document.getElementById("menu").style.height = "180px";
        openm = false;
        document.getElementById("menubutton").style.transform = "rotate(90deg)";
    }
    
}

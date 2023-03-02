let width = window.screen.width;
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
let headerMain = `
    <nav>
        <a href="./index.html" class="menu-link">Home</a>
        <a href="./about.html" class="menu-link">About</a>
        <a href="./travel.html" class="menu-link">Travel</a>
        <a href="./safety.html" class="menu-link">Safety</a>
        <a href="./vehicles.html" class="menu-link">Vehicles</a>
        <a href="./visit.html" class="menu-link">Visit</a>
        <a href="./references.html" class="menu-link">References</a>
        <a class="menu-link" id="contactlink">Contact</a>
        <a href="./book.html" class="menu-link" id="right_side" >Book</a>
        <a href="./login.html" class="menu-link" >Login</a>
    </nav>
`;
document.getElementById("header-main").innerHTML = headerMain;

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

document.getElementById("contactlink").onmouseover = function() {
    document.getElementById("contactlink").style.cursor = "pointer";
}
document.getElementById("contactlink").onclick = function() {
    window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' })
    if (width < 1024 && openm == true) {
        openm = false;
        document.getElementById("menubutton").style.transform = "rotate(90deg)";
        document.getElementById("menu").style.height = "180px";
    }
}
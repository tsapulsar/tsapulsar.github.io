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

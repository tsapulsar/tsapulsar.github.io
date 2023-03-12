            
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
function whenButtonClicked(object)
{
    if(object.style.boxShadow == "red 0px 0px 0px 3px")
    {
        object.style.boxShadow = "none";
    } else 
    {
        object.style.boxShadow = "0 0px 0 3px red";
    }
}
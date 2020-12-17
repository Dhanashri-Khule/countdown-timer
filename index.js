 
    
    function count(){
    var lastDate= new Date("2020 12 25 01:00:00").getTime();

    var today= new Date().getTime();

    var countdown= lastDate-today;

    var days= Math.floor(countdown/(1000*60*60*24));
    var hours= Math.floor((countdown % (1000*60*60*24))/(1000*60*60));
    var minutes= Math.floor((countdown % (1000*60*60))/(1000*60));
    var seconds= Math.floor((countdown % (1000*60))/(1000));

    document.getElementById("days").innerText= days;
    document.getElementById("hours").innerText= hours;
    document.getElementById("minutes").innerText= minutes;
    document.getElementById("seconds").innerText= seconds;
    }

    setInterval(function(){
        count();
    },1000);

   





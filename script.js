const secDiv = document.getElementById('sec');
const minDiv = document.getElementById('min');
const hourDiv = document.getElementById('hour');

setInterval(updateClock, 1000);

function updateClock(){
    let date = new Date(); 
    let sec = date.getSeconds() / 60;
    let min = date.getMinutes() / 60;
    let hour = date.getHours() / 12;
    
    secDiv.style.transform = "rotate(" + (sec * 360) + "deg)";
    minDiv.style.transform = "rotate(" + (min * 360) + "deg)";
    hourDiv.style.transform = "rotate(" + (hour * 360) + "deg)";
}

const relogio = setInterval (function time () {
    let dateToday = new Date();
    let hr = dateToday.getHours();
    let min = dateToday.getMinutes();
    let sec = dateToday.getSeconds();

    

    horas.textContent = hr;
    minutos.textContent = min;
    segundos.textContent = sec;
})
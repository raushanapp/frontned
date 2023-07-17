let hours = document.getElementById("hour");
let mins = document.getElementById("min");
let secs = document.getElementById("sec");

function displayTime() {
    let date = new Date();
    // getting hours, min,sec and date
    let hour = date.getHours();
    let min = date.getMinutes();
    let sec = date.getSeconds();

    //  calculating hours
    let hourRotation = 30 * hour + min / 2;
    let minRotation = 6 * min;
    let secRotation = 6 * sec;
    
    hours.style.transform = `rotate(${hourRotation}deg)`;
    mins.style.transform = `rotate(${minRotation}deg)`;
    secs.style.transform = `rotate(${secRotation}deg)`;
}

setInterval(displayTime,1000)
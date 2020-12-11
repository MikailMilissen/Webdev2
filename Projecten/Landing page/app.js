// DOM elements

const time = document.querySelector('.time')
const greeting = document.querySelector('#greeting')
const name = document.querySelector('.name')
const focus = document.querySelector('.focus');

let today = new Date();
hour = today.getHours();

function showTime(){
    minutes = today.getMinutes();
    seconds = today.getSeconds(); 
    // output Time
    time.innerHTML = `${hour}:${addZero(minutes)}:${addZero(seconds)}`;
    // Let time run every second
    setTimeout(showTime, 500);
    // Add a zero to minutes and seconds
}

function addZero(n){
    if (n < 10){
        return `0${n}`
    } else{
        return n
    }
}

function setGreeting(){
    if (hour<12){
        document.body.style.backgroundImage = "url ('../Afbeeldingen/morning.jpg')"
        greeting.textContent = 'Good Morning'
    } else if(hour<17){
        document.body.style.background = "url ('../Afbeeldingen/midday.jpg')"
        greeting.textContent = 'Good Afternoon'
    } else {
        document.body.style.backgroundImage = "url ('../Afbeeldingen/evening.jpg')"
        greeting.textContent = 'Good Evening'
    }
}

showTime()
setGreeting()
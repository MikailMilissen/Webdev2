// project 1

var d = new Date();
var hours = d.getHours()
var minutes = d.getMinutes()
var seconds = d.getSeconds()
const time = `${hours}:${minutes}:${seconds}`;


console.log(hours, minutes,  seconds)

document.querySelector('.time').innerHTML = time;
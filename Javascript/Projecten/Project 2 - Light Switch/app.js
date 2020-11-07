let control = document.getElementById('control');
let light = document.getElementById('light');

let light_control = false; // default boolean

function switchLight(){
    if (!light_control){
        light_control = true;
        control.src = 'control_on.png';
        light.src = 'light_on.png';
    }else{
        light_control=false;
        control.src = 'control_off.png';
        light.src = 'light_off.png';
    }
}

control.addEventListener('click', switchLight);































































/*

let control = document.getElementById('control');
let light = document.getElementById('light')
 
let light_control = false; // light off as default (boolean)
function lightSwitch(){
    if(!light_control){ // light on
        light_control=true
        control.src="img/control_on.png" // updated src attribute of img tag in the page
        light.src="img/light_on.png" // updated src attribute of img tag in the page
    }else{ // light off
        light_control=false
        control.src="img/control_off.png" // updated src attribute of img tag in the page
        light.src="img/light_off.png" // updated src attribute of img tag in the page
    }
}
 
control.addEventListener('click',lightSwitch)

*/
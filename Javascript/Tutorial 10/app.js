// Prompt -> 2 arguments (2 strings)

    /*
    let askuser = prompt('Are you admin?','no'); //2 arguments 
    let username = prompt('Whats is your username','default');
    */

// Confirm -> 2 arguments (string + boolean)

    /*let askAge = confirm('Are you under 17', 17);

    console.log(askAge);
    console.log(askuser);
    console.log(username);
    */

// If statement

/*
    let user = 'admin';
    if(user == 'admin'){
        console.log('Welcome to admin dashboard')
    }else{
        console.log('welcome to user dashboard')
    }

    let username= prompt('enter your username','default');

    if (username == 'admin'){
        alert('welcome admin')
    }else{
        alert('welcome user')
    }
*/

//

var totalProduct = 0;

if (totalProduct <= 0){
    totalProduct++;
    console.log('TotalProduct=>', totalProduct)
}

let count = 0

function increment(){ //link the function to the button in HTML (with 'onclick')
    count++;
    console.log(count);
}

function decrement(){
    if(count <=0){
        console.log(count);
    }else
    count--;
    console.log(count);
}


// Exercise: If the number is at 10 -> stay at 10

let tellen = 0

function add(){ 
    if(tellen < 10){
    tellen++;
    console.log(tellen)
    }else
        console.log(tellen);
}
// end of exercise


function _user(){
    console.log('hello user')
}
function admin (){
    console.log('hello admin')
}

if ('admin' == 'admin'){
    admin();
}else{
    _user;
}
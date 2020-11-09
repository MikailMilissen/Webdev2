// assignment: Guess the number (if its close say its Hot and if its far then say its cold)
// 1 input field, one button (onclick), callbackfunction for event


/*
const result = document.getElementById('inputField').value;
const scaleIndicator = document.getElementById('scale');
const buttonClick = document.getElementById('buttonClick')

var playerNumber = parseInt(result);

const computerNumber = 99;

function guessNumber(playerNumber){
    if (playerNumber == computerNumber){
        scaleIndicator.innerText = `${playerNumber} is Correct!`
    }else if (playerNumber > computerNumber){    
        scaleIndicator.innerText = `${playerNumber} is too high!`
    } else if (playerNumber < computerNumber){
        scaleIndicator.innerText = `${playerNumber} is too low!`
    }
}

buttonClick.addEventListener('click',guessNumber)
*/


// Atilla's Solution
const result = document.getElementById('inputField');
const scaleIndicator = document.getElementById('scale');
const buttonClick = document.getElementById('buttonClick')
 
 
const computerNumber = 99;
 
function guessNumber(){
    let _result = result.value
    if (_result == computerNumber){
        scaleIndicator.innerText = `${_result} is Correct!`
    }else if (_result > computerNumber){    
        scaleIndicator.innerText = `${_result} is too high!`
    } else if (_result < computerNumber){
        scaleIndicator.innerText = `${_result} is too low!`
    }
}
 
buttonClick.addEventListener('click',guessNumber)

/* Arne Solution
var guess= document.getElementById("estimate");
var correctNumber = "4"

console.log('correct:', correctNumber)

function getGuess(){
    console.log('guess:',Number(guess.value))
}
function isGuessCorrect(){
    if(Number(guess.value)==correctNumber){
        console.log('correct')
        return result.innerText=`correct`
    }else if(Number(guess.value)>correctNumber){
        console.log('go lower')
        return result.innerText=`go lower`
    }else {
        console.log('go higher')
        return result.innerText=`go higher`
    }
}
document.getElementById("button").addEventListener("click", isGuessCorrect );

*/
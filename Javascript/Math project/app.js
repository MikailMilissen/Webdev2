// Mijn probeersel 
/*

var outputQuestion = document.getElementById('question')
var inputAnswer = document.getElementById('answer')
let correctAnswer = document.getElementById('correct')
let incorrectAnswer = document.getElementById('incorrect')

//Define matharray randomize sign in matharray

let mathSign = ['+','-','/','*']
function randomSign(){
    return Math.round(Math.random()*3)
}
//Randomize number 1 en 2

let numberOne = () => Math.round(Math.random()*100+1); 
let numberTwo = () => Math.round(Math.random()*100+1);
outputQuestion.innerHTML = `${numberOne()} ${mathSign[randomSign()]} ${numberTwo()}`;

// The solution from the random equation

function calculation(){
    var result = eval(outputQuestion.innerHTML);
    console.log(result)
}

// Convert input string to number

var _result = parseInt(inputAnswer.value);

// Compare answer from random equation with the input from user

function checkAnswer(){
    if(_result == eval(outputQuestion.innerText)){
        posCount = 0;
        posCount++;
        correctAnswer.innerHTML = posCount;
        return outputQuestion.innerHTML = `${numberOne()} ${mathSign[randomSign()]} ${numberTwo()}`;
    }else{
        negCount = 0;
        negCount++;
        correctAnswer.innerHTML = negCount;
        return outputQuestion.innerHTML = `${numberOne()} ${mathSign[randomSign()]} ${numberTwo()}`;}
}

// Button click to activate

document.getElementById('check').addEventListener('click',checkAnswer);

console.log(eval(outputQuestion.innerHTML))
console.log(_result)

*/
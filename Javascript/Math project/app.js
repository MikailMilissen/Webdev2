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

let numberOne = () => Math.round(Math.random()*100);
let numberTwo = () => Math.round(Math.random()*100);
outputQuestion.innerHTML = `${numberOne()} ${mathSign[randomSign()]} ${numberTwo()}`;

function calculation(){
    var result = eval(outputQuestion.innerHTML);
    console.log(result)
}
var _result = inputAnswer.value;

function checkAnswer(){
    if(_result = eval(outputQuestion.innerHTML)){
        count = 0;
        count++;
        return correctAnswer.innerHTML = count;
    }else{
        console.log('no')
    }
}
document.getElementById('check').addEventListener('click',checkAnswer);

console.log(eval(outputQuestion.innerHTML))
console.log(parseInt(_result))
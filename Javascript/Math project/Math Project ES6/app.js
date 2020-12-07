let getQuestion = document.getElementById('question');
let answerField = document.getElementById('answer');
let checkButton = document.getElementById('check');
let correctScore = document.getElementById('correct');
let incorrectScore = document.getElementById('incorrect');

let operators = ['+', '-', '/', '*'] // random Operators
let operator =  operators[Math.round(Math.random()*3)]
let val1 = Math.round(Math.random()*50 + 1) // random numbers 
let val2 = Math.round(Math.random()*50 + 1)

//solution to random equation
var solution = parseInt(eval(getQuestion.innerHTML = val1 + operator + val2));
var score1 = 0;
var score2 = 0;

let check = () => {
    if(parseInt(answerField.value) === solution){
        score1++;
        correctScore.innerHTML=score1;
        console.log('good')
    }else{
        score2++;
        incorrectScore.innerHTML=score2;
        console.log('bad')
    }
}

checkButton.addEventListener('click',check)

console.log(solution)

console.log(val1,operator,val2)
console.log(solution)


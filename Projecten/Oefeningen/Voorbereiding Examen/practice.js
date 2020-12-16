var result = document.querySelector('.hello').innerHTML 

function subtract(x,y){
    result = x - y;
    return result
}

document.querySelector('.hello').innerHTML = subtract(2,3)
const a = 16
const b = 10
const x = a % b;

var txt = 'Have a nice'
txt +=  ' day'

function comparison(){
    if (10 >= 100){
        return true
    } else {
        return false
    }
}

var ternary = (20 > 18 && 9 > 10) ? 'this person is old enough' : 'this person is too young'

var z = (100 + 500) * 2

var person = {
    name: 'Mikail',
    number: 456,
    eyecolor: 'blue'
}

var volvo = ['xc40','xc60']


function myFunction(x,y){
    return x + y
}

var funcCalculation = myFunction(1,2)

// console.log(funcCalculation)

function toCelsius(fahrenheit){
    return (5/9) * (fahrenheit-32);
}

var temp = toCelsius(100)

document.querySelector('.temp').innerHTML = `The temperature in celsius is ${Math.floor(temp)}`;

var car = {
    type: 'Fiat',
    model: '500',
    color: 'white',
}


function saySomething(){
    console.log('hello')
}

var text = 'blabdhqhqheshehioesohiehthsohethstheztgdrgrdgdrgrgrgrddggdrrgseotheshthsetet'
console.log(text.length)

// document.querySelector('.text').innerHTML = 'hueshuheshsfehuefshuefshiuihsefu'
//document.querySelector('.text').innerText = 'hueshuheqzdqzzqdsefsefseseffesfesshuefshiuihsefu'

if(x !== 120){console.log('hoera')}else{console.log('nope')}

var str = 'my cat Leo his name is Leo'
var posFirst = str.indexOf('Leo')
console.log(posFirst)
var posLast = str.lastIndexOf('Leo')
console.log(posLast)

var slice = str.slice(-10,-7)
console.log(slice)

var textlower = 'This is a lowercase text turning into an uppercase'
var textUpper = textlower.toUpperCase()
console.log(textUpper)

console.log(str.charAt(3))
console.log(str.split(' '))

var Hello = 123;
var Bye = new Number(123);
console.log(Bye)
console.log(x.toString())
console.log(parseInt('hello'))

var cars = ['Volvo','Saab','BMW',23453]

document.querySelector('.text').innerText = cars[3]

console.log(typeof cars[3])
console.log(cars.length)
var last = cars[cars.length-1]
console.log(last)

function loop(){
    for (i=0;i<cars.length;i++){
        console.log(cars[i])
    }
}

loop()

document.querySelector('.text').innerText = cars.join(('*Hello'))
cars.push('dontaddme')
document.querySelector('.text').innerText = cars.pop()

const boyStudents = ['Atilla','Mikail','Emmanuel']
const girlStudent = ['Susan','Priya','Lotte']
const allStudents = boyStudents.concat(girlStudent)

const sortAlpha = () => {
    allStudents.sort()
    document.querySelector('.students').innerHTML = allStudents
}

const sortReversed = () => {
    allStudents.reverse()
    document.querySelector('.students').innerHTML = allStudents
}
allStudents.reverse()
console.log(allStudents)

var numbers = [12,24,35,23,46,46]
numbers.forEach(element => console.log(element))

console.log(Math.round(3.532))
console.log(Math.floor(Math.random()*100)+1)

var age = Math.floor(Math.random()*70)
console.log(age)
const votable = (age<18) ? 'This person is too young':'This person is old enough'
document.querySelector('.text').innerHTML = `${votable} and the number is ${age}`


var i = 0
function increment(){
while (i>10){
    console.log(i);
    i++;
}}
console.log(increment())

var para = document.createElement('p')
var node = document.createTextNode('This is a new element')
para.appendChild(node)



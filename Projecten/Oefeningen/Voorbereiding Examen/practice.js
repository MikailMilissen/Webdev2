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
    fullList: function(){
        console.log(this.type)
    },
    brake(){
        console.log('this car can brake')
    },
  
}


car.brake()
car.fullList()






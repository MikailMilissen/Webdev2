// bind

var person = {
    firstName: 'Mikail',
    lastName: 'Milissen',
    age: 31,
    student: true,
    getSentence: function(){
        const sentence = 
        "I am " + this.firstName +
        " " + this.lastName +
        " " + "and I am " +
        this.age + " " + "years old."
        return sentence;
    }
};

 console.log(person.getSentence())

 const Mikail = person.getSentence()

const readSentence = person.getSentence.bind(person);

console.log(readSentence())

// Apply and Call

const myApplyObject = {
    number1: 200,
    number2: 123
};

const myCallObject = {
    number1: 30,
    number2: 50
}

function getSum1(num){
    const sum = this.number1 + this.number2 + num;
    return "The result of the addition is " + sum;
}

const resultApply = getSum1.apply(myApplyObject, [100]);
const resultCall = getSum1.call(myCallObject, 100)

console.log(resultApply)
console.log(resultCall)



// Operators

/*

==	equal to
===	equal value and equal type
!=	not equal
!==	not equal value or not equal type
>	greater than
<	less than
>=	greater than or equal to
<=	less than or equal to
?	ternary operator

*/

var number1 = 5;
var number2 = 1;

var result = number1 == number2; //false

console.log(result);

var jack = 25;
if (jack == 25) {
    console.log('He is very young')
}
else {
    console.log('He is either Young or old')
}

result = jack != 25;
console.log(result);

var string1 = 'intec', string2 = 'intec';

result = string1 !== string2;

result = jack > 25;
result = jack > 30; // false; jack is 26
result = jack < 30; //true
result = jack < 16; //false

result = jack >= 27; //false
result = jack <= 27; //true
console.log(result)


let myNumber = 10;

myNumber++; // increase one time
console.log(myNumber) // 11
++myNumber; // this also works thus increases one more time
console.log(myNumber) // 12
--myNumber;
console.log(myNumber) // 11
myNumber--;
console.log(myNumber) // 10

// trenary operator

    // variablename= (condition) ? value1:value2

result = (jack < 18) ? 'He is a kid' : 'He is a young boy';
console.log(result)

var productStock = 20;
var alert="Out of stock", succes = 'Still available';
var cart = (productStock < 1) ? alert:succes;
console.log(cart)

    // students score <50 the are succesful; otherwise they are not

var studentScore = 51;
var fail="you failed the test", pass="you passed the test";
var score = (studentScore > 50) ? pass:fail;
console.log(score) //result

//logical operators
/*
&& 	logical and
|| 	logical or
! 	logical not
*/

var myNewNumber =10;
var result = (myNewNumber<11) && (myNewNumber<9) ? true:false;
console.log(result)
    //true false = false
    //false false = false
    //true true = true
result = (myNewNumber<11) || (myNewNumbe>12) ? true:false;
console.log(result)

console.log(!true)

result : (myNewNumber<11) || (myNewNumber>12) ? true:false;
console.log(result, 'logical not operator')

// Data type: Object

var student = {
    name:"Priya",
    jobtitle:"Web Developer",
    age: 25,
    printIt: function(){
    console.log('Hello function')
    },
    isStudent:true
}

console.log(student.name,student.jobtitle);
student.printIt();
console.log(student.isStudent);
console.log(student);

    //auto models
let auto = {
    model: "BMW",
    year: "2005"
}

console.log(auto)
console.log(auto.model)
document.write(auto.model)


//Opdracht: Maak een object met persoonlijke informatie,  true or false me rijbewijs

var ID = {
    name: "Mikail",
    age: 31,
    jobtitle: "Web Developer",
    birthDate: 1989,
    hasdriverLicense: true, 
}

document.write("Driver License: " + ID.hasdriverLicense + "<br>")
result = (ID.birtDate>2000) ? 'You are young':'You are old'
document.write(result)

document.write(JSON.stringify(ID)) //Converts an object to a string (makes it visible in the browser)
console.log(typeof JSON.stringify(ID)) //Converts an object to a string (makes it visible in the browser)

document.write("<br>"+ ID.name)
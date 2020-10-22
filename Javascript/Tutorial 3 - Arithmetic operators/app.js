// Arithmetic Operators

/*
+	Addition
-	Subtraction
*	Multiplication
**	Exponentiation (ES2016)
/	Division
%	Modulus (Remainder)
++	Increment
--	Decrement
*/

var number1 = 5,number2 = 19;
var result = number1 + number2;
var result = number1 * number2;
var result = number1 - number2;
var result = number1 / number2;
var result = number1 % number2;


console.log(result) //result

var test = 10;
result = test++;
console.log(test++)
console.log(result)

var string1 = "Bel";
var string2 = "gium";
// var fullString = string1 + string2;
// console.log(fullString)

string1 += string2;
console.log(string1)

//Numbers

var n1=20; n2=30;

var n1 =n1+n2; //classic way
n1 += n2; //shorten way

console.log(n1)

var intec = 'Intec';
intec += 'Brussel';

console.log(intec)

//a number between '' brackets means javascript recognizes it as a string
var num1=5,num2='10';
num1 +=num2;
console.log(num1)



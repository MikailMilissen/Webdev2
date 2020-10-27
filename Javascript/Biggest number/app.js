// NEW MISSION

// define a function to find biggest number!
// findBiggestNumber(10,20);
// expected output 20 is bigger.
// use ternary operator
// in function


var num1 = 10;
var num2 = 20;

function findBiggestNumber(){
    succes = 'This is the higher number' + num2;
    fail =   'Not defined';
    result = (num2 >= num1) ? succes:fail;
    console.log (result)
}
 
console.log(findBiggestNumber()); 

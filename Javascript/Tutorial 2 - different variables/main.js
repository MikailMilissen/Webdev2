//Javascript variables

// VAR Variable
    // re-update
    // re-declare

var intecbrussel=1;
intecbrussel='this is a string'
var intecbrussel = true;
console.log(intecbrussel)

// _$ Can you declare with a special symbol?
    //not recommended but it works

var $intecbrussel = 'this is a special char';
console.log($intecbrussel)

//between brackets is an OBJECT

intecbrussel = {
    title:'this is a title'
}

intecbrussel =[1,2,3,4,5]

console.log(intecbrussel)
console.log(typeof intecbrussel)

//Another variable

var test1;
test1 = intecbrussel
test1 = function myFunction(){return 1}
console.log(typeof test1)

//some word you can't use (reserved words)

// var function = 1;
// console.log(function)

// var while = 1;
// console.log(while)

// let variable
    // re-update
    // NOT re-declare

let test = 5;
test = 9;
// let test = "this is a new declaration";

console.log(test)

// const variable (this is a read only variable)
    //NOT re-update
    //NOT re-declare

const newVariable = 'This is a static variable';
// newVariable = 'hello';
// const newVariable ='This is not static';

console.log(newVariable)


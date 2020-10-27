// keeper

function keeper1(param){
    return param;
}

function keeper2(param){
    return param++;
}

function keeper3(param){
    return param+10;
}

function keeper4(param){
    return `This is the last process ${param}`; //We use backtick and curly braces dollarsign to make code more readable and to include a variable. Look this up
}

    //keeper1(1) > keeper2(keeper1(1) > keeper3(keeper2(keeper1(1))) > keeper4(keeper3(keeper2(keeper1(1))))    // This is dataflow in functions

    //data flow

let result = keeper4(keeper3(keeper2(keeper1(1))));
console.log(result)

    // 2 > 12 > 12

// The same Excerise with an object

let student = {}

function str1(param){
    return param;
}

function str2(param){
    param.firstname='Jack';
    return param;
}

function str3(param){
    param.lastname='Sparrow';
    return param;
}

function str4(param){
    console.log(param)
}
    //longer way to show the data flow
var result1 = str1(student);
var result2 = str2(result1);
var result3 = str3(result2);
var printService = str4(result3);
console.log(printService);

    //the short way tp do the same thing
str4(str3(str2(str1(student))));

// Excercise:  3 functions 

    //function 1 init object
    //function 2 add property(personal information: fullname, age, email)
    //function 3 PrinterService print info in this function
    
    //function 3 collapse Function 2 collapse Function
    //function3>function2>function1> Result

let person = {}
function obj1(hello){
    return hello;
}

function obj2(hello){
    hello.fullname= 'Mikail Milissen';
    hello.age= 31;
    hello.email='mikail.milissen@gmail.com';
    hello.school='Intec Brussel';
    return hello;
}

function obj3(hello){
   return hello;
}

let _result = obj3(obj2(obj1(person)));
console.log(_result);

    // Print the result in the page
document.getElementById('name').innerText=`${_result.fullname}`
document.getElementById('email').innerText=`${_result.email}`
document.getElementById('school').innerText=`${_result.school}`




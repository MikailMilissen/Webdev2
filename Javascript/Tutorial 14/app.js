
// Check youtube videom https://www.youtube.com/watch?v=R8rmfD9Y5-c

let studentNames = ['Mikail','Elnura','Joty','Susan','Priya','Oguz']

/*
0: "Mikail"
1: "Elnura"
2: "Joty"
3: "Susan"
length: 4

*/

studentNames = [ // Parent Array
    ['Mikail','Elnura','Joty'],
    [ // Second col Array
        'Susan','Priya',

        [ // Child of Second Array
            'Oguz']
]
]

studentNames[1][2] = 25; //Assign a new value to an existing value
studentNames[0][3] = "Atilla"; //Add a new string (the old way, now we use push())
console.log(studentNames[0])
console.log(studentNames[1][1])
console.log(studentNames[1][2])

let students = ['Mikail','Elnura','Joty','Susan','Priya','Oguz'];

function testForArray(){ // We can store a function in an array
    console.log('test array')
} 

let array = [
    {
        Title:'test' // different data types in an array
    },
    true,
    12,
    [1,2],
    testForArray,
]

array [4]();
//length
let consoleResult = students.length

// Sort() methods sorts arrays

consoleResult = students.sort();
consoleResult = students[students.length -1]; // last array element
console.log(consoleResult)

// Adding Array elements
    // push () method 

students.push('Jack') 
console.log(students)



let todoValue = document.getElementById('todoValue');
let todos = [];

function addTodo(){
    let temp = todos;
    temp.push(todoValue.value)
    console.log(temp)
    return todos = temp;
}

let studentDB = []
let username = document.getElementById('username')
let password = document.getElementById('password')

function addStudent(){
    let temp = studentDB;
    let person =  {
        user: username.value,
        pass: password.value
    }
    temp.push(person);
    console.log(temp)
    return studentDB = temp;

}

// addTodo('Learn Javascript');
// addTodo('Learn IoT');
// console.log(todos);


//Challenge freecodecamp

function multiplyAll(arr) {
    var product = 1;
    // Only change code below this line
  for (var i=1; i < arr.length;i++){
    for (var j=1; j < arr[i].length;j++){
      product *= arr[i][j]
    }
  }
    // Only change code above this line
    return product;
  }
  
  multiplyAll([[1,2],[3,4],[5,6,7]]);
  
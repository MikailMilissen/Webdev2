var students = [
    {
        name: "Student1",
        score: 10
    },
    {
        name: "Student2",
        score: 8
    },

    {
        name: "Student3",
        score: 5
    },
    {
        name: "Student4",
        score: 3
    }
]

/*

get student names who got 5 or >5 and print alphabetically sorted new list

function checkScore(value){
    return value > 5;
}

let result = students.some(checkScores)

console.log(result)

getStudentName()

printerService()

*/

// return the score above 5
function CheckScore(student){
return student.score >=5
} 

// return the students
function getStudentName(student){
return student.name
}
// print the score
function printerService(data){
return data

.filter(CheckScore).sort((a,b)=>{return a.score - b.score}).map(
getStudentName)

} 
 
let result = printerService(students);
console.log(result)

/* Emmmanuel antwoord
console.log(students.filter((val,index)=>val.score>=5)
        .sort((a,b)=>name.a-name.b))
*/





/*
method: some()
    The some() method checks if any of the elements in an array pass a test


function someFunction(value){
    return value>=100
}

let some_Result = myNumberArray.some(someFunction)
console.log(some_Result)

/*
method: sort()
    The sort() method sorts the items of an array.
*/
/*
myNumberArray.sort(function(a,b){return b-a});
var strings= ['f','s','e','l','q','x']
strings.sort();
console.log(strings)
console.log(myNumberArray)

*/
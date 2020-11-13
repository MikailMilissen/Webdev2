var students = [
    {name: "Mikail",score: 10},
    {name: "Susan",score: 8},
    {name: "Priya",score: 5},
    {name: "Lotte",score: 3},
    {name: "Daina",score: 8},
    {name: "Lorres",score: 4},
    {name: "Wouter",score: 9},
    {name: "Morgane",score: 3},
    {name: "Bruce",score: 0},
    {name: "Rochtus",score: 6}
]

console.log(students)

// Checking Scores above or equal to 5
const checkScores = students.filter((students) => {
    return students.score >= 5})
console.log(checkScores)

//sorting studentd alfabetically with a score higher or equal than 5
const sortStudents = checkScores.sort((a,b) => {
    var nameA = a.name;
    var nameB = b.name;
    if (nameA<nameB){
        return -1; 
    }if (nameA>nameB){
        return 1;
    }
    return 0;
})
console.log(sortStudents)


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
// Emmanuem methodes
// return the score above 5
            // function CheckScore(student){
            // return student.score >=5
            // } 

            // // return the students
            // function getStudentName(student){
            // return student.name
            // }
            // // print the score
            // function printerService(data){
            // return data

            // .filter(CheckScore).sort((a,b)=>{return a.score - b.score}).map(
            // getStudentName)

            // } 
            
            // let result = printerService(students);
            // console.log(result)

/* Emmmanuel antwoord
console.log(students.filter((val,index)=>val.score>=5)
        .sort((a,b)=>name.a-name.b))
*/


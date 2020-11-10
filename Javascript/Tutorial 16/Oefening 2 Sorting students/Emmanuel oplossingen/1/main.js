let students = [
  {
    name: "Amelie",
    score: 10,
  },
  {
    name: "Xavier",
    score: 8,
  },

  {
    name: "stijn",
    score: 5,
  },
  {
    name: "Student4",
    score: 3,
  },
];
//oplossing 1a
console.log(students.filter((val,index)=>val.score>=5)
        .sort((a,b)=>name.a-name.b))

// oplossing 1b
// let filtered=students.filter((val,index)=>val.score>=5);




//oplossing 2
/*
function checkScore(val) {
    students.filter((val,index)=>console.log (val.score>=5))
    console.log(students);
}

function getStudentName(){};
function printerService(){};

checkScore();
getStudentName();
printerService();
*/
/*
//oplossing 3
studentFiltered = [];
function checkScore() {
  for (let i = 0; i < students.length; i++) {
    let student = students[i];
    if (student.score >= 5) {
      studentFiltered.push(students[i]);
    }
    //console.log(studentFiltered[i]);
  } //console.log(studentFiltered)
}

console.log(studentFiltered);
function getStudentName() {
   let studentFilteredSorted = studentFiltered.sort(function (a, b) {
    const x = a.name.toLowerCase();
    const y = b.name.toLowerCase();
    if (x < y) {
      return 1;
    }
    if (y > x) {
      return -1;
    }
    return 0;
  });console.log(studentFilteredSorted);
  
}
checkScore();
getStudentName();


// printerService();
*/
/*
let sortedBookArr = bookArr.sort(function (a, b) {
    const x = a.toLowerCase();
    const y = b.toLowerCase();
    if (x < y) {
      return 1;
    }
    if (y > x) {
      return -1;
    }
    return 0;
    console.log(sortedBookArr);
  });
  let sortedBookArr = bookArr.sort();
  console.log(sortedBookArr)
*/

// function printerService() {
//   console.log(students);
// }

/*
function checkScore() // function
function getStudentName // function
function printerService // function


get student names who got 5 or >5 and print alphabetically sorted new list
*/

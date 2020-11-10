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

function checkScore(student){return student.score >=5}; // function
function getStudentName(student){return student.name}; // function
function printerService(data){return data.filter(pass).sort((a,b)=>{return a.score - b.score}).map(getStudentName)};

checkScore();
getStudentName();
printerService();

let result = printerService();
console.log(result);
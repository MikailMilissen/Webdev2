var students = [
   { name: "Student4", score: 3 },
   { name: "Student1", score: 10 },
    { name: "Student3", score: 5 },
    { name: "Student2", score: 8 },
    { name: "Student5", score: 4 },
    { name: "xavier", score: 40 },
    { name: "Xavier", score: 4 },
    { name: "Alex", score: 40 },
    { name: "alex", score: 40 },
];

let filtered= students
    .filter(el => el.score >= 5) //selecteren elementen die score hoger of gelijk aan 5 hebben 
    .sort(function(a, b) {
        var nameA = a.name.toUpperCase(); // ignore upper and lowercase
        var nameB = b.name.toUpperCase(); // ignore upper and lowercase
        if (nameA < nameB) {
          return -1;
        }
        if (nameA > nameB) {
          return 1;
        }
      return 0;
      })
    .map(el=>(el.name.toUpperCase()))
console.log(filtered);

let filteredSimple= students
    .filter(el => el.score >= 5) //selecteren elementen die score hoger of gelijk aan 5 hebben 
console.log(filteredSimple);
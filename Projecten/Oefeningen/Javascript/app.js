// for (let line = "#"; line.length < 8; line = line + "#")
//     console.log(line)


// // for (let num = 0; num < 101;num++){
//     for (let n = 1; n <= 100; n++) {
//         let output = "";
//         if (n % 3 == 0) output += "Fizz";
//         if (n % 5 == 0) output += "Buzz";
//         console.log(output || n);
//       }

let name = 'Mikail';
let lastName = 'Milissen';

let person = {
    name: 'jack',
    lastname: 'Priyahamadie',
    job: 'front end developer',
    age: 34,
}

console.log(`Hello my name is ${this.name} and my lastname is ${this.lastname}`)
document.write(`Hello my name is ${this.name} and my last name is ${lastName}`)
console.log(this.document)

console.log(person.name)

var books = [{
    name: "Javascript",
    pages:450
},{
    name: "node",
    pages:40
},{
    name: "React",
    pages:950
}
];

for (var i=0; i < books.length; i++){
    books[i].lastRead = new Date();
}

console.log(books)

books.map(we => {
    we.whatever = "me";
    return we;
})

console.log(books)
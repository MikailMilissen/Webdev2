// DEV ED
    // Old Javascript
function Person (name,age,haircolor){
        this.name = name;
        this.age = age;
        this.haircolor = haircolor;

}

Person.prototype.sayName=function(){
    console.log("My name is " + this.name);
}

var Mikail = new Person('Mikail',31,"Brown")

console.log(Person)
console.log(Mikail)

Mikail.sayName();

function Ed(occupation,hobbies){
   
    this.occupation = occupation;
    this.hobbies = hobbies;

}

var perSon = new Ed('Dev','dancing','Edwin',25,"Notnice")

console.log(perSon)

// Object constructors

// const student1 = {
//     name:'jack',
//     job:'developer',
//     getStudent: function(){
//         console.log(`Name:${this.name}\nJob:${this.job}`)
//     }
// }

// const student2 = {
//     name:'Brahim',
//     job:'dancer',
//     getStudent: function(){
//         console.log(`Name:${this.name}\nJob:${this.job}`)
//     }
// }

// student1.getStudent()

// Function constructor

function People(fullname,JobDetail){
    this.name = fullname;
    this.job = JobDetail;
    this.testFunc = function(){
        console.log('This is a fuction from constructor')
    }
    this.data = {profession:"Superman"};
    this.users = ['ali','deli','veli'];
}

let student1 = new People('Mikail','Dev')
let student2 = new People('Priya','HR')

console.log(student1)
console.log(typeof student1)
console.log(student2)
console.log(typeof People)

// prototypes

People.prototype.getInfo = function(){
    console.log(`Name:${name}\nJob:${this.job}`)
}

People.prototype.addPerson = function(name,job){
    console.log(`Name:${name}\nJob:${job}`)
}

student1.getInfo();
student2.getInfo();
student1.addPerson('Marilyn','Musician');
student1.testFunc()
console.log(student1.users)
console.log(student1.data)
console.log(student1)
// const emp = {
//     name:"Jack"
// }

// emp.job="Programmer"
// emp.id=1
// emp.arrays=[1,2]

// const myArray = []
// emp.profession="test"
// emp.printIt  = function(){
//     console.log('test')
// }
// console.log(emp)

// emp.printIt();

// const emp1 = {

// }


// const movie1 ={
//     title:"Joker1",
//     print:function(){
//         console.log(this.title)
//     }
// }
// const movie2 ={
//     title:"Joker2",
//     print:function(){
//         console.log(this.title)
//     }
// }
// const movie3 ={
//     title:"Joker2",
//     print:function(){
//         console.log(this.title)
//     }
// }


function Movie(title) {
    this.title = title;
}

console.log("Before", Movie.prototype)

Movie.prototype.print = function (actorName) {
    console.log('This is function from prototype')
    console.log(this.title)
    let actor = new MovieDetail(actorName)
    actor.Actor()
}

function MovieDetail(n) {
    this.actor = n;
}

MovieDetail.prototype.Actor = function () {
    console.log('Actor')
    console.log(this.actor)
}

console.log("After", Movie.prototype)

// console.log(typeof Movie)

// object constructor
let adnan = new Movie("Adnan")
let mikail = new Movie("Mikail")
mikail.print('Actor is Mikail')
adnan.print('Actor is Adnan')
// console.log(typeof adnan)
// THIS keyword in a function definition, this refers to the 'owner of that function.
let student = {
    username : "root",
    password : "password",
    getUser: function(){
        console.log(this.username,this.password)
        console.log(this)
    },
    users:{
        title:'test'
    },
    getTodo: function(){
        console.log(this.getTodo.title)
    }
}

function test(){
    console.log(this,"test")
    function childOfTestFunction(){
        console.log(this)
    }
    childOfTestFunction();
}

let mikail = {
    fullname:"asdadasdad",
    age:44,
    email:"asdads",
    getInfo: function(){
        console.log(this.fullname) // The 'this' keyword is a excisting preset of javascript to get information from a parent object. You can use this to bind this to an object.
    }
}
// functie aanroepen
mikail.getInfo()


//opdracht
// Stap 1: Initiate obkect
// Step 2: Define function iside object
// STep 3: Use 'this' keyword to acces properties of owner
// Stept4: Print property values in the html
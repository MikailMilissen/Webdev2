var person = {
    firstName: 'Mikail',
    lastName: 'Milissen'
}

function display(){
    console.log(this.firstName)
}



let newAdd = display.bind(person)

display()

console.log(newAdd)
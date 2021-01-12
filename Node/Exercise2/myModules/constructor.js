const divisionModule = require("../../Exercise/myModules/divisionModule");

class User {
    constructor(name,ID){
        this.name =  name;
        this.ID = ID
        console.log(name,ID)
    }
    printUser(){
        console.log(`Hi, My name is ${this.name} and my ID is ${this.ID}`)
    }

}

module.exports={User}


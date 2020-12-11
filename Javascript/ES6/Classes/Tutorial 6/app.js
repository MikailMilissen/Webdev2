class consoleApp{
    constructor(name,type,weight){
        this.name = name;
        this.type = type;
        this.weight = weight;
    }
    turnLeft(){
        console.log('turning left');
    }
    turnRight(){
        console.log('turning right');
    }
    turnUp(){
        console.log('going up');
    }
    turnDown(){
        console.log('the is going down');
    }
}

let Gameboy = new consoleApp('Gameboy','handheld','200gr');

Gameboy.turnLeft();

class People{
    constructor(username,password,role="guest"){
        this.username = username;
        this.password = password;
        this.role = role;
        this.data=[]
    }

    show(){
        return this.data
    }

    addLocalStorage(){
        localStorage.setItem('users',JSON.stringify(this.data))
    }

    addUser(){
        let user= {
            username:this.username,
            password:this.password,
            role:this.role
        }
        this.data.push(user)
        console.log('User has been added!')
    }


    test(){
        console.log(this.role)
    }
}

let Person1 = new People('Mikail','blabla','Moderator')

Person1.test()

class People {
    constructor() {
        this.data = []
    }

    show() {
        return this.data
    }

    addLocalStorage() {
        localStorage.setItem('users', JSON.stringify(this.data))
    }

    addUser(username, password, role = "guest") {

        // this.username = username;
        // this.password = password;
        // this.role = role;

        let user = {
            username: username,
            password: password,
            role: role
        }
        this.data.push(user)
        console.log('User has been added!')
    }


}

let user1 = new People()
user1.addUser('Root','123456','Admin')
user1.addUser('Ali','323232','Moderator')
user1.addLocalStorage();
console.log(user1.show())
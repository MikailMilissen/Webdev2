class console{
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

let Gameboy = new console('Gameboy','handheld','200gr');

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
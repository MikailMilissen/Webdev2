 let data = 1;

async function getData(){
    let retrieved = await data;
    console.log(retrieved)
}

getData()

let user = {
    id:1,
    name:'root',
    pwd:12345676
}

let user1 = {
        id:2,
        name:"root1",
        pwd:12344323333
    }

async function getUser(obj){
    let response = await obj;
    console.log(response)
}

getUser(user)

async function getUser_coverted(obj){
    return new Promise((resolve,reject)=>{
        resolve(obj)
        console.log(obj)
    })
}

console.log(getUser_coverted(user1))

let sub = [
    {
        id:1,
        name: "Priya"
    }
]

async function getStudents(){
    return await sub.forEach(user => console.log(user))
}

getStudents()

let array = []

async function addStudent(obj){
    let temp = await array; // wait for data
    temp.push(obj) // added new obj into temp array
    array = temp
    return obj
}

addStudent(
    {
        id: 2,
        name: "Susan"
    }
).then(response => console.log("Response from addStudewnt", response)).then(getStudents)

addStudent(
    {
        id: 3,
        name: "Mikail"
    }
).then(response => console.log("Response from addStudewnt", response)).then(getStudents)

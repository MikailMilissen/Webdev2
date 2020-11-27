let inputMail = document.querySelector('#exampleInputEmail1')
let inputPass = document.querySelector('#exampleInputPassword1')
let button = document.querySelector('button')

myData = [];

let Obj = {
user: 'Mikail',
pass: 'Milissen',
}

function addUser(Obj){
    Obj = {
        user: inputMail.value,
        pass: inputPass.value
    }
    return myData.push(Obj)
}

function getUsers(){
    return myData
}

function storeItems(){
    temp = myData;
    localStorage.setItem('mailadres',JSON.stringify(temp))
}

button.addEventListener('click',function App(){
    addUser();
    storeItems(); 
    console.log(getUsers()) 
})



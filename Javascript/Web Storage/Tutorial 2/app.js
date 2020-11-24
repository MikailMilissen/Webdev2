// Input Values
let inputKey = document.getElementById('inputKey')
let inputValue = document.getElementById('inputValue')
const buttonInsertData = document.getElementById('buttonInsert')
const output = document.querySelector('.output')



const buttonShowStorage = document.getElementById('getDataFromStorage')
const buttonDataByKey = document.getElementById('getDataByKey')
let inputSearchKey = document.getElementById('getValueFromStorage')
var KeyName = window.localStorage.getItem('inputSearchKey');

// Store values 
function storeKeys(){
    return sessionStorage.setItem(inputKey.value, inputValue.value);
   // console.log(inputKey)
   // console.log(inputValue)
}
buttonInsertData.addEventListener('click',storeKeys)

// Get random storage data

let sessionData

buttonShowStorage.addEventListener('click', function(e){
    //sessionData = []
    // let temp;
    for ( let index = 0 ; index < sessionStorage.length ; index++){
        let key = sessionStorage.key(index);
        let value = sessionStorage.getItem(key);
        output.innerHTML += `Hello ${key} with a value of ${value} </br>`;
        console.log(key)
    }
})

// Get data by Key

buttonDataByKey.addEventListener('click', function(e){
  for (let index = 0 ; index < sessionStorage.length ; index++)
  console.log(sessionStorage.key(index))
})
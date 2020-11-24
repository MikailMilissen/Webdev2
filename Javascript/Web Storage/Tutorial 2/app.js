// Input Values
let inputKey = document.getElementById('inputKey')
let inputValue = document.getElementById('inputValue')
const buttonInsertData = document.getElementById('buttonInsert')




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
console.log(sessionStorage)

//  buttonShowStorage.addEventListener('click', function)

// Get storage data by key
// function searchByKey(){
//     if (inputSearchKey === KeyName){
//         console.log('ok')
//     } else {
//         console.log(KeyName)
//     }
// }

// buttonDataByKey.addEventListener('click', searchByKey)
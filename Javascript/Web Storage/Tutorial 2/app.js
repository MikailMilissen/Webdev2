// Input Values
let inputKey = document.getElementById('inputKey').value
let inputValue = document.getElementById('inputValue').value
const buttonInsertData = document.getElementById('buttonInsert')




const buttonShowStorage = document.getElementById('getDataFromStorage')
const buttonDataByKey = document.getElementById('getDataByKey')
let inputSearchKey = document.getElementById('getValueFromStorage')
var KeyName = window.localStorage.getItem('inputSearchKey');

// Store values 
function storeKeys(){
    return sessionStorage.setItem(inputKey, inputValue);
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
// https://api.dictionaryapi.dev/api/v2/entries/en/

const Api = 'https://api.dictionaryapi.dev/api/v2/entries/en/'

const search = document.querySelector('#search')
const button = document.querySelector('#button')
const jumbotron = document.querySelector('.jumbotron')

let response = fetch(Api);
response.then(res=>console.log(res))
response.then(dic=>dic.json())
.then(data=>console.log(data))

async function findWord(id){
    let response = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${id}`)
    let data = await response.json();
    console.log(data)
    // return JSON.stringify(data)
}

button.addEventListener('click', (e) => {
    e.preventDefault()
    console.log('test')
    findWord(search.value).then(response=>{
       console.log(response)
        })
})




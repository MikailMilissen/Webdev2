const api = 'https://jsonplaceholder.typicode.com/posts'
const text = document.querySelector('.text')


async function getData(){
    let response = await fetch(api)
    let data = await response.json()
    console.log(data)
}

getData().then()
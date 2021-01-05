const api = 'https://jsonplaceholder.typicode.com/posts'
const text = document.querySelector('.text')


function makeModal(){
    response = fetch(api)
    response.then(res=>res.json())
    .then(data => data.forEach(element => {
        console.log(element.title)
        text.innerHTML += `${element.title}<br>`;
    }))
}

makeModal()


const apiUrl = "http://localhost:3000/users"
const jumbotron = document.querySelector('.jumbotron')
const usersbtn = document.querySelector('button')
const userID = document.querySelector('#singleUser')

async function getUsers(){
 let response = await fetch(apiUrl);
 let data = await response.json()
 console.log(data)
}


async function singleUser(id) {
 let response = await fetch(`${apiUrl}/${id}`)
 let data = await response.json();
 return data
}

usersbtn.addEventListener('click', (e) => {
 e.preventDefault();
 console.log('test',userID.value)
 singleUser(userID.value).then(response=>{
 return jumbotron.innerHTML += `
 <div class="card">
 <img class="card-img-top" src="img/images.png" alt="">
 <div class="card-body">
 <h4 class="card-title" id="title">${response.name}. ${response.username}</h4>
 <p class="card-text">
 <strong>Email:</strong> ${response.email}<br/>
 <strong>Adress:</strong> ${response.adress}<br/>
 <strong>Contact:</strong> ${response.phone}<br/>
 </p>
 </div>
 </div>`
 })
 
})


 
// // getUsers();
// singleUser();
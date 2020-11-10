let title = document.getElementById('title')
let userList = document.getElementById('users');
let getUserBtn = document.getElementById('getusers')

let users = {
    "data": [
        {
            "id": "0F8JIqi4zwvb77FGz6Wt",
            "lastName": "Fiedler",
            "firstName": "Heinz-Georg",
            "email": "heinz-georg.fiedler@example.com",
            "title": "mr",
            "picture": "https://randomuser.me/api/portraits/men/81.jpg"
        },
        {
            "id": "0P6E1d4nr0L1ntW8cjGU",
            "picture": "https://randomuser.me/api/portraits/women/74.jpg",
            "lastName": "Hughes",
            "email": "katie.hughes@example.com",
            "title": "miss",
            "firstName": "Katie"
        },
        {
            "id": "1Lkk06cOUCkiAsUXFLMN",
            "title": "mr",
            "lastName": "Aasland",
            "firstName": "Vetle",
            "picture": "https://randomuser.me/api/portraits/men/97.jpg",
            "email": "vetle.aasland@example.com"
        },
        {
            "id": "1OuR3CWOEsfISTpFxsG7",
            "picture": "https://randomuser.me/api/portraits/men/66.jpg",
            "lastName": "Vasquez",
            "email": "dylan.vasquez@example.com",
            "title": "mr",
            "firstName": "Dylan"
        },
        {
            "id": "1pRsh5nXDIH3pjEOZ17A",
            "lastName": "Vicente",
            "title": "miss",
            "firstName": "Margarita",
            "email": "margarita.vicente@example.com",
            "picture": "https://randomuser.me/api/portraits/women/5.jpg"
        },
        {
            "id": "3JAf8R85oIlxXd58Piqk",
            "email": "joey.oliver@example.com",
            "title": "mr",
            "firstName": "Joey",
            "lastName": "Oliver",
            "picture": "https://randomuser.me/api/portraits/men/61.jpg"
        },
        {
            "id": "5aZRSdkcBOM6j3lkWEoP",
            "picture": "https://randomuser.me/api/portraits/women/50.jpg",
            "email": "lilja.lampinen@example.com",
            "lastName": "Lampinen",
            "firstName": "Lilja",
            "title": "ms"
        },
        {
            "id": "5tVxgsqPCjv2Ul5Rc7gw",
            "email": "abigail.liu@example.com",
            "lastName": "Liu",
            "title": "miss",
            "picture": "https://randomuser.me/api/portraits/women/83.jpg",
            "firstName": "Abigail"
        },
        {
            "id": "6wy6UNkZueJfIUfq88d5",
            "picture": "https://randomuser.me/api/portraits/women/32.jpg",
            "firstName": "Melanie",
            "email": "melanie.pilz@example.com",
            "title": "miss",
            "lastName": "Pilz"
        },
        {
            "id": "7DbXNPWlNDR4QYVvFZjr",
            "email": "evan.carlson@example.com",
            "firstName": "Evan",
            "picture": "https://randomuser.me/api/portraits/men/80.jpg",
            "lastName": "Carlson",
            "title": "mr"
        },
        {
            "id": "7DbXNPWlNDR4QYVvFZjr",
            "email": "evan.carlson@example.com",
            "firstName": "Evan",
            "picture": "https://randomuser.me/api/portraits/men/80.jpg",
            "lastName": "Carlson",
            "title": "mr"
        }
    ],
    "total": 100,
    "page": 0,
    "limit": 10,
    "offset": 0
};

console.log(users)

let student = {
    scores: [1, 2, 3, 4, 5]
}

// let info = {
//     name:"Atilla"
// }

// let title = document.getElementById('title')
// title.innerHTML=info.name

console.log(users.data)
getUserBtn.addEventListener('click',function(){
    console.log('onclick callback function')
    function getUsers(user, index) {
        console.log('get user function')
        console.log(user, "single object") // printing obj
        // title.innerHTML = `${user.title} ${user.firstName} ${user.lastName}`
        userList.innerHTML += `
        <div class="card">
                        <img class="card-img-top" src="${user.picture}" alt="">
                        <div class="card-body">
                            <h4 class="card-title" id="title">${user.title}. ${user.firstName} ${user.lastName}</h4>
                            <p class="card-text">
                              <strong>Email:</strong> ${user.email}<br/>
                            </p>
                        </div>
                    </div>
        `
    
    }
    
    users.data.forEach(getUsers)
    
    
})
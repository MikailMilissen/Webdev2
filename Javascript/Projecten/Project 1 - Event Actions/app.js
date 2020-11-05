// Adding HeartCount
var click = 0;

function addHeart(){
    click++;
    document.getElementById('favorite').innerHTML = ` ${click}`;
}

// Adding Comments
    // step 1: capture input values
    // step 2: select main div container for comments section
    // step 3: print name and message in comment section with innerHtml property


// Capture the input values
let comments = document.querySelector('.comments'); // for comments section
let name = document.getElementById('name') //input value
let message = document.getElementById('message') // input value
let save = document.querySelector('.save') // button

// comments

save.addEventListener('click',()=>{
    
    //comments.append(commentModel(name.value,message.value))
    comments.innerHTML += `<i class="fa fa-user" aria-hidden="true"></i> ${name.value}: 
                <p class="card-text">${message.value}</p>`
})

// document.getElementById('name').innerText=`${_result.fullname}`



/* innerHTML = `

<i class="fa fa-user" aria-hidden="true"></i> Jack: 
 <p class="card-text"> This is my comment.</p>
`

*/

//userName.innerHtml= name.value;
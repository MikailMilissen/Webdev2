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


let name = document.getElementById('userName');
let comment = document.getElementById('comment');

const commentArea = document.getElementsByClassName('card-footer comments');

function pushComment(name,comment){
    let name = 
    console.log(name)
}

/* innerHTML = `

<i class="fa fa-user" aria-hidden="true"></i> Jack: 
 <p class="card-text"> This is my comment.</p>
`

*/

//userName.innerHtml= name.value;
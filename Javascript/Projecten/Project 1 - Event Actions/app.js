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

const commentArea = document.getElementsByClassName('card-footer comments');
const name = document.getElementById('name').innerHTML;
const comment = document.getElementById('comment');

let username = document.getelementbyid('username');
 
divContainer.innerHtml= username.value

function pushComment(){
    result = name.value;
    console.log(result)
}

/* innerHTML = `

<i class="fa fa-user" aria-hidden="true"></i> Jack: 
 <p class="card-text"> This is my comment.</p>
`

*/
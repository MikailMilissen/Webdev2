var todoInput = document.querySelector('#todo');
var addTodoBtn = document.querySelector('button.btn.btn-danger'); // old button
var todoForm = document.querySelector('#todo-form')
var Output;


Output = todoInput.classList
Output = todoInput.placeholder;
Output = todoInput.getAttribute('placeholder')
Output = todoInput.getAttribute('company');
todoInput.setAttribute('attrName','AttributeValue')
todoInput.removeAttribute('attrName')
Output = addTodoBtn;

addTodoBtn.className="btn btn-primary"

// createElement
var newElement =  document.createElement('button') // new button
newElement.innerText="New Add Todo Button" // button Name
newElement.className="btn btn-warning text-dark"
newElement.setAttribute('type','submit')

todoForm.replaceChild(newElement,addTodoBtn)

console.log(newElement)

document.body.style.backgroundColor="black"

function createHTML(tagname){
    return document.createElement(tagname)
}

var div = createHTML('div')

div.className="container"
console.log(div)

console.log(todoInput)
console.log(Output)

// Exercise: Change the bg-color of the even to do lists

var nthChildsofTodos = document.querySelectorAll('.list-group-item:nth-child(even)');
console.log(nthChildsofTodos);
nthChildsofTodos.forEach(function(item){
    item.setAttribute('class', 'list-group-item d-flex justify-content-between bg-warning')
})

function addEvent(event){
    console.log(event);
    console.log('test')
}

addTodoBtn.addEventListener('click', addEvent)
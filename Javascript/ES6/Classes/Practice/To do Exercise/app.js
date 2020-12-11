// selectors
const todoInput = document.querySelector('.todo-input');
const todoButton = document.querySelector('.todo-button');
const todoList = document.querySelector('.todo-list');

// event listeners
todoButton.addEventListener('click', addTodo)
todoList.addEventListener('click', deleteCheck)

// variables

let todoData = []

// functions

function addTodo (event) {
    // Prevent from reloading the page
    event.preventDefault();
    // Create Todo Div
    var todoDiv = document.createElement('div');
    todoDiv.classList.add('todo');
    // Create LI
    const newTodo = document.createElement('li');
    newTodo.innerText = todoInput.value;
    newTodo.classList.add('todo-item');
    todoDiv.appendChild(newTodo) // we stick it to the div we just created
    // Checkmark button
    const completedButton = document.createElement('button');
    completedButton.innerHTML = '<i class="fas fa-check"></i>';
    completedButton.classList.add('complete-btn');
    todoDiv.appendChild(completedButton)
    // Trash button
    const trashButton = document.createElement('button');
    trashButton.innerHTML = '<i class="fas fa-trash"></i>';
    trashButton.classList.add('trash-btn');
    todoDiv.appendChild(trashButton);
    //Append to list
    todoList.appendChild(todoDiv)
    //clear todoInput value
    todoInput.value="";
    //add to local storage
    todoData.push(newTodo.innerText)
    sessionStorage.setItem('to-Do-Item',JSON.stringify(todoData))
}

console.log(todoData)

function deleteCheck(e){
    // console.log(e.target) //this show what you are clicking on
    var item = e.target;
    //delete todo
    if(item.classList[0] === "trash-btn"){
        console.log(item.classList)
        const todo = item.parentElement;
        // animation
        todo.classList.add('fall')
        todo.remove()
    }
    //check mark
    if(item.classList[0] === "complete-btn"){
        const todo = item.parentElement;
        todo.classList.toggle('completed') // change the classlist to completed (check CSS)
    }
    
}


class makeTodoList{
    constructor(lists){
        this.todoList = list;
        this.todos = [];
    }
}



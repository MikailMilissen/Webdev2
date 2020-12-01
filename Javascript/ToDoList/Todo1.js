const todoInput = document.querySelector('.todo-input')
const todoBtn = document.querySelector('.todo-button')
const todoList = document.querySelector('.todo-list')
const clearAll = document.querySelector('#deleteAll')
const completeAll = document.querySelector('#cofirmAll')
const filterOption = document.querySelector('.filter-todo')
let itemsArray = localStorage.getItem('todos', todoInput.value) ? JSON.parse(localStorage.getItem('todos', todoInput.value)) : [];

localStorage.setItem('todoInput', JSON.stringify(itemsArray));
const data = JSON.parse(localStorage.getItem('todoInput'));

function addTodoToArray(todo) {

    if (todoArray === null || todoArray === undefined) {
        todoArray = [];
        console.log('array initialized')
        todoArray.push(todo)
    } else {
        todoArray.push(todo)
    }

    console.log(todoArray)

}



todoBtn.addEventListener('click', addTodo);
todoList.addEventListener('click', deleteCheck);
filterOption.addEventListener('click', filterTodo);


function addTodo(event) {
    event.preventDefault();
    const todoDiv = document.createElement('div');
    todoDiv.classList.add("todo");

    const newTodo = document.createElement('li');
    newTodo.innerText = todoInput.value;
    newTodo.classList.add("todo-item");
    todoDiv.appendChild(newTodo);

    const completedBtn = document.createElement('button');
    completedBtn.innerHTML = '<i class="fa fa-check" aria-hidden="true"></i>';
    completedBtn.classList.add('complete-btn');
    todoDiv.appendChild(completedBtn);

    const deleteBtn = document.createElement('button');
    deleteBtn.innerHTML = '<i class="fa fa-trash" aria-hidden="true"></i>';
    deleteBtn.classList.add("delete-btn");
    todoDiv.appendChild(deleteBtn);

    todoList.appendChild(todoDiv);
}

todoBtn.addEventListener('click', function (e) {
    e.preventDefault();
  
    itemsArray.push(todoInput.value);
    localStorage.setItem('todo', JSON.stringify(itemsArray));
    addTodo(todoInput.value);
    
  });
  
  data.forEach(item => {
    addTodo(item);
  });

clearAll.addEventListener('click', function (e) {
    localStorage.clear();
    console.log(todoList.firstElementChild)
    while (todoList.firstElementChild != null) {
        todoList.removeChild(todoList.firstElementChild)
    }

})

function deleteCheck(e) {
    const item = e.target;

    if (item.className === "delete-btn") {
        const todo = item.parentElement;
        todo.classList.add("fall");
        todo.addEventListener('transitionend', function () {
            todo.remove();
        })
    }
    if (item.className === "complete-btn") {
        const todo = item.parentElement;
        todo.classList.toggle('completed');
    }
}

function filterTodo(e) {
    const todos = todoList.childNodes;
    todos.forEach(function (todo) {
        switch (e.target.value) {
            case "all":
                todo.style.display = "flex";
                break;
            case "completed":
                if (todo.classList.contains('completed')) {
                    todo.style.display = 'flex';
                } else {
                    todo.style.display = "none";
                }
                break;
            case "uncompleted":
                if (!todo.classList.contains("completed")) {
                    todo.style.display = "flex";
                } else {
                    todo.style.display = "none";
                }
                break;
        }

    });
}













// todoBtn.addEventListener("click", function(e){
//     let todoSt = todoInput.value
//     sessionStorage.setItem('todos', todoSt)
// })



// function todoToStorage{ 
//     let todoSt = addTodo 
//     localStorage.setItem('todos', todoSt)
//  }


//  let newTodo = document.getElementsByTagName('li');
//  let inputString = JSON.stringify(newTodo) ;
//  todoList.push(newTodo)

//  localStorage.setItem('todos', inputString)





// window.addEventListener("load", function(){

//     document.getElementById("search").addEventListener("keyup", function(){

//       var search = this.value.toLowerCase();


//       var all = document.querySelectorAll(".todo-item")


//       for (let i of all) {
//         let item = i.innerHTML.toLowerCase();
//         if (item.indexOf(search) == -1) {
//           i.classList.add("hide");
//         } else {
//           i.classList.remove("hide");
//         }
//       }
//     });
//   });




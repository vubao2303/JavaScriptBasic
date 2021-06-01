var todoInput = document.querySelector("#todo-text");
var todoForm = document.querySelector("#todo-form");
var todoList = document.querySelector("#todo-list");
var todoCountSpan = document.querySelector("#todo-count");

var todos = ["Learn HTML", "Learn CSS", "Learn JavaScript"];

function renderTodos(){
    todoList.innerHTML = "";
    todoCountSpan.textContent = todo.length; 
    for ( i= 0; i < todos.length; i++){
        var listEl = document.createElement("li");
        listEl.textContent = todos[i];
        todoList.append(listEl);
    }
}


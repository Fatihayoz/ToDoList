//import { addButtonHandler } from "./handlers/add_buttonhandler.js";
const todo = document.querySelector('.todo-list');
let todoList = [];
    if(localStorage.getItem('todo')){
        todoList = JSON.parse(localStorage.getItem('todo'));
        ////todo.innerHTML = addButtonHandler();
    }


import { addTodo } from "../procedures/addTodo.js";
const deleteTodoHandler = event => {

    const target = event.target;
    if (target.nodeName === 'BUTTON' && target.innerHTML === '<i class='fas fa-trash'></i>') {
      const liToRemove = target.parentElement;
      //const todoList = document.getElementById("liTodo");
      const todolist =document.querySelector(".trash-btn");
      todolist.removeChild(liToRemove);
    }
    export { deleteTodoHandler };
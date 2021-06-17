
import { addTodo } from "../procedures/addTodo.js";
const deleteTodoHandler = event => {

    const target = event.target;
    if (target.nodeName === 'BUTTON' && target.innerHTML === "<i class='fas fa-trash'></i>") {
      const liToRemove = target.parentElement;
      const todolist =document.querySelector(".todo-list");
      todoList.removeChild(liToRemove);
 
}
};
    export { deleteTodoHandler };

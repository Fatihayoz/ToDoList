import { TodoList } from "../components/todo-list.js";
import { state } from "../data.js";

/* eslint-disable prefer-destructuring */
const deleteTodoHandler = (event) => {
const target = event.target;
if (target.nodeName === "BUTTON") {
    const listParent = document.querySelector(".todo-container");
    const toDelete = target.parentElement.dataset.index;
    state.items.splice(toDelete,1);
    listParent.appendChild(TodoList(state.items));
};
}
export { deleteTodoHandler }; 

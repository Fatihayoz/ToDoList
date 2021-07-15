import { TodoList } from "../components/todo-list.js";
import { state } from "../data.js";

const checkButtonHandler = (event) => {
    const checked = event.target;
    const isDone = checked.parentElement.dataset.index;
    state.items[isDone].done = !state.items[isDone].done;
    const listParent = document.querySelector(".todo-container");
    listParent.textContent = "";
    listParent.appendChild(TodoList(state.items));
};

export { checkButtonHandler }; 

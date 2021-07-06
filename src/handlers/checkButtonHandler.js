import { RenderList } from "../components/render-list.js";
import { state } from "../data.js";

const checkButtonHandler = (event) => {
    const checked = event.target;
    const isDone = checked.parentElement.dataset.index;
    state.items[isDone].done = !state.items[isDone].done;
    const listParent = document.querySelector(".todo-container");
    listParent.textContent = "";
    listParent.appendChild(RenderList(state.items));
};

export { checkButtonHandler }; 

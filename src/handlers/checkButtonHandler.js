import { renderList } from "../components/render-list.js";
import { state } from "../data.js";

const checkButtonHandler = (event) => {
debugger;
// console.log("i work");
const checked = event.target;
const isDone = checked.parentElement.dataset.index;
// state.items.splice(toDelete,1);
// go to state, take key 'done', rewrite value 'true'
state.items[isDone].done = !state.items[isDone].done;
console.log(state);

const listParent = document.querySelector(".todo-container");
listParent.textContent = "";
listParent.appendChild(renderList(state.items));

//   listParent.innerHTML = todoInput.value;
//   listParent.appendChild(renderList(state.items));
};

export { checkButtonHandler }; 

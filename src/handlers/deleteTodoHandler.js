import { renderList } from "../components/render-list.js";

import { state } from "../data.js";

/* eslint-disable prefer-destructuring */
const deleteTodoHandler = (event) => {
    debugger;
const target = event.target;
if (target.nodeName === "BUTTON") {

const listParent = document.querySelector(".todo-container");//

console.log(target.parentElement.dataset.index);
const toDelete = target.parentElement.dataset.index;
state.items.splice(toDelete,1);

console.log(state);
listParent.appendChild(renderList(state.items));
// renderList(state);

};
}
export { deleteTodoHandler }; 

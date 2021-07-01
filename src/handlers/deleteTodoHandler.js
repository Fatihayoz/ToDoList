// import { renderList } from "../components/render-list.js";

import { state } from "../data.js";

const deleteTodoHandler = (event) => {
  const target = event.target;
  if (target.nodeName === "BUTTON") {
    const listParent = document.querySelector(".todo-container");//
    listParent.textContent = ""; //
    console.log(target.parentElement.dataset.index);
    const toDelete = target.parentElement.dataset.index;
    state.items.splice(toDelete,1);
 
    console.log(state);
    // listParent.appendChild(renderList(state.items));
    // renderList(state);

};
}
export { deleteTodoHandler };

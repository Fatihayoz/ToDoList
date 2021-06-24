import { state } from "../data.js";
import { renderList } from "../components/render-list.js";

const addButtonHandler = (e) => {
  e.preventDefault();
  const todoInput = document.querySelector(".todo-input");
  state.items.push(todoInput.value); // into state
  console.log(state.items);
  // add button
  const listParent = document.querySelector(".todo-container");
  listParent.appendChild(renderList(listParent, state.items));
  todoInput.value = "";
};

export { addButtonHandler };

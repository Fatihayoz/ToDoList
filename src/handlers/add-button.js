import { state } from "../data.js";
import { RenderList } from "../components/render-list.js";

const addButtonHandler = (e) => {
  e.preventDefault();
  const todoInput = document.querySelector(".todo-input");
  const newDataObject = { text: todoInput.value, done : false} 
  state.items.push(newDataObject);
  console.log(state.items);
  const listParent = document.querySelector(".todo-container");
  todoInput.value = "";
  listParent.innerHTML = todoInput.value;
  listParent.appendChild(RenderList(state.items));
};

export { addButtonHandler };
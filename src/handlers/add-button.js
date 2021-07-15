import { state } from "../data.js";
import { TodoList } from "../components/todo-list.js";

const addButtonHandler = (e) => {
  e.preventDefault();
  const todoInput = document.querySelector(".todo-input");
  const newDataObject = { text: todoInput.value, done : false} 
  state.items.push(newDataObject);
  console.log(state.items);
  const listParent = document.querySelector(".todo-container");
  todoInput.value = "";
  listParent.innerHTML = todoInput.value;
  listParent.appendChild(TodoList(state.items));
};

export { addButtonHandler };

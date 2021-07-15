import { state } from "../data.js";
import { TodoList } from "../components/todo-list.js";

const resetButtonHandler = (e) => {
  e.preventDefault();
  while (state.items.length !== 0) {
    state.items.pop();
  }
  const resetContainer = document.querySelector(".todo-container");
  resetContainer.appendChild(TodoList(state.items));
};

export { resetButtonHandler };

import { state } from "../data.js";

const resetButtonHandler = () => {
  while (state.items.length !== 0) {
    state.items.pop();
  }
  document.querySelector(".todo-container").innerHTML = "";
  document.querySelector(".todo-input").value = "";
};

export { resetButtonHandler };

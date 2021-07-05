import { state } from "../data.js";
import { renderList } from "../components/render-list.js";

const resetButtonHandler = (e) => {
  e.preventDefault();
  while (state.items.length !== 0) {
    state.items.pop();
  }

  const resetContainer = document.querySelector(".todo-container");
// const resetInput = document.querySelector(".todo-input");
// console.log("state elements after reset: ", state.items);
  resetContainer.appendChild(renderList(state.items));
// resetInput.appendChild(renderList(state.items));
// console.log("ul after reset", renderList(state.items));
// console.log("resets container: ", resetContainer);
// console.log("resets input field: ", resetInput);
};

export { resetButtonHandler };

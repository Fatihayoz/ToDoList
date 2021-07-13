import { state } from "../data.js";
import { RenderList } from "../components/render-list.js";

const resetButtonHandler = (e) => {
  e.preventDefault();
  while (state.items.length !== 0) {
    state.items.pop();
  }
  const resetContainer = document.querySelector(".todo-container");
  resetContainer.appendChild(RenderList(state.items));
};

export { resetButtonHandler };

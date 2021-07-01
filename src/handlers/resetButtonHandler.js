import { state } from "../data.js";

const resetButtonHandler = () => {
  while (state.items.length !== 0) {
    state.items.pop();
  }
};

export { resetButtonHandler };

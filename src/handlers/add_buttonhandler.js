import { addTodo } from "../procedures/addTodo.js";
import { toStorage } from "../procedures/local-storage.js";

const addButtonHandler = (e) => {
  e.preventDefault();
  // addTodo();
  toStorage();
};

export { addButtonHandler };

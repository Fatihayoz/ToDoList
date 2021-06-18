/* eslint-disable prettier/prettier */
import { addTodo } from "../procedures/addTodo.js";

const addButtonHandler = (e) => {
  e.preventDefault();
  addTodo();
};

export { addButtonHandler };

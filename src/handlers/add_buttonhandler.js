/* eslint-disable prettier/prettier */
/* eslint-disable import/named */
import { addTodo } from "../procedures/addTodo.js";

const addButtonHandler = (e) => {
  e.preventDefault();
  addTodo();
  
};

export { addButtonHandler };

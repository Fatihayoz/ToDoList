import { addButtonHandler } from "../handlers/add_buttonhandler.js";
import{ deleteTodoHandler} from "../handlers/deleteTodoHandler.js";

// listener for add button
const addButton = document.querySelector(".todo-button");
addButton.addEventListener("click", addButtonHandler);

// event listener for delete button
//const deleteButton=
 document.getElementsByClassName("trash-btn").addEventListener('click',deleteTodoHandler);
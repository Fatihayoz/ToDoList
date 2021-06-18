import { addButtonHandler } from "../handlers/add_buttonhandler.js";
// listener for add button
const addButton = document.querySelector(".todo-button");
addButton.addEventListener("click", addButtonHandler);

// listener for reset button

const resetButton = document.querySelector(".reset");
resetButton.addEventListener("click", resetButtonHandler);

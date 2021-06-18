import { addButtonHandler } from "../handlers/add_buttonhandler.js";
import { resetButtonHandler } from "../handlers/resetButtonHandler.js";

// listener for add button
const addButton = document.querySelector(".todo-button");
addButton.addEventListener("click", addButtonHandler);

// listener for reset button
const resetButton = document.querySelector(".reset");
resetButton.addEventListener("click", resetButtonHandler);

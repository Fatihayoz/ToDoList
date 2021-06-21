/* eslint-disable prettier/prettier */


import { deleteTodoHandler } from "../handlers/deleteTodoHandler.js";
import { resetButtonHandler } from "../handlers/resetButtonHandler.js";

// listener for add button
const addButton = document.querySelector(".todo-button");
addButton.addEventListener("click", addButtonHandler);

document.getElementById("list").addEventListener("click", deleteTodoHandler);

// listener for reset button
const resetButton = document.querySelector(".reset");
resetButton.addEventListener("click", resetButtonHandler);


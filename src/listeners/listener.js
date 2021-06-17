import { addButtonHandler } from "../handlers/add_buttonhandler.js";
import { toStorage } from "../procedures/local-storage.js";
// listener for add button
const addButton = document.querySelector(".todo-button");
addButton.addEventListener("click", addButtonHandler);
addButton.addEventListener('click', toStorage);
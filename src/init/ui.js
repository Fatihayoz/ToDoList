import { AddButton } from "../components/add-button.js";
import { ResetButton } from "../components/reset-button.js";

const addItemContainer = document.querySelector(".add-item");
addItemContainer.insertAdjacentElement("beforeend", AddButton("todo-button"));

const resetContainer = document.querySelector(".todo-container");
resetContainer.insertAdjacentElement("afterend", ResetButton());

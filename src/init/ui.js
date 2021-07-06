import { AddButton } from "../components/add-button.js";
import { ResetButton } from "../components/resetButton.js";

// create addButton
const parent = document.querySelector(".add-item");
parent.insertAdjacentElement("beforeend", AddButton("todo-button"));

// create addResetButton
const resetBtn = document.querySelector(".add-item");
resetBtn.insertAdjacentElement("afterend", ResetButton("reset-btn"));

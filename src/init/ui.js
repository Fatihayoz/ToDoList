import { AddButton } from "../components/add-button.js";
import { ResetButton } from "../components/reset-button.js";

const parent = document.querySelector(".add-item");
parent.insertAdjacentElement("beforeend", AddButton("todo-button"));

const resetBtn = document.querySelector(".add-item");
resetBtn.insertAdjacentElement("afterend", ResetButton("reset-btn"));

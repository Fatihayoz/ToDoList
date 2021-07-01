import { makeAddButton } from "../components/add-button.js";
//create addButton
const parent = document.querySelector(".add-item");
parent.insertAdjacentElement("beforeend", makeAddButton("todo-button"));
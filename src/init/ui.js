import { makeAddButton } from "../components/add-button.js";

const parent = document.querySelector(".add-item");

parent.insertAdjacentElement("beforeend", makeAddButton("todo-button"));

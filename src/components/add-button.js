import { addButtonHandler } from "../handlers/addButtonHandler.js";

const makeAddButton = (classEl) => {
  const addButton = document.createElement("button");
  addButton.className = "todo-button";
  addButton.classList.add(classEl);
  addButton.innerHTML = "<i class='fas fa-plus'></i>";
  addButton.addEventListener("click", addButtonHandler);
  return addButton;
};
export { makeAddButton };
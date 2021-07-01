import { deleteTodoHandler } from "../handlers/deleteTodoHandler.js";
// to create a button

const makeTrashButton = () => {
  const trashButton = document.createElement("button");
  trashButton.innerHTML = "<i class='fas fa-trash'></i>";
  trashButton.classList.add("trash-btn");
  trashButton.addEventListener("click", deleteTodoHandler);
  return trashButton;
};
export { makeTrashButton };
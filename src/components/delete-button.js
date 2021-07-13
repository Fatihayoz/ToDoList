import { deleteTodoHandler } from "../handlers/delete-button.js";
const DeleteButton = () => {
  const trashButton = document.createElement("button");
  trashButton.innerHTML = "<i class='fas fa-trash'></i>";
  trashButton.classList.add("trash-btn");
  trashButton.addEventListener("click", deleteTodoHandler);
  return trashButton;
};
export { DeleteButton };
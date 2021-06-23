const makeTrashButton = () => {
    const trashButton = document.createElement("button");
    trashButton.innerHTML = "<i class='fas fa-trash'></i>";
    trashButton.classList.add("trash-btn");
    return trashButton;
  };
  export { makeTrashButton };
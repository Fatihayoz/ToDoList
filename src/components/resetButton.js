import { resetButtonHandler } from "../handlers/resetButtonHandler";

const addResetButton = (classEl) => {
  const resetButton = document.createElement("button");
  resetButton.innerHTML = "Reset";
  resetButton.className = "reset-btn";
  resetButton.classList.add(classEl);
  resetButton.addEventListener("click", resetButtonHandler);
  return resetButton;
};

export { addResetButton };

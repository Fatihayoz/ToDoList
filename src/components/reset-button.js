import { resetButtonHandler } from "../handlers/reset-button.js";

const ResetButton = () => {
  const resetContainer = document.createElement("div");
  resetContainer.className = "reset-btn";
  const resetButton = document.createElement("button");
  resetContainer.appendChild(resetButton);
  resetButton.value = "reset";
  resetButton.innerHTML = "Clear all";
  resetButton.id = "reset-btn";
  resetButton.addEventListener("click", resetButtonHandler);
  return resetContainer;
};

export { ResetButton };

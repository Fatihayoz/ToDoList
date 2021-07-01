import { checkButtonHandler } from "../handlers/checkButtonHandler.js"

const makeCheckButton = () => {
    const checkButton = document.createElement("button");
    checkButton.innerHTML = "<i class='fas fa-check'></i>";
    checkButton.classList.add("check-btn")
    checkButton.addEventListener("click", checkButtonHandler);
    return checkButton; 
}

export { makeCheckButton };

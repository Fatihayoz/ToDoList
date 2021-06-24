import { makeTrashButton } from "./trash-button.js";

const renderList = (parentEl, array = []) => {
  parentEl.innerHTML = ""; // should become universal
  const ul = document.createElement("ul");
  // document.querySelector(".todo-container").appendChild(ul);
  for (const item of array) {
    const itemDiv = document.createElement("div");
    itemDiv.setAttribute("id", "new-todo");
    const li = document.createElement("li");
    itemDiv.appendChild(li);
    itemDiv.appendChild(makeTrashButton());
    li.innerHTML = item;
    ul.appendChild(itemDiv);
  }
  return ul;
};

export { renderList };

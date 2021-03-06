import { DeleteButton } from "./delete-button.js";
import { CheckButton } from "./check-button.js";

const TodoList = (data) => {
  const listParent = document.querySelector(".todo-container");
  listParent.textContent = ""; 
  const ul = document.createElement("ul");
  ul.setAttribute("class", "item-list");
  for (const item of data) {
    const li = document.createElement("li");
    li.setAttribute("class", "item"); 
    li.dataset.index = data.indexOf(item);
    const div = document.createElement("div");
    div.innerHTML = item.text;
    ul.appendChild(li);
    li.appendChild(div);
    li.appendChild(DeleteButton());
    li.appendChild(CheckButton());
    if (item.done === true) {
      li.classList.add('completed');
    } else {
      li.classList.remove('completed');
    }
  }
  return ul;
};

export { TodoList };

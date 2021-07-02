import { makeTrashButton } from "./trash-button.js";
import { makeCheckButton } from "./check-button.js";

const renderList = (data) => {
  // const array = Array.from(data);
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
    li.appendChild(makeTrashButton());
    li.appendChild(makeCheckButton());
    if (item.done === true) {
      li.classList.add('completed');
    } else {
      li.classList.remove('completed');
    }
  }
  return ul;
};

// console.log(state);
// console.log(state.items);
export { renderList };

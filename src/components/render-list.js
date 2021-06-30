// import { makeTrashButton } from "./trash-button.js";
// import { makeCheckButton } from "./check-button.js";
// import { state } from "../data.js";

const renderList = (data) => {
  // const array = Array.from(data);
  const ul = document.createElement("ul");
  for (const item of data) {
    const li = document.createElement("li");
    li.dataset.index = data.indexOf(item);
    const div = document.createElement("div");
    div.innerHTML = item.text;
    ul.appendChild(li);
    li.appendChild(div);
    // li.appendChild(makeTrashButton());
    // li.appendChild(makeCheckButton());
  }
  return ul;
};

// console.log(state);
// console.log(state.items);
export { renderList };

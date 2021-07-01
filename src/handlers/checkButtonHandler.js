import { state } from "../data.js";

const checkButtonHandler = (event) => {
// console.log("i work");
const checked = event.target;
const isDone = checked.parentElement.dataset.index;
// state.items.splice(toDelete,1);
// go to state, take key 'done', rewrite value 'true'
state.items[isDone].done = !state.items[isDone].done;
console.log(state);
// if in the state it is done ->
if (checked.classList[0] === "check-btn") {
const checkItem = checked.parentElement;
checkItem.classList.toggle("completed");
}
};

export { checkButtonHandler }; 

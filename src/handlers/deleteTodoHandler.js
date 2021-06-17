// import { addTodo } from "../procedures/addTodo.js";
const deleteTodoHandler = (event) => {
  const target = event.target;

  if (target.nodeName === "BUTTON") {
    const liToRemove = target.parentElement;

    const todoList = document.getElementById("list");
    todoList.removeChild(liToRemove);
  }
};
export { deleteTodoHandler };

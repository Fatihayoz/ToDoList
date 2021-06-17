const addTodo = (event) => {
  
  const todoList = document.querySelector(".todo-list");
  const newTodo = document.createElement("div");
  newTodo.classList.add("todo");
  todoList.appendChild(newTodo);

  // create li inside div of todoList

  const liTodo = document.createElement("li");
  const todoInput = document.querySelector(".todo-input");
  liTodo.innerText = todoInput.value;
  todoInput.value = "";
  newTodo.appendChild(liTodo);
// trash button
  const trashButton = document.createElement("button");
  trashButton.innerHTML = "<i class='fas fa-trash'></i>";
  trashButton.classList.add("trash-btn");
  // append to div
  newTodo.appendChild(trashButton);
 // liTodo.appendChild(newTodo);


  // append to list
  //todoList.appendChild(todoDiv);


};

export { addTodo };

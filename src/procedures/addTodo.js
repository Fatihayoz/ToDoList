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
  liTodo.appendChild(newTodo);


  //event.preventDefault();
  // todo div
  //const todoDiv = document.createElement("div");
  //todoDiv.classList.add("todo");
  // create <li></li>
  //const newTodo = document.createElement("li");
  //newTodo.innerText = todoInput.value;
  //newTodo.classList.add("todo-item");
 // todoDiv.appendChild(newTodo);

  //trash button
  //const trashButton = document.createElement("button");
  //trashButton.innerHTML = "<i class='fas fa-trash'></i>";
  //trashButton.classList.add("trash-btn");
  //todoDiv.appendChild(trashButton);
  // append to list
  //todoList.appendChild(todoDiv);
  // clear todo input value
  //todoInput.value = "";


};

export { addTodo };

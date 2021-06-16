const addTodo = () => {
    // create div for each todoList
  
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
  };
  
  export { addTodo };
    
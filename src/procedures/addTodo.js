const addTodo = (e) => {
  // create div for each todoList

  const todoList = document.querySelector(".todo-list");
  const newTodo = document.createElement("div");
  newTodo.classList.add("todo");
  todoList.appendChild(newTodo);

  // create li inside div of todoList

  const liTodo = document.createElement("li");
  const button=document.createElement('button');
  button.innerHTML="X";
  liTodo.appendChild(button);

  //const todoInput = document.querySelector(".todo-input");
  //liTodo.innerText = todoInput.value;
  //todoInput.value = "";
   //newTodo.appendChild(liTodo);
  
   const newInput = document.createElement("input");
   liTodo.appendChild(newInput);

        const addButton = e.target;
        const addButtonParent = addButton.parentElement;
        const todoList = addButtonParent.parentElement;
        todoList.insertBefore(liTodo,addButtonParent);
        
  // const addButton=e.target;
  // const addButtonParent = addButton.parentElement;

  // const doList = addButtonParent.parentElement;
  // doList.insertBefore(liTodo,addButtonParent);

  // const todoInput = document.querySelector(".todo-input");
  // liTodo.innerText = todoInput.value;
  // todoInput.value = "";
  // newTodo.appendChild(liTodo);
};

export { addTodo };

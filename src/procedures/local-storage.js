import { addTodo } from "./addTodo.js";

const inputField = document.querySelector('.todo-input');
const addButton = document.querySelector('.todo-button');
const todo = document.querySelector('.todo-list');

    let todoList = [];
    export const reFill = () => {
    if(localStorage.getItem('todo')){
        todoList = JSON.parse(localStorage.getItem('todo'));
    }
}
    export const toStorage = () => {
        
        let newTodo = {
            todo: inputField.value,
            checked: false, 
            // important: false
        };

        todoList.push(newTodo);
        addTodo();
        localStorage.setItem('todo', JSON.stringify(todoList));
        
    }

    addButton.addEventListener('click', toStorage)
    
        // function displayMessages () {
        // let displayMessage = '';
        // todoList.forEach(function(item, i){
        //     displayMessage += `
        //     <li>
        //         <input type='checkbox' id='item_${i}' ${item.checked ? 'checked' : ''}/>
        //         <label for='item_${i}'> ${item.todo} </label>
        //     </li>
        //         `;
        //     todo.innerHTML = displayMessage;
        // inputField.value = '';
        // })
    //}

    // function displayMessages(){
    //     let displayMessage = '';
    //     todoList.forEach(function(item, i){
    //         displayMessage += `
    //         <li>
    //             <input type='checkbox' id='item_${i}' ${item.checked ? 'checked' : ''}>
    //             <label for='item_${i}'> ${item.todo} </label>
    //         </li>
    //             `
    //         todo.innerHTML = displayMessage;
    //     //inputField.value = '';
    //     })
    // }

    // todo.addEventListener('change', function(event){
        
    //     let idInput = event.target.getAttribute('id');
    //     let forLabel = todo.querySelector('[for=' + idInput + ']');
    //     let valueLabel = forLabel.innerHTML;
        
    //     todoList.forEach(function(item){
    //         if(item.todo === valueLabel){
    //             item.checked = !item.checked;
    //             localStorage.setItem('todo', JSON.stringify(todoList));
    //         }
    //     });
    // })
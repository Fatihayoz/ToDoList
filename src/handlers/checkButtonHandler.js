// import { state } from "../data.js"

const checkButtonHandler = (event) => {
    
    const checked = event.target;
    // we select id index from data  
    const isDone = checked.parentElement.dataset.index;

    // update state, check is done = true
    
    state.items[isDone].done = !state.items[idDone].done;
    console.log(state); 

    // render result of data

    if (checked.classList[0] === "check-btn") {
        const checkItem = checked.parentElement;
        checkItem.classList.toggle('completed');
    }    
};

export { checkButtonHandler }; 
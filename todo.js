//selectors
const todoInput = document.querySelector('.todo-input');
const todoBtn = document.querySelector('.todo_btn');
const todoList = document.querySelector('.todoList');

//eventlistener
todoBtn.addEventListener('click', addTodo);
todoList.addEventListener('click', deleteCheck)




//functions
function addTodo(event) {
    event.preventDefault();

    const todoDiv = document.createElement('div');
    todoDiv.classList.add('todo');

    const newTodo = document.createElement('li');
    newTodo.innerHTML = todoInput.value;
    newTodo.classList.add('todo-item');
    todoDiv.appendChild(newTodo);

    const completedButton = document.createElement('button');
    completedButton.innerText = 'yay';
    completedButton.classList.add('complete-btn');
    todoDiv.appendChild(completedButton);

    const trashButton = document.createElement('button');
    trashButton.innerText = 'nay';
    trashButton.classList.add('trash-btn');
    todoDiv.appendChild(trashButton);

    todoList.appendChild(todoDiv);

    todoInput.value = "";

}

function deleteCheck(e) {
     item = e.target
    if (item.classList[0] === 'trash-btn'){
        const next = item.parentElement;
        next.remove();
    }
    if (item.classList[0] === 'complete-btn'){
        const next = item.parentElement;
        next.classList.toggle('completed');
    }

}

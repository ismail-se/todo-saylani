let list = document.querySelector('.list-item');

const addTodo = () => {
    let todoItem = document.querySelector('#todo-item');
    if (todoItem.value != ""){
        list.innerHTML = list.innerHTML + 
        `<li>
            ${todoItem.value} 
            <button class="del" onclick="deleteItem(this)">DELETE</button>
            <button class="edit" onclick="editItem(this)">EDIT</button>
        </li>`;
        todoItem.value = "";
    }
}

const deleteItem = (e) => {
    e.parentNode.remove();
}

const deleteAll = () => {
    list.innerHTML = "";
}

const editItem = (e) => {
    let val = e.parentNode.firstChild.nodeValue;
    var editValue = prompt("Enter edit value", val);

    e.parentNode.firstChild.nodeValue = editValue;
}
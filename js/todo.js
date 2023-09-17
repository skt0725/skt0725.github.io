const toDoForm = document.getElementById("todo-form");
const toDoList = document.getElementById("todo-list");
const toDoInput = toDoForm.querySelector("input");

let toDos = [];

function saveToDos() {
    localStorage.setItem("todos", JSON.stringify(toDos));
}
function deleteToDo(event) {
    const li = event.target.parentElement;
    toDos = toDos.filter(todo => todo.id !== parseInt(li.id));
    li.remove();
    saveToDos();
}
function paintToDo(newToDo) {
    const li = document.createElement("li");
    li.id = newToDo.id;
    const span = document.createElement("span");
    const button = document.createElement("button");
    span.innerText = newToDo.text;
    button.innerText = "❌";
    button.addEventListener("click", deleteToDo);
    li.appendChild(span);
    li.appendChild(button);
    toDoList.appendChild(li);
}
function handleToDoSubmit(event) {
    event.preventDefault()
    const newToDo = toDoInput.value;
    toDoInput.value = "";
    const newTodoObj = {
        text: newToDo,
        id: Date.now()
    }
    toDos.push(newTodoObj);
    paintToDo(newTodoObj);
}
toDoForm.addEventListener("submit", handleToDoSubmit);
const savedTodos = localStorage.getItem("todo");
if (savedTodos) {
    const parsedTodos = JSON.parse(savedTodos);
    toDos = parsedTodos
    parsedTodos.forEach(paintToDo);
} else {
    
}

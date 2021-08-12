const toDoForm = document.querySelector("#todo-form");
const toDoinput = toDoForm.querySelector("input");
const toDoList = document.querySelector("#todo-list");

const TODOS_KEY = "todos";

let toDos = [];

function saveToDos() {
    localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}

function filterToDo(obj, item) {
    return obj.id !== item;
}

function deleteToDo(e) {
    const li = e.target.parentElement;
    toDos = toDos.filter(toDo => toDo.id !== parseInt(li.id));
    li.remove();
    saveToDos();
};

function paintToDo(newTodoobj) {
    const li = document.createElement("li");
    li.id = newTodoobj.id
    const span = document.createElement("span");
    span.innerText = newTodoobj.text;
    const button = document.createElement("button");
    button.innerText = "❌";
    li.appendChild(span);
    li.appendChild(button);
    toDoList.appendChild(li);

    button.addEventListener("click", deleteToDo);
};

function handleToDoSumbit(event) {
    event.preventDefault();  
    const newTodo = toDoinput.value;
    toDoinput.value = "";
    const newTodoobj = {
        text : newTodo,
        id: Date.now()
    }
    toDos.push(newTodoobj);
    paintToDo(newTodoobj);
    saveToDos();
};

toDoForm.addEventListener("submit", handleToDoSumbit);



const savedToDos = localStorage.getItem(TODOS_KEY);

if(savedToDos !== null) {
    const parsedToDos = JSON.parse(savedToDos);
    toDos = parsedToDos;
    parsedToDos.forEach(paintToDo);
}
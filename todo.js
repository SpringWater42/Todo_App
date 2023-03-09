const todoTask = document.getElementById("addTodoInput");
const addBtn = document.getElementById("addBtn");
const container = document.getElementById("container");
let todos = [];

//Add button
addBtn.addEventListener("click", function () {
  addTask(todoTask);
  outputTodos(todos);
});
//

//Task + edit and delete
function addTask(task) {
  todos.push({
    id: todos.length + 1,
    name: task.value,
  });
  task.value = "";
  task.focus();
  console.log(todos);
}

function delTodo(id) {
  todos = todos.filter((todo) => todo.id !== id);
  for (let i = 0; i < todos.length; i++) {
    todos[i].id = i + 1;
  }

  outputTodos(todos);
}

function editTodo(name) {
  let todoName = prompt("Edit task", name);

  for (let i = 0; i < todos.length; i++) {
    if (todos[i].name == name) {
      todos[i].name = todoName;
      break;
    }
  }

  outputTodos(todos);
}
//

//Array
function outputTodos(arr) {
  container.innerHTML = "";

  arr.forEach((todo) => {
    container.innerHTML += `
    <div class="the-todo">
        <h3 class="todo-header">${todo.id}</h3>
        <p class="todo-body">${todo.name}</p>
        <br>
        <br>
        <button class="delTodo" onclick="delTodo(${todo.id})">Delete</button>
        <br>
        <br>
        <button class="editTodo" onclick="editTodo('${todo.name}')">Edit</button>
    </div>
    `;
  });
}

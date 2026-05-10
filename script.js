let button = document.getElementById("addButton");

button.onclick = function () {

  let input = document.getElementById("taskInput");

  let taskText = input.value;

  let li = document.createElement("li");

  li.textContent = taskText;

  let deleteBtn = document.createElement("button");

  deleteBtn.textContent = "Delete";

  deleteBtn.onclick = function () {
    li.remove();
  };

  li.appendChild(deleteBtn);

  let list = document.getElementById("taskList");

  list.appendChild(li);

  input.value = "";

};
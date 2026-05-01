let button = document.getElementById("addButton");

button.onclick = function () {

  let input = document.getElementById("taskInput");

  let taskText = input.value;

  let li = document.createElement("li");

  li.textContent = taskText;

  let list = document.getElementById("taskList");

  list.appendChild(li);

  input.value = "";

};
document.querySelector('#new-task').addEventListener('click', function () {
  let toDoList = document.querySelector('#todo-list');
  let newTask = document.createElement('li');
  newTask.contentEditable = 'true';
  newTask.textContent = document.querySelector('#input').value;
  toDoList.appendChild(newTask);
  document.querySelector('#input').value = '';
});

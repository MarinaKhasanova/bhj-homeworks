const taskInputArea = document.getElementById('task__input');
const button = document.getElementById('tasks__add');
const tasksList = document.getElementById('tasks__list');

button.onclick = () => {
  if (taskInputArea.value) {
    const divTask = document.createElement('div');
    divTask.classList.add('task');
    tasksList.appendChild(divTask);
    const divTasksTitle = document.createElement('div');
    divTasksTitle.classList.add('task__title');
    divTasksTitle.textContent = taskInputArea.value;
    divTask.appendChild(divTasksTitle);

    taskInputArea.value = '';    
    const taskRemove = document.createElement('a');
    taskRemove.href = '#';
    taskRemove.classList.add('task__remove');
    taskRemove.textContent = '&times;';
    divTask.appendChild(taskRemove);
    
    taskRemove.onclick = () => {
      tasksList.removeChild(divTask);
    }
  } 
  return false;
}

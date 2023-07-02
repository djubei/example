//
//
//
//


const addTask = document.querySelector('.add-task')
const taskContainer = document.querySelector('.task-container')
const inputTask = document.querySelector('.input-task')

addTask.addEventListener('click', function () {
  let task = document.createElement('div')
  task.classList.add('task')

  let li = document.createElement('li')
  li.innerText = `${ inputTask.value }`
  task.appendChild(li)

  let checkButton = document.createElement("button")
  checkButton.innerHTML = "<i class='fa-solid fa-check'></i>"
  checkButton.classList.add('checkTask')
  task.appendChild(checkButton)

  let deleteButton = document.createElement("button")
  deleteButton.innerHTML = "<i class='fa-solid fa-trash-can'></i>"
  deleteButton.classList.add('deleteTask')
  task.appendChild(deleteButton)

  if (!inputTask.value) {
    alert('plz enter task')
  } else {
    taskContainer.appendChild(task)
  }
  inputTask.value = ''


  checkButton.addEventListener('click',function () {
    checkButton.parentElement.style.textDecoration='line-through'

  })
  
  deleteButton.addEventListener('click',function (e) {
    let target = e.target

    target.parentElement.remove()
  })
  
  
})





/*
const inputTask = document.querySelector('.input-task');
const addTask = document.querySelector('.add-task');
const taskContainer = document.querySelector('.task-container');

addTask.addEventListener('click', function () {
  const newTask = createTaskElement(inputTask.value);
  taskContainer.appendChild(newTask);
  inputTask.value = '';
});

document.addEventListener('click', function (e) {
  if (e.target.closest('.delete-task')) {
    deleteTaskElement(e.target);
  }
  if (e.target.closest('.complete-task')) {
    toggleTaskComplete(e.target);
  }
});

function createTaskElement(taskName) {
  const newTask = document.createElement('div');
  newTask.classList.add('task');
  newTask.innerHTML = `
    <div class="task-name">${taskName}</div>
    <button class="complete-task"><i class="fa-solid fa-check"></i></button>
    <button class="delete-task"><i class="fa-solid fa-trash"></i></button>
  `;
  return newTask;
}

function deleteTaskElement(target) {
  target.closest('.task').remove();
}

function toggleTaskComplete(target) {
  target.closest('.task').classList.toggle('line');
}*/


/*
const inputTask = document.querySelector('.input-task')
const addTask = document.querySelector('.add-task')
const taskContainer = document.querySelector('.task-container')


addTask.addEventListener('click', function () {
  const newTask = document.createElement('div')
  newTask.classList.add('task')
  taskContainer.appendChild(newTask)

  const taskName = document.createElement('div')
  taskName.innerText = inputTask.value
  taskName.classList.add('task-name')

  const completeTask = document.createElement('button')
  completeTask.classList.add('complete-task')

  const deleteTask = document.createElement('button')
  deleteTask.classList.add('delete-task')

  newTask.appendChild(taskName)
  newTask.appendChild(completeTask)
  newTask.appendChild(deleteTask)

  const trash = document.createElement('i')
  trash.classList.add('fa-solid', 'fa-trash')
  deleteTask.appendChild(trash)

  const complete = document.createElement('i')
  complete.classList.add('fa-solid', 'fa-check')
  completeTask.appendChild(complete)
  inputTask.value = ''
})


document.addEventListener('click', function (e) {
  if (e.target.classList.contains('fa-trash')) {
    e.target.parentElement.parentElement.remove()
  }
  if (e.target.classList.contains('delete-task')) {
    e.target.parentElement.remove()
  }
})
document.addEventListener('click', function (e) {
  if (e.target.classList.contains('fa-check')) {

    e.target.closest('div').classList.toggle('line')
  }
  if (e.target.classList.contains('complete-task')) {
    e.target.closest('div').classList.toggle('line')
  }
})*/

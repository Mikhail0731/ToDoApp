
const newTask = document.querySelector
('#new-task')
const addTaskBtn = document.querySelector
('#add-btn')
const taskList = document.querySelector
('#task-list')
console.log(taskList)
const handleAddTask =() => {
  console.log(newTask.value)  
}


const newTaskLi =document.createElement('li')
const newTaskSpan =document.createElement('span')
const newTaskBtn =document.createElement('button')

taskList.appendChild(newTaskLi)
newTaskLi.appendChild(newTaskSpan)
newTaskLi.appendChild(newTaskBtn)

newTaskLi.classList.add('task-container', 'list-group-item')
newTaskBtn.classList.add('btn', 'btn-danger')




newTaskBtn.textContent ='x'
newTaskSpan.textContent = 'Dummy Task'








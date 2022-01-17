document.addEventListener("DOMContentLoaded", () => {
  // your code here
  //add functionality to submit button
  document.querySelector(`form#create-task-form`).addEventListener('submit', (e) =>{
    //prevent form submission from causing reset
    e.preventDefault()
    let newTask = e.target.querySelector(`input#new-task-description`).value
    //add task to list
    if (newTask === '' || newTask === null){
      alert("Please enter an item")
    }
    else{
      addTask(newTask)
      let newPriorityDropdown = document.querySelector(`ul#tasks li`).lastChild 
      //addPriorityHandler(newPriorityDropdown)
    }
    //reset the input field after task added
    document.querySelector(`form`).reset()
  })
});

const addTask = task => {
  let li = document.createElement('li')

  //create delete button with functionality
  let btn = document.createElement('button')
  btn.textContent = 'X'
  btn.addEventListener('click', deleteTask)

  //create dropdown
  let dropdown = document.createElement(`select`)
  addPriorityOptions(dropdown)

  //create list item with button and dropdown
  li.textContent = `${task} `
  li.appendChild(btn)
  li.appendChild(dropdown)

  //add list item to list 
  document.querySelector(`div#list ul#tasks`).appendChild(li)


}

const deleteTask = e => {
  e.target.parentNode.remove()
}

const addPriorityOptions = dropdown => {
  const priorityOptions = ['High Priority', 'Medium Priority', 'Low Priority']
  for (const priorityLevel in priorityOptions){
    let option = document.createElement(`option`)
    option.textContent = priorityOptions[priorityLevel]
    dropdown.add(option)
  }
}

//change text color of item based on item priority selected
// const addPriorityHandler = (dropdown) => {
//   console.log(dropdown)
// }

//add input field to allow user, duration, due date


//add ability to edit tasks


//add sorting functionality based on selected priority

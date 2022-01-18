document.addEventListener("DOMContentLoaded", () => {
  // your code here
  //add functionality to submit button
  document.querySelector(`form#create-task-form`).addEventListener('submit', (e) =>{
    e.preventDefault()
    let newTask = e.target.querySelector(`input#new-task-description`).value
    
    //add task to list
    if (newTask === '' || newTask === null){
      alert("Please enter an item")
    }
    else{
      addTask(newTask)
      let newPriorityDropdown = document.querySelector(`ul#tasks li`).lastChild
      newPriorityDropdown.addEventListener('change', addPriorityHandler)
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
  dropdown.innerHTML = `<option placeholder='Select Priority'>Select Priority</option>`
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
  //console.log(dropdown.querySelector('option'))
  //dropdown.placeholder = "Select Priority"  //need to figure out how to add this as a placeholder
}

const addPriorityHandler = e => {
  const optionArray = []
  const options = e.target.options
  //console.log(options)
  for(i = 0; i < options.length; i++){
    optionArray.push(options[i])
  }

  let selectedPriority = e.target.value
  let listItem = document.querySelector(`#tasks li`)
  if(selectedPriority === "High Priority"){
    listItem.style.color = "red"
  }
  else if(selectedPriority === "Medium Priority"){
    listItem.style.color = "yellow"
  }
  else if(selectedPriority === "Low Priority"){
    listItem.style.color = "green"
  }
}
'use strict'

let todos = getSavedTodos()

  const filters = { serchText: '',
      //boxClicked: false
      hideCompleated: false
}

renderTodos(todos,filters)

document.querySelector('#serch-text').addEventListener('input', (e) => {
    filters.serchText = e.target.value
    renderTodos(todos,filters)
})
//Clearing browser on submit

document.querySelector('#new-todo').addEventListener('submit', (e) => {
const text = e.target.elements.text.value.trim()
e.preventDefault()

if (text.length > 0){

  todos.push({
    id:uuidv4(),
    text:text,
    compleated: false  
  })
  saveTodos(todos) // Passing in todos array
  renderTodos(todos,filters)
  e.target.text.value= " "
} 
})

document.querySelector('#hide-comleated').addEventListener('change', (e) =>{
  filters.hideCompleated = e.target.checked
  renderTodos(todos,filters)
})



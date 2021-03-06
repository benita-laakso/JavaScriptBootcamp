
import {getTodos,toggleTodo,removeTodo} from './todos'
import {getFilters} from './filters'

//Render todos
const renderTodos = () => {
    const todoEl = document.querySelector('#todos')
    const {searchText,hideCompleted} = getFilters()
    const filterdTodos = getTodos().filter((todo) => {
    const searchTextMatch = todo.text.toLowerCase().includes(searchText.toLowerCase())
    const hideCompleatedMatch = !hideCompleted || !todo.completed
      
      return searchTextMatch && hideCompleatedMatch 
    })
   
    const incompleteTodos = filterdTodos.filter((todo) =>  !todo.completed)

  todoEl.innerHTML = ''
 todoEl.appendChild(generateSummeryDOM(incompleteTodos))

    //If there are no todos we will rener a pharagraph
if (filterdTodos.length > 0)   {
 //if ther are Todos we are rendering them with tihis code
 filterdTodos.forEach((todo) => {
    todoEl.appendChild(generateTodoDOM(todo))
})
} 
else{ 
    const messageEl = document.createElement('p')
messageEl.classList.add('empty-message')
messageEl.textContent = 'No to-dos'
todoEl.appendChild(messageEl)
} 
}



//Get the DOM element for the individual note
const generateTodoDOM = (todo) => {
    const todoEl = document.createElement('label')
    const  containerEl = document.createElement('div')
    const checkbox = document.createElement('input')
    const todoText = document.createElement('span')
    const removeButton = document.createElement('button')

    //Setup todo checkbox
    checkbox.setAttribute('type','checkbox')
    checkbox.checked = todo.completed
    containerEl.appendChild(checkbox)
    checkbox.addEventListener('change',() =>{
        toggleTodo(todo.id)
        renderTodos()
    })
    
//Setup the todo text
todoText.textContent = todo.text
containerEl.appendChild(todoText)

//Set up conteiner
todoEl.classList.add('list-item')
containerEl.classList.add('list-item__container')
todoEl.appendChild(containerEl)


//Setup the remove button
removeButton.textContent ='remove'
removeButton.classList.add('button','button--text')
todoEl.appendChild(removeButton)
removeButton.addEventListener('click',() =>{
    removeTodo(todo.id)
    renderTodos()

})
    return todoEl
}


//////Gett the DOM elements for list summery
const generateSummeryDOM = (incompleteTodos) => {
    const summary = document.createElement('h2')
    const plural = incompleteTodos.length === 1 ? '' :'s'
    summary.classList.add('list-title')
    summary.textContent =`You have ${incompleteTodos.length} todo${plural} on the list`
    return summary
}

export {generateTodoDOM,renderTodos,generateSummeryDOM}
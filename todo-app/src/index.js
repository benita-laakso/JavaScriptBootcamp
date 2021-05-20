
import {renderTodos} from './views'
import {setFilters} from './filters'
import {createTodo,loadTodos} from './todos'

renderTodos()

document.querySelector('#serch-text').addEventListener('input', (e) => {
    
    setFilters({
        searchText:e.target.value
    })
    renderTodos()
})
//Clearing browser on submit

document.querySelector('#new-todo').addEventListener('submit', (e) => {
const text = e.target.elements.text.value.trim()
e.preventDefault()

if (text.length > 0){
  createTodo(text)
  renderTodos()
  e.target.text.value= " "
} 
})

document.querySelector('#hide-comleated').addEventListener('change', (e) =>{
   setFilters({ 
    hideCompleted: e.target.checked
    })
   
  renderTodos()
})

window.addEventListener('storage', (e) =>{
   if (e.key ==='todos'){
       loadTodos()
       renderTodos()
   }
})

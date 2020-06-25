'use strict'

//fetch existing todos from localStorage
const getSavedTodos = () => {
    const todosJSON = localStorage.getItem('todos')//Reading data from localStorage
    try{return todosJSON ? JSON.parse(todosJSON): [] // Taking our string and getting back an arrays
        //return todosJSON !== null ? JSON.parse(todosJSON): [] /// Same code longer version
    }catch(e){
        return []
    }
}

//Save todos to localStorage
const saveTodos = (todos) => {
    localStorage.setItem('todos', JSON.stringify(todos))//Adding data to localStorage
}

///Remove todo by id
const removeTodo = (id) => {
    const todoIndex = todos.findIndex((todo) => todo.id === id)
    if(todoIndex > -1){
        todos.splice(todoIndex, 1)
    }

}

//Toggle the compleated value for a given todo
const toggleTodo = (id) => {
    const todo = todos.find((todo)=> todo.id === id)
    if(todo){ // If todo exists set its compleated value
        todo.compleated = !todo.compleated


    }
}

//Render todos

const renderTodos = (todos,filters) => {
    
    const filterdTodos = todos.filter( (todo) =>{
      let serchTextMatch = todo.text.toLowerCase().includes(filters.serchText.toLowerCase())
      let hideCompleatedMatch = !filters.hideCompleated || !todo.compleated
      
      return serchTextMatch && hideCompleatedMatch 
    })
   
    const incompleteTodos = filterdTodos.filter((todo) =>  !todo.compleated )

  document.querySelector('#todos').innerHTML =''
 document.querySelector('#todos').appendChild(generateSummeryDOM(incompleteTodos))

filterdTodos.forEach((todo) => {
    document.querySelector('#todos').appendChild(generateTodoDOM(todo))
    
})
    
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
    checkbox.checked = todo.compleated
    contaierEl.appendChild(checkbox)
    checkbox.addEventListener('change',()=>{
        toggleTodo(todo.id)
        saveTodos(todos)
        renderTodos(todos,filters)
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
    saveTodos(todos)
    renderTodos(todos, filters)

})
    return todoEl
}

//////
const generateSummeryDOM = (incompleteTodos) => {
    const summery = document.createElement('h2')
    summery.textContent =`You have ${incompleteTodos.length} things on the list`
    return summery
}
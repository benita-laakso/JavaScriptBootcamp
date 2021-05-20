import uuidv4 from 'uuid/v4'

let todos = []

const loadTodos = () => {
    const todosJSON = localStorage.getItem('todos')//Reading data from localStorage
    try{
        todos=  todosJSON ? JSON.parse(todosJSON): [] // Taking our string and getting back an arrays
        //return todosJSON !== null ? JSON.parse(todosJSON): [] /// Same code longer version
    } catch (e) {
        todos = []
    }
}
//Save todos to localStorage
const saveTodos = () => {
    localStorage.setItem('todos', JSON.stringify(todos))//Adding data to localStorage
}

const getTodos = () => todos

const createTodo = (text)=>{
    todos.push({
        id:uuidv4(),
        text,
        completed:false
    })
    saveTodos()

}

const removeTodo = (id) =>{
    const todoIndex = todos.findIndex((todo) => todo.id === id)

    if(todoIndex > -1){
        todos.splice(todoIndex, 1)
        saveTodos()
    }

}
//Toggle the compleated value for a given todo
const toggleTodo = (id) => {
    const todo = todos.find((todo)=> todo.id === id)

    if( todo) { // If todo exists set its compleated value
        todo.completed = !todo.completed
        saveTodos()
    }
}

loadTodos()

export {loadTodos,getTodos,createTodo,removeTodo,toggleTodo}
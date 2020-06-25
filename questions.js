// Truthy / Falsy

const todosJSON = localStorage.getItem('todos')
return todosJSON ? JSON.parse(todosJSON): [] ///chequing if data exists

//return todosJSON !== null ? JSON.parse(todosJSON): [] /// Same code longer version


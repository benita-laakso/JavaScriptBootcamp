///////////Arrays
// DOM  Document Object Model
const notes =['Note 1','Note 2', 'Note 3','Note 4']

console.log(`You just removed ${notes.pop()}`)
console.log(notes.push('My new note')) //Modeifyes the original Array


//pop retuns the removed value

console.log(notes.shift())
notes.unshift('My new first note')

console.log(notes)


notes.splice(0,2) // (index, amount)

notes[2] = 'This is new note' //Replaces item at given item


///Loops

for(let count = 10; count <= 2; count = count +1){
    console.log(count)
}


for(let count = 0; count< notes.length; count++){
    console.log(notes[count]+ ' hi')
}

/////Arrays
const todos = ['Go for a walk', 'Write e-mails', 'Have lunch', 'Se a friend','Plan tommorow']

//Delete third item
todos.splice(2,1)
console.log(todos)

console.log(`You have ${todos.length} todos`)

// Add to end of Array
todos.push('Have fun')
console.log(todos)

//Delete first item
todos.shift()

//A callback function is a function that gets past to another function.
//forEach is an Array method

todos.forEach(function(item,index){
    let num = index + 1
    console.log(`${num}.${item}`)
})
console.log(todos)

////////////////
////textContent  - Returns a string
///sets or returnes the text



const pharagraphs = document.querySelectorAll('p')

pharagraphs.forEach(function(pharagraph){
  if(pharagraph.textContent.includes('the')){
    pharagraph.remove()
  }
  })

  const ps =document.querySelectorAll('p')

  ps.forEach(function(item){
      item.textContent = ('*******')
     //console.log(item.textContent)
     //item.remove()
  })


//_______Storing data___________////////////
//localStorage stors strings

//Creating data
localStorage.setItem('location','Helsinki')
//Getting data
console.log(localStorage.getItem('location'))
//Removing data
localStorage.removeItem('location')
//removing all data
localStorage.clear()
//_______Storing data___________////////////


//////////_________JSON ______________/////////////////////

const user ={
    name: 'Andrew',
    age:27
}

const userJSON = JSON.stringify(user)
console.log (userJSON)

//Setting an item 'user', setting the value from the user JSON,
// a string representation of the original object

localStorage.setItem('user',userJSON)

const userJSON = localStorage.getItem('user')
const user = JSON.parse(userJSON)
console.log(`${user.name} is ${user.age}`)

//////////_________JSON ______________/////////////////////
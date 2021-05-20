//HTTP   (Hypertext Transfer Protacol)
//Request - Response protocal
//We the Developer and the Browser, issiue some sort of request
//                that goes of to some sort of third party server
//That server does som work and gives us back a response

//Request - What do we want to do?
//Response - What was actualy done

//Ex. Hangman app
//Request - What do we want to do? Ex. Generate a new word or frase
//Response - Contains that word or frase, what was actualy done


//We make HTTP request that allow us to get JSON back , 
//we can the parse that JSON into a JavaScript Object, to extract the data of from it

const puzzleEl = document.querySelector('#puzzle')
const guessesEl = document.querySelector('#guesses')
const game1 = new Hangman('Cat and dog', 2)

puzzleEl.textContent = game1.puzzle
guessesEl.textContent = game1.statusMessage

window.addEventListener('keypress', (e) =>{
   const guess = String.fromCharCode(e.charCode) // Converting charactercode to letter
   game1.makeGuess(guess)
   puzzleEl.textContent = game1.puzzle
   guessesEl.textContent = game1.statusMessage
 
})

//When working with callback patern it is common to get to arguments
//The first argument is eny potentioal error, the second is sucsess data, in this case is a puzzle
//1.Chequing if firts argument error exists, if it did then somthing went wrong and we define what to di in the if statement
//2. If error doesn´t exist we are going to use the else code
//one of these is always gona be defined, never both never none. Thimngs ether went  well or did not go well


getPuzzle('2').then((puzzle) => {// we get our data from the request
   console.log(puzzle) // we acsess puzzle from data
}).catch((err) => {
      console.log(`Error: ${err}`)
   })

//a Promise comes back from getPuzzle
//The person who calls getPuzzle()   can acsess the data or eny potential errors, eventhoug the data doesn´t live directly inside the getPuzzle function,getPuzzel has to go and fetch that data first

////Calling get country
//     getCountry('US').then((country) => { 
  //   console.log(country.name) //country is an object
//     }).catch((err) =>{
//      console.log(`Error : ${err}`) //country is an object
//      })
//iso-3166 country code  

getCurrentCountry().then((country)=>{
   console.log(country.name)
}).catch((error)=>{
   console.log(error)
})


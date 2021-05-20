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
let game1 = new Hangman('Cat and dog', 2)
/*
puzzleEl.textContent = game1.puzzle
guessesEl.textContent = game1.statusMessage
*/
window.addEventListener('keypress', (e) =>{
   const guess = String.fromCharCode(e.charCode) // Converting charactercode to letter
   game1.makeGuess(guess)
  render()
})

const render = () => {
   puzzleEl.innerHTML = ' '
   guessesEl.textContent = game1.statusMessage

   game1.puzzle.split('').forEach((letter)=>{
      const letterEl = document.createElement('span')
      letterEl.textContent = letter
      puzzleEl.appendChild(letterEl)
   })
}

const startGame = async () => {
   const puzzle = await getPuzzle('2') //fetching the puzzle
   game1 = new Hangman(puzzle, 5) //creating a new game instance
   render() // rendering the instance to the browser
}
document.querySelector('#reset').addEventListener('click', startGame)
startGame()

/*
getPuzzle('2').then((puzzle) => {// we get our data from the request
   console.log(puzzle) // we acsess puzzle from data
}).catch((err) => {
      console.log(`Error: ${err}`)
   })

*/
/*
getCurrentCountry().then((country)=>{
   console.log(country.name)
}).catch((error)=>{
   console.log(error)
})
*/ 

import Hangman from './hangman'
import getPuzzle from './requests.js'

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

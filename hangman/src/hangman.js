//Functions are objects, functions use prototypa inheretance
//Hangman is an object that we can create a method on  
//method = functions on object propertys
//Ex. We have created a method called makeGuess below


class Hangman {
  constructor(word,remainingGueses){
    this.word = word.toLowerCase().split('') //spliting a string into array of strings
    this.remainingGueses = remainingGueses
    this.guessedLeters = []
    this.status = 'playing'
    this.message = ''
  }

  calculateStatus(){
    const finished = this.word.every((letter) => this.guessedLeters.includes(letter) || letter === ' ')
    
      if(this.remainingGueses === 0){
        this.status = 'faild'
      }else if(finished){
        this.status = 'finished'
      }else{
        this.status ='playing'
      }
  }
  
  get statusMessage(){
    if(this.status === 'playing'){
       return `Guesses remaining ${this.remainingGueses}`
    }else if (this.status === 'faild'){
      return `Nice try the correct word was "${this.word.join('')}"`
    }else{
      return `Great work! You guessed the word`
    }
  }
  get puzzle(){
      let puzzle = ''
  
     this.word.forEach((letter) => {
       if(this.guessedLeters.includes(letter) || letter === ' '){
         //puzzle = puzzle + leter
         puzzle += letter
       }
       else{
         //puzzel = puzzel + '*'
         puzzle += '*'
       }
     })
     return puzzle
}

//Creating a method called makeGuess
makeGuess(guess){
  guess = guess.toLowerCase()
  const Isunique = !this.guessedLeters.includes(guess)//chequing if the array guessedLeter has the passed in lettter
  const IsBadGuess =  !this.word.includes(guess) //Does the word array include the letter
  
  if(this.status !== 'playing') 
  {
    return //returning nothing will return undefined by default,
          //preventing rest of function from runing
  }

   if (Isunique){
    this.guessedLeters = [...this.guessedLeters, guess]
  }
  if(Isunique && IsBadGuess){
     this.remainingGueses = this.remainingGueses -1
     //this.remainingGueses --
  }
  this.calculateStatus()

}
  
}
export {Hangman as default}











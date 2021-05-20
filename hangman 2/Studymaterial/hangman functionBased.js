//Functions are objects, functions use prototypa inheretance
//Hangman is an object that we can create a method on  
//method = functions on object propertys
//Ex. We have created a method called makeGuess below


const Hangman = function(word,remainingGueses){
  this.word = word.toLowerCase().split('') //spliting a string into array of strings
  this.remainingGueses = remainingGueses
  this.guessedLeters = []
  this.status = 'playing'
  this.message = ''
}




Hangman.prototype.calculateStatus = function(){
  //The every() method tests whether all elements in the array pass the test implemented by the provided function. It returns a Boolean value
  //const correctWord = this.word
  const finished = this.word.every((letter) => this.guessedLeters.includes(letter))
  
  
    /*Alternative code 1
    const lettersUnguesed = this.word.filter((letter) =>{
        return !this.guessedLeters.includes(letter)
    })
    const finished = lettersUnguesed.length === 0
*/

  /*Alternativ code 2
  let finished = true
    this.word.forEach((letter) =>{
      if (this.guessedLeters.includes(letter)){

      }
      else{
        finished = false
      }
    })
  */
    if(this.remainingGueses === 0){
      this.status = 'faild'
    }else if(finished){
      this.status = 'finished'
    }else{
      this.status ='playing'
    }
}


Hangman.prototype.getStatusMessage = function(){
  if(this.status === 'playing'){
     return `Guesses remaining ${this.remainingGueses}`
  }else if (this.status === 'faild'){
    return `Nice try the correct word was "${this.word.join('')}"`
    //Chaning al the separated carracters in the word array into one word
  }else{
    return `Great work! You guessed the word`
  }

}


Hangman.prototype.getPuzzle = function(){
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
Hangman.prototype.makeGuess = function(guess){
  guess = guess.toLowerCase()
  const Isunique = !this.guessedLeters.includes(guess)//chequing if the array guessedLeter has the passed in lettter
  const IsBadGuess =  !this.word.includes(guess) //Does the word array include the letter
  
  if(this.status !== 'playing') 
  {
    return //returning nothing will return undefined by default,
          //preventing rest of function from runing
  }

   if (Isunique){
    this.guessedLeters.push(guess)
  }
  if(Isunique && IsBadGuess){
     this.remainingGueses = this.remainingGueses -1
     //this.remainingGueses --
  }
  this.calculateStatus()

}



let num = 5.589

console.log(num.toFixed(2))
console.log(Math.round(num))
console.log(Math.floor(num))
console.log(Math.ceil(num))

let min = 0

let max = 1

let randomNum = Math.floor(Math.random() * (max - min + 1)) + min
//console.log(randomNum)

///Math.random()     0 - .9999999



////////////////////// Guess correct number 

let guessNum = function(guess){
    let min = 0
    let max = 1
    
    let randomNum = Math.floor(Math.random() * (max - min + 1)) + min
    console.log(randomNum)
  return   chequing = guess === randomNum

}

console.log(guessNum(1))
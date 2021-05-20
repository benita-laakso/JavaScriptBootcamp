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

window.addEventListener('keypress', function(e){
   const guess = String.fromCharCode(e.charCode) // Converting charactercode to letter
   game1.makeGuess(guess)
   puzzleEl.textContent = game1.puzzle
   guessesEl.textContent = game1.statusMessage
 
})

//1. Making a HTTP request
//Anitiolising a request thgrough a constructor function provide to us by the browser
//WE will use the new opperator with the constructor function
//This constructor function takes no arguments
const request = new XMLHttpRequest()
//We can use XMLHttpRequest() constructor function to transfer information



//We ad an eventlistener, when we actualy have the information
request.addEventListener('readystatechange', (e) => {
   if(e.target.readyState === 4) {//e.target contains the request itself, 4 - DONE
      console.log(e.target.status) 
      const data = JSON.parse(e.target.responseText) // responseText - contains the JSON response
      console.log(data)
   }
   //The status code value determines if it was a succsess
//The status is acessable e.target.status

})

//2.We use a few methds on request, to set things up
//open is a method that anitialises our request
//in open we initialise the URL and HTTP method 
//get is a HTTP method
request.open('GET', 'http://puzzle.mead.io/puzzle')
//send is also a method
request.send()
//WE send off the request and the prosses gets initialised
//This takes time;
//time to conect with the server, 
//time for server to do what it is suposed to do
//time for the server to get ist responce back to you




/*
// Making a HTTP request
const request = new XMLHttpRequest()

//We ad an eventlistener, when we actualy have the information
request.addEventListener('readystatechange', (e) => {
   if(e.target.readyState === 4 && e.target.status === 200) {//e.target contains the request itself, 4 - DONE  Status 200 , it fineshed sucessfully
      const data = JSON.parse(e.target.responseText) // responseText - contains the JSON response
      console.log(data)
   }else if(e.target.readyState === 4 ) {
      console.log('An error has accured')
   }
})

request.open('GET', 'http://puzzle.mead.io/puzzle')
request.send()



// For the puzzle API ,we just had a single URL that we could acsess
//The status code value determines if it was a succsess
//The status is acessable e.target.status
*/




//Usefull links
//https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest

//https://httpstatuses.com/

//////What is the difference between XMLHttpRequest   HTTP request?
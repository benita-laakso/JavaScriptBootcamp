//When working with callback patern it is common to get to arguments
//The first argument is eny potentioal error, the second is sucsess data, in this case is a puzzle
//In app.js
/*getPuzzle( (error,puzzle)=>{
   console.log(puzzle)
})
*/
//a callback function can be executed whenever we need to and we can pass arguments to it 
//What argument does this call back expect?

//My defenition, When you call the function  you triger a function that lives inside of it. Pass a function as a prop
const getPuzzle = (wordCount, callback) =>{  //wordCount value,refers to the number we added to the getPuzzle call
    const request = new XMLHttpRequest()
    
    request.addEventListener('readystatechange', (e) => {
       if(e.target.readyState === 4 && e.target.status === 200) {//e.target contains the request itself, 4 - DONE  Status 200 , it fineshed sucessfully
          const data = JSON.parse(e.target.responseText) // responseText - contains the JSON response
          callback(undefined, data.puzzle) 
          //Caling the callback function when we have the data
          //for the first argument er are going to define the error/pass in the error  
          //for second argument we are passing in the puzzle
          //We call our callback function // with nested functions we are able to acsess the parent scope callback variable from this function.Alowing us to respond to the request from app.js
       }else if(e.target.readyState === 4 ) {
           callback('An error has taken place',undefined)
          //Calling the callback function and providing it with the first argumenrt "error", it is going to be a string
         //The second argument is for the sucsess, we don't want to define this for the error
        //undefined is the default argument value, so you can leave the word undefined off
       }
    })
    
    request.open('GET', `http://puzzle.mead.io/puzzle?wordCount=${wordCount}`)//by default this is an asyncrounouse request, alowing us to move on and do other things before http request compleats
    request.send()    //wordCount value, refers to the number we added to the getPuzzle call,passed in at top of this function
       
    }


/////////////////////////

// We have a single argument callback
// the calback doesen´t desn´t wether things are going well or poorly
const getDataCallback = (callback) =>{

    setTimeout(()=>{
       callback(undefined , 'The time is up') // Once we are ready to call the callback we have acsess to an argument
       //the order of the arguments are determening wether things went well or poorly
    }, 2000 )
}

//caling the function
getDataCallback((err,data) => {
    if(err){}
    else{
        console.log(data)
    }
})

//----------
//calling getPuzzle using callback patern, we don´t expect anything to be returned from getPuzzle, insted we pass in a function and expect that function to be called with the information when it is actually ready
getPuzzle("1", (error)=>{// We are requesting a spesific thype of puzzle, containing 1 word
    if(error){            
       console.log(`Error: ${error}`)
    }else{
       console.log(puzzle)
    }
 })
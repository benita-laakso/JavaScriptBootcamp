// push()   

//join('')
/*
  return `Nice try the correct word was "${this.word.join('')}"`
  Chaning al the separated carracters in the array into one word
*/

//JSON.parse()      Converting JSON into Java Script Object

// callback functions    
//My defenition, When you call the function  you triger a function thatlives inside of it 

//1.A callback is just a function that you pass into another function as one of its arguments 
//2.The function you passed the callback into, calls the callback in its body.

const myCallback= ()=> {
  console.log('The callback says hello!')
}

const someOtherFunction = (callback)=>{
 callback()
}

someOtherFunction(myCallback)


//setTimeout()     
//takes two arguments
//1. The code to run after a sertain amount of time has passed
//2. How much time do you want to wait? (In millisecounsd)
setTimeout(()=>{
  console.log('The time is up')
 }, 2000 )

 ///////
//typeof()
 
 
 if(typeof num === 'number'){    }

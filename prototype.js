//Prototype chain/tree

//Primitive value : string, number,boolean,null,undefined


//Object: myObject --> Object.prototype --> null
//Array: myArray --> Array.prototype --> Object.prototype -->null
//Function : myFunction --> Function.prototype --> Object.prototype --> null
//String : myString --> String.prototype --> Object.prototype --> null
//Number: myNumber --> Number.prototype --> Object.prototype --> null
//Boolean :myBoolean --> Boolean.prototype --> Object.prototype --> null

//Prototype chain/tree

// product --> Object.prototype --> null
//1.Does product have what we are looking for?


//This object is created with a literal cyntext, 
//JS is interperting this and knows that we are trying to create a new object
const product = {
    name:'Influence'
}
//Theese two pices of code do the same
const product2 = new Object()
product.name = 'Influence'

//You can anitialise objects with values when you are using constructor functions
//Provide the object as the first and only argument
//Same code writen in a third way
//This way wont be used as the language knows what to do with the different characaters,
//Use the first version above insteda, this is just explanation
const product3 = new Object({
    name:'Influence'
})



// hasOwnProperty() - Checking if an object has a property
//                 - Returning true or false
// Expects a string with the property name that you are looking for

console.log(product.hasOwnProperty('name'))

//Prototype chain/tree
//1.Does product have what we are looking for? If yes us it, if not continue step 2
//2. Linking up the prototype chain  --- Object.prototype
//Object.prototype is where methods like hasOwnProperty live, can be viued in console  __proto__

console.log(product)

//Adding a brand new method to all of our objects
Object.prototype.someNewMethod = () => 'This is the new method'

console.log(product.someNewMethod())
console.log(product)


/// -------Array Prototype----------
//Array: myArray --> Array.prototype --> Object.prototype -->null

console.log('Array Prototype starts here')

const team = ['Luke', 'Maddison']

console.log(team)

console.log(team.hasOwnProperty('length'))
//--> true  array has the property length

console.log(team.hasOwnProperty('filter'))
//--> false array does not have filter, filter is not on the array itself
//-->  array.prototype has filter


//------------Strinng Prototype------------
console.log('String Prototype begins here')
//String : myString --> String.prototype --> Object.prototype --> null

//The string gets converted to an object behind the scenes by Java Script
//It then calles that methods alowing us to do whatever we want ex spilt up a strig
const product = 'Computer'
console.log(product.split(''))

//Only use this to viue the String methods available 
const product2 = new String('Phone')
console.log(product2)
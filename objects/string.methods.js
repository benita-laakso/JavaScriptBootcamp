let name = '            Anna'

console.log(name.length)///This is not a method

// Method is a object property whos value is a function
console.log(name.toUpperCase()) // This is a method

console.log(name.toLowerCase())

let password = 'abs123password'

console.log(password.includes('password'))

console.log(name.trim()) //Removes white space in both ends of string


///////////////////////////


let isValidPassword = function(password) {
     return password.length > 8 &&  !password.includes('password') 
}
console.log(isValidPassword('asdfp'))
console.log(isValidPassword('abc123!@#$%^&'))
console.log(isValidPassword('asdfpasdfpoijpassword'))



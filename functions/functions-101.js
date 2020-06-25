//Function - input (argument),code, output (return value)
let greetUser = function(){
    console.log('Welcome')
}
greetUser()

let scuare = function(num){
    let resault = num * num
    return resault 
}

console.log(scuare(3))

let value = scuare(10)

console.log(value)

//////////////////

let convertFahrenhaitToCelsius = function(fahrenhait){
    let celsius = (fahrenhait - 32) * 5/9
      return celsius
}
//console.log(convertFahrenhaitToCelsius(32))
let tempToday = convertFahrenhaitToCelsius(32)
console.log(tempToday)

//undefined is the default return value if you dont explisitly return enything
const processData = () =>{

}

console.log(processData())

/*Function Expressions

A JavaScript function can also be defined using an expression.
A function expression can be stored in a variable:

var x = function (a, b) {return a * b};

After a function expression has been stored in a variable, 
the variable can be used as a function:

var x = function (a, b) {return a * b};
var z = x(4, 3);

*/








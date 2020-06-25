// variable that is undefined
let name

name ='Jen'

if(name ===undefined){
    console.log('Please enter an name')
}else{
    console.log(name)
}
//undefined function
//When an argument isen´t provided,
//but it´s named in the function deffenition
//undefined is assigned as it´s value

let square = function(num){
    console.log(num)
}

//undefined as the function return default value
let resault = square()

console.log(resault)

// Somtimes we want to clear the value
//null is explisedly cleared by the developer
let age = 27
age = null

console.log(age)
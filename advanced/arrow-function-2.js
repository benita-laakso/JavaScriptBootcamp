/// function()    Verses   ()=>

// arguments oanly exist in regulare function() , arguments don't exist in arrow functions
const add =  function(){
    return arguments[0] + arguments[1]
}

console.log(add(11,22,33,44))

const car = {
    color:'Red',
    getSummery: function(){
        return `The car is ${this.color}`
    }
}
console.log(car.getSummery())
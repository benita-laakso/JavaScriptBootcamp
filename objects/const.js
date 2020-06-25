//const based variables can not have their values reasigned
const person = {
    age: 25
}

person.age = 28
console.log(person)

// let based variables can have their values reasigned

let other = {
      age:49
}
other = {
    age:5
}
other = 'Hi'

console.log(other)
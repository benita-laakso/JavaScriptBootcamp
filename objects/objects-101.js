//property a pice of data storde in an object
let myBook = {
    title: 'Hello',
    author: 'Philip Jones',
    pageCount:'125'
};

console.log( `${myBook.title} by ${myBook.author}`)

myBook.title = 'Anywhere'

console.log( `${myBook.title} by ${myBook.author}`)

/////////

let person ={
     name:'Anna',
     age:34,
     location:'Helsinki'
}

console.log(`${person.name} is ${person.age} and lives in ${person.location}`)

person.age = person.age + 1 

console.log(`${person.name} is ${(person.age)} and lives in ${person.location}`)
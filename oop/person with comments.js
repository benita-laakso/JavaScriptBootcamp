//Constructor functions are othen writen with upercase first letter Person
//Making it abit more obviouse that the function should be called with the new operator
//There is no need to return enything from the constructor function the new object will be used
// the new operator creates a new object and uses it as the return value 

//Prototypal Inheratance

const Person = function(firstName, lastName, age, likes =[]){//If ikes is not provided use an empty array
    this.firstName = firstName
    this.lastName = lastName
    this.age = age
    this.likes = likes
}
//By seting up a method on the prototype property of the constructor function
//we sucsessfully share it with al instances so they can acsess it
//prototyp - "Links" the getBio() (Meaning with Person, me and Person2 have acsess to it)
//prototype is an object
Person.prototype.getBio = function(){
    let bio = `${this.firstName} is ${this.age}.`
    //this.likes is an array    
    this.likes.forEach((like)=>{ //arrow functions don't bind a this value. So it uses whatever this value its parent has
        //Taking a string and seting it equal to itself + something else
        //bio = bio + ` ${this.firstName} likes ${like}`
        bio += ` ${this.firstName} likes ${like}.`

    })
    return bio

}

Person.prototype.setName = function(fullName){
    const names = fullName.split(' ')//Spliting the string where the space is (between the firstname and surname)
    //split returns an array with two items
    this.firstName = names[0]
    this.lastName = names[1]

}

//Objects of the same type are created by calling the constructor 
//function with the new keyword:

const me = new Person('Andrew', 'Mead', 27, ['Teaching', 'Walking'])

me.getBio = function(){
    return 'This is fake'
    //we are setting up a new property on our me instance
    //me has acsess to getBio()  Person.prototype.getBio = function()...
    //we are changing the value of getBio() in the me instance = 'This is fake'
    //This change has no effect on person to
}

me.setName('Alexis Turner')
console.log(me.getBio())


const Person2 = new Person('Jen', 'Mead',24)
console.log(Person2)
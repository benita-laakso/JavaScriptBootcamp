//Prototypal Inheratance
class PersonClass{
    constructor(firstName, lastName, age, likes =[]){
        this.firstName = firstName
        this.lastName = lastName
        this.age = age
        this.likes = likes
    }
    getBio(){
        let bio = `${this.firstName} is ${this.age}.`  
    this.likes.forEach((like)=>{ 
        bio += ` ${this.firstName} likes ${like}.`
    })
    return bio 
    }
    setName(fullName){
    const names = fullName.split(' ')
    this.firstName = names[0]
    this.lastName = names[1]

    }
}

const  myPerson = new PersonClass('Andrew', 'Mead',27,['Teaching'])
console.log(myPerson.getBio())


myPerson.getBio = function(){
    return 'This is fake'
}

myPerson.setName('Alexis Turner')
console.log(myPerson.getBio())


const myPerson2 = new PersonClass('Jen', 'Mead',24)
console.log(myPerson2)

console.log('----------------')
//---------PersonClass and  Person have same funktionaliteis
//--------- Manny finde the class based version to be more readable (PersonClass)

const Person = function(firstName, lastName, age, likes =[]){ //Constructor function
    this.firstName = firstName
    this.lastName = lastName
    this.age = age
    this.likes = likes
}

Person.prototype.getBio = function(){
    let bio = `${this.firstName} is ${this.age}.`  
    this.likes.forEach((like)=>{ 
        bio += ` ${this.firstName} likes ${like}.`
    })
    return bio 

}

Person.prototype.setName = function(fullName){
    const names = fullName.split(' ')
    this.firstName = names[0]
    this.lastName = names[1]

}

const me = new Person('Andrew', 'Mead', 27, ['Teaching', 'Walking'])

me.getBio = function(){
    return 'This is fake'
}

me.setName('Alexis Turner')
console.log(me.getBio())


const Person2 = new Person('Jen', 'Mead',24)
console.log(Person2)
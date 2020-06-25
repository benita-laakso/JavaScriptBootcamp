//Prototypal Inheratance
//myPerson --> Person.prototype --> Object.prototype --> null
//Start of with the instance myPerson --> inherts stuf from Person.prototype--> links to object.prototype

class Person{
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
    set fullName(fullName){
        const names = fullName.split(' ')
        this.firstName = names[0]
        this.lastName = names[1]
        }
  get fullName (){
      return `${this.firstName} ${this.lastName}`
  }
}

//Sub class
//Employee has the exact same behaviour as a peson
 class Employee extends Person {
     constructor(firstName,lastName,age,position,likes){
         //Inside of our sub class  constructor function we have to call the parents constructor function via super
      super(firstName, lastName,age,likes)
        this.position = position
        }
   getBio(){
       return `${this.fullName} is a ${this.position}.`
   }
   getYearsLeft(){
       return 65 -this.age
   }
 }

  
class Student extends Person {
    constructor(firstName, lastName, age, grade,likes ){
        super(firstName, lastName, age,likes)
        this.grade = grade
    }
    updateGrade(change){
        //this.grade = this.grade + change
        this.grade += change
    }

    getBio(){
        const status = this.grade >= 70 ? 'passing' : 'failing'
        return `${this.firstName} is ${status} the course.`    
    }
   
} 




const me = new Employee ('Andrew', 'Mead', 27, 'Teacher',[] )
me.fullName = 'Clancy Turner'
console.log(me.getBio())


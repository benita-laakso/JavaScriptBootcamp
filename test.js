const list = [{
    name :'Anna',
    age :25
},
{name :'Sophie',
age :27},
{
name :'Hether',
age :17},
{
    name :'Anna',
    age :58
},
{
    name :'Anna-Bell',
    age : 18
},
{name :'Sonja',
age :22},
{
    name :'Anna',
    age :34
}]



const leaglAge = list.filter(function(item){
    //return item.age >= 20
    return item.name === 'Anna'
     })

console.log(leaglAge)


const word = 'Hello'
console.log(word.toLowerCase().split(''))

const animals = ['cat','dog']
console.log(animals.includes('dog'))

 console.log('----')
 

 const Person = function (firstName){
     this.firstName = firstName
 } 

Person.prototype.getBio = function(){
    return`${this.firstName} is comming as well`
}
const me = new Person('Jamie')

console.log(me.firstName)
 console.log(me.getBio())

 console.log('---------')

 
 const myCallback= ()=> {
      console.log('The callback says hello!')
 }

 const someOtherFunction = (callback)=>{
     callback()
 }

 someOtherFunction(myCallback)

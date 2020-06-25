///////////Using Date without librarys
////////////__________My code start________________///////////////

const now = new Date()

let nameOfMonth = function(){
      let name = now.getMonth()
      if(name === 3){
       console.log('April')
      }
      else{
          console.log('The month has not been calculated yet')
      }
      //return name
}

console.log(nameOfMonth())
////////////__________My code end________________///////////////



//Unix Epoch -January 1st 1970 00:00:00
// Positive numbers for all points in times after this
// Negative numbers for all points in time before
// 0 represents exacly Unix Epoch
//we increas the number of milliseconds
// Example 1000 is a second after this

const now = new Date('January 21 2001 6:25:01')

console.log(now.getTime()); //returns a number in milliseconds of the time difference between 2001 and 1970
/*
console.log(`Year ${now.getFullYear()}`)
console.log(`Month ${now.getMonth()}`)
console.log(`Day of the month: ${now.getDate()}`)
console.log(`Hour: ${now.getHours()}`)
console.log(`Minute ${now.getMinutes()}`)
console.log(`Seconds ${now.getSeconds()}`)*/


//Unix Epoch -January 1st 1970 00:00:00


const now = new Date() // Object representing current date
const timestamp = now.getTime() //The getTime() method returns the number of milliseconds since the Unix Epoch.

const myDate = new Date(timestamp) //Pasing in the difference in milliseconds
console.log(myDate.getFullYear())



////My version//////////////
const date1 = new Date('January 21 2001 6:25:01')
const date1timestamp = date1.getTime()


const date2 = new Date('May 29 2001 13:00:00')
const date2timestamp = date2.getTime()


const dateTester = function(){
    if(date1 < date2){
        console.log('Date one happend first')
        console.log(date1)
     
      
    }else{
        console.log('check code')
    }
}

dateTester()
/////////////my version end//////////////////////
const dateTesterAndrew = function(){
    if(date1timestamp < date2timestamp){
        console.log('This date came first')
        console.log(date1.toString())
     
      
    }else if(date2timestamp < date1timestamp) {
       
        console.log(date1.toString())
    }
}
dateTesterAndrew()
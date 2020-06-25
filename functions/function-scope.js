//Global scope (tempOne,tempTwo,convertFahrenhaitToCelsius)
    //Local scope(fahrenhait,celsius)
        //Local scope (isFreezing)
let convertFahrenhaitToCelsius = function(fahrenhait){
    let celsius = (fahrenhait - 32) * 5/9
      
      if(celsius <= 0 ) {
          let isFreezing = true
          console.log('It is freezing')
      }
      return celsius
}

let tempOne = convertFahrenhaitToCelsius(3)
let tempTwo = convertFahrenhaitToCelsius(100)

console.log(tempOne)



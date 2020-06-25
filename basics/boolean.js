let temp = 110
//Using a comparison operator to create a boolean
//Are these two things equal?
let isFreezing = temp <= 32
//Chequing if isFreezing true
if(isFreezing){
    console.log('It is freezing')
}

if(temp >= 110){
    console.log('It is super hot')
}

// === equal operator
//!== not equal operator
// <= less then or eqal to operator
// >=  greater then or equal to

let age = 65
let isChild = age <= 7
let isSenior = age >= 65

console.log(isChild)
console.log(isSenior)

if(isChild){
    console.log('Child tikets are 5€')
}

if (isSenior){
    console.log('Seniors get 5% discount')
}

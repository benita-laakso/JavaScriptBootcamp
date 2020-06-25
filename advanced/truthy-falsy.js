const products = []
const product = products [0]

console.log(product)
//When we try to acsess an item in an array that doesn´t exist we get undefined

console.log('------------')
//Truthy values that resolve true in a boolean context
//Falsy values that resolve to false in a boolean context
//Falsy values - false, 0, empty string, null, undefined, NaN
//Truthy EVERYTHING ELSE arrays, objects 
//even if they have no properties or no items in array
// 'string with a value'


console.log('------------')


if(product !== undefined){
    console.log('Product found')
}else{
    console.log('Product not found')
}

console.log('------------')

if('testing'){//JS is expecting a boolean, it will do it´s best to convert into a boolean
    // The string ends up beeing a truthy value
    console.log('Product found')
}else{
    console.log('Product not found')
}

console.log('------------')

if(undefined){//Falsy values - false, 0, empty string, null, undefined
    ///When JS converts  undefined to a boolean it ends up being false
    console.log('Product found')
}else{
    console.log('Product not found')
}
console.log('------------')

if(0){//Falsy values - false, 0, empty string, null, undefined
    ///When JS converts 0 to a boolean it ends up being false
    console.log('Product found')
}else{
    console.log('Product not found')
}
console.log('------------')

if(''){//Falsy values - false, 0, empty string, null, undefined
    ///When JS converts ' 'empty string to a boolean it ends up being false
    console.log('Product found')
}else{
    console.log('Product not found')
}
console.log('------------')

//Truthy EVERYTHING ELSE arrays, objects even if they have no properties or no items in array
// An empty array or a refference of an array will be truthy
if([]){
    console.log('Product found')
}else{
    console.log('Product not found')
}


console.log('------------')

// An empty array or a refference of an array will be truthy
if(products){
    console.log('Product found')
}else{
    console.log('Product not found')
}
console.log('------------')

// An object is always truthy, even when it is empty
if({}){
    console.log('Product found')
}else{
    console.log('Product not found')
}
let add = function(a, b, c){
    return a + b + c
}

let result = add(10, 1, 5)
 console.log(result)

 ///Default value for argument

 let getScoreText = function (name ='Anonymus', score = 0){
    return `Name: ${name} Score: ${score}`
 }

let scoreText = getScoreText('Andrew', 100)

//if you don´t want to give name bu do want to give score
//let scoreText = getScoreText(undefined, 100)

console.log(scoreText)

//-------------------

let tipCalculator = function (total, tipPresent = .2){ 
    
    return `Your ${tipPresent*100}% tip would be ${total * (tipPresent)} dollars `
}

let amount = tipCalculator()
console.log(tipCalculator(100, .5))



const gradeCalculator = function(score, maxScore){
        if(typeof score !== 'number' || typeof maxScore !== 'number'){
            throw Error('Please enter a number')
        }
        const percent = (score/maxScore) * 100
        let grade = ' '

        if(percent >= 100){
           grade = 'A'
        }else if (percent >= 89){
            grade = 'B'
        }else if (percent >= 79){
            grade = 'C'
        }else if(percent >= 69){
            grade = 'D'
        }else{
            grade ='You can retace the exame in June' 
        }
        return `You gott ${percent} % ${grade}`
}
    try{
        const yourGrade = gradeCalculator('bu',100)

        console.log(yourGrade)
    
}catch(e){
    console.log(e.message)//Prints the Error message from trow
}



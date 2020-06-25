//In a scope you can acess any variable 
//defined in that scope or scope of parent/anseter

let varOne ='varOne'

if(true){
    console.log(varOne)
    let varTwo ='varTwo'
    console.log(varTwo)
    if(true){
        let varFour = 'varFour'
        console.log(varFour)
    }
}
if(true){
    let varThree ='varThree'
    console.log(varThree)
}

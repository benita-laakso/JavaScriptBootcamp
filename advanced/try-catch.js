const getTip = (amount) => {
    if (typeof amount === 'number'){
    return amount * .25
    }else{

        throw Error ('Argument must be a number')//Throwing our own custome made error
        //printing more info about the Error, why and where
    }


}
//With out the try catch the program would crach when trowing the Error is triggerd
try {
    const result = getTip('ding')
    console.log(result)
}
//catch only runs when the try throws an Error
 catch (e){
    console.log('catch blcok is running')
 }


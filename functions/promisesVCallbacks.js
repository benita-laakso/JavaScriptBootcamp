
//Callback

const getDataCallback = (callback) =>{

    setTimeout(()=>{
       callback('This is my callback error',undefined)
       callback('This is my callback error',undefined)
       }, 2000 )
}

//caling the function
getDataCallback((err,data) => {
    if(err){
        console.log(err)
    }
    else{
        console.log(data)
    }
})

//-------Promise----------

const getDataPromise = (data) => new Promise ((resolve,reject )=>{
    setTimeout(()=>{
       resolve(`This is my sucsess data: ${data}`)
       //reject ('This is my promise error')
       //reject ('This is my promise error')
        }, 2000 )
})


const myPromise = getDataPromise(123)
myPromise.then((data)=>{
        console.log(data)
},(err)=>{
    console.log(err)
})

//By using then twise. We are not requesting the data twise
//We are doing two different things with the same information
myPromise.then((data)=>{
    console.log(data)
},(err)=>{
console.log(err)

})

//After 2 secons both then methods ran
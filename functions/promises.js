
//Callback

const getDataCallback = (num, callback) => {
        
    setTimeout(()=>{
        if(typeof num === 'number' ){
            callback(undefined, num * 2)
        }else{
            callback('Number must be provided')
        }
      
       }, 2000 )
}

//caling the function

getDataCallback(2,(err,data) => {
    if(err){
        console.log(err)
    }
    else{// using data and passing it into a new version of GettDataCallback(),to multiply that to
        //1. Call the function again
        getDataCallback(data,(err,data)=>{//pasing in error and new data
            
            if(err){
                console.log('err')
            }else{
                console.log(data)
            }
        })
        
    }
})

//-------Promise----------

const getDataPromise = (num) => new Promise ((resolve,reject )=>{
    setTimeout(()=>{
        typeof num === 'number' ? resolve(num * 2) : reject('Number must be provided')
        }, 2000 )
})

//the then function gets the new data(the one that has been pased in and calculated)

//////This code is a bad way
getDataPromise(2).then((data) => {
    //calling getDataPromise again, pasing in the calculated data
    getDataPromise(data).then((data) => {
        console.log(`Promise data ${data}`)
    }, (err) => {
        console.log(err)
    })
}, (err) => {
    console.log(err)
})
//////////This code does the same in the correct way
getDataPromise(10).then((data)=>{
 //we return a Promise fro our then function
 //when we return a pPromis from a nother Promises handler we cvreate Promise chaining
 return   getDataPromise(data)//using new data
}).then((data)=>{
    return 'This is some test data'// with Promise chaning we can return anything we like a string
}).then((data)=>{//and that gets pased along to the nextstep in the Promise chain(the string gests passed here)
    console.log(data)
}).catch((err) => {
    console.log(err)
})
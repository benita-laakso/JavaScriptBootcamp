//async()   Always returns a Promise

const getDataPromise = (num) => new Promise ((resolve,reject )=>{
    setTimeout(()=>{
        typeof num === 'number' ? resolve(num * 2) : reject('Number must be provided')
        }, 2000 )
})

const processData = async() =>{
    let data = await getDataPromise(2) //Using the await operator with a function that returns a Promise
    //If we want the value that comes back from the getDataPromise() , we need to store it in a variable upfront
    data = await getDataPromise(data)
    data = await getDataPromise(data)
    return data
}

processData().then((data)=>{
    console.log('Data', data)
}).catch((error)=>{
    console.log('Error', error)
//When we use await and one prromise rejects its lice we are throwing an error from the function
})



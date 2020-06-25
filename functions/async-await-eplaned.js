//async()   Always returns a Promise

const processData = async() =>{
   throw new Error ('Something went wrong')
    return 12
}

processData().then((data)=>{
    console.log('Data', data)
}).catch((error)=>{
    console.log('Error', error)
})
//Wen the Promis is returned we are printing the string Data and the data itself.(console.log('Data',data))
//The error will be printed becouse we throw an Error in the function body 

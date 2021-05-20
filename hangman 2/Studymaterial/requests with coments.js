const getPuzzle = () =>{
    return 'My new puzzle'
    // The get puzzle function has the tdata tu return right oway that is why this works
    //This is not the case if we add a http request
    //We have to wait for the callback functio to fire first, then we have acsess to the data
}


// Making a HTTP request
const request = new XMLHttpRequest()

//We ad an eventlistener, when we actualy have the information
request.addEventListener('readystatechange', (e) => {
   if(e.target.readyState === 4 && e.target.status === 200) {//e.target contains the request itself, 4 - DONE  Status 200 , it fineshed sucessfully
      const data = JSON.parse(e.target.responseText) // responseText - contains the JSON response
      console.log(data)
   }else if(e.target.readyState === 4 ) {
      console.log('An error has accured')
   }
})

request.open('GET', 'http://puzzle.mead.io/puzzle')
request.send()


//Making a HTTP request takes a bit of time :makig request to a server, sending data back



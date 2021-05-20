
//getPuzzle takes wordCount and returns a Promise
//constructor function for Promise takes an argument,that is a function
//the function gets called with two arguments;
//resolve and reject are functios
const getPuzzle = (wordCount) => new Promise((resolve, reject)=>{
 //wordCount value,refers to the number we added to the getPuzzle call
 const request = new XMLHttpRequest()

 request.addEventListener('readystatechange', (e) => {
    if(e.target.readyState === 4 && e.target.status === 200) {//e.target contains the request itself, 4 - DONE  Status 200 , it fineshed sucessfully
       const data = JSON.parse(e.target.responseText) // responseText - contains the JSON response
       resolve(data.puzzle) 
    }else if(e.target.readyState === 4 ) {
        reject('An error has taken place')
    }
 })
 
 request.open('GET', `http://puzzle.mead.io/puzzle?wordCount=${wordCount}`)//by default this is an asyncrounouse request, alowing us to move on and do other things before http request compleats
 request.send()    //wordCount value, refers to the number we added to the getPuzzle call,passed in at top of this function
   

})

const getCountry = (countryCode) => new Promise((resolve,reject)=>{

const countreyRequest = new XMLHttpRequest()

countreyRequest.addEventListener('readystatechange', (e) => {
   if(e.target.readyState === 4  && e.target.status === 200){
      const data = JSON.parse(e.target.responseText)
      const country = data.find((country) => country.alpha2Code === countryCode)
      resolve(country)
      }
      else if(e.target.readyState === 4){
         reject('Unable to fetch data')
      }
   
})

countreyRequest.open('GET','https://restcountries.eu/rest/v2/all')
countreyRequest.send()

})




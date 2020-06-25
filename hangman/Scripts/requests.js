
//getPuzzle takes wordCount and returns a Promise
//constructor function for Promise takes an argument,that is a function
//the function gets called with two arguments;
//resolve and reject are functios
const getPuzzle = async(wordCount) => {
   const response = await fetch(`http://puzzle.mead.io/puzzle?wordCount=${wordCount}`)
      if(response.status === 200){
         const data = await response.json()
         return data.puzzle
      }else{
         throw new Error('Unable to get puzzle')
      }

}
const getCurrentCountry = async () =>{
   const location = await getLokation()
   return getCountry(location.country)
}

const getCountry = async (countryCode) => {
      const response = await fetch('https://restcountries.eu/rest/v2/all')
   
      if (response.status === 200){
         const data = await response.json()
         return data.find((country) => country.alpha2Code === countryCode)
      }else{
         throw new Error('Unable to fetch country')
}
}

const getLokation = async () => {
   const response = await fetch('https://ipinfo.io/json?token=debfd83366f742')
      if (response.status === 200){
         return response.json()
      }else{
         throw new Error('Unable to get fetch info')
      }
}


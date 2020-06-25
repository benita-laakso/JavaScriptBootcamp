const data = {
    locations: [],
    get location(){
        return this._location
        //We return the value the user should get when they try to read the property
    },
    set location(value){
        this._location = value.trim() //storing the data in this._location
        this.location.push(this._location) //adding the location enterd to the array
    }
}
//code that uses the data object
data.location = ' Philadelphia '
data.location = ' New York'
console.log(data)

// set gets called with an argument,
//it gets called with the value that the user tryed to set

//setters 'set' an external value to an object's property
//getters 'get' a specific value from a object's property and provide that value to the program.  

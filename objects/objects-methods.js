// method is a object property whos value is a function
//You have acsess to the objects properties inside of the function
//this references the object the method is defined on
let restaurant = {
    name:'Rosso',
    guestCapasity: 75,
    guestCount: 0,
    checkAvailability: function(partySize){
        let seatsLeft = this.guestCapasity - this.guestCount
        return partySize <= seatsLeft //returns a boolean
    },
    seatParty: function(partySize){
        this.guestCount = this.guestCount + partySize
    },
    removeParty: function(partySize){
        this.guestCount = this.guestCount - partySize
    },
    testParty: function(partySize){
        this.guestCount = this.guestCount - partySize
    }
}


restaurant.seatParty(72)
console.log(restaurant.checkAvailability(4))
restaurant.removeParty(5)
console.log(restaurant.checkAvailability(4))


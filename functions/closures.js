//Closure is a combination of a function and the lexecol scope in witch it was defined
const createCounter = () => {
    let count = 0 

    return {
        increment(){
            count++
        },
        decrement(){
            count--
        },
        get() {
            return count
        }
    }

}

const counter = createCounter() // What comes back is an object, on the object we have functions
//All of these functions are using closure to acsess count
//counter is only modefiable by a spesific set of methods that we have created
//using our methods
counter.increment()
counter.decrement()
counter.decrement()
console.log(counter.get())

//Closure, you can only modefy count via the two methods we have created

//---------Using a functio to ge erate a function------

const createAdder = (a) => {
        return (b) => {
            return a + b
        }
}

const add10 = createAdder(10)

console.log(add10(2))
console.log(add10(-2))

const add100 = createAdder(10)
console.log(add100(-90))

//Tiper

const createTipper=(percent) => {
       return(amount) => {
           return amount * percent
       }
}

const tip10 = createTipper(0.10)
console.log(tip10(100))


const tip20 = createTipper(0.20)
console.log(tip20(100))
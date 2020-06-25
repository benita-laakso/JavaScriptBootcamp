let myBook = {
    title: 'Hello',
    author: 'Philip Jones',
    pageCount:'125'
};

let otherBook = {
    title: 'Vinters tale',
    author: 'Sophie Hastings',
    pageCount:'225'
};

let getSummasy = function(book){
    return {
        summary:`${book.title} by ${book.author} `,
        pageCountsummery:`${book.title} is ${book.pageCount} pages long `
    }

}

let bookSummery = getSummasy(myBook)
let otherBooksummery= getSummasy(otherBook)

console.log(bookSummery.pageCountsummery)

//////////////

let tempreatureCalculator = function(fahrenhait){

    return{
    fahrenhait:fahrenhait,
    celsius: (fahrenhait - 32) * 5/9,
    kelvin : (fahrenhait + 459.67) * 5/9
}

}

let differentTemperatures = tempreatureCalculator(0)
console.log(differentTemperatures)

console.log(`${differentTemperatures.fahrenhait} fahrenhait = celsius ${differentTemperatures.celsius}, kelvin ${differentTemperatures.kelvin}`)


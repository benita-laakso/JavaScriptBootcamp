/*const myAge = 27
let message = myAge >= 18 ? 'Yes,you can vote': 'No, you can´t vote' 
console.log(message)
*/


const myAge = 27

const showPage = () =>{
   return  'Showing the page'
}
const showErrorPage = () =>{
    return'Sowing error page'
}

const message = myAge >= 21 ? showPage () : showErrorPage()
console.log(message)




const team = ['Tyler', 'Porter']

const ok = ()=>{
    return `Team size ${team.length}`
}

const toMany = ()=>{
    return 'Too many people on your team'
}
const checkTeam = team.length <= 4 ? ok() : toMany()

console.log(checkTeam)





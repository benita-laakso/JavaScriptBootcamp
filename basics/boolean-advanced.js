let isAccountLocked = false
let userRole = 'admin'

if (isAccountLocked){
    console.log('Is account looked')
}else if(userRole === 'admin'){
   console.log('Welcome admin')
}
else{
    console.log('Welcome')
}
//Only one option will print
//https://stackoverflow.com/questions/20259351/difference-between-if-and-else-if/20259384

let temp = 14
if(temp <= 32){
    console.log('It´s too cold')
}else if(temp >= 110){
    console.log('It´s too hot')
}else{
    console.log('It´s pretty nice outside')
}
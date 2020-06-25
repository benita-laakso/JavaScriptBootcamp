temp = 55

if(temp >= 60 && temp <= 90){
console.log('It´s nice outside')
}

else if(temp <= 0 || temp >= 120){
    console.log('The wether is extream')
}else{
    console.log('Do what you want')
}

let isGuestOneVegan = false

let isGuestTwoVegan = false

if(isGuestOneVegan && isGuestTwoVegan){
    console.log('Only offer vegan dishes')
}else if(isGuestOneVegan || isGuestTwoVegan){
    console.log('You should offer at least some vegan food')
}else{
    console.log('You can offer anything on the menue')
}
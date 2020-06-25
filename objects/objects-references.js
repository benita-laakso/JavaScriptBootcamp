let myAccount ={
name:'Andrew',
expenses: 0,
income:0
}


let addExpenses = function(account, amount){
    account.expenses = account.expenses + amount 
    
}

let addIncome = function (account, amount){
        account.income = account.income + amount
        
} 

let resetAccount = function (account){
    account.expenses = 0
    account.income = 0
   
}

let AccountSummery = function(account){
   return  `The account ${account.name} has ${account.income - account.expenses}
    the expenses are ${account.expenses} the income is ${account.income}`

 
}


addExpenses(myAccount, 100)
addIncome(myAccount, 1000)
console.log(AccountSummery(myAccount))
resetAccount(myAccount)
console.log(AccountSummery(myAccount))
//addExpenses(myAccount, 2.5)
//console.log(myAccount)
const account = {
    name :"Anna Jackson",
    expenses : [],
    addExpence: function(description,amount){
        this.expenses.push({
            description: description,
            amount: amount})
        },
    
     income:[],

    addIncome: function (description,amount){
            this.income.push({
                description: description,
                amount:amount
            })
    } ,
    getAccountSummery: function(){
        let totalExpences = 0
       let totalIncome = 0
       let totalAmount = 0
    this.expenses.forEach(function(expence){
        totalExpences = totalExpences + expence.amount 
    })
    this.income.forEach(function(sum){
       totalIncome = totalIncome + sum.amount 
    })
    totalAmount = totalIncome - totalExpences
 
    return `${this.name} has ${totalAmount} in their account`
} 

}


account.addExpence('food', 30)
account.addIncome('Job', 2000)
console.log(account.getAccountSummery())


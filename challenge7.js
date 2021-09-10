// Create a closure called atm
// When called, it will accept an account #
// Give the account an opening balance of 0
// Have a function block for deposits. Deposit must be greater than 0. Also show that the deposit was successful
// Have a function block for withdrawal. But make sure the withdrawals do not bring the balance below 0. Also the
// withdrawal must be greater than 0. Finally, remind the user to take their money from the slot
// Have the ability to retrieve the account number and the balance

function ATM(num1) {
    let accountNumber = num1
    let balance = 0
    return {
        deposit: function(num2){
            if (num2 > 0) {
              balance += num2 
              return "Your deposit of $" + num2 + " was successful" 
            } else {
                return "The deposit was not above 0."
            }
        },
        withdraw: function(num2) {
            if (num2 > 0) {
                if (balance - num2 >= 0) {
                    balance -= num2 
                    return "Please take your $" + num2 + " from the slot"
                } else {
                    return "You do not have enough in your account to withdraw " + num2 + "."
                }     
            } else {
                return "The withdrawal amount was not above 0."
            }
        },
        getAccount: function() {
            return "This is the account number " + accountNumber + "." 
        },
        getBalance: function() {
            return "This is the balance $" + balance
        }
    }
}

let banking = ATM("12345")
console.log(banking.withdraw(60))
console.log(banking.deposit(100))
console.log(banking.withdraw(20))
console.log(banking.getBalance())
console.log(banking.getAccount())
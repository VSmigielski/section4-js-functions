// Create a function called sum
function sum() {
    let num1 = 2
    let num2 = 3
    let sum = num1 + num2
    console.log('The total of ' + num1 + " and " + num2 + " is " + sum)
}

sum()

// Create a function called sum1
let sum1 = function() {
    let num1 = 2
    let num2 = 3
    let sum = num1 + num2
    console.log('The total of ' + num1 + " and " + num2 + " is " + sum)
}

sum1()

// Create a function called sum2
function sum2() {
    let num1 = 2
    let num2 = 3
    let sum = num1 + num2
    
    return 'The total of ' + num1 + " and " + num2 + " is " + sum
}

console.log(sum2())
let total = sum2

console.log(total())

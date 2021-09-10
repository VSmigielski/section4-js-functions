// Create a function to add two numbers
const addNumbers = () => {
    console.log("The sum of 5 and 8 is " + (5 + 8))
}

addNumbers()

let addNumbers2 = () => console.log("The sum of 5 and 8 is " + (5 + 8))

addNumbers2()

const addNumbers3 = (num1) => console.log("The sum of " + 5 + " and 8 is " + (num1 + 8))

addNumbers3(5)

let addNumbers4 = (num1, num2) => {
    let total = num1 + num2
    console.log("The sum of " + num1 + " and " + num2 + " is " + total)
}

addNumbers4(5, 8)
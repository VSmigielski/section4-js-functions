function add(num1, num2) {
    function innerAdd(first, second) {
        return first + second
    }
    return innerAdd(num1, num2)
}

console.log(add(4, 6))

// anonymous function
function add1(num1) {
    return function(num2){
        return num1 + num2
    }
}

let add4 = add1(4)
console.log(add4(6))
console.log(add4(13))

function calculation(num1) {
    let result = num1
    return {
        add: function(num2){
            result += num2
        },
        subtraction: function(num2) {
            result -= num2
        },
        multiplication: function(num2) {
            result *= num2
        },
        division: function(num2) {
            result /= num2
        },
        getResult: function() {
            return result
        }
    }
}

let myCalc = calculation(0)
myCalc.add(43)
console.log(myCalc.getResult())
myCalc.multiplication(3)
console.log(myCalc.getResult())
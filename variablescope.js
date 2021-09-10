// Create a new variable called firstName
let firstName = "Jane"

function welcome() {
    console.log("Welcome " + firstName + " to variable scope")
}

function hello() {
    let lastName = "Smith"
    console.log("Hello" + firstName + " " + lastName)
}

welcome()
hello()

for (let i = 0; i < 10; i++) {

}

function welcome1() {
    let fName = "Jane"
    if (true){
        let lastName = "Smith"
        console.log('Hello ' + fName + ' ' + lastName)
    }
}
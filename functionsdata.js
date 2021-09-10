// Create a function that will take a parameter
function welcome(firstname = 'whoever', lastname = 'whatever') {
    let fullname = firstname + " " + lastname
    return "Welcome " + fullname + ", to the world of functions"
}

console.log(welcome('Veronica', 'Smigielski'))
console.log(welcome('Ha', 'Nguyen'))
console.log(welcome('Corwin', 'Heirman'))
console.log(welcome())

// Write a function to easy convert kilometers to miles
function kilometersToMiles(kilometers = 1) {
    let miles = kilometers * 0.62137
    return miles + " miles converts to " + kilometers + " kilometers"
}

console.log(kilometersToMiles(3))
console.log(kilometersToMiles(5))
console.log(kilometersToMiles(8))
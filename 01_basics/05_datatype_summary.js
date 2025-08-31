// Primitive Data Type -> (call by value)

// String, Number, Boolean, null, undefined, Symbol, BigInt

const score = 100 // number
const scoreValue = 10.9 // number
const isLogIn = false // boolean
const temperature = null // object
const money = undefined // undefined

const id = Symbol("234") // symbol
const anotherId = Symbol("2349") // symbol
console.log(id)
console.log(id === anotherId)

const bigNum = 212303422012323827893n // bigint




// Reference Type (Non Primitive) -> (call by reference)

// Array, Objects (key: value pairs), Functions (can be stored inside a variable)

// Array
const arr = ["hello", "chalo", "sab"]; // object

// Objects
let myObj = {
    name: "Pulkit",
    std: 4 
} // object

// Function
const myFunction = function(){
    console.log("Hi Everyone")
} // object function

// VIP
// Non primitive -> typeof se check karne par object type aata hai
// Return types of non primitive data types in JavaScript
// Array -> object, Objects -> object, Functions -> object function

console.log(typeof myFunction);



// JavaScript is Dynamically Typed Language because:-
// 1. Data type checking occurs on runtime
// 2. We don't explicitly defined data type while declaring the variable 
// 3. Variables can store values of different data types throughout its lifetime
let game = 3
// JavaScript is weak typed language because:-
// it allows to perform operations between different data types without explicitly converting them




// =======================================================

// Stack Memory (Primitive data type) -> [Declared variable ka copy milta hai]
// Heap Memory (Non Primitive Data Type) -> [Here, original value ka reference milta hai]

// Stack Example
let myName = "Pulkit"
let homeName = myName

homeName = "Billu"

console.log(homeName)
console.log(myName)


// Heap Example
let userOne = {
    houseNo: "1",
    age: 12
}

let userTwo = userOne
userTwo.age = 15
console.log(userOne.age)
console.log(userTwo.age)


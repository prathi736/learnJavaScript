// ================= Dates ====================

// Date Object or Instance of Date
let myDate = new Date()
console.log(typeof myDate); // object type

// Some Date methods
console.log(myDate.toString())
console.log(myDate.toISOString())
console.log(myDate.toJSON())
console.log(myDate.toDateString())
console.log(myDate.toTimeString())
console.log(myDate.toLocaleDateString())
console.log(myDate.toLocaleTimeString())
console.log(myDate.toLocaleString())
console.log(myDate.toUTCString())
console.log(myDate.getTimezoneOffset())


// In JS, months starts from 0 to 11.

// Different ways to declare dates
// let myNewDate = new Date(2024, 4, 30)
// Another way to declare date
// let myNewDate = new Date(2024, 4, 30, 7, 35)
// let myNewDate = new Date("2025-03-16")
let myNewDate = new Date("09-12-2025")
console.log(myNewDate.toLocaleString())


// Timestamps
let myTimeStamp = Date.now()

console.log(myTimeStamp);
console.log(myNewDate.getTime());

// In seconds
console.log(Math.floor(Date.now()/1000));

// Some new things in Date
let newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth() + 1) // Month in JS starts from '0'
console.log(newDate.getDay());

// Most useful thing in JS Dates
// Using this we can customize date according to our needs
console.log(newDate.toLocaleString('default', {
    weekday: "long"
}))

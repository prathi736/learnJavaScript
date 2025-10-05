const userEmail = []

if(userEmail){
    console.log("Got user email");
} else {
    console.log("Don't get user email");
}

// VIP for interviews
// falsy values->
// false, 0, -0, BigInt-> 0n, "", null, undefined, NaN

// Other than above are Truthy values
// Truthy Values->
// "0", 'false', " ", [], {}, function(){} -> (empty function)

// To check if array is empty
// if(userEmail.length === 0){
//     console.log("Array is empty");
// }

// To check if object is empty
const emptyObj = {}

// Object.keys() -> returns an array of keys
if (Object.keys(emptyObj).length === 0) {
    console.log("Object is empty");
}


// VIP
// Nullish Coalescing Operator (??)
// this depends on null & undefined
// Null & undefined basis par null safety check karta hai Nullish Coalescing Operator (??)
let val1
// val1 = 5 ?? 10 // output -> 5
// val1 = null ?? 10 // output -> 10
// val1 = undefined ?? 30 // output -> 30
val1 = null ?? 20 ?? 30 // output -> 20

console.log(val1);

// Nullish Coalescing Operator (??) and Ternary Operator are different things

// Ternary Operator
// syntax
// condition ? true : false
const teaPrice = 100

teaPrice <= 90 ? console.log("less than 90") : console.log("more than 90");



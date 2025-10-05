// if syntax
// if(condition){}

// if(2 !== 3){
//     console.log("executed");
// }

// Comparison operators
// >, <, <=, >=, ==, !=, ===(also do type checking as well, strict checking also), !==(this also do strict checking)

const temperature = 45

// if( temperature < 50){
//     console.log("less than 50");
// } else{
//     console.log("greater than 50");
// }
// console.log("Executed");


// About scopes
// const score = 300

// if (score > 100) {
//     const power = "fly"
//     console.log(`Use your power: ${power}`);
// }
// console.log(`Use your power: ${power}`);


// Shorthand for if
const balance = 1000

// implicit scope

// single line code
// if(balance > 500) console.log("test");

// multi-line code -> avoid this kind of code
// not a good practice
// if(balance > 500) console.log("test"), console.log("test2");

// Nested if-else condition
// if(balance < 500){
//     console.log("less than 500");
// } else if (balance < 750) {
//     console.log("less than 750");
// } else if (balance < 900) {
//     console.log("less than 900");
// } else {
//     console.log("less than 1200");
// }


// Another example of nested if-else statements
const userLoogedIn = true
const debitCard = true
const loggedInFromGoogle = false
const loggedInFromEmail = true

if (userLoogedIn && debitCard && 2==3) {
    console.log("Allowed to buy courses");
}

if(loggedInFromGoogle || loggedInFromEmail){
    console.log("User logged In");
    
}
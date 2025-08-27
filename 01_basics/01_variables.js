// Always use let and const
const accountId = 123456
let accountEmail = "pulkit@hotmail.com"
var accountPassword = "2567490"
// This is correct to assign memory space to this but not to use it
accountState = "UP" // Try to avoid initailizing variable without let or const, Not a good practice

// Only declaration, no initialization 
let accountCity
// So value of the above variable in js is -> "undefined"


// accountId = 901228 // Not allowed
// console.log(accountId)

/* 
Prefer not to use "var" ->  No control on scope
because of issue in block scope and functional scope
*/

accountEmail = "pulkit@pulkit.com"
accountPassword = "127803"
accountState = "Rajasthan"


// This prints the output in the form of table
console.table([accountId, accountEmail, accountPassword, accountState, accountCity])

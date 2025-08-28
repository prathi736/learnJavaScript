// Simple Comparisons

// console.log(2 < 1)
// console.log(2 <= 1)
// console.log(2 > 1)
// console.log(2 >= 1)
// console.log(2 == 1)
// console.log(2 != 1)

// String and Number Comparison
// In both cases String is converted to number before comparisons
// console.log("2" > 1) // true
// console.log("02" > 1) // true 

// Equality check (==) and Comparison (>, <=, >=, >) works differently

// Some special comparison
// Try to avoid these kind of conversions
console.log(null > 0) // false
console.log(null == 0) // false
console.log(null >= 0) // true

console.log(undefined > 0) // false
console.log(undefined == 0) // false
console.log(undefined < 0) // false


// === -> checks strictly and does not change its datatypes
// it also checks value and data type of that value

console.log("2" === 2)

// --------------Number conversion-----------------
let scoreCard = "55abbanj"

// Both are correct
// console.log(typeof scoreCard);
// console.log(typeof (scoreCard));

let valueInNumber = Number(scoreCard)

//console.log(valueInNumber); // Output -> NaN (Not a Number) -> it is also a type
// Be careful while using NaN
// Type of NaN is Number


//console.log(typeof valueInNumber);


// if score = null -> output on conversion to number -> 0
// if score = undefined -> output on conversion to number -> NaN
// true -> 1, false -> 0 (conversion of boolean values to number)


// ---------Boolean Conversion----------------
let isLogIn = 1

let boolIsLoggedIn = Boolean(isLogIn)
// console.log(boolIsLoggedIn)

// 1 -> true; 0 -> false
// "" -> false
// "hello" -> true


// -------------String Conversion------------
let number = 66

let stringNumber = String(number)

// console.log(stringNumber);
// console.log(typeof stringNumber);


// ---------------------------Operations------------------------------------
let value = 8;
let negativeValue = -value;

// console.log(negativeValue)

// console.log(2+2)
// console.log(2-2)
// console.log(2*2)
// console.log(2**4) // power
// console.log(2/2) 
// console.log(2%6) // modulus

// concatination of string
let str1 = "hello"
let str2 = "billu"

let str3 = str1 + str2
// console.log(str3)

// Some difficult conversions
// Avoid these in production (very careful)
// console.log("1" + 2) // 12
// console.log(1 + "2") // 12
// console.log("1" + 2 + 2) // 122
// console.log(1 + 2 + "2") // 32

// console.log(3 + 4 * 5 % 3)

// console.log(+true)
// console.log(+"")


let num1, num2, num3
num1 = num2 = num3 = 2+2

let counter = 100
counter++
console.log(counter);
++counter
console.log(counter)

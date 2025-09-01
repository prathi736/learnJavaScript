// ++++++++++++++++++++++++++ Numbers +++++++++++++++++++++++++++++

// This does not confirm that it is in number type
const gameScore = 300
console.log(gameScore);

// Confirm that it is in number type
const balance = new Number(2000)
console.log(balance);

// Now balance converted to string type
console.log(balance.toString());
console.log(balance.toString().length);

// Fixed
console.log(balance.toFixed(2));


const anotherNumber = 24.8976
// Precision -> return string type and precision is given on the length of input 
console.log(anotherNumber.toPrecision(1));

// Provides comma 
const hundereds = 100000000000
console.log(hundereds.toLocaleString('en-IN'));



// ======================= Maths ====================================

// console.log(Math);
// console.log(Math.abs(-9));
// console.log(Math.round(7.8));
// console.log(Math.ceil(7.4));
// console.log(Math.floor(7.8));
// console.log(Math.min(5, 8, 2, 0));
// console.log(Math.max(5, 8, 2, 0));

console.log(Math.random());
console.log((Math.random()*10) + 1);
console.log(Math.floor((Math.random()*10)) + 1);


// Always remember this trick
const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max - min + 1)) + min);

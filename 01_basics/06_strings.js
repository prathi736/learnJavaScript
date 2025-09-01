const nam = "Pulkit"
const age = 70

// Try to avoid this kind of string concatination in today's world
// Outdated syntax
// console.log(nam + age + " don")

// Modern Day -> String Interpolation is used
// Advantage -> we can use method with this method
console.log(`My name is ${nam.toUpperCase()} and my age is ${age}`)

// Another way to declare string 
// Using string objects in JS
const upiName = new String('Object-Pay-don')

// console.log(upiName[1]);
// console.log(upiName.__proto__);

// console.log(upiName.length);

// This does not effect original value
// console.log(upiName.toUpperCase());

console.log(upiName.charAt(3));
console.log(upiName.indexOf('P'));

// Slicing ->
// Substring does not accept -ve values
// If -ve value is given, it will start from '0' index 
const newName = upiName.substring(0, 6)
console.log(newName);

// In this slicing, we can apply -ve values
const anotherName = upiName.slice(-8, 5)
console.log(anotherName);


// Trim -> used to remove extra spaces from string
const newString = "     Billu     "
console.log(newString);
console.log(newString.trim());

// Replace -> replaces the string from another string
const link = "pulkit.com/pulkit%20%billu"
console.log(link.replace('%20%', '-'))

// Whether this string is present or not
// returns true or false
console.log(link.includes('pulkit'));
console.log(link.includes('don'));

// Split 
console.log(upiName.split('-')); // returns array

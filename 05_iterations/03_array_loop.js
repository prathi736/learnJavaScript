// These are array related loops

// for of loop

// [" ", " ", " "]
// [{}, {}, {}]

// for of loop syntax
// for (const element of object) {
// }
// here, elements means iterator
// & object means anything that you want to iterate on like objects, arrays, strings

// For of loop on array
const arr = [11, 12, 13, 14, 16]
for (const num of arr) {
    // console.log(num); // type -> numnber
}

// for of loop on string
const greeting = "Hello World!!"
// Most programmers use greet & greeting like this pattern in loops
for (const greet of greeting) {
    // console.log(`Each character is: ${greet}`);
}

// Maps
// Maps maintain the order of key:value pairs
// It only takes unique values
const map = new Map()
map.set('IND', "India")
map.set('JP', "Japan")
map.set('UK', "United Kingdom")
map.set('IND', "India")

// console.log(map);

// for of loop on map
for (const key of map) {
    // console.log(key) // gives output of each key:value pair in array
}

// de-structuring key:value pairs in map
for (const [key, value] of map) {
    // console.log(key, " : ", value); // output -> as key and value pair
}


// for of loop on Objects
const myObjc = {
    game1: 'FIFA',
    game2: 'Call of Duty'
}
// This syntax is not iterable on Objects 
for (const [key, value] of myObjc) {
    // console.log(key, ": ", value); 
    // error here-> Object is not iterable
}

// for of loop works on Map but not on Objects
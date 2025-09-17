// In JS, array can hold mix data types values
// In JS, array can be resizable
// Here, zero based indexing
// Array copy operation creates Shallow Copies

const arr = [0, 1, 2, 3, 4, 5, 6]
const heroes = ["superman", "batman"]
// Another way to declare array (using objects)
const arr2 = new Array(1, 2, 3, 5, 6)

console.log(arr[3]);

// Array Methods

// arr.push(8)
// arr.push(10)
// arr.pop()

// Unshift -> shifts all the elements of array & add new element in the starting of the array (not so optimized)

// arr.unshift(11) // add element to the first index of array
// arr.shift() // remove first index element of array

// console.log(arr.includes(9));
// console.log(arr.indexOf(9));
// console.log(arr.indexOf(4));
// console.log(arr.indexOf(10));

// Mostly used method of array
const newArr = arr.join() // binds the array elements & converts to string

console.log(arr);
console.log(newArr);
console.log(typeof newArr); // return a string

// slice & splice
// Slice -> does not manipulate the original array
// Splice -> manipulates the original array
console.log("A ", arr);

const n1 = arr.slice(1,3)
console.log(n1);

console.log("B ", arr);

const n2 = arr.splice(1,3)

console.log("C ", arr);
console.log(n2);

// Calculating price in Shopping cart

// When single parameter is given but multiple arguments are there 
// so it will return first argument only.
function calculateCartPrice1(num1){
    return num1
}

// console.log(calculateCartPrice1(200, 500, 600)); // Output -> 200


// using rest operator
// rest and spread operator are written in same way but usecase depends on 
// the situation
// Rest operator -> khuli hui chizo ko ik bundle me karke dedo
function calculateCartPrice2(...num1){
    return num1
}

// console.log(calculateCartPrice2(200, 500, 600, 700, 900)); // returns an array of elements

// interview question
function calculateCartPrice3(val1, val2, ...num1){
    return num1
}

console.log(calculateCartPrice3(200, 500, 600, 700, 900)); // output -> [600, 700, 900]


// Now handling objects in function
const user = {
    username : "billu",
    price : 399
}

function handleObject(anyObject){
    console.log(`Username is ${anyObject.username} and price is ${anyObject.price}`);
}

handleObject(user)
handleObject({
    username: "john",
    price: 800
})


// handling array inside function
const newArray = [1, 4, 5, 7, 8, 10]

function secondArrayValue(getArray){
    return getArray[1]
}

console.log(secondArrayValue(newArray));
console.log(secondArrayValue([10,90,40,30]));

// for each in array
const coding = ["js", "ts", "java", "python", "cpp"]

// forEach is Higher Order Function
// forEach required call back function
// call back function does not have name
// parameter inside call back function will give array elements

// coding.forEach( function (item) {
//     console.log(item); // returns all the elements of array
// } )

// forEach using Arrow Function
// coding.forEach( (val) => {
//     console.log(val);
// })


// giving function to forEach
// function printIt(item){
//     console.log(item);
// }
// coding.forEach(printIt) // Here we give reference of the function inside forEach

// forEach gives item, its index and whole array
// coding.forEach( (item, index, arr) => {
//     console.log(item, index, arr);
    // Here, item of array, index of that element & whole array
// })


// Objects inside array
// Mostly used operation when we get data from Database
// and need to iterate over it
const myCode = [
    {
        languageName: "C++",
        languageFileName: "cpp"
    },
    {
        languageName: "javascript",
        languageFileName: "js"
    },
    {
        languageName: "python",
        languageFileName: "py"
    },
]

// In this way we can access items or elements of objects inside array
myCode.forEach( (item) => {
    // console.log(item); // returns whole objects inside array
    // console.log(item.languageName); // returns languageName
    console.log(item.languageFileName); // returns languageFileName
} )

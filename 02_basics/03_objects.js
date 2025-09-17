// Two ways to declare objects: 1. constructor 2. literal
// Objects are key:value pairs

// 1. Object Constructor
// Object.create 
// gives singleton object


// 2. Object Literals

// Declaring an object

// Question in interview: Declare a Symbol and then add this symbol as a key in object

const mySym = Symbol("key1")


const JsUser = {
    name: "Pulkit",
    // Here name is treated as a string -> "name"
    // Here every key is treated as a string
    age: 20,
    "full name": "Billu Don",
    // Adding symbol as key in objects
    [mySym]: "myKey02",
    location: "Hapur",
    email: "abc@abc.com",
    isLoggedIn: false,
    lastLoginDays: ["Tuesday", "Friday"]
}

// One way to access objects
// Not a good way to access objects
// console.log(JsUser.age);

// Another way to access objects
// Better way than above
// console.log(JsUser["isLoggedIn"]);

// console.log(JsUser["full name"]);

// console.log(JsUser[mySym]); // accessing Symbol

JsUser.age = 29
// Object.freeze(JsUser) // Because of this I will not able to change values of this object
JsUser.age = 32
// console.log(JsUser);

// Adding a function in the Object
JsUser.greeting = function(){
    console.log("Good Morning Everyone!!");
}

JsUser.greetTwo = function(){
    console.log(`Good Morning Everyone, ${this["name"]}`);
    console.log(`Good Morning Everyone, ${this.name}`);
    // Using (this.) -> we can access all the properties of the current object
}

console.log(JsUser.greeting); // returns -> [Function (anonymous)]
// JsUser.greeting -> returns the reference of function
console.log(JsUser.greeting()); // returns -> Good Morning Everyone!!

console.log(JsUser.greetTwo());
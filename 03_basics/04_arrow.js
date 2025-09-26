const user = {
    username: "billu",
    price: 877,

    welcomeMessage: function(){
        console.log(`${this.username}, welcome to website`);
        // this.username -> refers to current context
        console.log(this); // refers to current context or values
        // only 'this' will return whole object values
        
    }
}

// here, context means value

// user.welcomeMessage
// user.welcomeMessage()
// user.username = "john"
// user.welcomeMessage()

// console.log(this); // output -> {} (empty global object)


// Function for this

// function chai(){
//     let username = "billu"
     // console.log(this.username); // output -> undefined
     // we cannot use 'this' inside the function
// }
// chai()

// const chai = function(){
//     let username = "billu"
//     console.log(this.username); // output -> undefined
// }



// Arrow function -> ES6 feature
// Another way to define function in JS
const chai = () => {
    let username = "billu"
    console.log(this.username); // output -> undefined
    console.log(this); // output -> {} (empty object)
}
chai()


// Simple Arrow function 
// const addTwoNum = (num1, num2) => {
//     return num1+num2
// }

// Implicit return
// const addTwoNum = (num1, num2) => num1+num2

// Another way of Implicit return
// const addTwoNum = (num1, num2) => ( num1+num2 ) // Mostly used in Reactjs

// Returning object in Implicit return
const addTwoNum = (num1, num2) => ({username: "Pulkit"}) 

console.log(addTwoNum(2,7));


// Another example
const myArray = [1,2,5,7,8]
// myArray.forEach( function(){} ) //Normal function
// myArray.forEach( () => {} ) // Arrow function
// myArray.forEach( () => () ) // Implicit function
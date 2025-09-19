// Function definition
// function_keyword function_Name
function sayName(){
    console.log("B");
    console.log("I");
    console.log("L");
    console.log("L");
    console.log("U");
}

// function reference -> mostly used in DOM manipulation and React.js
sayName

// function execution (calling of function)
sayName()



// function sumNumbers(number1, number2){
//     console.log(number1+number2);
// }

function sumNumbers(number1, number2){
    // let result = number1 + number2
    // return result // After this execution of function ends
    
    // OR this way
    return number1 + number2

    // console.log("Hi"); // this code cannot be reached as it is after return statement
}

// sumNumbers(2,6) // output -> 8(number)
// sumNumbers(2,"6") // output -> 26 (string)
// sumNumbers(2,"a") // output -> 2a (string)
// sumNumbers(2,null) // output -> 2 (number)

const result = sumNumbers(9,10)
// console.log("Result:", result);


function loginUserMessage(username = "john"){ // here, given default value to parameter if no value is given by user.

    // if(username === undefined){
    //     console.log("Please enter a username!");
    //     return
    // }

    // Above is correct but below is more professional
    if(!username){ // here, undefined is converted from false to true to run "if" clause
        // In JS -> "undefined" & empty string("") is treated as "false"
        console.log("Please enter a username!");
        return
    }

    return `${username} is logged in!`
}

console.log(loginUserMessage("billu")) // billu is logged in!
console.log(loginUserMessage("")); //  is logged in!
console.log(loginUserMessage()); // undefined is logged in!

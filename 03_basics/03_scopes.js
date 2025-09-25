// Scopes in js

// var c = 100

let a = 900

if(true){   
    let a = 10
    const b = 11
    // var c = 20 // this creates problem
    // console.log("Inner:", a);
}

// console.log(a);
// console.log(b);
// console.log(c);


// Nested Scopes in JS

// Closures -> In nested functions, child function can access variables of parent function

function one(){
    const username = "billu"

    function two(){
        const website = "youtube"
        console.log(username);
    }
    // console.log(website);

    two()
}

// one()


// Nested if-else statments
if(true){
    const username = "billu"

    if(username === "billu"){
        const website = " chatgpt"
        // console.log(username + website);
    }
    // console.log(website); // error here
}

// console.log(username); // error here



// ----------------------- interesting example ------------------

// This is normal function

addOne(3) // this can be accessed here 
function addOne(num){
    return num + 1
}


// This is expression and also a function
// Variables in JS can hold anything inside it

addTwo(4) // this is cannot be accessed here
const addTwo = function(num){
    return num + 2
}
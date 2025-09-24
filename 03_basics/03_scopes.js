// Scopes in js

// var c = 100

let a = 900

if(true){   
    let a = 10
    const b = 11
    // var c = 20 // this creates problem
    console.log("Inner:", a);
    
}

console.log(a);
// console.log(b);
// console.log(c);

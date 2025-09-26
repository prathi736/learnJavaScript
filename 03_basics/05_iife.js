// Immediately Invoked Function Expressions (IIFE)
// IIFE is also a function

// Normal Function
function chai(){
    console.log(`DB Connected`);
}
// chai()

// IIFE -> functions that are immediately gets executed
(function chai(){
    console.log(`DB Connected`);
})();

// First Parenthesis -> Function Definition
// Second Parenthesis -> Function Execution Call
// ()();
// (;) semicolon is used to explicitly close the IIFE function execution


// Named IIFE
( function two() {
    // Named IIFE -> function with name
    console.log(`DB Connected Two`);
} )();



( () => {
    // Normal IIFE -> function without name
    console.log(`DB Connected Three`);
} )();


// IIFE with Parameter
( (name) => {
    // Normal IIFE
    console.log(`DB Connected with ${name}`);
} )('Pulkit');